/**
 * js/exercises/blues_scales.js
 * Contiene dati per esercizi dedicati alle Scale Blues.
 * Esercizio BS-C-1: Scala Blues di DO - Tecnica Ascendente/Discendente per battuta.
 *
 * Piano Blues Teacher
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Array che conterrà tutti gli esercizi di questa categoria
const bluesScalesExercises = [
    // =======================================================================
    // === Esercizio BS-C-1 - Scala Blues di DO - Up/Down per Battuta ===
    // =======================================================================
    // Scala Blues di Do: Do, Mib, Fa, Fa#, Sol, Sib
    // Per ogni battuta: 4 note ascendenti, accordo, 4 note discendenti.
    // Le 4 note sono una selezione della scala blues per adattarsi ritmicamente.
    // Salita: Tonica, b3, BlueNote(#4/b5), b7
    // Discesa: b7, BlueNote(#4/b5), b3, Tonica
    {
        id: "bluesScale-C-UpDown",
        name: "Scala Blues DO (Up/Down)",
        category: "blues_scales", // Nuova categoria
        staveLayout: "grand",
        keySignature: "C", // Useremo alterazioni esplicite per Eb, F#, Bb
        timeSignature: "4/4",
        repetitions: 2, // Iniziamo con 2 ripetizioni

        notesTreble: [
            // --- Progressione Blues 12 Battute ---
            // Accordi di riferimento: C7, F7, G7

            // SCALA BLUES DI DO: C(60), Eb(63), F(65), F#(66), G(67), Bb(70)
            // Salita scelta: C, Eb, F#, Bb
            // Discesa scelta: Bb, F#, Eb, C

            // Bar 1 (Accordo: C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 },   // Do
            { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Mib
            { keys: ["gb/4"], duration: "8", midiValue: 66 },  // Fa# (scritto come Solb per VexFlow se F# non è in tonalità) -> useremo F#
            { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib (Accordo suona qui)
            { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib (inizio discesa)
            { keys: ["gb/4"], duration: "8", midiValue: 66 },  // Fa#
            { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Mib
            { keys: ["c/4"], duration: "8", midiValue: 60 },   // Do

            // Bar 2 (Accordo: C7) - Stesso pattern
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 3 (Accordo: C7) - Stesso pattern
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 4 (Accordo: C7) - Stesso pattern
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // SCALA BLUES DI FA: F(65), Ab(68), Bb(70), B(71), C(72), Eb(75)
            // Salita scelta: F, Ab, B, Eb
            // Discesa scelta: Eb, B, Ab, F

            // Bar 5 (Accordo: F7)
            { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa
            { keys: ["ab/4"], duration: "8", midiValue: 68 },  // Lab
            { keys: ["b/4"], duration: "8", midiValue: 71 },   // Si (Blue note di Fa)
            { keys: ["eb/5"], duration: "8", midiValue: 75 },  // Mib (Accordo suona qui)
            { keys: ["eb/5"], duration: "8", midiValue: 75 },  // Mib (inizio discesa)
            { keys: ["b/4"], duration: "8", midiValue: 71 },   // Si
            { keys: ["ab/4"], duration: "8", midiValue: 68 },  // Lab
            { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa

            // Bar 6 (Accordo: F7) - Stesso pattern
            { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["b/4"], duration: "8", midiValue: 71 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["b/4"], duration: "8", midiValue: 71 },
            { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["f/4"], duration: "8", midiValue: 65 },

            // Bar 7 (Accordo: C7) - Ritorno a Scala Blues di DO
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 8 (Accordo: C7) - Stesso pattern
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // SCALA BLUES DI SOL: G(67), Bb(70), C(72), C#(73), D(74), F(77)
            // Salita scelta: G, Bb, C#, F
            // Discesa scelta: F, C#, Bb, G

            // Bar 9 (Accordo: G7)
            { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol
            { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib
            { keys: ["db/5"], duration: "8", midiValue: 73 },  // Do# (Blue note di Sol)
            { keys: ["f/5"], duration: "8", midiValue: 77 },   // Fa (Accordo suona qui)
            { keys: ["f/5"], duration: "8", midiValue: 77 },   // Fa (inizio discesa)
            { keys: ["db/5"], duration: "8", midiValue: 73 },  // Do#
            { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib
            { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol

            // Bar 10 (Accordo: F7) - Ritorno a Scala Blues di FA
            { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["b/4"], duration: "8", midiValue: 71 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["b/4"], duration: "8", midiValue: 71 },
            { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["f/4"], duration: "8", midiValue: 65 },

            // Bar 11 (Accordo: C7) - Ritorno a Scala Blues di DO
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 12 (Accordo: G7) - Turnaround con Scala Blues di SOL
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["db/5"], duration: "8", midiValue: 73 },
            { keys: ["f/5"], duration: "8", midiValue: 77 },
            { keys: ["f/5"], duration: "8", midiValue: 77 },
            { keys: ["db/5"], duration: "8", midiValue: 73 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },

        ], // end notesTreble

        notesBass: [
            // Accordi di settima, una semibreve per battuta.
            // L'accordo suona "in concomitanza" con la 4a croma della mano destra.
            // Bar 1 (C7: C-E-G-Bb)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 5 (F7: F-A-C-Eb)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 9 (G7: G-B-D-F)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 12 (G7) - Turnaround
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] }
        ] // end notesBass
    },
       // ====================================================================================
    // === Esercizio BS-C-2 - Scala Pentatonica Minore di DO - Up/Down per Battuta ===
    // ====================================================================================
    // Scala Pentatonica Minore di Do: Do, Mib, Fa, Sol, Sib
    // Per ogni battuta: 4 note ascendenti scelte, accordo, 4 note discendenti scelte.
    // Salita scelta: Tonica, b3, 5, b7
    // Discesa scelta: b7, 5, b3, Tonica
    {
        id: "pentMinorScale-C-UpDown",
        name: "Pentatonica Minore DO (Up/Down)",
        category: "blues_scales",
        staveLayout: "grand",
        keySignature: "C", // Useremo alterazioni esplicite per Eb, Ab, Bb
        timeSignature: "4/4",
        repetitions: 2,

        notesTreble: [
            // --- Progressione Blues 12 Battute ---
            // Accordi di riferimento: C7, F7, G7

            // PENTATONICA MINORE DI DO: C(60), Eb(63), F(65), G(67), Bb(70)
            // Salita scelta: C, Eb, G, Bb
            // Discesa scelta: Bb, G, Eb, C

            // Bar 1 (Accordo: C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 },   // Do
            { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Mib
            { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol
            { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib (Accordo suona qui)
            { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib (inizio discesa)
            { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol
            { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Mib
            { keys: ["c/4"], duration: "8", midiValue: 60 },   // Do

            // Bar 2 (Accordo: C7) - Stesso pattern
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 3 (Accordo: C7) - Stesso pattern
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 4 (Accordo: C7) - Stesso pattern
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // PENTATONICA MINORE DI FA: F(65), Ab(68), Bb(70), C(72), Eb(75)
            // Salita scelta: F, Ab, C, Eb
            // Discesa scelta: Eb, C, Ab, F

            // Bar 5 (Accordo: F7)
            { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa
            { keys: ["ab/4"], duration: "8", midiValue: 68 },  // Lab
            { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do
            { keys: ["eb/5"], duration: "8", midiValue: 75 },  // Mib (Accordo suona qui)
            { keys: ["eb/5"], duration: "8", midiValue: 75 },  // Mib (inizio discesa)
            { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do
            { keys: ["ab/4"], duration: "8", midiValue: 68 },  // Lab
            { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa

            // Bar 6 (Accordo: F7) - Stesso pattern
            { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["f/4"], duration: "8", midiValue: 65 },

            // Bar 7 (Accordo: C7) - Ritorno a Pentatonica Minore di DO
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 8 (Accordo: C7) - Stesso pattern
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // PENTATONICA MINORE DI SOL: G(67), Bb(70), C(72), D(74), F(77)
            // Salita scelta: G, Bb, D, F
            // Discesa scelta: F, D, Bb, G

            // Bar 9 (Accordo: G7)
            { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol
            { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib
            { keys: ["d/5"], duration: "8", midiValue: 74 },   // Re
            { keys: ["f/5"], duration: "8", midiValue: 77 },   // Fa (Accordo suona qui)
            { keys: ["f/5"], duration: "8", midiValue: 77 },   // Fa (inizio discesa)
            { keys: ["d/5"], duration: "8", midiValue: 74 },   // Re
            { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib
            { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol

            // Bar 10 (Accordo: F7) - Ritorno a Pentatonica Minore di FA
            { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["f/4"], duration: "8", midiValue: 65 },

            // Bar 11 (Accordo: C7) - Ritorno a Pentatonica Minore di DO
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 12 (Accordo: G7) - Turnaround con Pentatonica Minore di SOL
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["d/5"], duration: "8", midiValue: 74 },
            { keys: ["f/5"], duration: "8", midiValue: 77 },
            { keys: ["f/5"], duration: "8", midiValue: 77 },
            { keys: ["d/5"], duration: "8", midiValue: 74 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },

        ], // end notesTreble

        notesBass: [
            // Accordi di settima, una semibreve per battuta.
            // L'accordo suona "in concomitanza" con la 4a croma della mano destra.
            // Bar 1 (C7: C-E-G-Bb)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 5 (F7: F-A-C-Eb)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 9 (G7: G-B-D-F)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 12 (G7) - Turnaround
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio BS-C-3 - Scala Pentatonica Maggiore di DO - Up/Down per Battuta ===
    // =====================================================================================
    // Scala Pentatonica Maggiore di Do: Do, Re, Mi, Sol, La
    // Per ogni battuta: 4 note ascendenti scelte, accordo, 4 note discendenti scelte.
    // Salita scelta: Tonica, 2, 5, 6
    // Discesa scelta: 6, 5, 2, Tonica
    {
        id: "pentMajorScale-C-UpDown",
        name: "Pentatonica Maggiore DO (Up/Down)",
        category: "blues_scales",
        staveLayout: "grand",
        keySignature: "C", // Nessuna alterazione in chiave per C Pentatonica Maggiore
        timeSignature: "4/4",
        repetitions: 2,

        notesTreble: [
            // --- Progressione Blues 12 Battute ---
            // Accordi di riferimento: C7, F7, G7

            // PENTATONICA MAGGIORE DI DO: C(60), D(62), E(64), G(67), A(69)
            // Salita scelta: C, D, G, A
            // Discesa scelta: A, G, D, C

            // Bar 1 (Accordo: C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 },   // Do
            { keys: ["d/4"], duration: "8", midiValue: 62 },   // Re
            { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol
            { keys: ["a/4"], duration: "8", midiValue: 69 },   // La (Accordo suona qui)
            { keys: ["a/4"], duration: "8", midiValue: 69 },   // La (inizio discesa)
            { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol
            { keys: ["d/4"], duration: "8", midiValue: 62 },   // Re
            { keys: ["c/4"], duration: "8", midiValue: 60 },   // Do

            // Bar 2 (Accordo: C7) - Stesso pattern
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 3 (Accordo: C7) - Stesso pattern
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 4 (Accordo: C7) - Stesso pattern
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // PENTATONICA MAGGIORE DI FA: F(65), G(67), A(69), C(72), D(74)
            // Salita scelta: F, G, C, D
            // Discesa scelta: D, C, G, F

            // Bar 5 (Accordo: F7)
            { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa
            { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol
            { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do
            { keys: ["d/5"], duration: "8", midiValue: 74 },   // Re (Accordo suona qui)
            { keys: ["d/5"], duration: "8", midiValue: 74 },   // Re (inizio discesa)
            { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do
            { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol
            { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa

            // Bar 6 (Accordo: F7) - Stesso pattern
            { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["d/5"], duration: "8", midiValue: 74 },
            { keys: ["d/5"], duration: "8", midiValue: 74 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["f/4"], duration: "8", midiValue: 65 },

            // Bar 7 (Accordo: C7) - Ritorno a Pentatonica Maggiore di DO
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 8 (Accordo: C7) - Stesso pattern
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // PENTATONICA MAGGIORE DI SOL: G(67), A(69), B(71), D(74), E(76)
            // Salita scelta: G, A, D, E
            // Discesa scelta: E, D, A, G

            // Bar 9 (Accordo: G7)
            { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol
            { keys: ["a/4"], duration: "8", midiValue: 69 },   // La
            { keys: ["d/5"], duration: "8", midiValue: 74 },   // Re
            { keys: ["e/5"], duration: "8", midiValue: 76 },   // Mi (Accordo suona qui)
            { keys: ["e/5"], duration: "8", midiValue: 76 },   // Mi (inizio discesa)
            { keys: ["d/5"], duration: "8", midiValue: 74 },   // Re
            { keys: ["a/4"], duration: "8", midiValue: 69 },   // La
            { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol

            // Bar 10 (Accordo: F7) - Ritorno a Pentatonica Maggiore di FA
            { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["d/5"], duration: "8", midiValue: 74 },
            { keys: ["d/5"], duration: "8", midiValue: 74 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["f/4"], duration: "8", midiValue: 65 },

            // Bar 11 (Accordo: C7) - Ritorno a Pentatonica Maggiore di DO
            { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 12 (Accordo: G7) - Turnaround con Pentatonica Maggiore di SOL
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["d/5"], duration: "8", midiValue: 74 },
            { keys: ["e/5"], duration: "8", midiValue: 76 },
            { keys: ["e/5"], duration: "8", midiValue: 76 },
            { keys: ["d/5"], duration: "8", midiValue: 74 },
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },

        ], // end notesTreble

        notesBass: [
            // Accordi di settima, una semibreve per battuta.
            // L'accordo suona "in concomitanza" con la 4a croma della mano destra.
            // Bar 1 (C7: C-E-G-Bb)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 5 (F7: F-A-C-Eb)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 9 (G7: G-B-D-F)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 12 (G7) - Turnaround
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio BS-C-4 - Mix Scale Blues (Blues, PentMin, PentMag) - Up/Down ===
    // =====================================================================================
    // Mix delle tre scale sulla progressione blues di 12 battute in DO.
    // Tecnica: 4 note ascendenti scelte, accordo, 4 note discendenti scelte per battuta.
    // Alternanza:
    // Bar 1-4 (C7): Scala Blues di DO
    // Bar 5-6 (F7): Scala Pentatonica Minore di FA
    // Bar 7-8 (C7): Scala Pentatonica Maggiore di DO
    // Bar 9   (G7): Scala Blues di SOL
    // Bar 10  (F7): Scala Pentatonica Minore di FA
    // Bar 11  (C7): Scala Pentatonica Maggiore di DO
    // Bar 12  (G7): Scala Blues di SOL (Turnaround)
    {
        id: "mixScales-C-UpDown",
        name: "Mix Scale Blues DO (Up/Down)",
        category: "blues_scales",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,

        notesTreble: [
            // --- Progressione Blues 12 Battute ---
            // Accordi di riferimento: C7, F7, G7

            // === Bar 1-4: SCALA BLUES DI DO ===
            // Salita: C, Eb, Gb, Bb | Discesa: Bb, Gb, Eb, C
            // Bar 1 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Bar 2 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Bar 3 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Bar 4 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["c/4"], duration: "8", midiValue: 60 },

            // === Bar 5-6: SCALA PENTATONICA MINORE DI FA ===
            // Salita: F, Ab, C, Eb | Discesa: Eb, C, Ab, F
            // Bar 5 (F7)
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Bar 6 (F7)
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["f/4"], duration: "8", midiValue: 65 },

            // === Bar 7-8: SCALA PENTATONICA MAGGIORE DI DO ===
            // Salita: C, D, G, A | Discesa: A, G, D, C
            // Bar 7 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Bar 8 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },

            // === Bar 9: SCALA BLUES DI SOL ===
            // Salita: G, Bb, Db, F | Discesa: F, Db, Bb, G
            // Bar 9 (G7)
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["db/5"], duration: "8", midiValue: 73 }, { keys: ["f/5"], duration: "8", midiValue: 77 },
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["db/5"], duration: "8", midiValue: 73 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["g/4"], duration: "8", midiValue: 67 },

            // === Bar 10: SCALA PENTATONICA MINORE DI FA ===
            // Salita: F, Ab, C, Eb | Discesa: Eb, C, Ab, F
            // Bar 10 (F7)
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["f/4"], duration: "8", midiValue: 65 },

            // === Bar 11: SCALA PENTATONICA MAGGIORE DI DO ===
            // Salita: C, D, G, A | Discesa: A, G, D, C
            // Bar 11 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },

            // === Bar 12: SCALA BLUES DI SOL (Turnaround) ===
            // Salita: G, Bb, Db, F | Discesa: F, Db, Bb, G
            // Bar 12 (G7)
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["db/5"], duration: "8", midiValue: 73 }, { keys: ["f/5"], duration: "8", midiValue: 77 },
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["db/5"], duration: "8", midiValue: 73 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["g/4"], duration: "8", midiValue: 67 },

        ], // end notesTreble

        notesBass: [
            // Accordi di settima, una semibreve per battuta.
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 9 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 12 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio BS-C-5 - Mix Scale Blues V2 (Blues, PentMin, PentMag) - Up/Down ===
    // =====================================================================================
    // Mix delle tre scale sulla progressione blues di 12 battute in DO - VARIAZIONE.
    // Tecnica: 4 note ascendenti scelte, accordo, 4 note discendenti scelte per battuta.
    // Alternanza V2:
    // Bar 1-2 (C7): Scala Pentatonica Maggiore di DO
    // Bar 3-4 (C7): Scala Blues di DO
    // Bar 5   (F7): Scala Blues di FA
    // Bar 6   (F7): Scala Pentatonica Minore di FA
    // Bar 7   (C7): Scala Pentatonica Minore di DO
    // Bar 8   (C7): Scala Pentatonica Maggiore di DO
    // Bar 9   (G7): Scala Pentatonica Minore di SOL
    // Bar 10  (F7): Scala Blues di FA
    // Bar 11  (C7): Scala Blues di DO
    // Bar 12  (G7): Scala Pentatonica Maggiore di SOL (Turnaround)
    {
        id: "mixScales-C-UpDown-V2",
        name: "Mix Scale Blues DO V2 (Up/Down)",
        category: "blues_scales",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,

        notesTreble: [
            // --- Progressione Blues 12 Battute ---
            // Accordi di riferimento: C7, F7, G7

            // === Bar 1-2: SCALA PENTATONICA MAGGIORE DI DO ===
            // Salita: C, D, G, A | Discesa: A, G, D, C
            // Bar 1 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Bar 2 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },

            // === Bar 3-4: SCALA BLUES DI DO ===
            // Salita: C, Eb, Gb, Bb | Discesa: Bb, Gb, Eb, C
            // Bar 3 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Bar 4 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["c/4"], duration: "8", midiValue: 60 },

            // === Bar 5: SCALA BLUES DI FA ===
            // Salita: F, Ab, B, Eb | Discesa: Eb, B, Ab, F
            // Bar 5 (F7)
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["f/4"], duration: "8", midiValue: 65 },

            // === Bar 6: SCALA PENTATONICA MINORE DI FA ===
            // Salita: F, Ab, C, Eb | Discesa: Eb, C, Ab, F
            // Bar 6 (F7)
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["f/4"], duration: "8", midiValue: 65 },

            // === Bar 7: SCALA PENTATONICA MINORE DI DO ===
            // Salita: C, Eb, G, Bb | Discesa: Bb, G, Eb, C
            // Bar 7 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["c/4"], duration: "8", midiValue: 60 },

            // === Bar 8: SCALA PENTATONICA MAGGIORE DI DO ===
            // Salita: C, D, G, A | Discesa: A, G, D, C
            // Bar 8 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },

            // === Bar 9: SCALA PENTATONICA MINORE DI SOL ===
            // Salita: G, Bb, D, F | Discesa: F, D, Bb, G
            // Bar 9 (G7)
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["f/5"], duration: "8", midiValue: 77 },
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["g/4"], duration: "8", midiValue: 67 },

            // === Bar 10: SCALA BLUES DI FA ===
            // Salita: F, Ab, B, Eb | Discesa: Eb, B, Ab, F
            // Bar 10 (F7)
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["eb/5"], duration: "8", midiValue: 75 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["f/4"], duration: "8", midiValue: 65 },

            // === Bar 11: SCALA BLUES DI DO ===
            // Salita: C, Eb, Gb, Bb | Discesa: Bb, Gb, Eb, C
            // Bar 11 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["c/4"], duration: "8", midiValue: 60 },

            // === Bar 12: SCALA PENTATONICA MAGGIORE DI SOL (Turnaround) ===
            // Salita: G, A, D, E | Discesa: E, D, A, G
            // Bar 12 (G7)
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 },

        ], // end notesTreble

        notesBass: [
            // Accordi di settima, una semibreve per battuta.
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 9 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 12 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] }
        ] // end notesBass
    },
// =======================================================================
// === Esercizio BS-G-1 - Scala Blues di SOL - Up/Down per Battuta ===
// =======================================================================
// Scala Blues di Sol: Sol, Sib, Do, Do#, Re, Fa
// Per ogni battuta: 4 note ascendenti scelte, accordo, 4 note discendenti scelte.
// Salita scelta: Tonica, b3, BlueNote(#4/b5), b7
// Discesa scelta: b7, BlueNote(#4/b5), b3, Tonica
{
    id: "bluesScale-G-UpDown",
    name: "Scala Blues SOL (Up/Down)",
    category: "blues_scales",
    staveLayout: "grand",
    keySignature: "G", // Un diesis (F#) - alterazioni esplicite per Bb, C#
    timeSignature: "4/4",
    repetitions: 2,

    notesTreble: [
        // --- Progressione Blues 12 Battute in SOL ---
        // Accordi: G7, C7, D7

        // SCALA BLUES DI SOL: G(55), Bb(58), C(60), C#(61), D(62), F(65)
        // Salita scelta: G, Bb, C#, F
        // Discesa scelta: F, C#, Bb, G

        // Bar 1 (Accordo: G7)
        { keys: ["g/3"], duration: "8", midiValue: 55 },   // Sol
        { keys: ["bb/3"], duration: "8", midiValue: 58 },  // Sib
        { keys: ["db/4"], duration: "8", midiValue: 61 },  // Do# (BlueNote di G)
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa (b7)
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa (inizio discesa)
        { keys: ["db/4"], duration: "8", midiValue: 61 },  // Do#
        { keys: ["bb/3"], duration: "8", midiValue: 58 },  // Sib
        { keys: ["g/3"], duration: "8", midiValue: 55 },   // Sol

        // Bar 2 (Accordo: G7) - Stesso pattern
        { keys: ["g/3"], duration: "8", midiValue: 55 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["g/3"], duration: "8", midiValue: 55 },

        // Bar 3 (Accordo: G7) - Stesso pattern
        { keys: ["g/3"], duration: "8", midiValue: 55 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["g/3"], duration: "8", midiValue: 55 },

        // Bar 4 (Accordo: G7) - Stesso pattern
        { keys: ["g/3"], duration: "8", midiValue: 55 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["g/3"], duration: "8", midiValue: 55 },

        // SCALA BLUES DI DO: C(60), Eb(63), F(65), F#(66), G(67), Bb(70) (IV Grado)
        // Salita scelta: C, Eb, F#, Bb
        // Discesa scelta: Bb, F#, Eb, C
        // Bar 5 (Accordo: C7)
        { keys: ["c/4"], duration: "8", midiValue: 60 },   // Do
        { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Mib
        { keys: ["gb/4"], duration: "8", midiValue: 66 },  // Fa# (BlueNote di C)
        { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib (b7)
        { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib (inizio discesa)
        { keys: ["gb/4"], duration: "8", midiValue: 66 },  // Fa#
        { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Mib
        { keys: ["c/4"], duration: "8", midiValue: 60 },   // Do

        // Bar 6 (Accordo: C7) - Stesso pattern
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["eb/4"], duration: "8", midiValue: 63 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["bb/4"], duration: "8", midiValue: 70 },
        { keys: ["bb/4"], duration: "8", midiValue: 70 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["eb/4"], duration: "8", midiValue: 63 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },

        // Bar 7 (Accordo: G7) - Ritorno a Scala Blues di SOL
        { keys: ["g/3"], duration: "8", midiValue: 55 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["g/3"], duration: "8", midiValue: 55 },

        // Bar 8 (Accordo: G7) - Stesso pattern
        { keys: ["g/3"], duration: "8", midiValue: 55 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["g/3"], duration: "8", midiValue: 55 },

        // SCALA BLUES DI RE: D(62), F(65), G(67), G#(68), A(69), C(72) (V Grado)
        // Salita scelta: D, F, G#, C
        // Discesa scelta: C, G#, F, D
        // Bar 9 (Accordo: D7)
        { keys: ["d/4"], duration: "8", midiValue: 62 },   // Re
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa (b3)
        { keys: ["ab/4"], duration: "8", midiValue: 68 },  // Sol# (BlueNote di D)
        { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do (b7)
        { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do (inizio discesa)
        { keys: ["ab/4"], duration: "8", midiValue: 68 },  // Sol#
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa
        { keys: ["d/4"], duration: "8", midiValue: 62 },   // Re

        // Bar 10 (Accordo: C7) - Ritorno a Scala Blues di DO (IV grado di G)
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["eb/4"], duration: "8", midiValue: 63 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["bb/4"], duration: "8", midiValue: 70 },
        { keys: ["bb/4"], duration: "8", midiValue: 70 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["eb/4"], duration: "8", midiValue: 63 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },

        // Bar 11 (Accordo: G7) - Ritorno a Scala Blues di SOL
        { keys: ["g/3"], duration: "8", midiValue: 55 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["g/3"], duration: "8", midiValue: 55 },

        // Bar 12 (Accordo: D7) - Turnaround con Scala Blues di RE (V grado di G)
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },

    ], // end notesTreble

    notesBass: [
        // Progressione Blues in SOL: G7 / G7 / G7 / G7 / C7 / C7 / G7 / G7 / D7 / C7 / G7 / D7
        // Bar 1 (G7: G-B-D-F)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
        // Bar 2 (G7)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
        // Bar 3 (G7)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
        // Bar 4 (G7)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },

        // Bar 5 (C7: C-E-G-Bb)
        { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
        // Bar 6 (C7)
        { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
        // Bar 7 (G7)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
        // Bar 8 (G7)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },

        // Bar 9 (D7: D-F#-A-C)
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] }, // F# è Gb
        // Bar 10 (C7)
        { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
        // Bar 11 (G7)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
        // Bar 12 (D7) - Turnaround
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] }
    ] // end notesBass
},
// ====================================================================================
// === Esercizio BS-F-1 - Scala Pentatonica Minore di FA - Up/Down per Battuta ===
// ====================================================================================
// Scala Pentatonica Minore di Fa: Fa, Lab, Sib, Do, Mib
// Per ogni battuta: 4 note ascendenti scelte, accordo, 4 note discendenti scelte.
// Salita scelta: Tonica, b3, 5, b7
// Discesa scelta: b7, 5, b3, Tonica
{
    id: "pentMinorScale-F-UpDown",
    name: "Pentatonica Minore FA (Up/Down)",
    category: "blues_scales",
    staveLayout: "grand",
    keySignature: "F", // Un bemolle (Bb) - alterazioni esplicite per Ab, Eb
    timeSignature: "4/4",
    repetitions: 2,

    notesTreble: [
        // --- Progressione Blues 12 Battute in FA ---
        // Accordi: F7, Bb7, C7

        // PENTATONICA MINORE DI FA: F(65), Ab(68), Bb(70), C(72), Eb(75)
        // Salita scelta: F, Ab, C, Eb
        // Discesa scelta: Eb, C, Ab, F

        // Bar 1 (Accordo: F7)
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa
        { keys: ["ab/4"], duration: "8", midiValue: 68 },  // Lab (b3)
        { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do (5)
        { keys: ["eb/5"], duration: "8", midiValue: 75 },  // Mib (b7)
        { keys: ["eb/5"], duration: "8", midiValue: 75 },  // Mib (inizio discesa)
        { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do
        { keys: ["ab/4"], duration: "8", midiValue: 68 },  // Lab
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa

        // Bar 2 (Accordo: F7) - Stesso pattern
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["eb/5"], duration: "8", midiValue: 75 },
        { keys: ["eb/5"], duration: "8", midiValue: 75 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },

        // Bar 3 (Accordo: F7) - Stesso pattern
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["eb/5"], duration: "8", midiValue: 75 },
        { keys: ["eb/5"], duration: "8", midiValue: 75 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },

        // Bar 4 (Accordo: F7) - Stesso pattern
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["eb/5"], duration: "8", midiValue: 75 },
        { keys: ["eb/5"], duration: "8", midiValue: 75 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },

        // PENTATONICA MINORE DI SIB: Bb(70), Db(73), Eb(75), F(77), Ab(80) (IV Grado)
        // Salita scelta: Bb, Db, F, Ab
        // Discesa scelta: Ab, F, Db, Bb
        // (Adattato per rimanere in un registro simile, useremo Bb3 come tonica)
        // Bb(58), Db(61), Eb(63), F(65), Ab(68)
        // Salita: Bb/3, Db/4, F/4, Ab/4
        // Discesa: Ab/4, F/4, Db/4, Bb/3
        // Bar 5 (Accordo: Bb7)
        { keys: ["bb/3"], duration: "8", midiValue: 58 },  // Sib
        { keys: ["db/4"], duration: "8", midiValue: 61 },  // Reb (b3)
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa (5)
        { keys: ["ab/4"], duration: "8", midiValue: 68 },  // Lab (b7)
        { keys: ["ab/4"], duration: "8", midiValue: 68 },  // Lab (inizio discesa)
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa
        { keys: ["db/4"], duration: "8", midiValue: 61 },  // Reb
        { keys: ["bb/3"], duration: "8", midiValue: 58 },  // Sib

        // Bar 6 (Accordo: Bb7) - Stesso pattern
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },

        // Bar 7 (Accordo: F7) - Ritorno a Pentatonica Minore di FA
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["eb/5"], duration: "8", midiValue: 75 },
        { keys: ["eb/5"], duration: "8", midiValue: 75 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },

        // Bar 8 (Accordo: F7) - Stesso pattern
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["eb/5"], duration: "8", midiValue: 75 },
        { keys: ["eb/5"], duration: "8", midiValue: 75 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },

        // PENTATONICA MINORE DI DO: C(60), Eb(63), F(65), G(67), Bb(70) (V Grado di F)
        // Salita scelta: C, Eb, G, Bb
        // Discesa scelta: Bb, G, Eb, C
        // Bar 9 (Accordo: C7)
        { keys: ["c/4"], duration: "8", midiValue: 60 },   // Do
        { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Mib (b3)
        { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol (5)
        { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib (b7)
        { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib (inizio discesa)
        { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol
        { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Mib
        { keys: ["c/4"], duration: "8", midiValue: 60 },   // Do

        // Bar 10 (Accordo: Bb7) - Ritorno a Pentatonica Minore di SIB (IV grado di F)
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },

        // Bar 11 (Accordo: F7) - Ritorno a Pentatonica Minore di FA
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["eb/5"], duration: "8", midiValue: 75 },
        { keys: ["eb/5"], duration: "8", midiValue: 75 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },

        // Bar 12 (Accordo: C7) - Turnaround con Pentatonica Minore di DO (V grado di F)
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["eb/4"], duration: "8", midiValue: 63 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["bb/4"], duration: "8", midiValue: 70 },
        { keys: ["bb/4"], duration: "8", midiValue: 70 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["eb/4"], duration: "8", midiValue: 63 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },

    ], // end notesTreble

    notesBass: [
        // Progressione Blues in FA: F7 / F7 / F7 / F7 / Bb7 / Bb7 / F7 / F7 / C7 / Bb7 / F7 / C7
        // Bar 1 (F7: F-A-C-Eb)
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
        // Bar 2 (F7)
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
        // Bar 3 (F7)
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
        // Bar 4 (F7)
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },

        // Bar 5 (Bb7: Bb-D-F-Ab)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 6 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 7 (F7)
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
        // Bar 8 (F7)
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },

        // Bar 9 (C7: C-E-G-Bb)
        { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
        // Bar 10 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 11 (F7)
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
        // Bar 12 (C7) - Turnaround
        { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] }
    ] // end notesBass
},
// =====================================================================================
// === Esercizio BS-Bb-1 - Scala Pentatonica Maggiore di SIb - Up/Down per Battuta ===
// =====================================================================================
// Scala Pentatonica Maggiore di Sib: Sib, Do, Re, Fa, Sol
// Per ogni battuta: 4 note ascendenti scelte, accordo, 4 note discendenti scelte.
// Salita scelta: Tonica, 2, 5, 6
// Discesa scelta: 6, 5, 2, Tonica
{
    id: "pentMajorScale-Bb-UpDown",
    name: "Pentatonica Maggiore SIb (Up/Down)",
    category: "blues_scales",
    staveLayout: "grand",
    keySignature: "Bb", // Due bemolli (Bb, Eb)
    timeSignature: "4/4",
    repetitions: 2,

    notesTreble: [
        // --- Progressione Blues 12 Battute in SIb ---
        // Accordi: Bb7, Eb7, F7

        // PENTATONICA MAGGIORE DI SIB: Bb(58), C(60), D(62), F(65), G(67)
        // Salita scelta: Bb, C, F, G
        // Discesa scelta: G, F, C, Bb

        // Bar 1 (Accordo: Bb7)
        { keys: ["bb/3"], duration: "8", midiValue: 58 },  // Sib
        { keys: ["c/4"], duration: "8", midiValue: 60 },   // Do (2)
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa (5)
        { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol (6)
        { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol (inizio discesa)
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa
        { keys: ["c/4"], duration: "8", midiValue: 60 },   // Do
        { keys: ["bb/3"], duration: "8", midiValue: 58 },  // Sib

        // Bar 2 (Accordo: Bb7) - Stesso pattern
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },

        // Bar 3 (Accordo: Bb7) - Stesso pattern
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },

        // Bar 4 (Accordo: Bb7) - Stesso pattern
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },

        // PENTATONICA MAGGIORE DI MIB: Eb(63), F(65), G(67), Bb(70), C(72) (IV Grado)
        // Salita scelta: Eb, F, Bb, C
        // Discesa scelta: C, Bb, F, Eb
        // Bar 5 (Accordo: Eb7)
        { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Mib
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa (2)
        { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib (5)
        { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do (6)
        { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do (inizio discesa)
        { keys: ["bb/4"], duration: "8", midiValue: 70 },  // Sib
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa
        { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Mib

        // Bar 6 (Accordo: Eb7) - Stesso pattern
        { keys: ["eb/4"], duration: "8", midiValue: 63 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["bb/4"], duration: "8", midiValue: 70 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["bb/4"], duration: "8", midiValue: 70 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["eb/4"], duration: "8", midiValue: 63 },

        // Bar 7 (Accordo: Bb7) - Ritorno a Pentatonica Maggiore di SIB
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },

        // Bar 8 (Accordo: Bb7) - Stesso pattern
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },

        // PENTATONICA MAGGIORE DI FA: F(65), G(67), A(69), C(72), D(74) (V Grado di Bb)
        // Salita scelta: F, G, C, D
        // Discesa scelta: D, C, G, F
        // Bar 9 (Accordo: F7)
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa
        { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol (2)
        { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do (5)
        { keys: ["d/5"], duration: "8", midiValue: 74 },   // Re (6)
        { keys: ["d/5"], duration: "8", midiValue: 74 },   // Re (inizio discesa)
        { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do
        { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa

        // Bar 10 (Accordo: Eb7) - Ritorno a Pentatonica Maggiore di MIB (IV grado di Bb)
        { keys: ["eb/4"], duration: "8", midiValue: 63 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["bb/4"], duration: "8", midiValue: 70 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["bb/4"], duration: "8", midiValue: 70 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["eb/4"], duration: "8", midiValue: 63 },

        // Bar 11 (Accordo: Bb7) - Ritorno a Pentatonica Maggiore di SIB
        { keys: ["bb/3"], duration: "8", midiValue: 58 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },

        // Bar 12 (Accordo: F7) - Turnaround con Pentatonica Maggiore di FA (V grado di Bb)
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["d/5"], duration: "8", midiValue: 74 },
        { keys: ["d/5"], duration: "8", midiValue: 74 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },

    ], // end notesTreble

    notesBass: [
        // Progressione Blues in SIb: Bb7 / Bb7 / Bb7 / Bb7 / Eb7 / Eb7 / Bb7 / Bb7 / F7 / Eb7 / Bb7 / F7
        // Bar 1 (Bb7: Bb-D-F-Ab)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 2 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 3 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 4 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },

        // Bar 5 (Eb7: Eb-G-Bb-Db)
        { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "w", midiValues: [39, 43, 46, 49] },
        // Bar 6 (Eb7)
        { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "w", midiValues: [39, 43, 46, 49] },
        // Bar 7 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 8 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },

        // Bar 9 (F7: F-A-C-Eb)
        { keys: ["f/2", "a/2", "c/3", "eb/3"], duration: "w", midiValues: [41, 45, 48, 51] },
        // Bar 10 (Eb7)
        { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "w", midiValues: [39, 43, 46, 49] },
        // Bar 11 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 12 (F7) - Turnaround
        { keys: ["f/2", "a/2", "c/3", "eb/3"], duration: "w", midiValues: [41, 45, 48, 51] }
    ] // end notesBass
},
// =====================================================================================
// === Esercizio BS-D-1 - Scala Misolidia di RE - Up/Down per Battuta ===
// =====================================================================================
// Scala Misolidia di Re: Re, Mi, Fa#, Sol, La, Si, Do
// Per ogni battuta: 4 note ascendenti scelte, accordo, 4 note discendenti scelte.
// Salita scelta: Tonica, 3, 5, b7
// Discesa scelta: b7, 5, 3, Tonica
{
    id: "mixolydianScale-D-UpDown",
    name: "Scala Misolidia RE (Up/Down)",
    category: "blues_scales", // Manteniamo la categoria per coerenza con gli altri esercizi di scale
    staveLayout: "grand",
    keySignature: "D", // Due diesis (F#, C#) - alterazione esplicita per C naturale
    timeSignature: "4/4",
    repetitions: 2,

    notesTreble: [
        // --- Progressione Blues 12 Battute in RE ---
        // Accordi: D7, G7, A7

        // SCALA MISOLIDIA DI RE: D(62), E(64), F#(66), G(67), A(69), B(71), C(72)
        // Salita scelta: D, F#, A, C
        // Discesa scelta: C, A, F#, D

        // Bar 1 (Accordo: D7)
        { keys: ["d/4"], duration: "8", midiValue: 62 },   // Re
        { keys: ["gb/4"], duration: "8", midiValue: 66 },  // Fa# (3)
        { keys: ["a/4"], duration: "8", midiValue: 69 },   // La (5)
        { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do (b7)
        { keys: ["c/5"], duration: "8", midiValue: 72 },   // Do (inizio discesa)
        { keys: ["a/4"], duration: "8", midiValue: 69 },   // La
        { keys: ["gb/4"], duration: "8", midiValue: 66 },  // Fa#
        { keys: ["d/4"], duration: "8", midiValue: 62 },   // Re

        // Bar 2 (Accordo: D7) - Stesso pattern
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["a/4"], duration: "8", midiValue: 69 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["a/4"], duration: "8", midiValue: 69 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },

        // Bar 3 (Accordo: D7) - Stesso pattern
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["a/4"], duration: "8", midiValue: 69 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["a/4"], duration: "8", midiValue: 69 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },

        // Bar 4 (Accordo: D7) - Stesso pattern
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["a/4"], duration: "8", midiValue: 69 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["a/4"], duration: "8", midiValue: 69 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },

        // SCALA MISOLIDIA DI SOL: G(67), A(69), B(71), C(72), D(74), E(76), F(77) (IV Grado)
        // Salita scelta: G, B, D, F
        // Discesa scelta: F, D, B, G
        // (G4 è un po' alto come inizio, partiamo da G3)
        // G(55), A(57), B(59), C(60), D(62), E(64), F(65)
        // Salita: G/3, B/3, D/4, F/4
        // Discesa: F/4, D/4, B/3, G/3
        // Bar 5 (Accordo: G7)
        { keys: ["g/3"], duration: "8", midiValue: 55 },   // Sol
        { keys: ["b/3"], duration: "8", midiValue: 59 },   // Si (3)
        { keys: ["d/4"], duration: "8", midiValue: 62 },   // Re (5)
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa (b7)
        { keys: ["f/4"], duration: "8", midiValue: 65 },   // Fa (inizio discesa)
        { keys: ["d/4"], duration: "8", midiValue: 62 },   // Re
        { keys: ["b/3"], duration: "8", midiValue: 59 },   // Si
        { keys: ["g/3"], duration: "8", midiValue: 55 },   // Sol

        // Bar 6 (Accordo: G7) - Stesso pattern
        { keys: ["g/3"], duration: "8", midiValue: 55 },
        { keys: ["b/3"], duration: "8", midiValue: 59 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["b/3"], duration: "8", midiValue: 59 },
        { keys: ["g/3"], duration: "8", midiValue: 55 },

        // Bar 7 (Accordo: D7) - Ritorno a Scala Misolidia di RE
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["a/4"], duration: "8", midiValue: 69 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["a/4"], duration: "8", midiValue: 69 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },

        // Bar 8 (Accordo: D7) - Stesso pattern
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["a/4"], duration: "8", midiValue: 69 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["a/4"], duration: "8", midiValue: 69 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },

        // SCALA MISOLIDIA DI LA: A(69), B(71), C#(73), D(74), E(76), F#(78), G(79) (V Grado di D)
        // Salita scelta: A, C#, E, G
        // Discesa scelta: G, E, C#, A
        // (A4 è un po' alto, partiamo da A3)
        // A(57), B(59), C#(61), D(62), E(64), F#(66), G(67)
        // Salita: A/3, Db/4, E/4, G/4
        // Discesa: G/4, E/4, Db/4, A/3
        // Bar 9 (Accordo: A7)
        { keys: ["a/3"], duration: "8", midiValue: 57 },   // La
        { keys: ["db/4"], duration: "8", midiValue: 61 },  // Do# (3)
        { keys: ["e/4"], duration: "8", midiValue: 64 },   // Mi (5)
        { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol (b7)
        { keys: ["g/4"], duration: "8", midiValue: 67 },   // Sol (inizio discesa)
        { keys: ["e/4"], duration: "8", midiValue: 64 },   // Mi
        { keys: ["db/4"], duration: "8", midiValue: 61 },  // Do#
        { keys: ["a/3"], duration: "8", midiValue: 57 },   // La

        // Bar 10 (Accordo: G7) - Ritorno a Scala Misolidia di SOL (IV grado di D)
        { keys: ["g/3"], duration: "8", midiValue: 55 },
        { keys: ["b/3"], duration: "8", midiValue: 59 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["b/3"], duration: "8", midiValue: 59 },
        { keys: ["g/3"], duration: "8", midiValue: 55 },

        // Bar 11 (Accordo: D7) - Ritorno a Scala Misolidia di RE
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["a/4"], duration: "8", midiValue: 69 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["a/4"], duration: "8", midiValue: 69 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },

        // Bar 12 (Accordo: A7) - Turnaround con Scala Misolidia di LA (V grado di D)
        { keys: ["a/3"], duration: "8", midiValue: 57 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["e/4"], duration: "8", midiValue: 64 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["e/4"], duration: "8", midiValue: 64 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["a/3"], duration: "8", midiValue: 57 },

    ], // end notesTreble

    notesBass: [
        // Progressione Blues in RE: D7 / D7 / D7 / D7 / G7 / G7 / D7 / D7 / A7 / G7 / D7 / A7
        // Bar 1 (D7: D-F#-A-C)
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] },
        // Bar 2 (D7)
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] },
        // Bar 3 (D7)
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] },
        // Bar 4 (D7)
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] },

        // Bar 5 (G7: G-B-D-F)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
        // Bar 6 (G7)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
        // Bar 7 (D7)
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] },
        // Bar 8 (D7)
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] },

        // Bar 9 (A7: A-C#-E-G)
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },
        // Bar 10 (G7)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
        // Bar 11 (D7)
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] },
        // Bar 12 (A7) - Turnaround
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] }
    ] // end notesBass
},
// =====================================================================================
// === Esercizio BS-A-1 - Mix Scale Blues (Blues, PentMin, PentMag) in LA - Up/Down ===
// =====================================================================================
// Mix delle tre scale sulla progressione blues di 12 battute in LA.
// Tecnica: 4 note ascendenti scelte, accordo, 4 note discendenti scelte per battuta.
// Alternanza:
// Bar 1-4 (A7): Scala Blues di LA
// Bar 5-6 (D7): Scala Pentatonica Minore di RE
// Bar 7-8 (A7): Scala Pentatonica Maggiore di LA
// Bar 9   (E7): Scala Blues di MI
// Bar 10  (D7): Scala Pentatonica Minore di RE
// Bar 11  (A7): Scala Pentatonica Maggiore di LA
// Bar 12  (E7): Scala Blues di MI (Turnaround)
{
    id: "mixScales-A-UpDown",
    name: "Mix Scale Blues LA (Up/Down)",
    category: "blues_scales",
    staveLayout: "grand",
    keySignature: "A", // Tre diesis (F#, C#, G#)
    timeSignature: "4/4",
    repetitions: 2,

    notesTreble: [
        // --- Progressione Blues 12 Battute in LA ---
        // Accordi: A7, D7, E7

        // === Bar 1-4: SCALA BLUES DI LA ===
        // A(57), C(60), D(62), Eb(63), E(64), G(67)
        // Salita scelta: A, C, Eb, G
        // Discesa scelta: G, Eb, C, A
        // Bar 1 (A7)
        { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
        // Bar 2 (A7)
        { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
        // Bar 3 (A7)
        { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
        // Bar 4 (A7)
        { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["a/3"], duration: "8", midiValue: 57 },

        // === Bar 5-6: SCALA PENTATONICA MINORE DI RE (IV Grado) ===
        // D(62), F(65), G(67), A(69), C(72)
        // Salita scelta: D, F, A, C
        // Discesa scelta: C, A, F, D
        // Bar 5 (D7)
        { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
        // Bar 6 (D7)
        { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },

        // === Bar 7-8: SCALA PENTATONICA MAGGIORE DI LA (I Grado) ===
        // A(57), B(59), Db(61), E(64), Gb(66) (C# e F#)
        // Salita scelta: A, B, E, Gb
        // Discesa scelta: Gb, E, B, A
        // Bar 7 (A7)
        { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
        // Bar 8 (A7)
        { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 },

        // === Bar 9: SCALA BLUES DI MI (V Grado) ===
        // E(64), G(67), A(69), Bb(70), B(71), D(74)
        // Salita scelta: E, G, Bb, D
        // Discesa scelta: D, Bb, G, E
        // Bar 9 (E7)
        { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
        { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },

        // === Bar 10: SCALA PENTATONICA MINORE DI RE (IV Grado) ===
        // D(62), F(65), G(67), A(69), C(72)
        // Salita: D, F, A, C | Discesa: C, A, F, D
        // Bar 10 (D7)
        { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },

        // === Bar 11: SCALA PENTATONICA MAGGIORE DI LA (I Grado) ===
        // A(57), B(59), Db(61), E(64), Gb(66)
        // Salita: A, B, E, Gb | Discesa: Gb, E, B, A
        // Bar 11 (A7)
        { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["gb/4"], duration: "8", midiValue: 66 },
        { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 },

        // === Bar 12: SCALA BLUES DI MI (V Grado - Turnaround) ===
        // E(64), G(67), A(69), Bb(70), B(71), D(74)
        // Salita: E, G, Bb, D | Discesa: D, Bb, G, E
        // Bar 12 (E7)
        { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
        { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },

    ], // end notesTreble

    notesBass: [
        // Progressione Blues in LA: A7 / A7 / A7 / A7 / D7 / D7 / A7 / A7 / E7 / D7 / A7 / E7
        // Bar 1 (A7: A-C#-E-G)
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },
        // Bar 2 (A7)
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },
        // Bar 3 (A7)
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },
        // Bar 4 (A7)
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },

        // Bar 5 (D7: D-F#-A-C)
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] },
        // Bar 6 (D7)
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] },
        // Bar 7 (A7)
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },
        // Bar 8 (A7)
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },

        // Bar 9 (E7: E-G#-B-D)
        { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "w", midiValues: [40, 44, 47, 50] },
        // Bar 10 (D7)
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] },
        // Bar 11 (A7)
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },
        // Bar 12 (E7) - Turnaround
        { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "w", midiValues: [40, 44, 47, 50] }
    ] // end notesBass
},

];

// Esporta l'array degli esercizi per questo capitolo/sezione
// Questo permette a main.js di caricarli se il file è concatenato
// o se usi un sistema di moduli più avanzato in futuro.
if (window.exerciseData) {
    window.exerciseData.blues_scales = bluesScalesExercises;
} else {
    window.exerciseData = {
        blues_scales: bluesScalesExercises
    };
}