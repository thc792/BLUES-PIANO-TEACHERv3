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