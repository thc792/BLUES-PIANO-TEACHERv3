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
    // === Esercizio CH2-EX2 (Corretto senza pause MS): Brevi Motivi di 3 Note (MD) su Progressione (MS continua) ===
    // =======================================================================================
    {
        id: "ch2-ex2-RH-3NoteMotifs-LH-Chords-NoPauseMS", // ID leggermente modificato per chiarezza
        name: "Cap.2: Motivi di 3 Note (MD) - MS Continua",
        category: "chapter_2", // Categoria ipotetica
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Motivi di 3 note (come nell'originale fornito)
            // Su C7: C-Eb-C o C-E-C. Su F7: F-Ab-F o F-A-F. Su G7: G-Bb-G o G-B-G
            // Bar 1 (C7) - C Eb C (tenuto)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 2 (C7) - C E C (tenuto)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 3 (C7) - G Eb C (tenuto)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 4 (C7) - E G E (tenuto)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 5 (F7) - F Ab F (tenuto)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 6 (F7) - F A F (tenuto)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 7 (C7) - C Eb C (tenuto)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 8 (C7) - G E C (tenuto)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 9 (G7) - G Bb G (tenuto)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["g/3"], duration: "h", midiValue: 55 },
            // Bar 10 (F7) - C Ab F (tenuto)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["f/3"], duration: "h", midiValue: 53 },
            // Bar 11 (C7) - Eb C G (tenuto)
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/3"], duration: "h", midiValue: 55 },
            // Bar 12 (G7) - D Bb G (tenuto)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["g/3"], duration: "h", midiValue: 55 },
        ],
        notesBass: [ // Mano Sinistra: Accordi su ogni semiminima per riempire i 4 tempi
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 9 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 12 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
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
    // === Esercizio CH2-EX4 (Corretto senza pause MS): Melodia Semplice Scritta (MD) su Progressione (MS continua) ===
    // =======================================================================================
    {
        id: "ch2-ex4-RH-WrittenMelody-LH-Rhythm-NoPauseMS", // ID aggiornato
        name: "Cap.2: Melodia Scritta Semplice (MD) - MS Continua",
        category: "chapter_2", // Categoria ipotetica
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia scritta semplice (come da originale)
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
        notesBass: [ // Mano Sinistra: Accordi su ogni semiminima per riempire i 4 tempi
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 9 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 12 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
        ]
    },
       // =======================================================================================
    // === Esercizio CH2-EX_SIMILE_G: Melodia Semplice Scritta (MD) in SOL (MS continua) ===
    // =======================================================================================
    {
        id: "ch2-ex_similar-G-RH-WrittenMelody-LH-Continuous", // ID per nuovo esercizio in G
        name: "Cap.2: Melodia Scritta Semplice (MD) in SOL",
        category: "chapter_2", // Categoria ipotetica
        staveLayout: "grand",
        keySignature: "G", // Tonalità di SOL (un diesis: F#)
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia scritta semplice in SOL
            // Bar 1 (G7: G B D F) - Melodia: D B G D
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 2 (G7) - Melodia: G A B (tenuto)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["b/3"], duration: "h", midiValue: 59 },
            // Bar 3 (G7) - Melodia: F D B G (Arpeggio G7 discendente)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 4 (G7) - Melodia: B D F (tenuto)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 5 (C7: C E G Bb) - Melodia: G E C G (note di C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 6 (C7) - Melodia: C E G (tenuto)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 7 (G7) - Melodia: D B G (tenuto)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["g/3"], duration: "h", midiValue: 55 },
            // Bar 8 (G7) - Melodia: G F D B (Scala Blues G discendente senza C#)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 9 (D7: D F# A C) - Melodia: A Gb D A (note di D7) - F# è Gb
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["gb/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 10 (C7) - Melodia: G E C (tenuto)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 11 (G7) - Melodia: D B G (tenuto)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["g/3"], duration: "h", midiValue: 55 },
            // Bar 12 (D7) - Melodia: A C Gb D (Arpeggio D7 con C naturale)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // C naturale (b7 di D7)
            { keys: ["gb/3"], duration: "q", midiValue: 54 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        ],
        notesBass: [ // Mano Sinistra: Accordi su ogni semiminima - Progressione Blues in SOL
            // G7: [31,35,38,41], C7: [36,40,43,46], D7: [38,42,45,48]
            // Bar 1 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 2 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 3 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 4 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 5 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 6 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 7 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 8 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 9 (D7)
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] }, // F# è Gb
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
            // Bar 10 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 11 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 12 (D7)
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
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