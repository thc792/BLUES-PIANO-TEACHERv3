/**
 * js/exercises/chapter_2.js
 * Capitolo 2: Prime Melodie Blues Intuitive - Introduzione Mano Destra.
 * Esercizi per iniziare a usare la mano destra con melodie semplici e intuitive
 * nel contesto blues, sviluppando la coordinazione base con la sinistra.
 *
 * Piano Blues Teacher
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Array che conterrà tutti gli esercizi del Capitolo 2
const chapter2Exercises = [
    // =======================================================================================
    // === Esercizio CH2-EX1: Note Fondamentali e Terze (MD) su Progressione Base (MS) ===
    // =======================================================================================
    {
        id: "ch2-ex1-RH-RootsThirds-LH-Chords",
        name: "Cap.2: Melodia Fondamentali e Terze (MD)",
        category: "chapter_2",
        staveLayout: "grand", // Ora usiamo entrambi i pentagrammi
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Suona la Fondamentale o la Terza dell'accordo corrente
            // Su C7 (C, E), F7 (F, A), G7 (G, B)
            // Bar 1 (C7)
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 2 (C7)
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 3 (C7)
            { keys: ["c/4"], duration: "w", midiValue: 60 },
            // Bar 4 (C7)
            { keys: ["e/4"], duration: "w", midiValue: 64 },
            // Bar 5 (F7)
            { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
            // Bar 6 (F7)
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 7 (C7)
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 8 (C7)
            { keys: ["e/4"], duration: "w", midiValue: 64 },
            // Bar 9 (G7)
            { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
            // Bar 10 (F7)
            { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
            // Bar 11 (C7)
            { keys: ["c/4"], duration: "w", midiValue: 60 },
            // Bar 12 (G7)
            { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
        ],
        notesBass: [ // Mano Sinistra: Progressione Blues Standard, accordi tenuti
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 4 (C7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 6 (F7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 8 (C7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // Bar 9 (G7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 10 (F7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 11 (C7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // Bar 12 (G7)
        ]
    },
    // =======================================================================================
    // === Esercizio CH2-EX2: Brevi Motivi di 3 Note (MD) su Progressione (MS) ===
    // =======================================================================================
    {
        id: "ch2-ex2-RH-3NoteMotifs-LH-Chords",
        name: "Cap.2: Motivi di 3 Note (MD)",
        category: "chapter_2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Motivi di 3 note (es. Tonica-b3-Tonica o Tonica-3-Tonica)
            // Su C7: C-Eb-C o C-E-C. Su F7: F-Ab-F o F-A-F. Su G7: G-Bb-G o G-B-G
            // Bar 1 (C7) - C Eb C
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 2 (C7) - C E C
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 3 (C7) - G Eb C (discendente)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 4 (C7) - E G E (ascendente/discendente)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 5 (F7) - F Ab F
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 6 (F7) - F A F
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 7 (C7) - C Eb C
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 8 (C7) - G E C
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 9 (G7) - G Bb G
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["g/3"], duration: "h", midiValue: 55 },
            // Bar 10 (F7) - C Ab F
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["f/3"], duration: "h", midiValue: 53 },
            // Bar 11 (C7) - Eb C G (invertito)
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/3"], duration: "h", midiValue: 55 },
            // Bar 12 (G7) - D Bb G
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["g/3"], duration: "h", midiValue: 55 },
        ],
        notesBass: [ // Mano Sinistra: Progressione Blues Standard, accordi con ritmo base (beat 1 e 3)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, // C7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, // C7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, // C7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, // C7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, // F7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, // F7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, // C7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, // C7
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" }, { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" }, // G7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, // F7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, // C7
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" }, { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" }, // G7
        ]
    },
    // =======================================================================================
    // === Esercizio CH2-EX3: Melodia "Call" (MS) e "Response" (MD) Semplice ===
    // =======================================================================================
    {
        id: "ch2-ex3-CallResponse-Simple",
        name: "Cap.2: Call & Response Semplice",
        category: "chapter_2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: "Response"
            { keys: ["r/4"], duration: "w" }, // Bar 1 (Pausa durante il "Call" della MS)
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["eb/4"], duration: "h", midiValue: 63 }, // Bar 2 (Response su C7)
            { keys: ["r/4"], duration: "w" }, // Bar 3
            { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // Bar 4 (Response su C7)
            { keys: ["r/4"], duration: "w" }, // Bar 5
            { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["ab/4"], duration: "h", midiValue: 68 }, // Bar 6 (Response su F7)
            { keys: ["r/4"], duration: "w" }, // Bar 7
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, // Bar 8 (Response su C7)
            { keys: ["r/4"], duration: "w" }, // Bar 9
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 }, // Bar 10 (Response su G7)
            { keys: ["r/4"], duration: "w" }, // Bar 11
            { keys: ["c/4"], duration: "w", midiValue: 60 }, // Bar 12 (Response finale su C7 o G7)
        ],
        notesBass: [ // Mano Sinistra: "Call" (Accordo) e Pausa
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "h", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "h" }, // Bar 1 (Call C7)
            { keys: ["r/4"], duration: "w" }, // Bar 2 (Pausa durante il "Response" della MD)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "h", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "h" }, // Bar 3 (Call C7)
            { keys: ["r/4"], duration: "w" }, // Bar 4
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "h", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "h" }, // Bar 5 (Call F7)
            { keys: ["r/4"], duration: "w" }, // Bar 6
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "h", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "h" }, // Bar 7 (Call C7)
            { keys: ["r/4"], duration: "w" }, // Bar 8
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "h", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "h" }, // Bar 9 (Call G7)
            { keys: ["r/4"], duration: "w" }, // Bar 10
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "h", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "h" }, // Bar 11 (Call F7, o C7)
            { keys: ["r/4"], duration: "w" }, // Bar 12
        ]
    },
    // =======================================================================================
    // === Esercizio CH2-EX4: Melodia Semplice Scritta (MD) su Progressione (MS Ritmo Base) ===
    // =======================================================================================
    {
        id: "ch2-ex4-RH-WrittenMelody-LH-Rhythm",
        name: "Cap.2: Melodia Scritta Semplice (MD)",
        category: "chapter_2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia scritta semplice
            { keys: ["g/4"], duration: "h" }, { keys: ["eb/4"], duration: "q" }, { keys: ["c/4"], duration: "q" }, // Bar 1 C7
            { keys: ["c/4"], duration: "q" }, { keys: ["d/4"], duration: "q" }, { keys: ["eb/4"], duration: "h" }, // Bar 2 C7
            { keys: ["e/4"], duration: "h" }, { keys: ["g/4"], duration: "h" },                            // Bar 3 C7
            { keys: ["g/4"], duration: "q" }, { keys: ["f/4"], duration: "q" }, { keys: ["eb/4"], duration: "q" }, { keys: ["d/4"], duration: "q" }, // Bar 4 C7
            { keys: ["c/4"], duration: "h" }, { keys: ["ab/3"], duration: "h" },                           // Bar 5 F7 (Ab è b3)
            { keys: ["f/3"], duration: "w" },                                                              // Bar 6 F7
            { keys: ["c/4"], duration: "q" }, { keys: ["eb/4"], duration: "q" }, { keys: ["e/4"], duration: "q" }, { keys: ["g/4"], duration: "q" }, // Bar 7 C7
            { keys: ["c/4"], duration: "w" },                                                              // Bar 8 C7
            { keys: ["d/4"], duration: "h" }, { keys: ["b/3"], duration: "h" },                            // Bar 9 G7
            { keys: ["c/4"], duration: "h" }, { keys: ["a/3"], duration: "h" },                            // Bar 10 F7
            { keys: ["g/3"], duration: "q" }, { keys: ["e/3"], duration: "q" }, { keys: ["c/3"], duration: "h" }, // Bar 11 C7
            { keys: ["d/4"], duration: "q" }, { keys: ["b/3"], duration: "q" }, { keys: ["g/3"], duration: "h" }, // Bar 12 G7
        ],
        notesBass: [ // Copia da CH2-EX2 (Progressione con ritmo base)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" }, { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" }, { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
        ]
    },
    // =======================================================================================
    // === Esercizio CH2-EX5: Improvvisazione Guidata con Note Chiave (MD) ===
    // =======================================================================================
    {
        id: "ch2-ex5-RH-GuidedImprov-LH-Sustain",
        name: "Cap.2: Improvvisazione Guidata (MD)",
        category: "chapter_2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // L'improvvisazione è più libera
        notesTreble: [ // Mano Destra: L'utente improvvisa, qui mettiamo pause come placeholder
                       // Si potrebbero visualizzare le "note suggerite" come testo o annotazioni
            { keys: ["r/4"], duration: "w", annotation: "Su C7: prova C, Eb, G" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w", annotation: "Su F7: prova F, Ab, C" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w", annotation: "Su C7: prova C, E, G" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w", annotation: "Su G7: prova G, Bb, D" }, { keys: ["r/4"], duration: "w", annotation: "Su F7: prova F, A, C" },
            { keys: ["r/4"], duration: "w", annotation: "Su C7: prova C, Eb, G" }, { keys: ["r/4"], duration: "w", annotation: "Su G7: prova G, B, D" },
        ],
        notesBass: [ // Mano Sinistra: Progressione Blues Standard, accordi tenuti
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] },
        ]
    }
];

// Esporta l'array degli esercizi
if (window.exerciseData) {
    window.exerciseData.chapter_2 = chapter2Exercises;
} else {
    window.exerciseData = {
        chapter_2: chapter2Exercises
    };
}