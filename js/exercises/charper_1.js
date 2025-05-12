/**
 * js/exercises/chapter_1.js
 * Capitolo 1: Le Basi del Blues - Mano Sinistra e Accordi Fondamentali sulla Progressione.
 * Esercizi per suonare la progressione blues di 12 battute con la mano sinistra,
 * concentrandosi sugli accordi I7, IV7, V7 e sul timing.
 *
 * Piano Blues Teacher
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Array che conterrà tutti gli esercizi del Capitolo 1
const chapter1Exercises = [
    // =======================================================================================
    // === Esercizio CH1-EX1: Progressione Blues Standard - Accordi Tenuti (MS) ===
    // =======================================================================================
    {
        id: "ch1-ex1-Prog-Sustain-LH",
        name: "Cap.1: Progressione Standard (Accordi Tenuti)",
        category: "chapter_1",
        staveLayout: "bass", // Solo pentagramma di basso
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano destra vuota (pause)
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
        ],
        notesBass: [ // Mano Sinistra: Progressione Blues Standard, accordi tenuti per l'intera battuta
            // C7: [36,40,43,46], F7: [29,33,36,39], G7: [31,35,38,41]
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
    // === Esercizio CH1-EX2: Progressione Blues Standard - Ritmo Base (MS) ===
    // =======================================================================================
    {
        id: "ch1-ex2-Prog-BasicRhythm-LH",
        name: "Cap.1: Progressione Standard (MS Ritmo Base)",
        category: "chapter_1",
        staveLayout: "bass",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ /* Pause */
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
        ],
        notesBass: [ // Mano Sinistra: Progressione Blues, accordi su beat 1 e 3 (semiminime)
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 9 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 12 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
        ]
    },
    // =======================================================================================
    // === Esercizio CH1-EX3: Progressione Blues "Quick Change" - Accordi Tenuti (MS) ===
    // =======================================================================================
    {
        id: "ch1-ex3-Prog-QuickChange-Sustain-LH",
        name: "Cap.1: Progressione Quick Change (Acc. Tenuti)",
        category: "chapter_1",
        staveLayout: "bass",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ /* Pause */
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
        ],
        notesBass: [ // Mano Sinistra: Progressione "Quick Change" (F7 alla seconda battuta)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 1 (C7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 2 (F7) - Quick Change
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
    // === Esercizio CH1-EX4: Progressione con V7 al posto di I7 (Battuta 12) - Tenuti (MS) ===
    // =======================================================================================
    {
        id: "ch1-ex4-Prog-V7End-Sustain-LH",
        name: "Cap.1: Progressione V7 Finale (Acc. Tenuti)",
        category: "chapter_1",
        staveLayout: "bass",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ /* Pause */
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
        ],
        notesBass: [ // Mano Sinistra: Progressione standard ma con G7 alla battuta 12 invece di C7 (comune turnaround)
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
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // Bar 12 (G7) - Turnaround
        ]
    },
    // =======================================================================================
    // === Esercizio CH1-EX5: Progressione Blues con II-V-I Finale - Ritmo Base (MS) ===
    // =======================================================================================
    {
        id: "ch1-ex5-Prog-ii-V-I-End-LH-Rhythm",
        name: "Cap.1: Progressione II-V-I Finale (MS Ritmo)",
        category: "chapter_1",
        staveLayout: "bass",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ /* Pause */
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
        ],
        notesBass: [ // Mano Sinistra: Progressione con Dm7-G7-C7 nelle ultime battute, ritmo base
            // Dm7: D-F-A-C (MIDI: 38,41,45,48 per D2)
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 9 (Dm7) - Inizio II-V-I
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "q", midiValues: [38,41,45,48] }, { keys: ["r/4"], duration: "q" },
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "q", midiValues: [38,41,45,48] }, { keys: ["r/4"], duration: "q" },
            // Bar 10 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 12 (G7) - Turnaround finale
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
        ]
    }
];

// Esporta l'array degli esercizi per questo capitolo
if (window.exerciseData) {
    window.exerciseData.chapter_1 = chapter1Exercises;
} else {
    window.exerciseData = {
        chapter_1: chapter1Exercises
    };
}