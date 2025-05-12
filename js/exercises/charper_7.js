/**
 * js/exercises/licks_and_scales.js
 * Esercizi per lo studio di Licks Blues e Applicazioni delle Scale.
 * Esercizio LS-C-1: Lick Pentatonico Minore Base su I e IV grado in DO.
 *
 * Piano Blues Teacher
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Array che conterrà tutti gli esercizi di questa categoria
const licksAndScalesExercises = [
    // =====================================================================================
    // === Esercizio LS-C-1 - Lick Pentatonico Minore Base (I e IV grado) ===
    // =====================================================================================
    // Tonalità: Do. Lick sulla Pentatonica Minore di C e F.
    // Mano destra: Esegue il lick.
    // Mano sinistra: Accordi di settima.
    {
        id: "lickScale-C-MinorPent1",
        name: "Lick Pent. Minore DO (su I & IV)",
        category: "licks_scales", // Nuova categoria
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 3,

        notesTreble: [ // Mano Destra: Licks
            // === Lick su C7 ===
            // Pentatonica Minore di C: C(60), Eb(63), F(65), G(67), Bb(70)
            // Lick: G - Bb - G - F - Eb - C (ritmo: q q 8 8 q)
            // Bar 1 (C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // { keys: ["c/4"], duration: "q", midiValue: 60 }, // Nota finale del lick, spostata per ritmo

            // Bar 2 (C7) - Lick con risoluzione sulla tonica e pausa
            { keys: ["c/4"], duration: "q", midiValue: 60 }, // Risoluzione del lick precedente
            { keys: ["r/4"], duration: "h." }, // Pausa per il resto della battuta

            // Bar 3 (C7) - Ripetizione Lick per rinforzo (o variazione)
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },

            // Bar 4 (C7) - Risoluzione e pausa
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["r/4"], duration: "h." },


            // === Lick su F7 ===
            // Pentatonica Minore di F: F(65), Ab(68), Bb(70), C(72), Eb(75)
            // Lick adattato: C - Eb - C - Bb - Ab - F (stesso pattern ritmico)
            // Bar 5 (F7)
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["eb/5"], duration: "q", midiValue: 75 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },

            // Bar 6 (F7) - Risoluzione e pausa
            { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["r/4"], duration: "h." },

            // Bar 7 (C7) - Pausa o breve motivo di ritorno
            { keys: ["r/4"], duration: "w" },
            // Bar 8 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },

            // Bar 9 (G7) - Pausa (per ora non introduciamo lick sul V grado)
            { keys: ["r/4"], duration: "w" },
            // Bar 10 (F7) - Ripetizione Lick su F7 (opzionale, o pausa)
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["eb/5"], duration: "q", midiValue: 75 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },

            // Bar 11 (C7) - Risoluzione del lick di F7 e pausa
            { keys: ["f/4"], duration: "q", midiValue: 65 }, // Risoluzione del lick precedente
            { keys: ["r/4"], duration: "h." },
            // Bar 12 (G7) - Pausa finale
            { keys: ["r/4"], duration: "w" },
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi di settima
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
    // === Esercizio LS-C-2 - Lick Scala Blues (I e V grado) ===
    // =====================================================================================
    // Tonalità: Do. Lick sulla Scala Blues di C (su C7) e Scala Blues di G (su G7).
    // Mano destra: Esegue il lick.
    // Mano sinistra: Accordi di settima.
    {
        id: "lickScale-C-BluesScale1",
        name: "Lick Scala Blues DO (su I & V)",
        category: "licks_scales",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 3,

        notesTreble: [ // Mano Destra: Licks
            // === Lick su C7 (Scala Blues di Do: C, Eb, F, F#, G, Bb) ===
            // Lick: C - Eb - F - F# - F - Eb - C (ritmo: q 8 8 8 8 q q)
            // Bar 1 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 },    // C
            { keys: ["eb/4"], duration: "8", midiValue: 63 },   // Eb
            { keys: ["f/4"], duration: "8", midiValue: 65 },    // F
            { keys: ["gb/4"], duration: "8", midiValue: 66 },   // F# (scritto Gb)
            { keys: ["f/4"], duration: "8", midiValue: 65 },    // F
            { keys: ["eb/4"], duration: "q", midiValue: 63 },   // Eb
            // { keys: ["c/4"], duration: "q", midiValue: 60 }, // Risoluzione spostata

            // Bar 2 (C7) - Risoluzione e pausa
            { keys: ["c/4"], duration: "q", midiValue: 60 },    // C (Risoluzione)
            { keys: ["r/4"], duration: "h." },                 // Pausa

            // Bar 3-4 (C7) - Pause per la mano destra
            { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" },

            // Bar 5-6 (F7) - Pause per la mano destra
            { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" },

            // Bar 7-8 (C7) - Pause per la mano destra
            { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" },

            // === Lick su G7 (Scala Blues di Sol: G, Bb, C, C#, D, F) ===
            // Lick adattato: G - Bb - C - C# - C - Bb - G
            // Bar 9 (G7)
            { keys: ["g/3"], duration: "q", midiValue: 55 },    // G (un'ottava sotto per varietà)
            { keys: ["bb/3"], duration: "8", midiValue: 58 },   // Bb
            { keys: ["c/4"], duration: "8", midiValue: 60 },    // C
            { keys: ["db/4"], duration: "8", midiValue: 61 },   // C# (scritto Db)
            { keys: ["c/4"], duration: "8", midiValue: 60 },    // C
            { keys: ["bb/3"], duration: "q", midiValue: 58 },   // Bb

            // Bar 10 (G7) - Risoluzione e pausa
            { keys: ["g/3"], duration: "q", midiValue: 55 },    // G (Risoluzione)
            { keys: ["r/4"], duration: "h." },                 // Pausa

            // Bar 11 (C7) - Pausa o breve risoluzione a C
            { keys: ["c/4"], duration: "q", midiValue: 60 }, // Opzionale: risoluzione finale
            { keys: ["r/4"], duration: "h." },
            // Bar 12 (G7 o C7 per finale) - Pausa
            { keys: ["r/4"], duration: "w" },
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi di settima
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
            // Bar 10 (G7) - (Potrebbe essere F7 nella progressione standard, ma qui teniamo G7 per il lick)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 12 (G7, o C7 per una chiusura più definitiva sull'esercizio)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio LS-C-3 - Lick Pentatonico Maggiore (I e IV grado) ===
    // =====================================================================================
    // Tonalità: Do. Lick sulla Pentatonica Maggiore di C (su C7) e F (su F7).
    // Enfasi sulla sesta maggiore.
    // Mano destra: Esegue il lick.
    // Mano sinistra: Accordi di settima.
    {
        id: "lickScale-C-MajorPent1",
        name: "Lick Pent. Maggiore DO (su I & IV)",
        category: "licks_scales",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 3,

        notesTreble: [ // Mano Destra: Licks
            // === Lick su C7 (Pentatonica Maggiore di Do: C, D, E, G, A) ===
            // Lick: A/4 G/4 E/4 D/4 | C/4 A/3 C/4 (ritmo: 8 8 8 8 | q 8 8 q)
            // Bar 1 (C7)
            { keys: ["a/4"], duration: "8", midiValue: 69 },    // A
            { keys: ["g/4"], duration: "8", midiValue: 67 },    // G
            { keys: ["e/4"], duration: "8", midiValue: 64 },    // E
            { keys: ["d/4"], duration: "8", midiValue: 62 },    // D
            { keys: ["c/4"], duration: "q", midiValue: 60 },    // C
            { keys: ["a/3"], duration: "8", midiValue: 57 },    // A (ottava sotto)
            { keys: ["c/4"], duration: "8", midiValue: 60 },    // C (ritorno)

            // Bar 2 (C7) - Pausa o continuazione/risoluzione breve
            // { keys: ["c/4"], duration: "q", midiValue: 60 }, // Potrebbe essere una nota tenuta
            { keys: ["r/4"], duration: "w" }, // Pausa per semplicità

            // Bar 3 (C7) - Ripetizione Lick per rinforzo
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["a/3"], duration: "8", midiValue: 57 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 4 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },


            // === Lick su F7 (Pentatonica Maggiore di Fa: F, G, A, C, D) ===
            // Lick adattato: D/5 C/5 A/4 G/4 | F/4 D/4 F/4
            // Bar 5 (F7)
            { keys: ["d/5"], duration: "8", midiValue: 74 },    // D
            { keys: ["c/5"], duration: "8", midiValue: 72 },    // C
            { keys: ["a/4"], duration: "8", midiValue: 69 },    // A
            { keys: ["g/4"], duration: "8", midiValue: 67 },    // G
            { keys: ["f/4"], duration: "q", midiValue: 65 },    // F
            { keys: ["d/4"], duration: "8", midiValue: 62 },    // D (ottava sotto)
            { keys: ["f/4"], duration: "8", midiValue: 65 },    // F (ritorno)

            // Bar 6 (F7) - Pausa
            { keys: ["r/4"], duration: "w" },

            // Bar 7 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 8 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },

            // Bar 9 (G7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 10 (F7) - Ripetizione Lick su F7 (opzionale)
             { keys: ["d/5"], duration: "8", midiValue: 74 },
             { keys: ["c/5"], duration: "8", midiValue: 72 },
             { keys: ["a/4"], duration: "8", midiValue: 69 },
             { keys: ["g/4"], duration: "8", midiValue: 67 },
             { keys: ["f/4"], duration: "q", midiValue: 65 },
             { keys: ["d/4"], duration: "8", midiValue: 62 },
             { keys: ["f/4"], duration: "8", midiValue: 65 },

            // Bar 11 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 12 (G7) - Pausa finale
            { keys: ["r/4"], duration: "w" },
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi di settima
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
    // === Esercizio LS-C-4 - Lick Scala Misolidia (V e I grado) ===
    // =====================================================================================
    // Tonalità: Do. Lick sulla Scala Misolidia di G (su G7) e C (su C7).
    // Enfasi sulla 3a maggiore e b7.
    // Mano destra: Esegue il lick.
    // Mano sinistra: Accordi di settima.
    {
        id: "lickScale-C-Mixolydian1",
        name: "Lick Misolidio DO (su V & I)",
        category: "licks_scales",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 3,

        notesTreble: [ // Mano Destra: Licks
            // Battute 1-8: Pause o riempitivi semplici per arrivare al G7
            { keys: ["r/4"], duration: "w" }, // Bar 1 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 2 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 3 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 4 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 5 (F7)
            { keys: ["r/4"], duration: "w" }, // Bar 6 (F7)
            { keys: ["r/4"], duration: "w" }, // Bar 7 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 8 (C7)

            // === Lick su G7 (Scala Misolidia di Sol: G A B C D E F) ===
            // Lick: D/4 - F/4 - E/4 - C/4 | B/3 - G/3 (ritmo: q q 8 8 | q q )
            // Gradi rispetto a G: 5 - b7 - 6 - 4 | 3 - 1
            // Bar 9 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 },    // D
            { keys: ["f/4"], duration: "q", midiValue: 65 },    // F (b7 di G)
            { keys: ["e/4"], duration: "8", midiValue: 64 },    // E (6 di G)
            { keys: ["c/4"], duration: "8", midiValue: 60 },    // C (4 di G)
            { keys: ["b/3"], duration: "q", midiValue: 59 },    // B (3 di G)
            // { keys: ["g/3"], duration: "q", midiValue: 55 }, // Risoluzione spostata

            // Bar 10 (G7) - Risoluzione e pausa
            { keys: ["g/3"], duration: "q", midiValue: 55 },    // G (Risoluzione)
            { keys: ["r/4"], duration: "h." },                 // Pausa

            // === Lick su C7 (Scala Misolidia di Do: C D E F G A Bb) ===
            // Lick adattato: G/3 - Bb/3 - A/3 - F/3 | E/3 - C/3
            // Gradi rispetto a C: 5 - b7 - 6 - 4 | 3 - 1
            // Bar 11 (C7)
            { keys: ["g/3"], duration: "q", midiValue: 55 },    // G
            { keys: ["bb/3"], duration: "q", midiValue: 58 },   // Bb (b7 di C)
            { keys: ["a/3"], duration: "8", midiValue: 57 },    // A (6 di C)
            { keys: ["f/3"], duration: "8", midiValue: 53 },    // F (4 di C)
            { keys: ["e/3"], duration: "q", midiValue: 52 },    // E (3 di C)
            // { keys: ["c/3"], duration: "q", midiValue: 48 }, // Risoluzione spostata

            // Bar 12 (C7, o G7 per turnaround se fosse un chorus completo) - Risoluzione e pausa
            { keys: ["c/3"], duration: "q", midiValue: 48 },    // C (Risoluzione)
            { keys: ["r/4"], duration: "h." },                 // Pausa
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi di settima
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

            // Bar 9 (G7) - Accordo per il lick misolidio di G
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 10 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },

            // Bar 11 (C7) - Accordo per il lick misolidio di C
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 12 (C7 o G7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio LS-C-5 - Lick Combinato (Mix Scale su I-IV-V) ===
    // =====================================================================================
    // Tonalità: Do. Lick esteso di 4 battute che combina elementi di Pentatonica Minore/Blues,
    // Pentatonica Maggiore e Misolidia sugli accordi C7, F7, G7.
    // Mano destra: Esegue il lick.
    // Mano sinistra: Accordi di settima.
    {
        id: "lickScale-C-Combined1",
        name: "Lick Combinato DO (I-IV-V)",
        category: "licks_scales",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,

        notesTreble: [ // Mano Destra: Lick Combinato
            // === Lick su C7 (Bar 1-2) - Inizio Pentatonica Minore/Blues di Do ===
            // Bar 1 (C7) - Pattern: C Eb F F# (Blue note)
            { keys: ["c/4"], duration: "q", midiValue: 60 },    // C
            { keys: ["eb/4"], duration: "q", midiValue: 63 },   // Eb
            { keys: ["f/4"], duration: "q", midiValue: 65 },    // F
            { keys: ["gb/4"], duration: "q", midiValue: 66 },   // F# (Blue Note)

            // Bar 2 (C7) - Continuazione: G F Eb C (Risoluzione Pent. Minore)
            { keys: ["g/4"], duration: "q", midiValue: 67 },    // G
            { keys: ["f/4"], duration: "q", midiValue: 65 },    // F
            { keys: ["eb/4"], duration: "q", midiValue: 63 },   // Eb
            { keys: ["c/4"], duration: "q", midiValue: 60 },    // C

            // === Lick su F7 (Bar 3) - Transizione a Misolidia di Fa / Pent. Min. di Fa ===
            // Scala Misolidia di Fa: F G A Bb C D Eb
            // Pent. Min. di Fa: F Ab Bb C Eb
            // Lick: C(5 di F) - A(3 di F) - Ab(b3 di F, bluesy) - F(1 di F)
            // Ritmo: q q 8 8
            // Bar 3 (F7)
            { keys: ["c/5"], duration: "q", midiValue: 72 },    // C (5th di F)
            { keys: ["a/4"], duration: "q", midiValue: 69 },    // A (3rd di F - Misolidia)
            { keys: ["ab/4"], duration: "8", midiValue: 68 },   // Ab (b3 di F - Pent. Minore)
            { keys: ["f/4"], duration: "8", midiValue: 65 },    // F (Root)
            { keys: ["r/4"], duration: "h"}, // Pausa per completare la battuta

            // === Lick su G7 (Bar 4) - Transizione a Misolidia di G / Pent. Magg. di C ===
            // Scala Misolidia di G: G A B C D E F
            // Pent. Magg. di C: C D E G A (A è la 9a di G7, E è la 13a)
            // Lick: D(5 di G) - B(3 di G) - A(9 di G/6 di C) - G(1 di G)
            // Ritmo: q q q q
            // Bar 4 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 },    // D (5th di G)
            { keys: ["b/3"], duration: "q", midiValue: 59 },    // B (3rd di G)
            { keys: ["a/3"], duration: "q", midiValue: 57 },    // A (9th di G / 6th di C)
            { keys: ["g/3"], duration: "q", midiValue: 55 },    // G (Root)

            // Bar 5 (C7) - Risoluzione finale o pausa
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["r/4"], duration: "h." },
            // Bar 6 (F7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 7 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 8 (G7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 9 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 10 (F7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 11 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 12 (G7) - Pausa
            { keys: ["r/4"], duration: "w" },

        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi di settima
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 3 (F7) - Accordo per il lick su F
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 4 (G7) - Accordo per il lick su G
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },

            // Progressione standard per le restanti battute (per coerenza se l'utente continua a suonare)
            // Bar 5 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 8 (G7) - (Spesso C7 qui, ma G7 per un turnaround più standard)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
             // Bar 9 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 12 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] }
        ] // end notesBass
    },


];

// Esporta l'array degli esercizi per questa nuova categoria
if (window.exerciseData) {
    window.exerciseData.licks_scales = licksAndScalesExercises; // Crea o sovrascrive la categoria
} else {
    window.exerciseData = {
        licks_scales: licksAndScalesExercises
    };
}