/**
 * js/exercises/chapter_4.js
 * Capitolo 4: Combinare le Mani - Primi Accompagnamenti e Melodie Coordinate.
 * Esercizi per integrare il lavoro della mano sinistra (accompagnamenti base)
 * con la mano destra (melodie semplici e licks intuitivi), e introdurre i turnaround.
 *
 * Piano Blues Teacher
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Array che conterrà tutti gli esercizi del Capitolo 4
const chapter4Exercises = [
    // =================================================================================================
    // === Esercizio CH4-EX1: Accompagnamento MS (Fondamentale-Quinta) + Melodia Scritta Semplice MD ===
    // =================================================================================================
    {
        id: "ch4-ex1-LH-RootFifth-RH-SimpleMelody",
        name: "Cap.4: MS Fond-5a + MD Melodia Semplice",
        category: "chapter_4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia scritta semplice (basata su note intuitive degli accordi)
            // Bar 1 (C7)
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 2 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["eb/4"], duration: "h", midiValue: 63 },
            // Bar 3 (C7)
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["g/4"], duration: "q" }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // Bar 4 (C7)
            { keys: ["c/4"], duration: "w", midiValue: 60 },
            // Bar 5 (F7)
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 6 (F7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["ab/3"], duration: "h", midiValue: 56 },
            // Bar 7 (C7)
            { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 8 (C7)
            { keys: ["e/4"], duration: "w", midiValue: 64 },
            // Bar 9 (G7)
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
            // Bar 10 (F7)
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 11 (C7)
            { keys: ["g/3"], duration: "q" }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "h", midiValue: 48 },
            // Bar 12 (G7)
            { keys: ["d/4"], duration: "q" }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "h", midiValue: 55 },
        ],
        notesBass: [ // Mano Sinistra: Pattern Fondamentale-Quinta (semiminime)
            // C7: C G | F7: F C | G7: G D
            // Bar 1 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 2 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 3 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 4 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 5 (F7)
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 6 (F7)
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 7 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 8 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 9 (G7)
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Bar 10 (F7)
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 11 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 12 (G7)
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
        ]
    },
    // =======================================================================================
    // === Esercizio CH4-EX2: Arpeggio Semplice MS + Brevi Frasi Melodiche MD ===
    // =======================================================================================
    {
        id: "ch4-ex2-LH-SimpleArp-RH-ShortPhrases",
        name: "Cap.4: MS Arpeggio Semplice + MD Frasi Brevi",
        category: "chapter_4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Brevi frasi di 2-3 note
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["r/4"], duration: "h" }, // Bar 1 C7
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "h" }, // Bar 2 C7
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // Bar 3 C7
            { keys: ["c/5"], duration: "w", midiValue: 72 },                                 // Bar 4 C7
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["r/4"], duration: "h" }, // Bar 5 F7
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "h" }, // Bar 6 F7
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["eb/4"], duration: "h", midiValue: 63 }, // Bar 7 C7
            { keys: ["c/4"], duration: "w", midiValue: 60 },                                 // Bar 8 C7
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["r/4"], duration: "h" }, // Bar 9 G7
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["ab/3"], duration: "h", midiValue: 56 },// Bar 10 F7
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["c/4"], duration: "h", midiValue: 60 }, // Bar 11 C7
            { keys: ["b/3"], duration: "h", midiValue: 59 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, // Bar 12 G7
        ],
        notesBass: [ // Mano Sinistra: Arpeggio semplice (1-3-5-b7 come semiminime)
            // C7: C E G Bb
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            // F7: F A C Eb
            { keys: ["f/1"], duration: "q", midiValue: 29 },{ keys: ["a/1"], duration: "q", midiValue: 33 },{ keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["eb/2"], duration: "q", midiValue: 39 },
            { keys: ["f/1"], duration: "q", midiValue: 29 },{ keys: ["a/1"], duration: "q", midiValue: 33 },{ keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["eb/2"], duration: "q", midiValue: 39 },
            // C7
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            // G7: G B D F
            { keys: ["g/1"], duration: "q", midiValue: 31 },{ keys: ["b/1"], duration: "q", midiValue: 35 },{ keys: ["d/2"], duration: "q", midiValue: 38 },{ keys: ["f/2"], duration: "q", midiValue: 41 },
            // F7
            { keys: ["f/1"], duration: "q", midiValue: 29 },{ keys: ["a/1"], duration: "q", midiValue: 33 },{ keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["eb/2"], duration: "q", midiValue: 39 },
            // C7
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            // G7
            { keys: ["g/1"], duration: "q", midiValue: 31 },{ keys: ["b/1"], duration: "q", midiValue: 35 },{ keys: ["d/2"], duration: "q", midiValue: 38 },{ keys: ["f/2"], duration: "q", midiValue: 41 },
        ]
    },
    // =======================================================================================
    // === Esercizio CH4-EX3: Introduzione al Turnaround Semplice (Armonico e Melodico) ===
    // =======================================================================================
    {
        id: "ch4-ex3-SimpleTurnaround",
        name: "Cap.4: Turnaround Semplice",
        category: "chapter_4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 3, // Per praticare bene il turnaround
        notesTreble: [ // Melodia che enfatizza il turnaround
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, // Bar 1-4 Pause
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, // Bar 5-8 Pause
            // Turnaround nelle ultime 4 battute: C7 | A7 | Dm7 | G7
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // Bar 9 (C7)
            { keys: ["db/4"], duration: "h", midiValue: 61 }, { keys: ["a/3"], duration: "h", midiValue: 57 }, // Bar 10 (A7 - C# e A)
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["f/4"], duration: "h", midiValue: 65 }, // Bar 11 (Dm7)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 12 (G7)
        ],
        notesBass: [ // Mano Sinistra: Progressione con turnaround I-VI-ii-V
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "w", midiValues: [29,33,36,39] }, { keys: ["f/1","a/1","c/2","eb/2"], duration: "w", midiValues: [29,33,36,39] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] },
            // Turnaround: C7 | A7 | Dm7 | G7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 9 (C7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "w", midiValues: [33,37,40,43] }, // Bar 10 (A7)
            { keys: ["d/2","f/2","a/2","c/3"], duration: "w", midiValues: [38,41,45,48] }, // Bar 11 (Dm7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "w", midiValues: [31,35,38,41] }, // Bar 12 (G7)
        ]
    },
    // =======================================================================================
    // === Esercizio CH4-EX4: "Call and Response" tra le Mani (Ritmo e Melodia Semplici) ===
    // =======================================================================================
    {
        id: "ch4-ex4-HandCallResponse-Simple",
        name: "Cap.4: Call & Response tra Mani",
        category: "chapter_4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: "Response" melodico
            { keys: ["r/4"], duration: "h" }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, // Bar 1
            { keys: ["r/4"], duration: "h" }, { keys: ["c/4"], duration: "h", midiValue: 60 },                                             // Bar 2
            { keys: ["r/4"], duration: "h" }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 3
            { keys: ["r/4"], duration: "h" }, { keys: ["c/5"], duration: "h", midiValue: 72 },                                             // Bar 4
            { keys: ["r/4"], duration: "h" }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // Bar 5
            { keys: ["r/4"], duration: "h" }, { keys: ["c/4"], duration: "h", midiValue: 60 },                                             // Bar 6
            { keys: ["r/4"], duration: "h" }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, // Bar 7
            { keys: ["r/4"], duration: "h" }, { keys: ["c/4"], duration: "h", midiValue: 60 },                                             // Bar 8
            { keys: ["r/4"], duration: "h" }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, // Bar 9
            { keys: ["r/4"], duration: "h" }, { keys: ["c/4"], duration: "h", midiValue: 60 },                                             // Bar 10
            { keys: ["r/4"], duration: "h" }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 11
            { keys: ["r/4"], duration: "h" }, { keys: ["d/4"], duration: "h", midiValue: 62 },                                             // Bar 12
        ],
        notesBass: [ // Mano Sinistra: "Call" ritmico/armonico (accordo sui primi due beat)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "h", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "h" }, // Bar 1 C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "h", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "h" }, // Bar 2 C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "h", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "h" }, // Bar 3 C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "h", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "h" }, // Bar 4 C7
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "h", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "h" }, // Bar 5 F7
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "h", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "h" }, // Bar 6 F7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "h", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "h" }, // Bar 7 C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "h", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "h" }, // Bar 8 C7
            { keys: ["g/1","b/1","d/2","f/2"], duration: "h", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "h" }, // Bar 9 G7
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "h", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "h" }, // Bar 10 F7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "h", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "h" }, // Bar 11 C7
            { keys: ["g/1","b/1","d/2","f/2"], duration: "h", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "h" }, // Bar 12 G7
        ]
    },
    // =======================================================================================
    // === Esercizio CH4-EX5: Mini-Studio Blues Elementare (Testa Semplice) ===
    // =======================================================================================
    {
        id: "ch4-ex5-MiniBluesStudy-SimpleHead",
        name: "Cap.4: Mini-Studio Blues (Testa Semplice)",
        category: "chapter_4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia "Testa" semplice di 12 battute
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "h", midiValue: 60 },         // Bar 1
            { keys: ["c/4"], duration: "8" }, { keys: ["d/4"], duration: "8" }, { keys: ["eb/4"], duration: "q" }, { keys: ["e/4"], duration: "h", midiValue: 64 }, // Bar 2
            { keys: ["g/4"], duration: "h" }, { keys: ["f/4"], duration: "h", midiValue: 65 },                                                                     // Bar 3
            { keys: ["eb/4"], duration: "q" }, { keys: ["d/4"], duration: "q" }, { keys: ["c/4"], duration: "h" },                                                 // Bar 4
            { keys: ["f/4"], duration: "q" }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["c/5"], duration: "h", midiValue: 72 },                   // Bar 5
            { keys: ["bb/4"], duration: "h", midiValue: 70 }, { keys: ["ab/4"], duration: "h" },                                                                   // Bar 6
            { keys: ["g/4"], duration: "q" }, { keys: ["e/4"], duration: "q" }, { keys: ["c/4"], duration: "h" },                                                   // Bar 7
            { keys: ["c/4"], duration: "8" }, { keys: ["d/4"], duration: "8" }, { keys: ["eb/4"], duration: "8" }, { keys: ["e/4"], duration: "8" }, { keys: ["f/4"], duration: "q" }, { keys: ["g/4"], duration: "q" }, // Bar 8
            { keys: ["d/4"], duration: "h" }, { keys: ["b/3"], duration: "h", midiValue: 59 },                                                                     // Bar 9
            { keys: ["c/4"], duration: "h" }, { keys: ["a/3"], duration: "h", midiValue: 57 },                                                                     // Bar 10
            { keys: ["g/4"], duration: "q" }, { keys: ["eb/4"], duration: "q" }, { keys: ["c/4"], duration: "q" }, { keys: ["g/3"], duration: "q", midiValue: 55 }, // Bar 11
            { keys: ["d/4"], duration: "q" }, { keys: ["f/4"], duration: "q" }, { keys: ["b/3"], duration: "q" }, { keys: ["g/3"], duration: "q" },                 // Bar 12
        ],
        notesBass: [ // Mano Sinistra: Accompagnamento con accordi tenuti (da CH1-EX4)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] },
        ]
    }
];

// Esporta l'array degli esercizi
if (window.exerciseData) {
    window.exerciseData.chapter_4 = chapter4Exercises;
} else {
    window.exerciseData = {
        chapter_4: chapter4Exercises
    };
}