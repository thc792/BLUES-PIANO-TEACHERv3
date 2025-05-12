/**
 * js/exercises/chapter_3.js
 * Capitolo 3: Ritmi Blues Fondamentali - Groove per Due Mani.
 * Esercizi per sviluppare il senso ritmico, il feel blues (shuffle),
 * la precisione e la coordinazione ritmica tra le mani.
 *
 * Piano Blues Teacher
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Array che conterrà tutti gli esercizi del Capitolo 3
const chapter3Exercises = [
    // =======================================================================================
    // === Esercizio CH3-EX1: Ritmo "Charleston" & Variazioni (MS Accordo, MD Singola Nota) ===
    // =======================================================================================
    {
        id: "ch3-ex1-CharlestonRhythm-BothHands",
        name: "Cap.3: Ritmo Charleston & Variazioni",
        category: "chapter_3",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Singola nota (C4) con variazioni ritmiche Charleston
            // Pattern A: colpo sul 2 e sul 'e' del 4 (anticipazione)
            { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["r/4"], duration: "8" }, // Bar 1
            { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["r/4"], duration: "8" }, // Bar 2
            // Pattern B: colpo sul 'e' del 1 e sul 3
            { keys: ["r/4"], duration: "8" }, { keys: ["c/4"], duration: "q.", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" },             // Bar 3
            { keys: ["r/4"], duration: "8" }, { keys: ["c/4"], duration: "q.", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" },             // Bar 4
            // Ripeti Pattern A e B sulla progressione
            { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["r/4"], duration: "8" }, // Bar 5 (F7)
            { keys: ["r/4"], duration: "8" }, { keys: ["c/4"], duration: "q.", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" },             // Bar 6 (F7)
            { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["r/4"], duration: "8" }, // Bar 7 (C7)
            { keys: ["r/4"], duration: "8" }, { keys: ["c/4"], duration: "q.", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" },             // Bar 8 (C7)
            { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["r/4"], duration: "8" }, // Bar 9 (G7)
            { keys: ["r/4"], duration: "8" }, { keys: ["c/4"], duration: "q.", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" },             // Bar 10 (F7)
            { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["r/4"], duration: "8" }, // Bar 11 (C7)
            { keys: ["r/4"], duration: "8" }, { keys: ["c/4"], duration: "q.", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" },             // Bar 12 (G7)
        ],
        notesBass: [ // Mano Sinistra: Accordi I7, IV7, V7 con ritmo Charleston base (colpo sul beat 1)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q.", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "8" },{ keys: ["r/4"], duration: "h" }, // Bar 1 C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q.", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "8" },{ keys: ["r/4"], duration: "h" }, // Bar 2 C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q.", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "8" },{ keys: ["r/4"], duration: "h" }, // Bar 3 C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q.", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "8" },{ keys: ["r/4"], duration: "h" }, // Bar 4 C7
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q.", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "8" },{ keys: ["r/4"], duration: "h" }, // Bar 5 F7
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q.", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "8" },{ keys: ["r/4"], duration: "h" }, // Bar 6 F7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q.", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "8" },{ keys: ["r/4"], duration: "h" }, // Bar 7 C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q.", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "8" },{ keys: ["r/4"], duration: "h" }, // Bar 8 C7
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q.", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "8" },{ keys: ["r/4"], duration: "h" }, // Bar 9 G7
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q.", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "8" },{ keys: ["r/4"], duration: "h" }, // Bar 10 F7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q.", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "8" },{ keys: ["r/4"], duration: "h" }, // Bar 11 C7
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q.", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "8" },{ keys: ["r/4"], duration: "h" }, // Bar 12 G7
        ]
    },
    // =======================================================================================
    // === Esercizio CH3-EX2: Pattern Ritmico Sincopato Semplice (Due Mani) ===
    // =======================================================================================
    {
        id: "ch3-ex2-SyncopatedRhythm-BothHands",
        name: "Cap.3: Ritmo Sincopato Semplice",
        category: "chapter_3",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        // Pattern: croma - semiminima - croma (pausa di semiminima) | Ripetuto due volte per battuta
        notesTreble: [ // Mano Destra: Singola nota (G4) con il pattern
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["r/4"], duration: "q" }, // Bar 1
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["r/4"], duration: "q" }, // Bar 2
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["r/4"], duration: "q" }, // Bar 3
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["r/4"], duration: "q" }, // Bar 4
            { keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["r/4"], duration: "q" }, // Bar 5 (su F7, usa C)
            { keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["r/4"], duration: "q" }, // Bar 6
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["r/4"], duration: "q" }, // Bar 7
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["r/4"], duration: "q" }, // Bar 8
            { keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["r/4"], duration: "q" }, // Bar 9 (su G7, usa D)
            { keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["r/4"], duration: "q" }, // Bar 10 (su F7, usa C)
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["r/4"], duration: "q" }, // Bar 11
            { keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["r/4"], duration: "q" }, // Bar 12
        ],
        notesBass: [ // Mano Sinistra: Accordi con lo stesso pattern ritmico
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["r/4"], duration: "q" }, // F7
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["r/4"], duration: "q" }, // F7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["g/1","b/1","d/2","f/2"], duration: "8", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "8", midiValues: [31,35,38,41] },{ keys: ["r/4"], duration: "q" }, // G7
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["r/4"], duration: "q" }, // F7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["g/1","b/1","d/2","f/2"], duration: "8", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "8", midiValues: [31,35,38,41] },{ keys: ["r/4"], duration: "q" }, // G7
        ]
    },
    // =======================================================================================
    // === Esercizio CH3-EX3: Introduzione al Ritmo Shuffle Leggero (MS Fondamentale-Quinta) ===
    // =======================================================================================
    {
        id: "ch3-ex3-LightShuffle-LH-RootFifth",
        name: "Cap.3: Shuffle Leggero (MS Fond-5a)",
        category: "chapter_3",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // Il feel shuffle è interpretativo
        repetitions: 2,
        notesTreble: [ // Mano Destra: Singola nota (G4) su ogni beat per riferimento
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 1
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 2
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 3
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 4
            { keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 }, // Bar 5 (F7)
            { keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 }, // Bar 6 (F7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 7 (C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 8 (C7)
            { keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 }, // Bar 9 (G7)
            { keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 }, // Bar 10 (F7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 11 (C7)
            { keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 }, // Bar 12 (G7)
        ],
        notesBass: [ // Mano Sinistra: Pattern Shuffle (Fondamentale-Quinta alternate, crome)
                     // C7: C G C G | F7: F C F C | G7: G D G D
            // Bar 1 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // Bar 2 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // ... e così via per tutta la progressione, adattando Fondamentale e Quinta per F7 e G7
            // Bar 3 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // Bar 4 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // Bar 5 (F7)
            { keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },
            { keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },
            // Bar 6 (F7)
            { keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },
            { keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },
            // Bar 7 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // Bar 8 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // Bar 9 (G7)
            { keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },{ keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },
            { keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },{ keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },
            // Bar 10 (F7)
            { keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },
            { keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },
            // Bar 11 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // Bar 12 (G7)
            { keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },{ keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },
            { keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },{ keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },
        ]
    },
    // =======================================================================================
    // === Esercizio CH3-EX4: "Stop-Time" Ritmico Sincronizzato (Due Mani) ===
    // =======================================================================================
    {
        id: "ch3-ex4-StopTimeRhythm-BothHands",
        name: "Cap.3: Stop-Time Ritmico",
        category: "chapter_3",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        // Le mani suonano l'accordo insieme sul beat 1, poi pausa.
        notesTreble: [ // Mano Destra: Parte superiore dell'accordo
            { keys: ["g/3","bb/3"], duration: "q", midiValues: [55,58] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 1 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 2
            { keys: ["g/3","bb/3"], duration: "q", midiValues: [55,58] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 3
            { keys: ["r/4"], duration: "w" }, // Bar 4
            { keys: ["c/4","eb/4"], duration: "q", midiValues: [60,63] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 5 (F7)
            { keys: ["r/4"], duration: "w" }, // Bar 6
            { keys: ["g/3","bb/3"], duration: "q", midiValues: [55,58] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 7 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 8
            { keys: ["d/3","f/3"], duration: "q", midiValues: [50,53] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 9 (G7)
            { keys: ["c/4","eb/4"], duration: "q", midiValues: [60,63] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 10 (F7)
            { keys: ["g/3","bb/3"], duration: "q", midiValues: [55,58] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 11 (C7)
            { keys: ["d/3","f/3"], duration: "q", midiValues: [50,53] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 12 (G7)
        ],
        notesBass: [ // Mano Sinistra: Parte inferiore dell'accordo
            { keys: ["c/2","e/2"], duration: "q", midiValues: [36,40] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 1 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 2
            { keys: ["c/2","e/2"], duration: "q", midiValues: [36,40] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 3
            { keys: ["r/4"], duration: "w" }, // Bar 4
            { keys: ["f/1","a/1"], duration: "q", midiValues: [29,33] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 5 (F7)
            { keys: ["r/4"], duration: "w" }, // Bar 6
            { keys: ["c/2","e/2"], duration: "q", midiValues: [36,40] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 7 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 8
            { keys: ["g/1","b/1"], duration: "q", midiValues: [31,35] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 9 (G7)
            { keys: ["f/1","a/1"], duration: "q", midiValues: [29,33] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 10 (F7)
            { keys: ["c/2","e/2"], duration: "q", midiValues: [36,40] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 11 (C7)
            { keys: ["g/1","b/1"], duration: "q", midiValues: [31,35] }, { keys: ["r/4"], duration: "q" },{ keys: ["r/4"], duration: "h" }, // Bar 12 (G7)
        ]
    },
    // =======================================================================================
    // === Esercizio CH3-EX5: Pattern Ritmico "Domanda e Risposta" (Mani Alternate) ===
    // =======================================================================================
    {
        id: "ch3-ex5-RhythmicCallResponse-Hands",
        name: "Cap.3: Ritmo Domanda & Risposta (Mani)",
        category: "chapter_3",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        // Mano Sinistra suona un pattern, Mano Destra risponde con un altro pattern
        notesTreble: [ // Mano Destra: Risposta ritmica (es. sul 2 e 4) con singola nota G4
            { keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 1
            { keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 2
            { keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 3
            { keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 4
            { keys: ["r/4"], duration: "q" },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["r/4"], duration: "q" },{ keys: ["c/5"], duration: "q", midiValue: 72 }, // Bar 5 (F7)
            { keys: ["r/4"], duration: "q" },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["r/4"], duration: "q" },{ keys: ["c/5"], duration: "q", midiValue: 72 }, // Bar 6 (F7)
            { keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 7 (C7)
            { keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 8 (C7)
            { keys: ["r/4"], duration: "q" },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["r/4"], duration: "q" },{ keys: ["d/4"], duration: "q", midiValue: 62 }, // Bar 9 (G7)
            { keys: ["r/4"], duration: "q" },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["r/4"], duration: "q" },{ keys: ["c/5"], duration: "q", midiValue: 72 }, // Bar 10 (F7)
            { keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["r/4"], duration: "q" },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 11 (C7)
            { keys: ["r/4"], duration: "q" },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["r/4"], duration: "q" },{ keys: ["d/4"], duration: "q", midiValue: 62 }, // Bar 12 (G7)
        ],
        notesBass: [ // Mano Sinistra: Domanda ritmica (es. sul 1 e 3) con accordi
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["r/4"], duration: "q" },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["r/4"], duration: "q" }, // F7
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["r/4"], duration: "q" },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["r/4"], duration: "q" }, // F7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["r/4"], duration: "q" },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["r/4"], duration: "q" }, // G7
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["r/4"], duration: "q" },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["r/4"], duration: "q" }, // F7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["r/4"], duration: "q" }, // C7
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["r/4"], duration: "q" },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["r/4"], duration: "q" }, // G7
        ]
    }
];

// Esporta l'array degli esercizi
if (window.exerciseData) {
    window.exerciseData.chapter_3 = chapter3Exercises;
} else {
    window.exerciseData = {
        chapter_3: chapter3Exercises
    };
}