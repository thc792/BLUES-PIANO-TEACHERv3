/**
 * main.js - Logica principale e gestione eventi Piano Future.
 *
 * Piano Future
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

/**
 * js/main.js
 * **VERSIONE SCROLLING SEMPLIFICATO CON PAUSA E PULSANTE TEORIA: Avanzamento basato sui ticks, gestione note contemporanee e scrolling automatico basato su velocità slider.**
 * Implementa l'avanzamento passo-passo basato sulla posizione temporale (ticks)
 * e richiede il completamento di tutte le note/accordi attesi a un dato tick
 * prima di avanzare. Gestisce lo scrolling dello spartito: automatico basato su velocità definita dall'utente,
 * che inizia con la prima nota. Aggiunta funzionalità di Pausa e pulsante per la teoria.
 */

import { renderExercise } from './vexflow_renderer.js';
import { initializeMIDI } from './midi_handler.js';

// --- Costanti e Riferimenti DOM ---
const categorySelect = document.getElementById('category-select');
const exerciseSelect = document.getElementById('exercise-select');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const pauseButton = document.getElementById('pause-button'); // Riferimento al pulsante Pause
const theoryButton = document.getElementById('theory-button'); // Nuovo riferimento al pulsante Teoria
const scoreDiv = document.getElementById('score'); // Riferimento diretto al div score
const midiStatusSpan = document.getElementById('midi-status');
const successRateSpan = document.getElementById('success-rate');
const expectedNoteSpan = document.getElementById('expected-note');
const playedNoteSpan = document.getElementById('played-note');
const scrollSpeedControl = document.getElementById('scroll-speed'); // Riferimento al range slider
const scrollSpeedValueSpan = document.getElementById('scroll-speed-value'); // Riferimento allo span del valore

// === Array per categorie con avanzamento ordinato ===
// Le categorie qui elencate avanzeranno sequenzialmente tra i loro esercizi.
// Le altre categorie avanzeranno in modo random (diverso dal precedente).
const ORDERED_CATEGORIES = ['charper_1']; // Aggiungi qui altre chiavi se necessario

// --- Stato Applicazione ---
let allExercises = {}; // Contiene i dati originali degli esercizi caricati
let currentExerciseDefinition = null; // La definizione dell'esercizio selezionato
let currentExerciseData = null; // Copia deep dei dati dell'esercizio con stato (pending, correct, etc.) e startTick
let isPlaying = false;
let isPaused = false; // Stato per la pausa
let midiReady = false;
let exerciseCompletionTimeout = null; // Timeout per l'avanzamento automatico al prossimo esercizio

// --- Stato Avanzamento Esercizio ---
let currentTick = 0; // La posizione temporale corrente nell'esercizio (in ticks VexFlow)
let totalTicks = 0; // Il totale dei ticks dell'esercizio
let currentRepetition = 1;
let targetRepetitions = 1;
let systemYPositions = []; // Array di { tick: startTick, y: yPos } per lo scrolling (ancora presente ma non usato per lo scrolling automatico)

// --- Stato Scrolling ---
let scrollInterval = null; // Riferimento all'intervallo per lo scrolling automatico
let scrollSpeed = 1; // MODIFICATO: Velocità di scrolling iniziale impostata a 1 (il minimo dello slider)
const SCROLL_INTERVAL_MS = 400; // Intervallo di aggiornamento dello scrolling in ms (puoi aumentarlo per ulteriore lentezza, es. 150 o 200, ma potrebbe ridurre la fluidità)
const SCROLL_PIXELS_PER_INTERVAL_BASE = 0.5; // MODIFICATO: Pixel base per intervallo alla velocità minima (slider min=1). Questo è un valore molto basso.

// --- URL Pagina Teoria ---
const THEORY_PAGE_URL = "https://www.pianohitech.com/teoria-blues"; // URL della pagina di teoria

// --- Funzioni Inizializzazione e Caricamento Dati ---

/**
 * Carica i dati degli esercizi dalla variabile globale `window.exerciseData`.
 * Esegue una validazione preliminare e popola il selettore delle categorie.
 */
function loadExerciseData() {
    if (window.exerciseData) {
        allExercises = window.exerciseData;
        console.log("Dati degli esercizi caricati.");
    } else {
        console.error("Errore critico nel caricamento dei dati: window.exerciseData non è stato trovato.");
        alert("Errore nel caricamento degli esercizi. Controlla la console per i dettagli.");
    }
    populateCategorySelect();
}

/**
 * Popola il selettore delle categorie basandosi sulle chiavi presenti in `allExercises`.
 */
function populateCategorySelect() {
    const categories = Object.keys(allExercises);
    categorySelect.innerHTML = '<option value="">-- Seleziona Categoria --</option>';
    categories.forEach(catKey => {
        if (Array.isArray(allExercises[catKey]) && allExercises[catKey].length > 0) {
            const option = document.createElement('option');
            option.value = catKey;
            option.textContent = catKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            categorySelect.appendChild(option);
        } else {
            console.warn(`Categoria "${catKey}" ignorata perché vuota o non è un array.`);
        }
    });
}

/**
 * Popola il selettore degli esercizi per la categoria selezionata.
 * @param {string} categoryKey - La chiave della categoria dell'esercizio.
 */
function populateExerciseSelect(categoryKey) {
    exerciseSelect.innerHTML = '<option value="">-- Seleziona Esercizio --</option>';
    exerciseSelect.disabled = true;

    if (categoryKey && allExercises[categoryKey] && Array.isArray(allExercises[categoryKey])) {
        const exercises = allExercises[categoryKey];
        let hasValidExercises = false;
        exercises.forEach(ex => {
            if (ex && ex.id) {
                const option = document.createElement('option');
                option.value = ex.id;
                option.textContent = ex.name || ex.id;
                exerciseSelect.appendChild(option);
                hasValidExercises = true;
            } else {
                console.warn("Trovato un esercizio senza ID nella categoria:", categoryKey);
            }
        });

        if (hasValidExercises) {
            exerciseSelect.disabled = false;
        } else {
            exerciseSelect.innerHTML = '<option value="">-- Nessun esercizio valido --</option>';
        }
    } else if (categoryKey) {
        console.warn(`Categoria "${categoryKey}" selezionata non valida o non contiene un array.`);
        exerciseSelect.innerHTML = '<option value="">-- Errore Categoria --</option>';
    } else {
         exerciseSelect.innerHTML = '<option value="">-- Seleziona Categoria --</option>';
    }

    resetUIState();
    scoreDiv.innerHTML = '<p>Seleziona un esercizio per iniziare.</p>';
    startButton.disabled = true;
    pauseButton.disabled = true;
    theoryButton.disabled = false;
    currentExerciseData = null;
    currentExerciseDefinition = null;
    totalTicks = 0;
    systemYPositions = [];
}

/**
 * Seleziona un esercizio, carica i suoi dati, li valida, calcola i ticks
 * e renderizza lo spartito.
 * @param {string} exerciseId - L'ID dell'esercizio da selezionare.
 * @param {string} categoryKey - La chiave della categoria dell'esercizio.
 */
function selectExercise(exerciseId, categoryKey) {
    if (!exerciseId || !categoryKey || !allExercises[categoryKey] || !Array.isArray(allExercises[categoryKey])) {
        console.warn("Tentativo di selezionare un esercizio con ID o categoria non validi:", exerciseId, categoryKey);
        currentExerciseData = null;
        currentExerciseDefinition = null;
        startButton.disabled = true;
        pauseButton.disabled = true;
        theoryButton.disabled = false;
        totalTicks = 0;
        systemYPositions = [];
        scoreDiv.innerHTML = '<p>Selezione non valida o categoria errata.</p>';
        resetUIState();
        return;
    }

    const definition = allExercises[categoryKey].find(ex => ex && ex.id === exerciseId);

    if (definition) {
        console.log("Esercizio selezionato:", definition.name || definition.id);
        currentExerciseData = JSON.parse(JSON.stringify(definition));
        currentExerciseDefinition = definition;

        const renderResult = renderExercise(scoreDiv.id, currentExerciseData);
        currentExerciseData.notesTreble = renderResult.processedNotes.treble;
        currentExerciseData.notesBass = renderResult.processedNotes.bass;
        currentExerciseData.notes = renderResult.processedNotes.single;

        totalTicks = renderResult.totalTicks;
        systemYPositions = renderResult.systemPositions;
        console.log("System Y Positions:", systemYPositions);

        const hasPlayableNotes = [...currentExerciseData.notesTreble, ...currentExerciseData.notesBass, ...currentExerciseData.notes]
            .some(note => note && typeof note.startTick === 'number' && note.startTick >= 0 &&
                          !(note.keys && note.keys[0]?.toLowerCase().startsWith('r/')));

        targetRepetitions = currentExerciseDefinition.repetitions || 1;
        console.log(`Totale ticks esercizio: ${totalTicks}, Ripetizioni target: ${targetRepetitions}`);

        startButton.disabled = !midiReady || !hasPlayableNotes;
        pauseButton.disabled = true;
        theoryButton.disabled = false;

        resetUIState();
        stopButton.disabled = true;

        if (!midiReady) {
             updateInfo("Collega un dispositivo MIDI e premi Start.");
        } else if (!hasPlayableNotes) {
             updateInfo("Questo esercizio non ha note da suonare.");
        } else {
             updateInfo("MIDI pronto. Premi Start.");
        }
    } else {
        console.error(`Errore interno: Esercizio con ID "${exerciseId}" non trovato nella categoria "${categoryKey}" dopo la selezione.`);
        currentExerciseData = null;
        currentExerciseDefinition = null;
        startButton.disabled = true;
        pauseButton.disabled = true;
        theoryButton.disabled = false;
        totalTicks = 0;
        systemYPositions = [];
        scoreDiv.innerHTML = '<p>Selezione non valida o categoria errata.</p>';
        resetUIState();
    }
}

// --- Gestione Stato Esercizio e Avanzamento ---

function resetNoteStates() {
    if (!currentExerciseData) return;
    const resetArray = (notesArray) => {
        if (!notesArray) return;
        notesArray.forEach(noteObj => {
            if (noteObj && typeof noteObj === 'object') {
                if (noteObj.keys && Array.isArray(noteObj.keys) && noteObj.keys[0]?.toLowerCase().startsWith('r/')) {
                    noteObj.status = 'rest';
                } else if (typeof noteObj.startTick === 'number' && (typeof noteObj.midiValue === 'number' || (Array.isArray(noteObj.midiValues) && noteObj.midiValues.length > 0))) {
                    noteObj.status = 'pending';
                    if (Array.isArray(noteObj.midiValues)) {
                        noteObj.correctMidiValues = [];
                    }
                } else {
                    if (typeof noteObj.startTick === 'number') {
                         noteObj.status = 'ignored';
                    }
                }
            }
        });
    };
    resetArray(currentExerciseData.notesTreble);
    resetArray(currentExerciseData.notesBass);
    resetArray(currentExerciseData.notes);
}

function updateExpectedNotes() {
    if (!currentExerciseData) return;
    console.log(`--- updateExpectedNotes chiamato. currentTick: ${currentTick} ---`);
    const notesAtCurrentTick = [];
    const allNotes = [...currentExerciseData.notesTreble, ...currentExerciseData.notesBass, ...currentExerciseData.notes];

    allNotes.forEach(noteObj => {
        if (noteObj && noteObj.status === 'pending' && typeof noteObj.startTick === 'number' && noteObj.startTick === currentTick) {
            if (noteObj.keys && Array.isArray(noteObj.keys) && noteObj.keys[0]?.toLowerCase().startsWith('r/')) {
                 console.log(`  - Trovata Pausa al tick ${currentTick}:`, noteObj);
            } else {
                noteObj.status = 'expected';
                if (Array.isArray(noteObj.midiValues)) {
                     noteObj.correctMidiValues = [];
                }
                notesAtCurrentTick.push(noteObj);
                console.log(`  - Marcata come 'expected' al tick ${currentTick}:`, noteObj);
            }
        }
        if (noteObj && noteObj.status === 'expected' && typeof noteObj.startTick === 'number' && noteObj.startTick < currentTick) {
             noteObj.status = 'pending';
             console.warn(`  - Nota al tick ${noteObj.startTick} era 'expected' ma superata da currentTick ${currentTick}. Riportata a 'pending'.`, noteObj);
        }
    });

    if (notesAtCurrentTick.length > 0) {
        const expectedText = notesAtCurrentTick.map(noteObj => {
            if (noteObj.keys && noteObj.keys[0]?.toLowerCase().startsWith('r/')) return "Pausa";
            if (noteObj.keys) return noteObj.keys.join(', ');
            if (Array.isArray(noteObj.midiValues)) return `Accordo (${noteObj.midiValues.join(', ')})`;
            if (typeof noteObj.midiValue === 'number') return `Nota MIDI ${noteObj.midiValue}`;
            return "Nota sconosciuta";
        }).join(' | ');
        updateInfo(`Atteso: ${expectedText}`);
        console.log(`  Note 'expected' finali al tick ${currentTick}:`, notesAtCurrentTick);
    } else {
         const allNotesAndRests = [...currentExerciseData.notesTreble, ...currentExerciseData.notesBass, ...currentExerciseData.notes];
         const notesOrRestsAtCurrentTick = allNotesAndRests.filter(noteObj => noteObj && typeof noteObj.startTick === 'number' && noteObj.startTick === currentTick);
         if (notesOrRestsAtCurrentTick.length > 0 && notesOrRestsAtCurrentTick.every(n => n.keys && n.keys[0]?.toLowerCase().startsWith('r/'))) {
             updateInfo("Pausa...");
             console.log(`  Solo pause trovate al tick ${currentTick}.`);
         } else if (currentTick < totalTicks) {
             console.warn(`  Nessuna nota/pausa valida trovata al currentTick ${currentTick}. Potenziale errore logico o dati esercizio.`);
             updateInfo("In attesa...");
         } else {
            updateInfo("Esercizio completato o in attesa.");
            console.log(`  currentTick ${currentTick} >= totalTicks ${totalTicks}. Esercizio finito.`);
         }
    }
}

function checkAndAdvanceStep() {
    if (!isPlaying || isPaused || !currentExerciseData) return;
    console.log(`--- checkAndAdvanceStep chiamato. currentTick: ${currentTick}, totalTicks: ${totalTicks} ---`);
    const allNotes = [...currentExerciseData.notesTreble, ...currentExerciseData.notesBass, ...currentExerciseData.notes];
    const notesOrRestsAtCurrentTick = allNotes.filter(noteObj => noteObj && typeof noteObj.startTick === 'number' && noteObj.startTick === currentTick);
    console.log(`  Note/Pause trovate al currentTick (${currentTick}):`, notesOrRestsAtCurrentTick);

    if (notesOrRestsAtCurrentTick.length > 0 && notesOrRestsAtCurrentTick.every(n => n.keys && n.keys[0]?.toLowerCase().startsWith('r/'))) {
         console.log(`Solo pause al tick ${currentTick}. Avanzamento automatico.`);
         const nextTicks = allNotes.filter(noteObj => noteObj && typeof noteObj.startTick === 'number' && noteObj.startTick > currentTick).map(noteObj => noteObj.startTick);
         const nextTick = nextTicks.length > 0 ? Math.min(...nextTicks) : totalTicks;
         console.log(`  Prossimi tick disponibili (> ${currentTick}):`, nextTicks);
         console.log(`  Prossimo tick calcolato (nextTick): ${nextTick}`);

         if (isFinite(nextTick) && nextTick > currentTick) {
             currentTick = nextTick;
             console.log(`Avanzamento automatico al prossimo tick: ${currentTick}`);
             updateExpectedNotes();
             const savedScrollTop = scoreDiv.scrollTop;
             renderExercise(scoreDiv.id, currentExerciseData);
             requestAnimationFrame(() => {
                  scoreDiv.scrollTop = savedScrollTop;
                  console.log("Restored scroll position after automatic advancement:", savedScrollTop);
             });
         } else if (currentTick < totalTicks) {
              console.warn(`Nessun tick successivo > ${currentTick} trovato, ma currentTick < totalTicks. Potenziale errore logico.`);
              handleExerciseCompletion();
         } else {
             console.log("Nessun tick successivo trovato. Esercizio completato.");
             handleExerciseCompletion();
         }
         return;
    }

    const playableNotesAtCurrentTick = notesOrRestsAtCurrentTick.filter(noteObj => !(noteObj.keys && noteObj.keys[0]?.toLowerCase().startsWith('r/')));
    if (playableNotesAtCurrentTick.length === 0 && notesOrRestsAtCurrentTick.length > 0) {
         console.error(`Errore logico: checkAndAdvanceStep chiamato con tick ${currentTick} che non ha note suonabili né è solo pause.`);
         updateInfo("Errore interno. Ferma e riavvia.");
         stopExercise();
         return;
    }
    if (playableNotesAtCurrentTick.length === 0 && notesOrRestsAtCurrentTick.length === 0 && currentTick < totalTicks) {
         console.warn(`Tick ${currentTick} non ha note/pause ma non è l'ultimo tick. Avanzo al prossimo.`);
         const nextTicks = allNotes.filter(noteObj => noteObj && typeof noteObj.startTick === 'number' && noteObj.startTick > currentTick).map(noteObj => noteObj.startTick);
         const nextTick = nextTicks.length > 0 ? Math.min(...nextTicks) : totalTicks;
         if (isFinite(nextTick) && nextTick > currentTick) {
              currentTick = nextTick;
              console.log(`Avanzamento automatico a tick successivo non vuoto: ${currentTick}`);
              updateExpectedNotes();
              const savedScrollTop = scoreDiv.scrollTop;
              renderExercise(scoreDiv.id, currentExerciseData);
              requestAnimationFrame(() => {
                   scoreDiv.scrollTop = savedScrollTop;
                   console.log("Restored scroll position after automatic advancement (empty tick):", savedScrollTop);
              });
         } else {
              console.log("Nessun tick successivo trovato. Esercizio completato.");
              handleExerciseCompletion();
         }
         return;
     }

    console.log(`  Note suonabili attese al tick ${currentTick}:`, playableNotesAtCurrentTick);
    const allNotesInStepCompleted = playableNotesAtCurrentTick.every(noteObj => {
        if (typeof noteObj.midiValue === 'number') {
            return noteObj.status === 'correct';
        } else if (Array.isArray(noteObj.midiValues)) {
            const allMidiNotesPlayedForChord = noteObj.midiValues.every(requiredMidi => noteObj.correctMidiValues && noteObj.correctMidiValues.includes(requiredMidi));
            const requiredCount = noteObj.midiValues.length;
            const playedCount = noteObj.correctMidiValues ? noteObj.correctMidiValues.length : 0;
            console.log(`    - Accordo al tick ${currentTick}: ${playedCount}/${requiredCount} note suonate. Completato? ${allMidiNotesPlayedForChord}`);
            return noteObj.status === 'correct' && allMidiNotesPlayedForChord;
        }
        return false;
    });

    console.log(`  Tutte le note al tick ${currentTick} completate? ${allNotesInStepCompleted}`);
    if (allNotesInStepCompleted) {
        console.log(`Passo al tick ${currentTick} completato!`);
        const nextTicks = allNotes.filter(noteObj => noteObj && typeof noteObj.startTick === 'number' && noteObj.startTick > currentTick).map(noteObj => noteObj.startTick);
        const nextTick = nextTicks.length > 0 ? Math.min(...nextTicks) : totalTicks;
        console.log(`  Prossimi tick disponibili (> ${currentTick}):`, nextTicks);
        console.log(`  Prossimo tick calcolato (nextTick): ${nextTick}`);

        if (isFinite(nextTick) && nextTick > currentTick) {
            currentTick = nextTick;
            console.log(`Avanzamento al prossimo tick: ${currentTick}`);
            updateExpectedNotes();
            const savedScrollTop = scoreDiv.scrollTop;
            renderExercise(scoreDiv.id, currentExerciseData);
            requestAnimationFrame(() => {
                 scoreDiv.scrollTop = savedScrollTop;
                 console.log("Restored scroll position after manual advancement:", savedScrollTop);
            });
        } else if (currentTick < totalTicks) {
              console.warn(`Nessun tick successivo > ${currentTick} trovato, ma currentTick < totalTicks. Potenziale errore logico.`);
              handleExerciseCompletion();
         } else {
            console.log("Nessun tick successivo trovato. Esercizio completato.");
            handleExerciseCompletion();
        }
    } else {
        console.log(`Passo al tick ${currentTick} non ancora completato. In attesa...`);
    }
}

// --- Gestione Scrolling Automatico ---

/**
 * Avvia lo scrolling automatico dello spartito.
 */
function startScrolling() {
    console.log("Avvio scrolling automatico...");
    if (scrollInterval) {
        clearInterval(scrollInterval); // Assicura che non ci siano intervalli multipli
    }

    // Aggiungi un log per verificare le dimensioni scrollabili PRIMA di avviare l'intervallo
    console.log(`startScrolling - scoreDiv.scrollHeight: ${scoreDiv.scrollHeight}, scoreDiv.clientHeight: ${scoreDiv.clientHeight}`);

    // Controlla se c'è effettivamente qualcosa da scrollare
    if (scoreDiv.scrollHeight <= scoreDiv.clientHeight) {
        console.warn("Contenuto non scrollabile (scrollHeight <= clientHeight). Scrolling automatico non necessario.");
        return; // Non avviare l'intervallo se non c'è nulla da scrollare
    }

    // Scrolla all'inizio prima di iniziare l'intervallo (solo se non siamo in pausa)
    // e solo se l'esercizio è appena iniziato (currentTick è vicino a 0)
    // o se è una nuova ripetizione. Questo evita di scrollare all'inizio se si riprende dalla pausa.
    if (!isPaused && currentTick < (totalTicks / 100) ) { // Considera "vicino a 0" se meno dell'1% dei ticks totali
        scoreDiv.scrollTop = 0;
        console.log("Scrollato all'inizio prima di avviare l'intervallo (inizio esercizio/ripetizione).");
    }


    scrollInterval = setInterval(() => {
        // Calcola la quantità di scroll in base alla velocità dello slider
        const pixelsToScroll = SCROLL_PIXELS_PER_INTERVAL_BASE * scrollSpeed;

        // console.log(`Scrolling: scrollSpeed=${scrollSpeed}, pixelsToScroll=${pixelsToScroll.toFixed(2)}, scrollTop=${scoreDiv.scrollTop.toFixed(2)}`);

        scoreDiv.scrollTop += pixelsToScroll;

        const scrollableHeight = scoreDiv.scrollHeight - scoreDiv.clientHeight;
        if (scoreDiv.scrollTop >= scrollableHeight - pixelsToScroll) {
             scoreDiv.scrollTop = scrollableHeight;
             stopScrolling();
             console.log("Scrolling automatico fermato: Raggiunta la fine.");
        }
    }, SCROLL_INTERVAL_MS);
}

/**
 * Ferma lo scrolling automatico dello spartito.
 */
function stopScrolling() {
    console.log("Arresto scrolling automatico.");
    if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
    }
}

/**
 * Mette in pausa lo scrolling automatico e l'avanzamento dell'esercizio.
 */
function pauseExercise() {
    if (!isPlaying || isPaused) return;
    console.log("Esercizio messo in pausa.");
    isPaused = true;
    stopScrolling();
    startButton.disabled = true;
    pauseButton.textContent = "Resume";
    pauseButton.disabled = false;
    stopButton.disabled = false;
    theoryButton.disabled = false;
    updateInfo("Esercizio in Pausa.");
}

/**
 * Riprende l'esercizio dalla pausa.
 */
function resumeExercise() {
    if (!isPlaying || !isPaused) return;
    console.log("Esercizio ripreso.");
    isPaused = false;
    startScrolling();
    startButton.disabled = true;
    pauseButton.textContent = "Pause";
    pauseButton.disabled = false;
    stopButton.disabled = false;
    theoryButton.disabled = true;
    updateExpectedNotes();
}

/**
 * Gestisce il click sul pulsante Teoria.
 */
function handleTheoryClick() {
    console.log("Pulsante Teoria cliccato. Reindirizzamento a:", THEORY_PAGE_URL);
    window.open(THEORY_PAGE_URL, '_blank');
}

// --- Funzioni di Controllo Esercizio ---

function startExercise() {
    const hasPlayableNotes = currentExerciseData ? [...currentExerciseData.notesTreble, ...currentExerciseData.notesBass, ...currentExerciseData.notes]
            .some(note => note && typeof note.startTick === 'number' && note.startTick >= 0 &&
                          !(note.keys && note.keys[0]?.toLowerCase().startsWith('r/'))) : false;

    if (!currentExerciseData || !midiReady || !hasPlayableNotes || isPlaying) {
         console.warn("Impossibile avviare l'esercizio. Controlla stato MIDI, selezione esercizio, presenza note suonabili e se è già in corso.");
         if (!midiReady) updateInfo("Collega un dispositivo MIDI.");
         else if (!currentExerciseData) updateInfo("Seleziona un esercizio.");
         else if (!hasPlayableNotes) updateInfo("Questo esercizio non ha note da suonare.");
         else if (isPlaying) updateInfo("Esercizio già in corso.");
         return;
    }

    if (exerciseCompletionTimeout) {
        clearTimeout(exerciseCompletionTimeout);
        exerciseCompletionTimeout = null;
    }

    currentRepetition = 1;
    currentTick = 0;
    resetNoteStates();
    console.log("Avvio Esercizio:", currentExerciseDefinition.name || currentExerciseDefinition.id, `- Ripetizione ${currentRepetition}/${targetRepetitions}`);

    isPlaying = true;
    isPaused = false;
    startButton.disabled = true;
    pauseButton.disabled = false;
    pauseButton.textContent = "Pause";
    stopButton.disabled = false;
    categorySelect.disabled = true;
    exerciseSelect.disabled = true;
    theoryButton.disabled = true;
    updateSuccessRate();
    playedNoteSpan.textContent = '--';

    updateExpectedNotes();
    renderExercise(scoreDiv.id, currentExerciseData);
    setTimeout(startScrolling, 200);
}

function stopExercise() {
     if (!isPlaying && stopButton.disabled) return;

    if (exerciseCompletionTimeout) {
        clearTimeout(exerciseCompletionTimeout);
        exerciseCompletionTimeout = null;
    }
    stopScrolling();
    console.log("Arresto manuale dell'esercizio.");
    isPlaying = false;
    isPaused = false;

    if (currentExerciseData) {
        resetNoteStates();
        currentTick = 0;
        renderExercise(scoreDiv.id, currentExerciseData);
        scoreDiv.scrollTop = 0;
    } else {
        scoreDiv.innerHTML = '<p>Nessun esercizio attivo.</p>';
    }

    const hasPlayableNotes = currentExerciseData ? [...currentExerciseData.notesTreble, ...currentExerciseData.notesBass, ...currentExerciseData.notes]
            .some(note => note && typeof note.startTick === 'number' && note.startTick >= 0 &&
                          !(note.keys && note.keys[0]?.toLowerCase().startsWith('r/'))) : false;
    startButton.disabled = !midiReady || !currentExerciseData || !hasPlayableNotes;
    pauseButton.disabled = true;
    pauseButton.textContent = "Pause";
    stopButton.disabled = true;
    categorySelect.disabled = false;
    exerciseSelect.disabled = false;
    theoryButton.disabled = false;
    updateInfo("Esercizio interrotto. Pronto per iniziare.");
    playedNoteSpan.textContent = '--';
}

function resetUIState() {
    isPlaying = false;
    isPaused = false;
    currentTick = 0;
    currentRepetition = 1;
    successRateSpan.textContent = '-- %';
    updateInfo("-- Seleziona o avvia un esercizio --");
    playedNoteSpan.textContent = '--';
    stopButton.disabled = true;
    pauseButton.disabled = true;
    pauseButton.textContent = "Pause";
    theoryButton.disabled = false;
    categorySelect.disabled = false;

    if (exerciseCompletionTimeout) {
        clearTimeout(exerciseCompletionTimeout);
        exerciseCompletionTimeout = null;
    }
    scoreDiv.scrollTop = 0;
}

function updateSuccessRate() {
    if (!currentExerciseData) {
         successRateSpan.textContent = '-- %';
         return;
    }
    const allPlayableNotes = [...currentExerciseData.notesTreble, ...currentExerciseData.notesBass, ...currentExerciseData.notes]
        .filter(note => note && typeof note.startTick === 'number' && !(note.keys && note.keys[0]?.toLowerCase().startsWith('r/')));
    let totalPlayableNoteEvents = 0;
    let correctPlayableNoteEvents = 0;
    allPlayableNotes.forEach(noteObj => {
        if (typeof noteObj.midiValue === 'number') {
            totalPlayableNoteEvents++;
            if (noteObj.status === 'correct') {
                correctPlayableNoteEvents++;
            }
        } else if (Array.isArray(noteObj.midiValues)) {
            totalPlayableNoteEvents += noteObj.midiValues.length;
            if (noteObj.correctMidiValues && Array.isArray(noteObj.correctMidiValues)) {
                 correctPlayableNoteEvents += noteObj.correctMidiValues.length;
            }
        }
    });
     if (totalPlayableNoteEvents === 0) {
         successRateSpan.textContent = 'N/A';
     } else {
         const currentCorrect = Math.min(correctPlayableNoteEvents, totalPlayableNoteEvents);
         const percentage = ((currentCorrect / totalPlayableNoteEvents) * 100).toFixed(1);
         successRateSpan.textContent = `${percentage} %`;
     }
}

function updateInfo(message) {
    expectedNoteSpan.textContent = message;
}

function scrollToCurrentSystem(targetTick = currentTick) {
    if (!systemYPositions || systemYPositions.length === 0) {
        console.warn("scrollToCurrentSystem: systemYPositions non disponibile o vuoto.");
        return;
    }
    console.log(`scrollToCurrentSystem chiamato. Target Tick: ${targetTick}`);
    console.log("  systemYPositions:", systemYPositions);
    let targetSystemY = 0;
    let foundSystem = false;
    for (let i = systemYPositions.length - 1; i >= 0; i--) {
        if (targetTick >= systemYPositions[i].tick) {
            targetSystemY = systemYPositions[i].y;
            foundSystem = true;
            console.log(`  Trovato sistema per tick ${targetTick} al tick ${systemYPositions[i].tick}. Target Y: ${targetSystemY}`);
            break;
        }
    }
    if (!foundSystem) {
         console.warn(`  Nessun sistema trovato per targetTick ${targetTick}. Scroll all'inizio.`);
         targetSystemY = 0;
    }
    scoreDiv.scrollTo({
        top: targetSystemY,
        behavior: 'smooth'
    });
    console.log(`Scrolling eseguito a Y: ${targetSystemY}`);
}

// --- Gestione Input MIDI ---
function handleNoteOn(noteName, midiNote, velocity) {
    playedNoteSpan.textContent = `${noteName} (MIDI: ${midiNote})`;
    playedNoteSpan.style.color = '';

    if (!isPlaying || isPaused || !currentExerciseData) {
         console.log(`Input MIDI ${noteName} (MIDI: ${midiNote}) ignorato: esercizio non in corso o in pausa.`);
         return;
    }
    console.log(`Input MIDI Ricevuto: ${noteName} (MIDI: ${midiNote}) al tick ${currentTick}`);
    const allNotes = [...currentExerciseData.notesTreble, ...currentExerciseData.notesBass, ...currentExerciseData.notes];
    const notesAtCurrentTick = allNotes.filter(noteObj => noteObj && typeof noteObj.startTick === 'number' && noteObj.startTick === currentTick && noteObj.status === 'expected');
    let noteMatchedInStep = false;

    notesAtCurrentTick.forEach(noteObj => {
        if (noteObj.keys && noteObj.keys[0]?.toLowerCase().startsWith('r/')) return;
        if (typeof noteObj.midiValue === 'number' && noteObj.midiValue === midiNote) {
            if (noteObj.status === 'expected') {
                noteObj.status = 'correct';
                noteMatchedInStep = true;
                console.log(`   Corretta! Nota singola ${noteName} (MIDI: ${midiNote}) al tick ${currentTick}.`);
            }
        } else if (Array.isArray(noteObj.midiValues) && noteObj.midiValues.includes(midiNote)) {
            if (noteObj.status === 'expected') {
                if (!noteObj.correctMidiValues || !Array.isArray(noteObj.correctMidiValues)) {
                     noteObj.correctMidiValues = [];
                }
                if (!noteObj.correctMidiValues.includes(midiNote)) {
                    noteObj.correctMidiValues.push(midiNote);
                    noteMatchedInStep = true;
                    console.log(`   Corretta! Nota ${noteName} (MIDI: ${midiNote}) parte di accordo al tick ${currentTick}. Note accordo suonate: ${noteObj.correctMidiValues.length}/${noteObj.midiValues.length}.`);
                    const allMidiNotesPlayedForChord = noteObj.midiValues.every(requiredMidi =>
                        noteObj.correctMidiValues.includes(requiredMidi)
                    );
                    if (allMidiNotesPlayedForChord) {
                        noteObj.status = 'correct';
                        console.log(`   -> Accordo al tick ${currentTick} completato!`);
                    }
                }
            }
        }
    });

    if (noteMatchedInStep) {
        updateSuccessRate();
        const savedScrollTopBeforeNoteHighlight = scoreDiv.scrollTop;
        renderExercise(scoreDiv.id, currentExerciseData);
        scoreDiv.scrollTop = savedScrollTopBeforeNoteHighlight;
        console.log(`Scroll ripristinato a ${savedScrollTopBeforeNoteHighlight} dopo l'highlight della nota.`);
        checkAndAdvanceStep();
    } else {
        console.log(`   Nota ${noteName} (MIDI: ${midiNote}) non attesa al tick ${currentTick}.`);
        updateInfo(`Errore: ${noteName} non atteso`);
        playedNoteSpan.style.color = 'red';
    }
}

// --- Exercise Completion and Advancement Handling ---
function handleExerciseCompletion() {
    stopScrolling();
    if (currentRepetition < targetRepetitions) {
        console.log(`--- Ripetizione ${currentRepetition} di ${targetRepetitions} completata! ---`);
        currentRepetition++;
        console.log(`Avvio preparazione per ripetizione ${currentRepetition}/${targetRepetitions}`);
        updateInfo(`Ottimo! Prepara la Rip. ${currentRepetition}`);
        playedNoteSpan.textContent = "Bene!";
        const delay = 1500;
        startButton.disabled = true;
        pauseButton.disabled = true;
        stopButton.disabled = true;
        categorySelect.disabled = true;
        exerciseSelect.disabled = true;
        theoryButton.disabled = true;

        exerciseCompletionTimeout = setTimeout(() => {
            exerciseCompletionTimeout = null;
            if (!isPlaying) {
                 console.log("Esercizio fermato durante il delay di ripetizione.");
                 resetUIState();
                 categorySelect.disabled = false;
                 exerciseSelect.disabled = false;
                 return;
            }
            console.log(`Inizio Ripetizione ${currentRepetition}`);
            currentTick = 0;
            resetNoteStates();
            updateExpectedNotes();
            renderExercise(scoreDiv.id, currentExerciseData);
            updateSuccessRate();
            scoreDiv.scrollTop = 0;
            setTimeout(startScrolling, 200);

            const hasPlayableNotes = currentExerciseData ? [...currentExerciseData.notesTreble, ...currentExerciseData.notesBass, ...currentExerciseData.notes]
                .some(note => note && typeof note.startTick === 'number' && note.startTick >= 0 &&
                              !(note.keys && note.keys[0]?.toLowerCase().startsWith('r/'))) : false;
            startButton.disabled = !midiReady || !currentExerciseData || !hasPlayableNotes;
            pauseButton.disabled = false;
            pauseButton.textContent = "Pause";
            stopButton.disabled = false;
            categorySelect.disabled = true;
            exerciseSelect.disabled = true;
            theoryButton.disabled = true;
        }, delay);
    } else {
        console.log("Esercizio (tutte le ripetizioni) completato con successo!");
        isPlaying = false;
        isPaused = false;
        stopButton.disabled = true;
        pauseButton.disabled = true;
        pauseButton.textContent = "Pause";
        updateInfo("Esercizio Completato!");
        playedNoteSpan.textContent = "Bravo!";
        const currentCategoryKey = categorySelect.value;
        const currentExerciseId = currentExerciseDefinition?.id;

        if (!currentCategoryKey || !allExercises[currentCategoryKey] || !currentExerciseId || !Array.isArray(allExercises[currentCategoryKey])) {
            console.error("Stato applicazione non valido per determinare il prossimo esercizio.");
            categorySelect.disabled = false;
            exerciseSelect.disabled = false;
            startButton.disabled = !midiReady;
            theoryButton.disabled = false;
            updateInfo("Errore stato. Seleziona un nuovo esercizio.");
            return;
        }

        const categoryExercises = allExercises[currentCategoryKey];
        let nextExercise = null;

        if (ORDERED_CATEGORIES.includes(currentCategoryKey)) {
            console.log(`Categoria "${currentCategoryKey}" è configurata per avanzamento ordinato.`);
            const currentIndex = categoryExercises.findIndex(ex => ex && ex.id === currentExerciseId);
            if (currentIndex !== -1 && currentIndex < categoryExercises.length - 1) {
                 let nextIndex = currentIndex + 1;
                 while(nextIndex < categoryExercises.length && (!categoryExercises[nextIndex] || !categoryExercises[nextIndex].id)) {
                    console.warn(`Elemento all'indice ${nextIndex} non valido, salto.`);
                    nextIndex++;
                 }
                 if (nextIndex < categoryExercises.length) {
                    nextExercise = categoryExercises[nextIndex];
                    console.log(`Prossimo esercizio (ordinato): ${nextExercise.name || nextExercise.id}`);
                 } else {
                    nextExercise = null;
                 }
            } else {
                nextExercise = null;
            }
        } else {
            console.log(`Categoria "${currentCategoryKey}" non ordinata. Cerco random.`);
            const availableExercises = categoryExercises.filter(ex => ex && ex.id && ex.id !== currentExerciseId);
            if (availableExercises.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableExercises.length);
                nextExercise = availableExercises[randomIndex];
                console.log(`Prossimo esercizio (random): ${nextExercise.name || nextExercise.id}`);
            } else {
                nextExercise = null;
            }
        }

        if (nextExercise && nextExercise.id) {
            const delay = 2500;
            updateInfo(`Prossimo: ${nextExercise.name || nextExercise.id}...`);
            console.log(`Attendo ${delay}ms prima di caricare ${nextExercise.id}`);
            categorySelect.disabled = true;
            exerciseSelect.disabled = true;
            startButton.disabled = true;
            pauseButton.disabled = true;
            stopButton.disabled = true;
            theoryButton.disabled = true;

            exerciseCompletionTimeout = setTimeout(() => {
                exerciseCompletionTimeout = null;
                 if (!nextExercise || !nextExercise.id) {
                     console.error("Timeout scaduto ma nextExercise non è valido.");
                     updateInfo("Errore caricamento prossimo esercizio.");
                     categorySelect.disabled = false;
                     exerciseSelect.disabled = false;
                     startButton.disabled = !midiReady;
                     theoryButton.disabled = false;
                     return;
                 }
                console.log(`Caricamento automatico: ${nextExercise.id}`);
                exerciseSelect.value = nextExercise.id;
                selectExercise(nextExercise.id, currentCategoryKey);

                const hasPlayableNotes = currentExerciseData ? [...currentExerciseData.notesTreble, ...currentExerciseData.notesBass, ...currentExerciseData.notes]
                    .some(note => note && typeof note.startTick === 'number' && note.startTick >= 0 &&
                                  !(note.keys && note.keys[0]?.toLowerCase().startsWith('r/'))) : false;
                if (midiReady && currentExerciseData && hasPlayableNotes) {
                     console.log("Avvio automatico del prossimo esercizio...");
                     setTimeout(startExercise, 200);
                } else {
                     console.warn("MIDI non pronto o esercizio non avviabile. L'utente dovrà premere Start.");
                     categorySelect.disabled = true;
                     exerciseSelect.disabled = true;
                     pauseButton.disabled = true;
                     stopButton.disabled = true;
                     theoryButton.disabled = false;
                     if (!midiReady) updateInfo(`Prossimo: ${nextExercise.name || nextExercise.id}. Collega MIDI.`);
                     else if (!hasPlayableNotes) updateInfo(`Prossimo: ${nextExercise.name || nextExercise.id}. Nessuna nota suonabile.`);
                     else updateInfo(`Prossimo: ${nextExercise.name || nextExercise.id}. Premi Start.`);
                }
            }, delay);
        } else {
            console.log("Nessun prossimo esercizio da avviare automaticamente.");
            updateInfo("Categoria Completata! Scegli una nuova categoria o esercizio.");
            playedNoteSpan.textContent = "Ottimo Lavoro!";
            categorySelect.disabled = false;
            exerciseSelect.disabled = false;
            startButton.disabled = !midiReady;
            pauseButton.disabled = true;
            stopButton.disabled = true;
            theoryButton.disabled = false;
            currentExerciseData = null;
            currentExerciseDefinition = null;
            totalTicks = 0;
            systemYPositions = [];
        }
    }
}

// --- updateMidiStatus Function ---
function updateMidiStatus(message, isConnected) {
    midiStatusSpan.textContent = message;
    midiReady = isConnected;
    const hasPlayableNotes = currentExerciseData ? [...currentExerciseData.notesTreble, ...currentExerciseData.notesBass, ...currentExerciseData.notes]
            .some(note => note && typeof note.startTick === 'number' && note.startTick >= 0 &&
                          !(note.keys && note.keys[0]?.toLowerCase().startsWith('r/'))) : false;

    if (isConnected) {
        startButton.disabled = isPlaying || !currentExerciseData || !hasPlayableNotes;
        pauseButton.disabled = !isPlaying || isPaused;
        theoryButton.disabled = isPlaying;
         if (!isPlaying && currentExerciseData && hasPlayableNotes) {
             updateInfo(`MIDI pronto. Premi Start per ${currentExerciseDefinition.name || currentExerciseDefinition.id}.`);
         } else if (!currentExerciseData) {
             updateInfo("MIDI pronto. Seleziona un esercizio.");
         } else if (!hasPlayableNotes) {
             updateInfo("MIDI pronto. Questo esercizio non ha note suonabili.");
         }
    } else {
        startButton.disabled = true;
        pauseButton.disabled = true;
        stopButton.disabled = true;
        theoryButton.disabled = true;
        updateInfo("Collega un dispositivo MIDI per iniziare.");
        if (isPlaying) {
            console.warn("Dispositivo MIDI disconnesso durante l'esecuzione dell'esercizio!");
            stopExercise();
            alert("ATTENZIONE: Dispositivo MIDI disconnesso! Esercizio interrotto.");
            updateInfo("MIDI Disconnesso! Esercizio interrotto.");
        }
    }
}

// --- Event Listeners ---
categorySelect.addEventListener('change', (e) => {
    populateExerciseSelect(e.target.value);
});

exerciseSelect.addEventListener('change', (e) => {
    const selectedExerciseId = e.target.value;
    const selectedCategoryKey = categorySelect.value;
    selectExercise(selectedExerciseId, selectedCategoryKey);
});

startButton.addEventListener('click', startExercise);
stopButton.addEventListener('click', stopExercise);
pauseButton.addEventListener('click', () => {
    if (isPaused) {
        resumeExercise();
    } else {
        pauseExercise();
    }
});
theoryButton.addEventListener('click', handleTheoryClick);

// --- Application Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente caricato e analizzato.");
    console.log("Inizializzazione Piano Future...");

    loadExerciseData();
    initializeMIDI(handleNoteOn, updateMidiStatus);
    resetUIState();
    stopButton.disabled = true;
    pauseButton.disabled = true;
    startButton.disabled = true;
    theoryButton.disabled = false;
    scoreDiv.innerHTML = '<p>Benvenuto! Seleziona una categoria e un esercizio.</p>';
    updateInfo("Collega un dispositivo MIDI e seleziona un esercizio.");

    scrollSpeedValueSpan.textContent = scrollSpeedControl.value; // Sincronizza il testo con il valore iniziale dello slider
    scrollSpeed = parseInt(scrollSpeedControl.value, 10); // Sincronizza la variabile con il valore iniziale dello slider

    scrollSpeedControl.addEventListener('input', (e) => {
        scrollSpeed = parseInt(e.target.value, 10);
        scrollSpeedValueSpan.textContent = e.target.value;
        console.log(`Velocità scrolling aggiornata: ${scrollSpeed}`);
    });
});