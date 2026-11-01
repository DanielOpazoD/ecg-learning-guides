# 04. Recording

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#record

HeartNormal
Inside the heart

Chapters

Sources

Sound


04

## Recording

Paper, filters, artifacts and cables

The machine that records an electrocardiogram also shapes it. Paper speed and gain set the scales, the filters determine which frequencies pass, and every cable must reach the right electrode. Changing any of them can make a normal heart look abnormal.

Paper speed

25 mm/s50 mm/s

Gain, mm/mV

51020

Low-frequency cutoff

0.05 Hz0.5 Hz

High-frequency cutoff

150 Hz40 Hz

Zero-phase filters (forward, then backward)

Cables

CorrectLA–RARA–RLLA–LLV1–V2

Artifacts

BreathingMuscle tremor60 Hz mains

One small square

40 ms× 0.1 mV

QRS axis

+57°

R in aVL

+0.35mV

ST in V5, J + 60 ms

+0.03mV

QRS in I and V6

same way

Flattest limb lead

III0.48 mV

**A standard recording: 25 mm/s, 10 mm/mV, 0.05 to 150 Hz, cables in place.** One small square is 40 ms across and 0.1 mV up, and the calibration pulse at the start of each row is 10 mm tall.

### The paper

At 25 mm/s the standard page holds four 2.5-second columns, each the next 2.5 seconds of one continuous 10-second record[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). At normal standardization 10 mm equals 1 mV and 1 mm equals 0.1 mV[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). One small square, 1 mm, is therefore 40 ms across and 0.1 mV up. At 50 mm/s the same square is 20 ms, every complex is twice as wide and the page holds 5 seconds; at 20 mm/mV it is 0.05 mV and every complex is twice as tall. Speed and gain change how large the complexes are on paper; their durations and voltages stay the same. In the figure the calibration pulse at the start of each row is 1 mV high and 200 ms long, so its size shows the gain and speed in use. The leads, recorded together, must be aligned in time to within 10 ms[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007").

### Filters

The low-frequency cutoff (a high-pass filter) removes slow drift of the baseline; the high-frequency cutoff (a low-pass filter) removes fast noise. The recommended low-frequency cutoff is 0.05 Hz for routine filters, which may be relaxed to 0.67 Hz or below for linear digital filters with zero phase distortion[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). With traditional analog filtering, a 0.5 Hz cutoff introduces considerable distortion, particularly of the level of the ST segment[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). In the simulation the high-pass filter is a single resistor-capacitor stage run forward in time, as any analog circuit runs. After each large deflection it overshoots the other way, and the overshoot lands on the ST segment, moving it opposite to the QRS before it: up after the deep S of V2, down after the tall R of V5. Displacement of the ST segment is usually measured at its junction with the end of the QRS complex, the J point, and in some settings 40 to 80 ms after it[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"); the ST card measures it 60 ms after the J point. A filter run a second time in reverse, a bidirectional filter, has zero phase shift[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"); the zero-phase switch makes the high-pass and low-pass filters bidirectional. The high-frequency cutoff should be at least 150 Hz for adults and adolescents, and 500 samples per second are needed to allow it[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). The simulation produces one sample per millisecond. A 40 Hz cutoff invalidates any amplitude measurement used for diagnostic classification, so the machine should alert the user and restore the proper cutoff, and a 1 to 30 Hz band is unacceptable for diagnostic recording[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007").

### Artifacts

Low-frequency noise is baseline wander from respiration or movement; high-frequency noise is muscle artifact and power-line or radiated electromagnetic interference[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). The simulation adds each at the electrodes: a slow sway at one breath every 4 seconds, largest on the chest; random fast noise from the limb muscles that waxes and wanes; and a 60 Hz hum whose size differs from electrode to electrode. A lead records the difference between two potentials, so only the part of an artifact that differs between its electrodes reaches it. In the simulation the 0.5 Hz filter more than halves the wander, and when run forward it also shifts the ST segment. The 40 Hz filter removes most of the tremor, and amplitude measurements made through it are no longer valid for diagnostic classification.

### Electrode placement

Limb electrodes belong on the arms and legs, distal to the shoulders and hips. Limb electrodes placed on the torso, as in the Mason-Likar position, give a tracing that is not equivalent to a standard electrocardiogram (ECG) for all purposes, must be labelled, and should not be compared serially with standard tracings; tracings taken sitting or upright are not equivalent to supine ones[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). V1 and V2 placed too high, in the second or third intercostal space, lose initial R amplitude, approximately 0.1 mV per interspace, which can mimic poor R-wave progression or anterior infarction, and may show an rSr′ complex with T-wave inversion that resembles aVR[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). V5 and V6 placed too low alter the voltages used to diagnose hypertrophy, and chest-electrode misplacement alters computer statements in up to 6% of recordings[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). The Dower matrix that turns the simulated heart vector into leads describes only the standard electrode positions, so misplaced electrodes are not simulated.

### Cable reversals

Each electrode has its own cable: left arm (LA), right arm (RA), left leg (LL), right leg (RL) and V1 to V6. When only limb cables are interchanged, and the neutral (right leg) cable is not one of them, the leads are re-arranged, inverted or unchanged and the intervals stay the same. The clues are a negative P-QRS in lead I or II, a positive P-QRS in aVR, P-QRS complexes of opposite direction in I and V6, or a changed axis[20](https://therealryc.github.io/heart-in-twelve-leads/#ref-20 "Batchvarov 2007"). Reversing the left and right arm cables inverts lead I, switches II with III and aVR with aVL, and leaves aVF and the chest leads unaltered; an important discordance between lead I and V6 distinguishes it from mirror-image dextrocardia[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). Reversing the right arm and right leg cables leaves very low amplitude only in lead II, with inverted symmetry between leads I and III. Reversing the left arm and left leg cables gives an often subtle shift in axis and inversion of lead III; changes in the P waves of the limb leads can raise the suspicion, although the specificity of that clue has been challenged[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). Reversing an arm cable and the neutral (right leg) cable distorts Wilson’s terminal, and so the chest and augmented leads; its telltale sign is an almost flat line in lead I, II or III[20](https://therealryc.github.io/heart-in-twelve-leads/#ref-20 "Batchvarov 2007"). Reversing the two leg cables changes almost nothing, because the legs sit at nearly the same potential[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). Reversing the V1 and V2 cables can reverse R-wave progression and mimic anteroseptal infarction, and the P and T waves of those leads often progress abnormally too[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). A limb cable other than the neutral, reversed with a chest cable, distorts most leads and leaves at most one of I, II and III unchanged[20](https://therealryc.github.io/heart-in-twelve-leads/#ref-20 "Batchvarov 2007").

To reverse two cables, the simulation first recovers the potential under each electrode from the simulated leads, taking Wilson’s terminal as zero and the right leg at the left leg’s potential, because the potential difference between the two legs is nearly zero[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). It then lets the two cables trade electrodes and forms the twelve leads again, as a machine would. With the right leg at the left leg’s potential, lead II is exactly flat in the simulation when the right arm and right leg cables are reversed; in a patient it is nearly flat.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

10 s on the page · 25 mm/s · 10 mm/mV · 0.05–150 Hz

Cables

II, V5 · one beat · 25 mm/s · 10 mm/mV · grey: as the heart made it

## Puntos clave del original

- Standard paper runs at 25 mm/s and 10 mm/mV, so one small square is 40 ms by 0.1 mV; read any other setting against the calibration pulse.
- A diagnostic recording needs a low-frequency cutoff of 0.05 Hz (up to 0.67 Hz with zero-phase digital filters) and, in adults and adolescents, a high-frequency cutoff of at least 150 Hz.
- An analog-style 0.5 Hz filter shifts the ST segment; a 40 Hz filter removes muscle noise but invalidates amplitude measurements used for diagnostic classification.
- Left–right arm reversal inverts lead I, swaps II with III and aVR with aVL, and spares aVF and the chest leads; lead I and V6 then have QRS complexes of opposite direction.
- An almost flat limb lead means the neutral (right leg) cable was involved; Wilson’s terminal, and every chest lead with it, is then distorted.

## Referencias del capítulo

