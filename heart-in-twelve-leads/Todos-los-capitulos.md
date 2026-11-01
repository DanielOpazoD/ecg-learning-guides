# The Heart in Twelve Leads — 27 capítulos

# 01. Cell

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#cell

HeartNormal
Inside the heart

Chapters

Sources

Sound


01

## Cell

The ventricular action potential

A ventricular cell rests at a steady negative voltage, fires when a neighbour excites it, and takes hundreds of milliseconds to recover. Different ion currents shape each phase of this action potential, and the QRS complex, ST segment and T wave of the electrocardiogram (ECG) fall in different phases.

Cell

EndocardialMidmyocardial (M)Epicardial

Pacing cycle length1000 ms · 60/min

400800120016002000 ms

Fast inward current (sodium)100%

25%50%75%100%

Slow outward current (potassium)100%

50%75%100%

Resting potential

−84mV

Peak

+41mV

Upstroke, max dV/dt

237V/s

APD50

221ms

APD90

269ms

Diastolic interval

731ms

Action potential duration at 50% and 90% repolarization (APD50, APD90).

**An epicardial cell, paced once a second.** It rests at −84 mV, rises at up to 237 V/s to +41 mV, dips to a notch at +7 mV, holds its plateau, and is 90% repolarized 269 ms after the upstroke.

### The action potential

Between beats a ventricular myocyte holds its interior about 85 mV negative to the outside[1](https://therealryc.github.io/heart-in-twelve-leads/#ref-1 "Bartos 2015"). When current from an activated neighbour depolarizes it past threshold, it fires an action potential (AP): a rapid rise, a plateau, and a return to rest. Its phases are numbered 0 to 4, and each is set by a different balance between inward currents, which carry positive charge into the cell, and outward currents, which carry it out. Its length, the action potential duration (APD), is measured from the upstroke to 50% or 90% repolarization (APD50, APD90), and the steepness of the upstroke as its maximum rate of rise (max dV/dt).

### Phase by phase

**Phase 0**, the upstroke, is a large inward sodium current (INa) through voltage-gated sodium channels, which open in under a millisecond. In **phase 1**, the notch, the sodium channels inactivate and the transient outward potassium current (Ito) partly repolarizes the membrane. **Phase 2**, the plateau, is a balance between the inward L-type calcium current (ICa,L) and the outward delayed rectifier potassium currents, rapid (IKr) and slow (IKs); the cell stays depolarized and refractory for hundreds of milliseconds. In **phase 3** the calcium channels inactivate, the outward potassium currents prevail, and the inward rectifier current (IK1) helps complete repolarization. In **phase 4**, IK1 holds the resting potential[1](https://therealryc.github.io/heart-in-twelve-leads/#ref-1 "Bartos 2015").

### The model on this page

The cell in the figure is the minimal ventricular model of Bueno-Orovio, Cherry and Fenton, built to reproduce the action potential shapes, upstroke velocities and rate dependence of human epicardial, endocardial and midmyocardial cells[2](https://therealryc.github.io/heart-in-twelve-leads/#ref-2 "Bueno-Orovio 2008"). It has one voltage and three gating variables, and it groups every membrane current into three: a fast inward current, a slow inward current and a slow outward current, standing for the summed sodium, calcium and potassium currents. These are phenomenological groupings; the model does not describe individual channels[3](https://therealryc.github.io/heart-in-twelve-leads/#ref-3 "Bueno-Orovio 2015"). The equations and parameter sets come from an open-source implementation of the model, and the epicardial set matches the one its authors reprinted[3](https://therealryc.github.io/heart-in-twelve-leads/#ref-3 "Bueno-Orovio 2015"). The cell is paced with a brief stimulus until its action potential stops changing from beat to beat, and the last beat is shown. One control scales the fast inward current, as a sodium-channel blocker would. The maximum rate of rise falls with it, while the duration barely changes. Another scales the whole slow outward current. Turning it down lengthens the action potential, as potassium-channel blockers do, but the model cannot single out one channel such as IKr.

### Three kinds of ventricular cell

Cells differ across the ventricular wall: epicardial cells show a prominent spike and dome, endocardial cells a smaller notch, and, in dog hearts, midmyocardial (M) cells the longest action potential, about 100 ms longer than the other two[1](https://therealryc.github.io/heart-in-twelve-leads/#ref-1 "Bartos 2015"). In the model only the epicardial cell has a notch, and the M cell outlasts the others by more than 100 ms. In wedges of non-failing human left ventricle paced every 2000 ms, the action potential duration to 80% repolarization was 383 ± 21 ms in the subepicardium, 455 ± 20 ms in the midmyocardium and 494 ± 22 ms in the subendocardium, with islands of longer midmyocardial action potentials in three of five hearts[4](https://therealryc.github.io/heart-in-twelve-leads/#ref-4 "Glukhov 2010"). In whole donor hearts, repolarization showed no late midmural region[5](https://therealryc.github.io/heart-in-twelve-leads/#ref-5 "Opthof 2017"). The model's M cell is better read as a cell type than as a layer of the intact wall.

### Rate

At faster rates the action potential shortens. In the model, the gate of the slow inward current recovers between beats; a shorter diastolic interval leaves it less recovered, the plateau's inward current is smaller, and repolarization comes sooner. The model was built to reproduce this restitution of action potential duration in human cells[2](https://therealryc.github.io/heart-in-twelve-leads/#ref-2 "Bueno-Orovio 2008"). The same shortening across the ventricles is why the QT interval shortens as the heart rate rises and is reported corrected for rate[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009").

### From one cell to the ECG

The ECG reflects differences in transmembrane voltage between cells[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). During the QRS the ventricles' cells pass through phase 0 one after another, as activation crosses them. During the ST segment every cell is in its plateau at about the same voltage, so little current flows between them. The T wave arises during phase 3, because cells repolarize at different times. The T wave common to all leads (van Oosterom's dominant T wave) is shaped like the rate at which the mean action potential of the cells at the heart's surfaces falls during recovery, and peaks at their mean repolarization time[8](https://therealryc.github.io/heart-in-twelve-leads/#ref-8 "van Oosterom 2003"); how tall it is in a given lead depends on how widely the recovery times are spread[9](https://therealryc.github.io/heart-in-twelve-leads/#ref-9 "van Oosterom 2001") (chapter 02). In the lower panel this cell's upstroke is placed at the mean activation time of its layer of the simulated left ventricle, and its phase 3 is shaded. The cells of the simulated heart all follow the same simpler action potential template, timed by fitting the whole heart's ECG to real recordings. They do not use this model, and the two action potentials differ by tens of milliseconds.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

One ventricular cell · membrane potential

The model’s three currents · inward down, outward up · fast inward to its own scale

Lead II of the normal simulated heart at the same rate · same time axis · 100 mm/s · 10 mm/mV

## Puntos clave del original

- Phase 0 is the sodium current’s upstroke, phase 1 the transient outward notch, phase 2 the plateau of inward calcium against outward potassium current, phase 3 repolarization by potassium currents, and phase 4 rest, held by IK1.
- The QRS occurs while the ventricles’ cells pass through phase 0, the ST segment during their plateau, and the T wave during phase 3.
- Less fast inward current slows the upstroke with little change in duration; less outward current lengthens the action potential.
- Faster rates shorten the action potential, which is why the QT interval is corrected for rate.
- The model on this page groups all membrane currents into three phenomenological currents; it does not describe individual channels.

## Referencias del capítulo

- **Bartos 2015**. Bartos DC, Grandi E, Ripplinger CM. Ion Channels in the Heart. Compr Physiol. 2015;5(3):1423-64. [DOI](https://doi.org/10.1002/cphy.c140069) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/26140724/)
- **Bueno-Orovio 2008**. Bueno-Orovio A, Cherry EM, Fenton FH. Minimal model for human ventricular action potentials in tissue. J Theor Biol. 2008;253(3):544-60. [DOI](https://doi.org/10.1016/j.jtbi.2008.03.029) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/18495166/)
- **Bueno-Orovio 2015**. Bueno-Orovio A, Cherry EM, Evans SJ, et al. Basis for the Induction of Tissue-Level Phase-2 Reentry as a Repolarization Disorder in the Brugada Syndrome. Biomed Res Int. 2015;2015:197586. [DOI](https://doi.org/10.1155/2015/197586) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/26583094/)
- **Glukhov 2010**. Glukhov AV, Fedorov VV, Lou Q, et al. Transmural dispersion of repolarization in failing and nonfailing human ventricle. Circ Res. 2010;106(5):981-91. [DOI](https://doi.org/10.1161/CIRCRESAHA.109.204891) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/20093630/)
- **van Oosterom 2003**. van Oosterom A. The dominant T wave and its significance. J Cardiovasc Electrophysiol. 2003;14(10 Suppl):S180-7. [DOI](https://doi.org/10.1046/j.1540.8167.90309.x) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/14760922/)


---

# 02. Dipole

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#dipole

HeartNormal
Inside the heart

Chapters

Sources

Sound


02

## Dipole

From a wavefront to the heart vector

Wherever active cells meet resting ones, current flows, and the boundary acts as a sheet of tiny dipoles. Added together they make one arrow, the heart vector, and each of the twelve leads records that arrow from its own direction.

Look at

A strip of cellsThe whole heart

The wave starts

At the left endAt a point inside

Draw the sources

On the wavefrontOn the tissue’s edge

Time after the stimulus15.5 ms

010203040506070 ms

Time after QRS onset0 ms

−1098 ms

Lead whose axis is drawn

IIIIIIaVRaVLaVF

Open the heartPlay

Time

15.5ms

Electrode now

+0.21rel.

Arrows, total length

12cells

Sum vs. a full front

100%

The front

open

Electrode is

over tissue

Time after QRS onset

0ms

Ventricles activated

–%

Heart vector

–mV

Direction in Frank’s X–Y plane

–°

Shadow on the axis

–mV

Lead now

–mV in II

**The wave is coming toward the electrode.** The electrode is ahead of the wavefront, on the side its arrows point to, and the signal is upward: +0.21.

### A wavefront is a layer of dipoles

Where an active cell meets a resting neighbour, their interiors differ by most of an action potential. Current flows through the junctions between them from the active cell into the resting one, and returns through the fluid outside. Seen from outside, each such boundary is a current source beside a sink, which together make a dipole. Its arrow points from the active cell toward the resting one, the way the wave is travelling. An electrode on the side the arrows point to records a positive potential; one behind them, a negative potential. A unipolar electrode therefore records an upward deflection as a wave comes toward it and a downward deflection as the wave moves away[10](https://therealryc.github.io/heart-in-twelve-leads/#ref-10 "Tétreault-Langlois 2025"), and both, one after the other, as a wave passes beneath it.

### Adding the arrows

The strip in the figure is a toy, flat and two-dimensional, but it follows the same rule as the heart for adding the fields of its dipoles. Every boundary between two cells that differ in voltage has an arrow. The electrode's signal is the sum of all the arrows' fields, and the arrow beside the strip is their vector sum. A straight front crossing the strip adds up to one arrow along its path. A wave started at a point inside the strip spreads as a ring whose arrows point outward in every direction: they sum to zero, and an electrode anywhere outside the ring records nothing, however close it is. The signal appears only when the ring reaches the edges of the tissue and is no longer a closed curve. Once every cell is active there is no boundary left, and the signal returns to zero although the whole strip is depolarized.

### The equivalent double layer

Outside the tissue, the arrows on the wavefront give exactly the same field as a double layer spread over the tissue's boundary, whose strength at each point follows the transmembrane voltage of the cells there. In heart muscle, whose conductivity differs along and across the fibres, this equivalence holds when the ratio of the two is the same inside and outside the cells[11](https://therealryc.github.io/heart-in-twelve-leads/#ref-11 "Geselowitz 1992"). van Oosterom built a model of the electrocardiogram on this idea: the heart's whole electrical activity expressed as an equivalent double layer on the boundary of the ventricles, driven by the timing of depolarization and repolarization of the cells next to it[9](https://therealryc.github.io/heart-in-twelve-leads/#ref-9 "van Oosterom 2001"). In this model, only boundaries between active and resting tissue make current, so tissue that is all at rest, or all active, produces a flat line; a wave buried inside the wall produces no signal until it reaches the endocardium or the epicardium. In the same model, the amplitude of the T wave is proportional to the dispersion of repolarization times over the ventricular surface[9](https://therealryc.github.io/heart-in-twelve-leads/#ref-9 "van Oosterom 2001"). With the strip's sources drawn on the tissue's edge, the arrows are different, but their sum and the signal at any electrode off the tissue are unchanged.

### The heart vector

In the heart the fronts are surfaces in three dimensions, and at each instant all their dipoles add up to one vector, the heart vector. The simulation computes it with the equivalent double layer, from the transmembrane voltage on every surface of the simulated heart. During the QRS the heart vector swings from the small early force of the septum, which activates first, to the large leftward force of the left ventricle, and ends pointing toward the last regions to activate, at the base[12](https://therealryc.github.io/heart-in-twelve-leads/#ref-12 "MacAlpin 2003"), [13](https://therealryc.github.io/heart-in-twelve-leads/#ref-13 "Pérez Riera 2008"). Its tip traces a loop, the QRS loop of the vectorcardiogram.

### Projection on each lead

Each lead records the heart vector from its own direction. Its voltage is the projection of the heart vector on the lead vector: the arrow's shadow on the lead's axis, scaled by the lead's sensitivity (the lead vector's length). The simulation takes the lead vectors from Dower's transformation, in the Frank frame, in which X points to the patient's left, Y to the feet and Z to the back[14](https://therealryc.github.io/heart-in-twelve-leads/#ref-14 "Dower 1980"), [15](https://therealryc.github.io/heart-in-twelve-leads/#ref-15 "Jaros 2019"), [16](https://therealryc.github.io/heart-in-twelve-leads/#ref-16 "Vondrak 2022"). The direction shown for the heart vector is measured in Frank's X–Y plane; the limb leads, whose lead vectors chapter 03 explains, report a frontal angle that can differ from it by tens of degrees. For the six limb leads the shadow in the figure, times the lead's sensitivity, is exactly the voltage on the tracing. The chest electrodes sit close to the heart, where a single central dipole describes the field less well, so the simulation adds a near-field correction to V1 to V6; the grey traces show the projection of the heart vector alone.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

A strip of cells in a conducting bath · drag the electrode

What the electrode records · relative units

The heart vector and its QRS loop · drag to turn

Twelve leads · 100 mm/s · 10 mm/mV

## Puntos clave del original

- The boundary between active and resting tissue is a layer of dipoles pointing the way the wave travels.
- An electrode records an upward deflection as the wave approaches, a downward one as it leaves, and both, one after the other, as it passes beneath.
- A closed front produces no signal outside it, and neither does tissue that is all at rest or all active.
- In the equivalent-double-layer model, which assumes the ratio of conductivity along and across the fibres is the same inside and outside the cells, the wavefront’s field outside the heart equals that of a double layer on the heart’s surfaces, whose strength follows the local transmembrane voltage; a wave inside the wall is silent until it reaches a surface.
- At each instant the dipoles sum to one heart vector, and each lead records its projection on that lead’s direction, scaled by the lead’s sensitivity.

## Referencias del capítulo

- **Tétreault-Langlois 2025**. Tétreault-Langlois M, Golian M, Green MS. Analyzing unipolar electrograms when interpreting device interrogation tracings. Indian Pacing Electrophysiol J. 2025;25(4):274-276. [DOI](https://doi.org/10.1016/j.ipej.2025.07.010) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/40706750/)
- **Geselowitz 1992**. Geselowitz DB. Description of cardiac sources in anisotropic cardiac muscle. Application of bidomain model. J Electrocardiol. 1992;25 Suppl:65-7. [DOI](https://doi.org/10.1016/0022-0736(92)90063-6) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/1297711/)


---

# 03. Leads

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#leads

HeartNormal
Inside the heart

Chapters

Sources

Sound


03

## Leads

Twelve views of one vector

At each instant the electrical activity of the heart adds up to one vector. Each of the twelve leads records the vector’s projection, or shadow, on its own axis.

Frontal lead

IIIIIIaVRaVLaVF

Chest lead

V1V2V3V4V5V6

Time after QRS onset+32 ms

PRQRSSTT

Play the beatVector loop

Frontal QRS axis

+57°

Vector direction now

+61° frontal

II now

+0.37mV

From the heart vector

+0.37mV

Near-field term

none

QRS in II

qRs

**At +32 ms the heart vector points toward the positive pole of lead II, so the pen moves up, tracing the R wave in II.** The arrow’s shadow on the II axis equals the voltage, +0.37 mV.

### The heart vector and its projections

Einthoven treated the heart as a dipole, a single source whose strength and direction change through the beat. The dipole is represented by a vector, the heart vector. In his model the voltage in a lead is the projection of the heart vector onto the line that defines the lead[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). When the vector points toward a lead’s positive pole the pen moves up, when it points away the pen moves down, and when it lies across the lead the trace stays near the baseline. A lead that is perpendicular to the vector at the start or end of a wave records that part as flat, so a duration measured in one lead tends to be shorter than the same duration measured across all twelve[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007").

### The limb leads and Einthoven’s law

Four electrodes go on the arms and legs, distal to the shoulders and hips; the right leg (RL) electrode is an electronic reference that helps reject noise[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). Lead I is the left arm minus the right arm (LA − RA), lead II the left leg minus the right arm (LL − RA), and lead III the left leg minus the left arm (LL − LA). Because the three form a closed loop, Kirchhoff’s law gives Einthoven’s law: II = I + III at every instant. The law does not depend on where the electrodes sit, but drawing them at the corners of an equilateral triangle, Einthoven’s triangle, puts the three leads in one frame[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007").

### Wilson’s central terminal and Goldberger’s leads

Wilson averaged the three limb electrodes into a central terminal, (RA + LA + LL)/3, to serve as a reference potential. Goldberger left the exploring electrode out of that average, which makes his augmented leads 50% larger than the same electrodes measured against Wilson’s terminal: aVR = RA − (LA + LL)/2, aVL = LA − (RA + LL)/2 and aVF = LL − (RA + LA)/2[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). Each reduces to a combination of I and II, so the six frontal leads carry only two independent signals, and an electrocardiograph measures two and computes the other four[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). Moved to one centre, the three sides of Einthoven’s triangle and Goldberger’s three leads divide the circle every 30°, with lead I at 0° and aVF at +90°. This is the hexaxial reference system, the frame in which the frontal QRS axis, the direction of the mean QRS vector, is expressed; in adults that axis normally lies between −30° and +90°[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009").

### The chest leads

V1 sits in the fourth intercostal space (ICS) at the right sternal border and V2 in the fourth ICS at the left sternal border; V4 sits in the fifth ICS in the midclavicular line (MCL), and V3 midway between V2 and V4; V5 lies in the horizontal plane of V4 at the anterior axillary line (AAL), or midway between V4 and V6 if that line is unclear, and V6 in the same plane at the midaxillary line[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). For the time being, the electrodes go under the breast in women[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). Each chest electrode is paired with Wilson’s terminal, and from V1 to V6 they progress leftward and slightly inferiorly across the chest, so together they view the heart in roughly the horizontal plane. No chest lead can be computed from the others, so a 12-lead electrocardiogram (ECG) holds eight independent signals, two from the limbs and six from the chest[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"). The potential at an exploring electrode comes from every source active in the heart at that instant, including muscle far from the electrode[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007").

### Lead vectors

The torso is not a uniform conductor. Burger and colleagues treated each lead as a vector whose direction differs from the line between its electrodes and whose length, the lead’s strength, depends on the shape of the body and the conductivity of its tissues. The voltage in a lead is then the projection of the heart vector on the lead vector, times the lead vector’s length. Signal strength also falls as an electrode moves farther from the heart[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007").

### How this site computes the twelve leads

In the model the heart vector is the sum of the current dipoles of every cell in the simulated heart, computed (chapter 02) from the transmembrane voltage on the heart’s surfaces, and expressed in the axes of the Frank vectorcardiogram: X toward the left, Y toward the feet and Z toward the back[15](https://therealryc.github.io/heart-in-twelve-leads/#ref-15 "Jaros 2019"). Leads I, II and V1 to V6 are weighted sums of X, Y and Z with the coefficients of the Dower matrix, and each row of the matrix is a lead vector[14](https://therealryc.github.io/heart-in-twelve-leads/#ref-14 "Dower 1980"), [15](https://therealryc.github.io/heart-in-twelve-leads/#ref-15 "Jaros 2019"). Dower reported that the ECG he derived from the Frank signals was close enough to the recorded one for serial comparisons to be valid[14](https://therealryc.github.io/heart-in-twelve-leads/#ref-14 "Dower 1980"). In one comparison of three methods for synthesizing a vectorcardiogram from a 12-lead ECG, the inverse of his matrix gave the most Frank-like QRS loops[18](https://therealryc.github.io/heart-in-twelve-leads/#ref-18 "Edenbrandt 1988"); a later comparison found Kors’s regression transformation more accurate for the X and Y leads[15](https://therealryc.github.io/heart-in-twelve-leads/#ref-15 "Jaros 2019"). Leads III, aVR, aVL and aVF are then derived from I and II, as an electrocardiograph derives them. The model treats the limb electrodes, far from the heart, as seeing one central dipole. The chest electrodes sit close to it, where nearer muscle counts for more, so for V1 to V6 the model adds a near-field term: for each region of the simulated heart, the difference between its dipole seen from where the region lies and seen from the centre, scaled by a single strength used in every chapter. The near-field term is a modelling choice; it does not come from a measured torso. A 12-lead ECG synthesized from a vector approximates a recorded one but does not duplicate it[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007").

### Reading the figure

The drawing of the body marks the selected lead’s positive electrode and the electrode or terminal it is measured against. The hexaxial wheel is the frontal plane as the limb leads see it. Its arrow is the frontal heart vector rebuilt from leads I and aVF in Einthoven’s frame, so its shadow on any limb axis is proportional to that lead’s voltage, and equal to it for I, II and III. The blue band on the rim marks the normal axis range, the dark mark the mean QRS axis of this heart. The horizontal plane is seen from the feet, front of the chest at the top, with each chest lead along the direction of its Dower lead vector. In that plane the shadow is only the part of a chest lead that comes from the heart vector; in the enlarged tracing that part is drawn in grey, and the rest is the near-field term. Drag across a tracing to move through the beat, or pick a lead on either plane or on a tracing.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

Electrodes · lead II

Frontal plane · from the front

Horizontal plane · from the feet

Frontal leads over chest leads · 25 mm/s · 10 mm/mV

II enlarged · 50 mm/s · 10 mm/mV

## Puntos clave del original

- Each lead records the projection of one heart vector on its own axis: toward the positive pole the pen moves up, away from it down, across it hardly at all.
- Einthoven’s law, II = I + III, holds at every instant because the limb leads form a closed loop; the six frontal leads carry only two independent signals.
- aVR, aVL and aVF compare one limb electrode with the average of the other two (Goldberger); V1 to V6 compare each chest electrode with Wilson’s central terminal, the average of all three.
- V1 and V2 go in the fourth intercostal space at the sternal borders, V4 in the fifth at the midclavicular line, V3 midway between V2 and V4, and V5 and V6 level with V4 at the anterior and midaxillary lines.
- On the hexaxial wheel lead I is at 0° and aVF at +90°; the adult frontal QRS axis normally lies between −30° and +90°.
- The model projects one simulated heart vector through the Dower matrix and adds a near-field term for the chest leads, which sit close to the heart.

## Referencias del capítulo



---

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



---

# 05. Activation

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#activation

HeartNormal
Inside the heart

Chapters

Sources

Sound


05

## Activation

The sequence of one heartbeat

Each heartbeat is one wave of activation that starts in the sinus node and ends at the base of the ventricles, followed by a wave of recovery. The electrocardiogram (ECG) records where those waves are, millisecond by millisecond.

Time after the sinus node fires151 ms

PPRQRSSTT

Play the beatOpen the heartHeart vectorConduction system

Phase

His–Purkinje

Atria activated

100%

Ventricles activated

0%

PR interval

170ms

QRS duration

87ms

QT interval

405ms

**His–Purkinje.** Atrial activation is over. The wave entered the His bundle at 124 ms and is running down the bundle branches. These fibres are fast and few, so they produce no deflection, and this stretch of the tracing is the PR segment. The segment is level, but atrial recovery, a small wave opposite in sign to the P wave (the Ta wave), runs through it.

### The sinus node and the atria

The sinus node is a crescent of specialised cells, on average 13.5 mm long, lying under the epicardium where the superior vena cava meets the right atrium[21](https://therealryc.github.io/heart-in-twelve-leads/#ref-21 "Sánchez-Quintana 2005"). Its discharge spreads through the right atrium and crosses to the left atrium mainly through Bachmann’s bundle. In 35 patients with a history of atrial fibrillation, mapped in sinus rhythm, the left atrium began to activate, in the region of Bachmann’s bundle, about 30 ms after the region of the sinus node[22](https://therealryc.github.io/heart-in-twelve-leads/#ref-22 "Lemery 2007"). The P wave is the sum of that spread. Because the right atrium activates first and the left atrium last and posteriorly, the P wave in V1 is often biphasic. A P wave of 120 ms or more points to left atrial abnormality[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009").

### The atrioventricular (AV) node and the His–Purkinje system

The wave then reaches the AV node, which conducts slowly and so separates atrial from ventricular contraction. In the electrophysiology laboratory the interval from atrial activation at the node to the His bundle (AH) is normally about 55 to 125 ms[23](https://therealryc.github.io/heart-in-twelve-leads/#ref-23 "Kibler 2020"), and from the His bundle to the first ventricular muscle (HV) 35 to 55 ms[24](https://therealryc.github.io/heart-in-twelve-leads/#ref-24 "Haloot 2026"). Neither the AV node nor the His–Purkinje system has enough cells to produce a deflection at the body surface. The PR segment is level, but atrial recovery, a small wave opposite in sign to the P wave (the Ta wave), runs through it[25](https://therealryc.github.io/heart-in-twelve-leads/#ref-25 "Ihara 2006"). The PR interval, from the start of the P wave to the start of the QRS, is normally 120 to 200 ms. Below 120 ms, with a delta wave and a wide QRS, it suggests pre-excitation[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"); above 200 ms is first-degree AV block[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). In this simulated heart the wave reaches the AV node 90 ms after the sinus node fires and leaves it 34 ms later, before the last atrial cell activates at 141 ms. That AV nodal delay is shorter than in most people, below the normal AH range, and the level PR segment here is the time the wave spends in the His–Purkinje system.

### The ventricles: the QRS

In isolated human hearts, three endocardial areas of the left ventricle activate first, within 5 ms of each other: an anterior paraseptal area just below the mitral valve, a posterior paraseptal area a third of the way from apex to base, and the centre of the left septal surface; the right ventricle begins 5 to 10 ms later, near the anterior papillary muscle[27](https://therealryc.github.io/heart-in-twelve-leads/#ref-27 "Durrer 1970"), [12](https://therealryc.github.io/heart-in-twelve-leads/#ref-12 "MacAlpin 2003"). The septum is therefore activated from left to right first, a small vector toward the right and front that produces the septal q wave in I, aVL, V5 and V6 and the small r in V1. In this simulated heart the first force points more upward than to the right, so its septal q waves fall in II, III, aVF, V5 and V6 rather than in I and aVL. The wave then spreads through the Purkinje network along the endocardium, much faster than it crosses the wall, and the left ventricle, with the most muscle, dominates the QRS. The last regions are the posterior base of the left ventricle and the right ventricular outflow tract[13](https://therealryc.github.io/heart-in-twelve-leads/#ref-13 "Pérez Riera 2008"), [12](https://therealryc.github.io/heart-in-twelve-leads/#ref-12 "MacAlpin 2003"). In the simulated heart the apical tip activates nearly as late as the base, because the fast endocardial layer that stands in for the Purkinje network stops short of it. In adults a QRS longer than 110 ms is abnormal[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009").

### The plateau and recovery: the ST segment and the T wave

Each ventricular cell holds its plateau for about 200 ms, and for a time all of them are on it at once: in the simulated heart, for about 140 ms after the last cell activates. Neighbours then differ little in voltage, little current flows, and the ST segment lies near the baseline; in V2 and V3 of men, 1 to 2 mm above it can be a normal finding[28](https://therealryc.github.io/heart-in-twelve-leads/#ref-28 "Thygesen 2019"). Recovery follows a different order from activation. In human hearts the regions activated earliest have the longest action potentials[29](https://therealryc.github.io/heart-in-twelve-leads/#ref-29 "Franz 1987"), and recovery gradients run along all axes of the ventricles[5](https://therealryc.github.io/heart-in-twelve-leads/#ref-5 "Opthof 2017"). The result is a T wave that, in most leads, points the same way as the QRS. Its size reflects how spread out in time the recovery is across the heart’s surfaces[9](https://therealryc.github.io/heart-in-twelve-leads/#ref-9 "van Oosterom 2001"). The QT interval spans activation and recovery together; corrected for rate, 450 ms or more in men and 460 ms or more in women is prolonged[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009").

### The simulated heart and the heart vector

The heart on the left is the simulated heart from which every tracing on this site is computed. Colour marks muscle that has activated, from early (pale rose) to late (deep indigo), with a white line every 10 ms; muscle that has recovered turns pale blue. The lines inside it are the conduction system. They turn coral as the simulated impulse passes, and a bright point marks where the impulse is. The Inside the heart button at the top of the page plays the same beat up to 16 times slower than life, with a ladder diagram under the tracing. The arrow is the heart vector, the sum of every cell’s current at that instant, and its trail is the vectorcardiographic loop. Each limb lead on the right records that same arrow from its own direction; the chest leads, close to the heart, also see nearby regions more strongly (chapter 03).

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

The heart, seen from the front · drag to turn

One beat per lead · 25 mm/s · 10 mm/mV

Lead II at 50 mm/s

## Puntos clave del original

- The P wave is atrial activation. The PR segment spans the AV node and His–Purkinje system, which produce no deflection, while atrial recovery runs through it. The QRS is ventricular activation, the ST segment the plateau, and the T wave recovery.
- The septum activates first, from left to right, which produces the septal q wave in I, aVL, V5 and V6 and the r in V1. The simulated heart’s first force points more upward than to the right, so its q waves are in II, III, aVF, V5 and V6.
- Activation runs fast along the endocardium and slowly across the wall; the left ventricle dominates the QRS.
- A nearly level ST segment means every cell is on its plateau and neighbours differ little in voltage, so little current flows.
- Earlier-activated regions have longer action potentials, so recovery is spread over a narrower span than activation; with gradients along every axis, the T wave points the same way as the QRS in most leads.

## Referencias del capítulo



---

# 06. Waves and intervals

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#intervals

HeartNormal
Inside the heart

Chapters

Sources

Sound


06

## Waves and intervals

Measuring the beat, and the heart rate

The electrocardiogram (ECG) is read as waves, the level segments between them, and intervals that span both. Each wave and segment is a stretch of time on the paper that matches one step of the beat; an interval spans more than one.

Calipers on

P wavePR intervalQRSQT intervalRR interval

Sinus rate75 /min

<5050–90 at rest>100

Heart rate

75/min

RR interval

800ms

PR interval

170ms

QRS duration

87ms

QT interval

385ms

Calipers

170ms

**PR interval: 170 ms, 4.3 small boxes.** From the sinus node’s discharge to the first ventricular cell: atrial activation, then the atrioventricular (AV) node and the His–Purkinje system, which have too few cells to produce a deflection. The PR segment is level but not silent, because atrial recovery, a small wave opposite in sign to the P wave (the Ta wave), runs through it. The P wave appears on the tracing 16 ms after the sinus node fires, so from its visible start the PR interval reads 154 ms.

### Waves, segments and intervals

A wave is a deflection from the baseline; a segment is the level line between two waves; an interval spans at least one wave. The P wave is atrial activation. The PR interval runs from the start of the P wave to the start of the QRS complex, so it includes atrial activation and the conduction through the atrioventricular (AV) node and the His–Purkinje system; its level part after the P wave is the PR segment. The QRS complex is ventricular activation. Its end is the J point, where the ST segment begins; the ST segment runs to the start of the T wave, the recovery of the ventricles. The QT interval runs from the onset of the QRS, the earliest sign of ventricular depolarization, to the end of the T wave, the latest sign of repolarization[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). The TP segment, from the end of the T wave to the next P wave, is the resting baseline, and the RR interval is the time from one R wave to the next. A U wave, when present, follows the T wave and is most evident in V2 and V3[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"); the normal simulated heart produces none, and chapter 21 adds a stand-in U wave for hypokalemia.

### Measuring on paper

At the standard paper speed of 25 mm/s[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"), each 1 mm small box is 40 ms and each 5 mm large box is 200 ms; at the standard gain, 10 mm is 1 mV[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). An interval is read with calipers or by counting boxes. Where a wave starts and ends depends on the lead: in a lead nearly perpendicular to the first or last forces of a wave, the wave looks shorter[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). Electrocardiographs that record all leads at once can align them, and their QT is often longer than the QT measured in any single lead[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). The cards give intervals timed from the simulated cells. The PR interval runs from the moment the sinus node fires to the first ventricular cell to activate, the QRS from the first ventricular cell to activate to the last, and the QT from the first to activate to the last to recover. Measured on the tracing, the P wave and PR interval are slightly shorter, because the cells at either end of atrial activation produce almost no signal. The P-wave calipers are therefore set on the tracing, as chapter 16 measures it: from the first to the last moment the P wave is 0.01 mV or more from the baseline in any lead. Calipers on lead II alone can give a shorter value; drag them on the figure to try it.

### Normal values in adults

A PR interval above 200 ms is first-degree AV block[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). A PR interval below 120 ms, with a delta wave and a wide QRS, suggests pre-excitation[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"). A QRS longer than 110 ms is abnormal. With the pattern of a bundle branch block, 120 ms or more is complete block and 110 to 119 ms is incomplete block[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"); the 2009 statement gives 110 to 120 ms for incomplete right bundle branch block[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"). The 2009 recommendations give no normal duration for the P wave; a P wave of 120 ms or more points to left atrial abnormality[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). The simulated P wave is smaller than in most people: about 0.046 mV above the baseline before it in lead II, against 0.070 mV for the median of the real normal ECGs it was fitted to[30](https://therealryc.github.io/heart-in-twelve-leads/#ref-30 "Strodthoff 2023"). The QT shortens as the rate rises, so it is judged after correction for rate (chapter 08): a corrected QT of 450 ms or more in men, or 460 ms or more in women, is prolonged[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009").

### Heart rate

In normal adults the resting sinus rate is generally between 50 and 90 per minute; sinus tachycardia is a sinus rate above 100 per minute[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). The bradycardia guideline uses a sinus rate below 50 per minute, and notes that the National Institutes of Health uses 60[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). The ways of counting follow from the paper speed. For a regular rhythm, divide 300 by the number of large boxes between two R waves, or 1500 by the number of small boxes. When an R wave falls on a heavy line, the next heavy lines read 300, 150, 100, 75, 60 and 50, and the next R wave is read off where it lands. For an irregular rhythm, count the QRS complexes in 6 seconds (30 large boxes) and multiply by 10. Because that count moves in steps of 10 per minute, it is coarse for a regular rhythm; the strip shows both methods side by side. The simulated PR interval stays at 170 ms at every rate on the slider.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

Lead II · 25 mm/s · 10 mm/mV, enlarged · intervals in ms · drag the calipers

Rhythm strip · lead II · 10 s · 25 mm/s · 10 mm/mV

## Puntos clave del original

- Waves are deflections, segments are the level lines between them, and intervals span both: the PR interval contains the P wave, the QT interval the QRS and the T wave.
- At 25 mm/s a small box is 40 ms and a large box 200 ms; at 10 mm/mV a small box is 0.1 mV.
- The PR interval is atrial activation plus the delay in the AV node and His–Purkinje system; above 200 ms is first-degree AV block.
- A QRS longer than 110 ms is abnormal, and 120 ms or more with a bundle branch pattern is complete block.
- Rate is 300 divided by the large boxes, or 1500 by the small boxes, between R waves; for an irregular rhythm, count the QRS complexes in 6 seconds and multiply by 10.

## Referencias del capítulo



---

# 07. Axis

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#axis

HeartNormal
Inside the heart

Chapters

Sources

Sound


07

## Axis

The direction of the QRS in the frontal plane

The six limb leads view the heart vector from six directions in the frontal plane. The mean direction of the QRS in that plane, its axis, depends on the heart’s position in the chest and on the order in which the left ventricle (LV) activates.

Left fascicles

NormalAnterior fascicle blockedPosterior fascicle blocked

Position of the heart

Fitted to ECGsAnatomical mean

Apex below the horizontal21°

0°15°30°45°60°

Rotation about the long axis+4°

−45°0°+45°

Long axis turned toward the left53°

15°50°85°

P and T axes

QRS axis

+57°

Category

Normal

Isoelectric lead

aVL≈ +60°

P axis

+62°

T axis

+54°

Spatial QRS–T

56° normal

Left and right axis deviation (LAD, RAD).

**Normal axis, +57°.** Lead I and aVF are both positive, so the axis lies between 0° and +90°. Lead aVL is the most nearly isoelectric, so the axis lies about 90° from it, near +60°.

### The hexaxial reference

Leads I, II and III and the augmented leads aVR, aVL and aVF all lie in the frontal plane. The six are computed from two measured signals[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007"), so they are six views of one frontal vector. Drawn through one centre, their axes are 30° apart: lead I points to the patient’s left at 0°, aVF to the feet at +90°, II at +60°, III at +120°, aVL at −30° and aVR at −150°; angles above the horizontal are negative. A lead records a positive QRS when the QRS forces point toward its positive pole, a negative QRS when they point away, and an equiphasic (isoelectric) QRS when they are perpendicular to it. In the Cabrera sequence, aVL, I, −aVR, II, aVF, III, the limb leads follow one another around the circle, which makes the axis easier to read[7](https://therealryc.github.io/heart-in-twelve-leads/#ref-7 "Kligfield 2007").

### Reading the axis

The 2009 recommendations define the mean frontal axis by the dominant QRS deflection[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"). The axis in the cards is computed from the net area of the QRS in leads I and aVF. At the bedside it can be estimated in four steps:

1. Lead I: a net positive QRS puts the axis in the left half of the circle, between −90° and +90°.
2. Lead aVF: a net positive QRS puts it in the lower half, between 0° and 180°. If both are positive, the axis lies between 0° and +90°.
3. If I is positive and aVF negative, look at lead II. Positive places the axis between −30° and 0°, which is still normal; negative places it beyond −30°, left axis deviation[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009").
4. Find the limb lead whose QRS is most nearly isoelectric. The axis lies about 90° from it, on the side where the QRS is positive.

### Normal and abnormal axes

In adults the normal axis lies between −30° and +90°. Left axis deviation (LAD) is moderate from −30° to −45° and marked from −45° to −90°, which is often associated with left anterior fascicular block (LAFB). Right axis deviation (RAD) is moderate from +90° to +120° and marked from +120° to 180°, which is often associated with left posterior fascicular block (LPFB). With an equiphasic QRS the axis is indeterminate[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"). The statement’s text calls −30° itself left axis deviation, while its table begins left axis deviation below −30°; the cards and the wheel follow the table. The adult table gives no range for axes between −90° and ±180° through −135°, the upper left of the wheel (up and toward the patient’s right); the diagnostic statement list of the same series names such an axis right superior axis, without giving a range[32](https://therealryc.github.io/heart-in-twelve-leads/#ref-32 "Mason 2007"). The axis depends on age and body habitus, and shifts to the left with age[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009").

### What moves the axis

**The heart’s position.** In 185 healthy adults the long axis of the left ventricle pointed about 50° from straight ahead toward the left, seen from above, and about 29° below the horizontal once its three plane angles are combined (36° in the view from the front); it lay flatter in people with a larger chest circumference[33](https://therealryc.github.io/heart-in-twelve-leads/#ref-33 "Odille 2017"). Tilting the simulated apex toward the feet swings the QRS axis toward +90°. Rotating the heart about its long axis also moves it, because the rotation changes which walls face the left arm and the feet. The simulated heart’s position was fitted to median electrocardiograms (ECGs) of normal recordings[34](https://therealryc.github.io/heart-in-twelve-leads/#ref-34 "Wagner 2020"), [30](https://therealryc.github.io/heart-in-twelve-leads/#ref-30 "Strodthoff 2023"), not to anatomy, and the fit left its long axis flatter than the anatomical mean: 21° below the horizontal against about 29°. The preset “Anatomical mean” sets that direction. The study of 185 adults also measured a second axis, which fixes the rotation, but it scattered widely (standard deviations of 17° to 32°), so the preset leaves the rotation at zero.

**The order of activation.** When the left anterior fascicle is blocked, the anterior and superior wall of the left ventricle activates last and the axis moves to between −45° and −90°, with qR in aVL and rS in II, III and aVF[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"), [26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). A left posterior fascicular block moves it to between +90° and 180°, with rS in I and aVL and qR in III and aVF[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"). Neither block was used to fit the simulation; the cards show whether the simulated axis reaches the criteria. At the fitted position the simulated blocks reach (LAFB) or approach (LPFB) the axis criterion but not the QRS patterns: in LAFB the inferior leads keep tall R waves and aVL begins with a deep Q; in LPFB lead I has no S wave, and III and aVF begin with deep Q waves. Right ventricular (RV) hypertrophy also turns the axis rightward, and right axis deviation, with prominent anterior forces in the right precordial leads, should be required for that diagnosis in nearly all cases[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). Left bundle branch block can move the axis to the right, to the left or upward[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009").

### The P and T axes

The same construction gives an axis for the P wave and for the T wave. In adults the T wave is upright in I and II and inverted in aVR[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"), so its axis, like the QRS axis, points down and to the left. The angle between the QRS and T axes in the frontal plane has no agreed cutoff[35](https://therealryc.github.io/heart-in-twelve-leads/#ref-35 "Zhang 2015"). In three dimensions, the spatial QRS-T angle is the angle between the mean QRS and T vectors computed from the X, Y and Z leads. In the Rotterdam Study of adults aged 55 and over it was graded normal from 0° to 105°, borderline from 105° to 135° and abnormal from 135° to 180°, and an abnormal angle had an age- and sex-adjusted hazard ratio of 5.2 for cardiac death[36](https://therealryc.github.io/heart-in-twelve-leads/#ref-36 "Kardys 2003"). In the simulation each cell keeps the action potential duration it has in the normal beat, so a block that changes the order of activation changes the order of recovery with it (a secondary repolarization change), and a fascicular block widens the angle.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

The heart from the front · hexaxial reference

From the left side · from below

Limb leads in the Cabrera order · QRS at 50 mm/s · 10 mm/mV · shaded: net QRS area

## Puntos clave del original

- The six limb leads view one frontal vector from directions 30° apart. A lead is positive when the QRS forces point toward its positive pole and isoelectric when they are perpendicular to it.
- Lead I and aVF both positive put the axis between 0° and +90°. When aVF is negative, a positive lead II keeps the axis within the normal range.
- The adult normal axis is −30° to +90°; beyond −30° is left axis deviation and beyond +90° right axis deviation.
- The axis follows the heart’s position in the chest and the order of activation: LAFB moves it to between −45° and −90°, LPFB to between +90° and 180°.
- The spatial QRS-T angle, from the mean QRS and T vectors, is normal up to 105° and abnormal from 135°.

## Referencias del capítulo

- **Kardys 2003**. Kardys I, Kors JA, van der Meer IM, et al. Spatial QRS-T angle predicts cardiac death in a general population. Eur Heart J. 2003;24(14):1357-64. [DOI](https://doi.org/10.1016/s0195-668x(03)00203-3) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/12871693/)
- **Zhang 2015**. Zhang X, Zhu Q, Zhu L, et al. Spatial/Frontal QRS-T Angle Predicts All-Cause Mortality and Cardiac Mortality: A Meta-Analysis. PLoS One. 2015;10(8):e0136174. [DOI](https://doi.org/10.1371/journal.pone.0136174) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/26284799/)


---

# 08. Repolarization and the QT interval

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#qt

HeartNormal
Inside the heart

Chapters

Sources

Sound


08

## Repolarization and the QT interval

The T wave, the QT and its correction for rate

The T wave is the ventricles recovering, and the QT interval spans their activation and recovery. Recovery shortens as the heart rate rises, so the QT is corrected for rate; the corrected value depends on the formula used.

Heart rate60 /min · RR 1000 ms

4070100130160

Thresholds for

MenWomen

Measure in lead

LongestV2V3V5II

The beat at 60 per minute, in grey

RR interval

1000ms

QT interval

405ms

Bazett

405ms

Fridericia

405ms

Framingham

405ms

Hodges

405ms

**At 60 per minute every formula returns the measured QT, 405 ms.** A corrected QT estimates the QT at an RR of 1 s, so at this rate there is nothing to correct. Change the heart rate to see the formulas diverge.

### Where the T wave comes from

After its upstroke each ventricular cell holds a plateau, then repolarizes. While every cell is on its plateau, neighbours differ little in voltage, little current flows between them and the ST segment is nearly level; the T wave arises as cells recover at different times, and its amplitude is proportional to how widely recovery times are spread over the surfaces of the ventricles[9](https://therealryc.github.io/heart-in-twelve-leads/#ref-9 "van Oosterom 2001"). The QT interval runs from the onset of the QRS, the earliest sign of ventricular depolarization, to the end of the T wave, the latest sign of repolarization[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). In human hearts the regions activated earliest have the longest action potentials[29](https://therealryc.github.io/heart-in-twelve-leads/#ref-29 "Franz 1987"), and repolarization gradients run along every axis of the ventricles[5](https://therealryc.github.io/heart-in-twelve-leads/#ref-5 "Opthof 2017"). In the simulation, each cell’s activation-recovery interval (ARI, from its activation to 50% repolarization) is a straight-line function of when that cell activates in the normal beat, with a slope of −0.59 after fitting; one published model uses −0.66[37](https://therealryc.github.io/heart-in-twelve-leads/#ref-37 "Gillette 2022"), [38](https://therealryc.github.io/heart-in-twelve-leads/#ref-38 "Opthof 2009"). The model also includes small gradients across the wall, from apex to base and between the ventricles. With the −0.59 slope and these gradients, the cells pass the midpoint of recovery within a narrower span than they activate (the ribbons under the tracing), and that span lies under the peak of the T wave. Each cell also repolarizes gradually, over about 100 ms from 90% to 10% of its plateau in the model, and this spreads the T wave on either side.

### Measuring the QT

The QT is measured in the lead where it is longest, usually V2 or V3; a value more than 40 ms longer than in the other leads may be an error. Where the T and U waves merge, the QT is measured in leads without U waves, often aVR and aVL, or the end of the T wave is found by the tangent method: a tangent to the steepest part of the T wave’s downslope, extended until it crosses the baseline. Both may underestimate the QT[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). In the simulation the tangent meets the baseline before the last cell has recovered, because the last, slow part of recovery barely deflects the tracing. In this simulated heart the longest tangent QT is usually in V5 or V6, partly because every lead here is timed from the same QRS onset; on a real tracing the QRS starts up to 20 ms earlier in V2 and V3[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). The bars give the tangent QT in every lead. The 2009 statement on the QT interval calls a T wave flat when its peak lies between +0.1 and −0.1 mV in leads I, II, aVL (with an R wave taller than 0.3 mV) and V4 to V6[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"); the bars grey out a T wave this small in any lead, because a tangent drawn on so small a wave is unreliable.

### Correcting for rate

The QT shortens as the heart rate rises. In the simulation every cell’s ARI scales with the cube root of the RR interval. The cube root was chosen for the model rather than measured, and the simulated QT–RR relation follows from it. A corrected QT (QTc) estimates the QT at 60 per minute, an RR of 1 s, and every formula returns the measured QT unchanged at that rate. With QT and RR in seconds:

- Bazett: QT/√RR, derived in 1920 from 39 young subjects[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009").
- Fridericia: QT/∛RR[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009").
- Framingham: QT + 0.154 (1 − RR), from 5,018 people with heart rates of 41 to 120 per minute[39](https://therealryc.github.io/heart-in-twelve-leads/#ref-39 "Sagie 1992").
- Hodges: QT + 1.75 ms × (heart rate − 60), with the heart rate per minute. The 1983 original is a meeting abstract that is not indexed; the formula here is as given by Vandenberk and colleagues in their 2018 correction[40](https://therealryc.github.io/heart-in-twelve-leads/#ref-40 "Vandenberk 2016"), [41](https://therealryc.github.io/heart-in-twelve-leads/#ref-41 "J Am Heart Assoc 2018").

Bazett’s formula “overcorrects the QT interval at fast heart rates and undercorrects it at low heart rates”[39](https://therealryc.github.io/heart-in-twelve-leads/#ref-39 "Sagie 1992"). It leaves a positive correlation of the QTc with heart rate (r = 0.32), and Fridericia’s a negative one (r = −0.26 to −0.32)[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). In 6,609 hospital patients in sinus rhythm with a normal QRS and heart rates below 90 per minute, the slope of the QTc against RR was 0.004 for Fridericia, −0.005 for Framingham and −0.071 for Bazett; a prolonged QTc had a hazard ratio for death within 30 days of 7.31 by Framingham, 5.95 by Fridericia and 4.49 by Bazett[40](https://therealryc.github.io/heart-in-twelve-leads/#ref-40 "Vandenberk 2016"). The 2009 statement advises linear regression formulas rather than Bazett’s, naming the method in the report, and no rate correction when the RR varies widely, as in atrial fibrillation[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). In the chart, a perfect formula for this heart would plot as a flat line at its QT at 60 per minute.

### Thresholds

In adults a QTc of 450 ms or more in men, or 460 ms or more in women, is prolonged, and 390 ms or less is short[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). The 2009 statement’s text gives the men’s limit as “longer than 450 ms”; its recommendation, followed here, says 450 ms or longer. In Drew and colleagues’ 2010 statement, the 99th percentile is about 470 ms in men and 480 ms in women, and a QTc above 500 ms is highly abnormal; data from congenital long-QT syndrome tie it to a two- to threefold higher risk of torsade de pointes (TdP). The same statement defines a prolonged QTc differently, as one above the 99th percentile[42](https://therealryc.github.io/heart-in-twelve-leads/#ref-42 "Drew 2010"). On a drug that can cause TdP, prompt action is indicated if the QTc exceeds 500 ms or rises by at least 60 ms from its value before the drug[42](https://therealryc.github.io/heart-in-twelve-leads/#ref-42 "Drew 2010"). Limits depend on the formula: with Bazett’s, the 99% upper limits were 472 ms in men and 482 ms in women[40](https://therealryc.github.io/heart-in-twelve-leads/#ref-40 "Vandenberk 2016").

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

Lead V3 · 50 mm/s · 10 mm/mV

QT in each lead · tangent method

QTc against heart rate · this simulated heart

The first and last cells to activate

## Puntos clave del original

- The T wave arises as ventricular cells recover at different times; the QT runs from the first sign of activation to the last sign of recovery.
- Measure the QT in the lead where it is longest, usually V2 or V3; the tangent method finds the end of the T wave where U waves interfere, and can underestimate the QT.
- Every formula returns the QT unchanged at 60 per minute. Bazett’s over-corrects at fast rates and under-corrects at slow ones.
- A QTc of 450 ms or more in men, or 460 ms or more in women, is prolonged; above 500 ms is highly abnormal.
- On a drug that can cause torsade de pointes, a QTc above 500 ms or a rise of 60 ms or more calls for prompt action.

## Referencias del capítulo

- **J Am Heart Assoc 2018**. [No authors listed]. Which QT Correction Formulae to Use for QT Monitoring? J Am Heart Assoc. 2018;7(16):e004252. [DOI](https://doi.org/10.1161/JAHA.117.004252) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/30369330/)


---

# 09. Sinus rhythm

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#sinus

HeartNormal
Inside the heart

Chapters

Sources

Sound


09

## Sinus rhythm

The sinus node and its rate

The sinus node is the heart’s normal pacemaker. In sinus rhythm every P wave comes from it, so every P wave has the same shape; the rate, its swing with breathing and any pause are read from the spacing of those P waves.

Pattern

RegularSwings with breathingWith a pause

Sinus rate72 bpm

<50 slow50–100>100 fast

Swing with each breath±15% of the interval

5%15%30%

Pause, P wave to P wave3.4 s

3 s or lessover 3 s: sinus pause

Sinus rate

72bpm

P to P

833ms

Longest P to P

0.8s

PR interval

170ms

P in I, II, aVF, V1

\+ \+ \+ +−

Reading

Sinus rhythm

**Sinus rhythm at 72 bpm.** Each P wave comes from the sinus node and is followed by a QRS after 170 ms. In the ladder each line starts at the top of the atrial tier and crosses the AV tier slowly.

### The sinus P wave and the resting rate

The sinus node fires spontaneously, and each discharge spreads across the atria, producing a P wave. In sinus rhythm every P wave comes from that node, so every P wave has the same shape: upright in leads I, II and aVF and biphasic in V1[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). Each is followed by a QRS complex after the same PR interval. In normal people at rest the sinus rate is generally between 50 and 90 beats per minute (bpm), reflecting vagal tone[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016").

### Bradycardia and tachycardia

The 2018 bradycardia guideline defines sinus bradycardia as a sinus rate below 50 bpm[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). It notes that the National Institutes of Health (NIH) uses 60 bpm instead, and that in population studies the lowest second percentile of heart rate ranged from 40 to 55 bpm, depending on age and sex[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). With rare exceptions, the guideline considers treating sinus node dysfunction only when it causes symptoms[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). Sinus tachycardia is a sinus rate above 100 bpm[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). It is physiological as a response to exercise or emotion, and it also follows fever, dehydration, anemia, heart failure, hyperthyroidism, caffeine, beta-agonist drugs and stimulants[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). In patients, activation arises from higher in the right atrium as the sinus rate rises, which makes the P wave taller in the inferior leads[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). The simulated node always fires from one site, so its P wave keeps one shape at every rate.

### Sinus arrhythmia

Sinus arrhythmia, one of the standard statements of the American Heart Association (AHA) electrocardiogram (ECG) lexicon[32](https://therealryc.github.io/heart-in-twelve-leads/#ref-32 "Mason 2007"), is sinus rhythm whose rate varies from beat to beat. In the simulation the sinus interval swings with a 4-second breathing cycle, shorter and then longer. Because every beat still starts in the sinus node, each P wave keeps its shape and the PR interval stays the same.

### Sinus pause

In the 2018 guideline a sinus pause means that the sinus node depolarizes more than 3 s after the last atrial depolarization; sinus node arrest means no evidence of sinus node depolarization at all[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). Pauses of 2 s in healthy elderly people and of 3 s in long-distance runners have been recorded on 24-hour monitoring, and the guideline warns that a pause over 3 s, or a rate below 50 bpm, should not by itself be used to diagnose sinus node dysfunction[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). When the sinus node is slow, a subsidiary pacemaker (an ectopic atrial focus, the atrioventricular (AV) junction or the ventricles) can take over[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). In the simulated pause the node skips its discharges, so there is no P wave and no QRS, and no escape beat is simulated.

### Reading the ladder

Under the strip is a ladder diagram, the timing chart drawn to reason about a rhythm. Its tiers are the atria (A), the AV node with the His bundle (AV), and the ventricles (V); time runs left to right on the same axis as the strip. Each line is one wave crossing one tier, drawn at the times the simulation computed. In sinus rhythm a line starts at the top of the atrial tier, where the sinus node is; crosses the AV tier slowly, during the second half of the P wave and the flat PR segment; and crosses the ventricular tier quickly, during the QRS. A pause is an empty stretch in all three tiers.

### How the beats are simulated

Each beat is computed by the activation model: the P wave from the sinus node through the simulated atria, and the QRS and T wave from the His bundle, with recovery set by the interval before each beat so that the QT follows the rate. The simulated P wave is smaller than in most people: about 0.046 mV above baseline in lead II, against 0.070 mV for the median of the real normal ECGs it was fitted to[30](https://therealryc.github.io/heart-in-twelve-leads/#ref-30 "Strodthoff 2023"). At the strip's 10 mm/mV it is less than half a millimetre tall, so the P-wave panel draws it at twice that gain.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

12 leads · II and V1 as rhythm strips · 25 mm/s · 10 mm/mV · ladder below

50 mm/s · 20 mm/mV · one sinus P wave

Sinus rate, beat by beat

## Puntos clave del original

- In sinus rhythm every P wave comes from the sinus node: upright in I, II and aVF, biphasic in V1, and the same from beat to beat.
- Sinus bradycardia is a sinus rate below 50 bpm in the 2018 guideline (below 60 bpm by the NIH definition); sinus tachycardia is a sinus rate above 100 bpm.
- In sinus arrhythmia only the spacing of the P waves changes; their shape and the PR interval do not.
- A sinus pause is more than 3 s from one atrial depolarization to the next; on its own it does not establish sinus node dysfunction.
- A ladder diagram plots each wave through the atria, the AV node and the ventricles on the same time axis as the strip.

## Referencias del capítulo



---

# 10. Atrial arrhythmias

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#atrial

HeartNormal
Inside the heart

Chapters

Sources

Sound


10

## Atrial arrhythmias

When the atria are not driven by the sinus node

When something other than the sinus node drives the atria, the P wave changes shape or gives way to flutter or fibrillatory waves, and the rhythm changes pace. A premature atrial complex (PAC) is a single early beat. In focal atrial tachycardia (AT) one focus fires fast and steadily, in multifocal atrial tachycardia (MAT) several foci compete, in atrial flutter a wave travels continuously around a re-entrant circuit, and in atrial fibrillation (AF) there is no organized atrial activity at all.

Rhythm

Premature beatsFocal ATMultifocal ATFibrillationFlutter

Focus

Low right atriumPosterior left atriumHigh left atrium

Coupling interval, sinus P to PAC480 ms

300470640 ms

Atrial rate150 bpm

100175250 bpm

Mean atrial rate120 bpm

100130160 bpm

Mean ventricular rate110 bpm

60110160 bpm

Circuit

Typical (counterclockwise)Reverse typical (clockwise)

AV conduction

2:13:14:1Variable

Flutter rate300 bpm

250–330to 350

Atrial rate

75bpm

Ventricular rate

81bpm

RR range

479–870ms

AV conduction

1:1

P waves

2 shapes

Reading

Sinus + PACs

**Sinus rhythm with PACs from the low right atrium.** Each premature P wave differs in shape from the sinus P wave. The premature impulse reaches the AV node 56 ms after its P wave starts, against 90 ms for a sinus beat, and the simulated AV node holds it 34 ms longer because it arrives early, so its PR, 170 ms, is the same as the sinus PR of 170 ms. Shorten the coupling interval to see it blocked.

### Premature atrial complexes

A premature atrial complex (PAC) is an atrial beat that comes before the next sinus beat is due, from a site other than the sinus node. Because it starts elsewhere its P wave has a different shape, and an early one may land on the preceding T wave. A PAC early enough to find the atrioventricular (AV) node still refractory is not conducted: the American Heart Association (AHA) lexicon lists these as nonconducted atrial premature complexes[32](https://therealryc.github.io/heart-in-twelve-leads/#ref-32 "Mason 2007"). Atrial fibrillation (AF) is frequently initiated after PACs, and a higher PAC burden is associated with developing AF[43](https://therealryc.github.io/heart-in-twelve-leads/#ref-43 "Joglar 2024"). In the simulation the PAC's wave also reaches the sinus node and resets it, so the next sinus beat comes one sinus cycle after the wave arrives there.

### Focal atrial tachycardia

Focal atrial tachycardia (AT) arises from a localized atrial site, with regular, organized atrial activity, discrete P waves and, typically, an isoelectric segment between them[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"); the 2023 AF guideline describes it as a regular atrial rhythm at a constant rate above 100 beats per minute (bpm), activated from outside the sinus node[43](https://therealryc.github.io/heart-in-twelve-leads/#ref-43 "Joglar 2024"). The atrial rate is usually between 100 and 250 bpm, and irregularity is sometimes seen at onset (a warm-up)[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). The P wave points to the focus: a positive P in V1 with negative P waves in I and aVL suggests a left atrial origin, and positive P waves in II, III and aVF an origin high in either atrium[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). The P waves of the simulated foci follow from the model's atrial geometry, so they need not match these rules exactly. Because the atria drive the rhythm and conduct normally to the ventricles, the P wave usually sits closer to the next QRS than to the previous one, so the RP interval, from the onset of the QRS to the onset of the P wave after it, is long[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016").

### Multifocal atrial tachycardia

Multifocal atrial tachycardia (MAT) is a rapid, irregular rhythm with at least three distinct P-wave morphologies on the surface electrocardiogram (ECG). The atrial rate is above 100 bpm (above 90 bpm in at least one report), there is a distinct isoelectric period between P waves, and the PP, PR and RR intervals vary[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). It can be hard to tell from AF at the bedside or even on a single tracing[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). In the simulation four origins take turns at irregular intervals; the PR interval varies because each origin is a different distance from the AV node and because the simulated node conducts an early impulse more slowly. The simulated P wave is smaller than in most people: about 0.046 mV above baseline in lead II, against 0.070 mV for the median of the real normal ECGs it was fitted to[30](https://therealryc.github.io/heart-in-twelve-leads/#ref-30 "Strodthoff 2023"). The shapes are therefore easier to compare in the P-wave panel, which draws them aligned at onset and at twice the strip's gain.

### Atrial fibrillation

In AF atrial activation is uncoordinated and atrial contraction ineffective. Its ECG features are irregular RR intervals (when AV conduction is present), the absence of distinct P waves, and irregular atrial activity, the fibrillatory waves; the diagnosis always requires visual confirmation[43](https://therealryc.github.io/heart-in-twelve-leads/#ref-43 "Joglar 2024"). AF that terminates within 7 days of onset is paroxysmal; persistent AF is continuous for more than 7 days and requires intervention; long-standing persistent AF is continuous for more than 12 months[43](https://therealryc.github.io/heart-in-twelve-leads/#ref-43 "Joglar 2024"). In the simulation the AV node passes impulses at random intervals, never sooner than its recovery allows, so no two RR intervals match.

### Atrial flutter

Typical atrial flutter is a macroreentrant circuit around the tricuspid annulus through the cavotricuspid isthmus. Running counterclockwise it produces predominantly negative sawtooth flutter waves in II, III and aVF and a positive deflection in V1; running clockwise (reverse typical flutter) it produces positive flutter waves inferiorly and wide negative ones in V1[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"), [43](https://therealryc.github.io/heart-in-twelve-leads/#ref-43 "Joglar 2024"). The typical atrial rate is 300 bpm, a cycle length of 200 ms, and it can be slower with antiarrhythmic drugs or atrial scarring[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). The 2015 supraventricular tachycardia guideline gives the range as 250 to 350 bpm in one passage and as typically 250 to 330 bpm in another[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). The AV node passes only some flutter waves; at 2:1 conduction the ventricles follow every second one. An atrial rate above the ventricular rate usually means atrial flutter or atrial tachycardia, and flutter with variable conduction makes the ventricular rate irregular[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016").

### How each rhythm is simulated

Premature beats, focal AT and MAT are computed by the activation model: each P wave is the simulated atria activating from its origin, so its shape follows from where that origin is. The activation model has no reentry, so fibrillatory and flutter waves come from a phenomenological atrial signal, one that imitates the waves without simulating atrial cells. For fibrillation the signal is a random atrial vector and for flutter a rotating one. It is added to simulated ventricular beats, and its lines in the ladder are dashed. The AV node's refractoriness and its slower conduction of early impulses follow a simple timing rule rather than a model of the node.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

12 leads · II and V1 as rhythm strips · 25 mm/s · 10 mm/mV · ladder below

50 mm/s · 20 mm/mV · P waves, aligned at onset

Atrial and ventricular rate, beat by beat

## Puntos clave del original

- A premature atrial complex is an early P wave of a different shape; a very early one can find the AV node refractory and not conduct.
- Focal AT: regular, discrete P waves of one non-sinus shape, usually 100 to 250 bpm, typically with a long RP; the P wave’s shape points to the focus.
- Multifocal AT: at least three P-wave shapes, an irregular rhythm above 100 bpm, and an isoelectric baseline between P waves.
- AF: irregular RR intervals, no distinct P waves, and fibrillatory waves.
- Typical flutter produces negative sawtooth waves in II, III and aVF and a positive deflection in V1, typically at 300 bpm; the conduction ratio sets the ventricular rate.

## Referencias del capítulo



---

# 11. Re-entrant supraventricular tachycardia (SVT)

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#svt

HeartNormal
Inside the heart

Chapters

Sources

Sound


11

## Re-entrant supraventricular tachycardia (SVT)

Circuits through the atrioventricular node and accessory pathways

In a re-entrant tachycardia one impulse keeps travelling around a loop, down one path and back up another, re-exciting the tissue it has just left. The route of the loop determines where the P wave falls and whether the QRS is narrow or wide.

Circuit

Typical AVNRTOrthodromic AVRTAntidromic AVRTAtypical AVNRTPJRT

Rate180 bpm

110170230 bpm

Accessory pathway

Left lateralLeft posteriorLeft posteroseptalRight posteroseptalRight free wallRight anteroseptal

Rate

180bpm

QRS duration

83ms

Atria start

+10ms

RP (to visible P)

83ms

PR

251ms

Reading

Narrow, short RP

**Typical AVNRT at 180 bpm.** The impulse goes down the slow pathway and back up the fast one. Atrial activation starts 10 ms after the QRS onset, so the P wave hides in the QRS and its end shows as a small pseudo-S in II. In V1 the simulated P wave is negative too, so V1 shows no pseudo-R′, unlike the guideline's description of patients.

### Re-entry above the ventricles

Supraventricular tachycardia (SVT) is an umbrella term for tachycardias with atrial or ventricular rates above 100 beats per minute (bpm) at rest whose mechanism involves tissue from the His bundle upward; in the 2015 guideline it does not include atrial fibrillation[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). Paroxysmal SVT, regular and rapid with abrupt onset and termination, is characteristic of atrioventricular (AV) nodal re-entrant tachycardia (AVNRT) and AV re-entrant tachycardia (AVRT), and less often of atrial tachycardia[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). AVNRT and AVRT are both re-entrant: an impulse travels down one limb of a circuit and returns up another, so it keeps re-exciting the tissue it has just left.

### Typical AV nodal re-entry

AVNRT uses two functionally distinct pathways: a fast one, most commonly near the apex of Koch's triangle, and a slow one inferoposterior to the compact AV node[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). Koch's triangle is the area of the right atrium where the AV node connects with the atrium; its apex, where the fast pathway's connections lie, is close to the His bundle[44](https://therealryc.github.io/heart-in-twelve-leads/#ref-44 "McGuire 1993"). In typical (slow–fast) AVNRT the impulse goes down the slow pathway and back up the fast pathway[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). From the bottom of the circuit the wave reaches the His bundle and the atria at about the same time, so atrial activation is nearly simultaneous with the QRS. The P wave is hidden in it except for its end, which appears at the end of the QRS as a narrow negative deflection in the inferior leads (a pseudo-S wave) and a slightly positive one in V1 (a pseudo-R′)[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). The ventricular rate is often 180 to 200 bpm, with a range of 110 to more than 250 bpm[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). The simulation reproduces a small pseudo-S, about 0.03 mV deep in lead II. It does not reproduce the pseudo-R′: the simulated atria are activated from the AV junction, and their retrograde P wave is negative in V1 as well, so in V1 the end of the S wave deepens instead.

### AV re-entry over an accessory pathway

An accessory pathway is an extranodal connection between atrial and ventricular muscle across the AV groove; one that conducts only retrogradely is concealed and leaves the electrocardiogram (ECG) in sinus rhythm unchanged[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). In orthodromic AVRT the impulse goes down the AV node and the His–Purkinje system, through the ventricles, and back up the pathway to the atria[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). The ventricles must be activated as far as the pathway before the atria can be, so the retrograde P wave comes after the QRS, usually in the early part of the ST–T segment, and the QRS is narrow unless there is bundle branch block or aberrant conduction[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). In antidromic AVRT the circuit runs the other way, down the pathway and back up through the AV node, and the QRS is wide, maximally pre-excited[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). A wide-complex tachycardia (QRS over 120 ms) may be ventricular tachycardia or a supraventricular rhythm with abnormal conduction, including conduction over an accessory pathway[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016").

### The RP interval

The RP interval runs from the onset of the QRS to the onset of the visible P wave[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). When the P wave lies closer to the preceding QRS than to the next one, the tachycardia has a short RP: typical AVNRT and orthodromic AVRT are short-RP tachycardias, with one P wave for each QRS[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). The RP is long when the impulse returns to the atria slowly: in atypical (fast–slow) AVNRT, where it goes back up a slow pathway, and in the permanent form of junctional reciprocating tachycardia (PJRT), an orthodromic AVRT over a slowly conducting, usually posteroseptal, concealed pathway, with deeply inverted P waves in II, III and aVF[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). Focal atrial tachycardia usually has a long RP, because the atria drive the rhythm and conduct normally to the ventricles[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). The guideline's diagnostic algorithm uses an RP of 90 ms measured on the surface ECG, distinct from the 70-ms ventriculoatrial interval used inside the heart[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016").

### How the circuits are built

In the simulation each tachycardia is a timed sequence of atrial and ventricular activations. Every atrial activation starts from the cell where the impulse enters the atria (the AV junction, or the atrial end of the pathway), and the model computes its P wave from the spread of activation; every ventricular activation starts at the His bundle or at the pathway's ventricular end. The model also computes how long the wave takes to travel from the pathway to the AV node, from the His bundle to the pathway, and from the pathway's insertion to the His–Purkinje system. The delays inside the circuit, such as how long the slow pathway or the AV node takes, are set so the cycle matches the chosen rate; they are not measured. In orthodromic AVRT the time the impulse takes to cross the accessory pathway back to the atria is also set by hand, at 50 ms, so that the P wave starts after the QRS, in the early part of the ST–T segment, as the guideline describes[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). In the enlarged view the grey trace is the same QRS and T wave without the atria, so the gap between the two lines is the retrograde P wave. The simulated P wave is smaller than in most people: about 0.046 mV above baseline in lead II, against 0.070 mV for the median of the real normal ECGs it was fitted to[34](https://therealryc.github.io/heart-in-twelve-leads/#ref-34 "Wagner 2020"), [30](https://therealryc.github.io/heart-in-twelve-leads/#ref-30 "Strodthoff 2023").

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

12 leads · II and V1 as rhythm strips · 25 mm/s · 10 mm/mV · ladder below

50 mm/s · 10 mm/mV · grey: QRS–T without the atria

Where the P wave falls in the cycle

## Puntos clave del original

- Typical AVNRT: down the slow pathway, back up the fast; atria and ventricles activate together, so the P wave hides in the QRS and shows only at its end (pseudo-S in II, III and aVF; pseudo-R′ in V1).
- Orthodromic AVRT: down the AV node, back up an accessory pathway; the retrograde P wave falls in the early ST–T segment and the QRS is narrow.
- Antidromic AVRT: down the pathway, back up the AV node; the QRS is wide and maximally pre-excited.
- Short RP (the P wave closer to the preceding QRS): typical AVNRT and orthodromic AVRT. Long RP: atypical AVNRT, PJRT and, usually, focal atrial tachycardia.
- A ladder diagram shows each limb of a circuit: where the impulse goes down, and where it comes back up.

## Referencias del capítulo

- **McGuire 1993**. McGuire MA, Janse MJ, Ross DL. "AV nodal" reentry: Part II: AV nodal, AV junctional, or atrionodal reentry?. J Cardiovasc Electrophysiol. 1993;4(5):573-86. [DOI](https://doi.org/10.1111/j.1540-8167.1993.tb01245.x) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/8269323/)


---

# 12. Ventricular arrhythmias

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#ventricular

HeartNormal
Inside the heart

Chapters

Sources

Sound


12

## Ventricular arrhythmias

Beats and rhythms that start in the ventricles

A beat that starts in ventricular muscle spreads from one point without the conduction system. Its QRS is wide, and its direction shows where it began. A run of such beats is ventricular tachycardia, and disorganized ventricular activity is ventricular fibrillation.

Rhythm

PVCsBigeminyCoupletsVTSVT with RBBBTorsadeVF

Origin of the ectopic beats

RV outflow tractLV outflow tractRV apexLV apexLV lateral wallLV inferior wall

Origin

RV outflow tract

QRS duration

205ms

QRS axis

+93°

V1

mainly negative

II · III · aVF

\+ \+ +

Ventricular rate

72/min

Rate

–/min

QRS duration

–ms

AV dissociation

–

V1

–

Brugada, steps 1–3

–

aVR (Vereckei)

–

Sinus QT

–ms

QTc (Fridericia)

–ms

Long cycle

–ms

Short cycle

–ms

Run rate

–/min

Run

–

Heart-rate-corrected QT interval (QTc).

QRS complexes

none

Deflections

–/min

Signal

synthetic

**PVCs from the RV outflow tract.** Every fourth sinus beat is followed by a PVC 394 ms after the start of the sinus QRS. The wave spreads from the RV outflow tract through muscle, so the QRS is 205 ms wide; it is mainly negative in V1 and positive in II, III and aVF, with a frontal axis of +93°. The sinus P wave after each PVC is not conducted, so the pause is fully compensatory.

### Beats that start in the ventricles

A premature ventricular complex (PVC) starts in ventricular muscle before the next sinus beat is due. It does not use the His–Purkinje system, so the wave spreads more slowly, from its origin through working muscle. The QRS is wide, and the ST segment and T wave point away from it. In the simulation the sinus node is not reset: its next P wave comes on time, finds the atrioventricular (AV) node refractory and is not conducted, so the pause after the PVC is fully compensatory. PVCs are called frequent when there is at least one on a 12-lead electrocardiogram (ECG) or more than 30 per hour, and more than 10,000 to 20,000 a day can cause a PVC-induced cardiomyopathy[45](https://therealryc.github.io/heart-in-twelve-leads/#ref-45 "Al-Khatib 2018"). The simulated PVCs are 165 to 224 ms wide, depending on the origin. That is wider than in one series of 45 patients with frequent PVCs and no structural heart disease, where they measured 142 ms in those whose left ventricle stayed normal and 159 ms in those who developed that cardiomyopathy[46](https://therealryc.github.io/heart-in-twelve-leads/#ref-46 "Carballeira Pol 2014"). In the model a fast layer represents the Purkinje network, and a wave that starts in the muscle crosses that layer no faster than it crosses muscle, which widens the QRS. The strip can also show a PVC after every sinus beat (bigeminy) or PVCs in pairs (couplets).

### Reading the origin from the QRS

The QRS of an ectopic beat points from where the wave starts toward the muscle it reaches last, so the origin can be read mainly from two groups of leads. The inferior leads (II, III, aVF) separate high from low: a focus in an outflow tract, at the top of the ventricles, sends the wave down toward the apex, and the QRS is positive in II, III and aVF; a focus at the apex or in the inferior wall sends it upward, and they are negative. V1, over the right ventricle (RV), separates right from left: a focus in the RV activates the left ventricle (LV) last, leftward and back, away from V1, so V1 is mainly negative, as in left bundle branch block (LBBB); a focus in the LV lateral wall activates the RV last, toward V1, and V1 is mainly positive, as in right bundle branch block (RBBB). The two outflow tracts are harder to tell apart: in patients, ventricular arrhythmias from the outflow tracts "usually exhibit either an RBBB or LBBB morphology with an inferior axis". The precordial transition is the first chest lead (V1 to V6, the precordial leads) in which the QRS is mainly positive; with an LBBB pattern, a transition after V3 indicates the RV outflow tract, and one by V3 could indicate a left-sided origin[47](https://therealryc.github.io/heart-in-twelve-leads/#ref-47 "Cronin 2019"). In the simulated heart the RV outflow tract focus turns mainly positive only at V4, and the LV outflow tract focus is already mainly positive in V1. For a focus at the apex or in the inferior wall, V1 helps little in the simulated heart, and the other leads help more. Choose an origin and compare its QRS in II, III, aVF and V1 with these rules; the map shows when each part of the front of the heart activated. In patients, idiopathic ventricular arrhythmias most often arise from the RV outflow tract or the ostium of the LV, the opening to which the aorta and the left atrium attach, and their likely origin "can be reasonably predicted from the QRS morphology"[45](https://therealryc.github.io/heart-in-twelve-leads/#ref-45 "Al-Khatib 2018").

### Ventricular tachycardia

Ventricular tachycardia (VT) is "≥3 consecutive complexes originating in the ventricles at a rate >100 bpm (cycle length: <600 ms)", bpm meaning beats per minute. It is sustained when it lasts more than 30 s or needs termination within 30 s because of hemodynamic compromise, and nonsustained when it stops by itself; monomorphic when the QRS keeps one shape from beat to beat, polymorphic when the shape changes[45](https://therealryc.github.io/heart-in-twelve-leads/#ref-45 "Al-Khatib 2018"). In the simulated VT the sinus node goes on firing at its own rate. Its P waves, marked on the strip, are unrelated to the QRS complexes. This is AV dissociation, with the ventricles faster than the atria. In the ladder each sinus impulse dies in the AV junction. AV dissociation, or fusion complexes, imply VT[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). The simulation does not produce capture or fusion beats, in which a well-timed sinus impulse reaches the ventricles.

### VT or supraventricular tachycardia with aberrancy?

A supraventricular tachycardia (SVT) conducted with bundle branch block, or with aberrant conduction at a fast rate, also has a wide QRS. When doubt exists, "it is safest to assume any wide-complex tachycardia is VT"[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). Two stepwise algorithms ask questions in order and stop at the first yes, which means VT. Brugada and colleagues ask: 1. Is an RS complex (an R wave followed by an S wave) absent from all precordial leads? 2. Is the interval from the onset of R to the nadir of S longer than 100 ms in any precordial lead? 3. Is there AV dissociation?[48](https://therealryc.github.io/heart-in-twelve-leads/#ref-48 "Brugada 1991"), [31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016") The cards do not apply Brugada's fourth step, the morphology criteria in V1–V2 and V6. In the 554 wide-QRS tachycardias that Brugada and colleagues studied, the four steps had a sensitivity of 0.987 and a specificity of 0.965[48](https://therealryc.github.io/heart-in-twelve-leads/#ref-48 "Brugada 1991"); independent studies did not reproduce that accuracy[49](https://therealryc.github.io/heart-in-twelve-leads/#ref-49 "Vereckei 2014"). Vereckei and colleagues read lead aVR alone: 1. an initial R wave; 2. an initial r or q wave wider than 40 ms; 3. a notch on the descending limb at the onset of a predominantly negative QRS; 4. a ratio vi/vt of 1 or less, where vi and vt are the voltage excursions over the first and the last 40 ms of the QRS; a ratio above 1 suggests SVT[50](https://therealryc.github.io/heart-in-twelve-leads/#ref-50 "Vereckei 2008"). The cards apply both algorithms to the simulated complex, measuring intervals from the QRS onset that the simulation computes. A wave counts only if it peaks, or bottoms out, before the QRS ends; a deflection still growing at the end of the QRS is taken as the start of the ST segment, not as an S or an r wave. On the simulated atrial tachycardia with RBBB, Brugada's steps and the aVR algorithm disagree.

### Torsade de pointes

Torsade de pointes is "polymorphic VT that occurs in the setting of a long QT interval and is characterized by a waxing and waning QRS amplitude". It often begins with a long-short sequence, with a long coupling interval to the first beat, and may come in salvos of nonsustained VT; bradycardia, including high-grade AV block, can provide the long-short sequence[45](https://therealryc.github.io/heart-in-twelve-leads/#ref-45 "Al-Khatib 2018"). The term is best kept for a QT over 500 ms with QT–U deformity: distortion of the T and U waves, such as flattened or bifid T waves, or prominent U waves fused with the T waves[42](https://therealryc.github.io/heart-in-twelve-leads/#ref-42 "Drew 2010"). The U wave is a low, slow deflection that can follow the T wave[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). In the simulated heart, recovery is slowed as if by a drug that blocks the rapid delayed-rectifier potassium current (IKr), with the same change as in chapter 23: every ventricular action potential lengthens and its final phase slows. The model changes the shape of the action potential directly; it does not simulate the potassium channel. The sinus QT corrected for heart rate (QTc, by Fridericia's formula) comes out over 500 ms and the T wave lower than normal, but because every cell is changed alike, the T wave is not notched and no U wave follows it. The simulation therefore shows no QT–U deformity. A PVC is followed by its pause, the beat after the pause has a longer QT still, and a beat on its T wave starts the run. The simulation makes the QRS axis turn by moving the run's origin around the apex from beat to beat; it does not model why the axis turns in patients.

### Ventricular fibrillation

Ventricular fibrillation (VF) is "rapid, grossly irregular electrical activity with marked variability in electrocardiographic waveform, ventricular rate usually >300 bpm (cycle length: <200 ms)"[45](https://therealryc.github.io/heart-in-twelve-leads/#ref-45 "Al-Khatib 2018"). There are no QRS complexes to measure. The heart model has no fibrillating wavefronts. The VF on this page is phenomenological, a randomly wandering ventricular vector run fast enough to match that description, and it does not model how fibrillation works.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

12 leads · II and V1 as rhythm strips · 25 mm/s · 10 mm/mV · ladder below

The PVC · 50 mm/s · 10 mm/mV · grey: a sinus beat

The heart from the front · colour: activation

## Puntos clave del original

- A ventricular beat spreads from its origin through muscle: the QRS is wide and points away from where the beat started.
- The inferior leads tell a high origin (positive: the outflow tracts) from a low one (negative: the apex or inferior wall); V1 tells the right ventricle (mainly negative) from the left ventricular lateral wall (mainly positive). Outflow-tract foci can show either pattern in V1; with an LBBB pattern, a precordial transition by V3 suggests the left side.
- VT is three or more consecutive ventricular complexes faster than 100 per minute; AV dissociation or fusion complexes imply VT, and a wide-complex tachycardia in doubt is safest assumed to be VT.
- Torsade de pointes is polymorphic VT with a long QT and a waxing and waning QRS amplitude, often started by a long-short sequence.
- VF is rapid, grossly irregular activity, usually faster than 300 per minute, with no QRS complexes.

## Referencias del capítulo

- **Vereckei 2014**. Vereckei A. Current algorithms for the diagnosis of wide QRS complex tachycardias. Curr Cardiol Rev. 2014;10(3):262-76. [DOI](https://doi.org/10.2174/1573403x10666140514103309) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/24827795/)
- **Cronin 2019**. Cronin EM, Bogun FM, Maury P, et al. 2019 HRS/EHRA/APHRS/LAHRS expert consensus statement on catheter ablation of ventricular arrhythmias. J Arrhythm. 2019;35(3):323-484. [DOI](https://doi.org/10.1002/joa3.12185) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/31293696/)
- **Carballeira Pol 2014**. Carballeira Pol L, Deyell MW, Frankel DS, et al. Ventricular premature depolarization QRS duration as a new marker of risk for the development of ventricular premature depolarization-induced cardiomyopathy. Heart Rhythm. 2014;11(2):299-306. [DOI](https://doi.org/10.1016/j.hrthm.2013.10.055) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/24184787/)


---

# 13. AV block

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#avblock

HeartNormal
Inside the heart

Chapters

Sources

Sound


13

## AV block

Conduction from atria to ventricles

In the normal heart every impulse from the atria must cross the atrioventricular (AV) node and the His bundle to reach the ventricles. AV block is a delay or a failure of that crossing, and it is named by the pattern of conducted and non-conducted P waves.

Block

First degreeMobitz IMobitz II2:1High gradeComplete

Where the block is

AV nodeBelow the His bundle

Escape rhythm

JunctionalVentricular

PR interval300 ms

210300400 ms

Sinus rate75 /min

507095 /min

Right bundle branch block

Atrial rate

75/min

Ventricular rate

56/min

P : QRS

4:3

PR

170–300ms

QRS duration

87ms

Reading

Second degree, Mobitz I

**Mobitz I (Wenckebach), 4:3.** The PR lengthens from 170 to 300 ms by shrinking steps, then one P wave is not conducted and the cycle restarts with a PR of 170 ms. The PRs before and after the blocked P differ. In the ladder the delay grows in the AV node.

### The AV junction and the ladder diagram

In the normal heart every impulse from the atria reaches the ventricles through the AV node and the His bundle, and block can lie in the node, within the His bundle, or below it[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). Neither structure produces a deflection at the body surface, so the electrocardiogram (ECG) shows only the result: how long each conducted P wave takes to reach its QRS (the PR interval), and which P waves are followed by no QRS at all. The ladder diagram under the strip shows the conduction through the AV node and His bundle that the ECG does not record. Its middle tier is the AV junction, split at the dashed line: the AV node above, the His bundle and bundle branches below. Each line is one impulse, drawn from times the simulation computed; a line that ends in a short bar is an impulse that was blocked, and the numbers are PR intervals in milliseconds. The simulated P wave is smaller than in most people: about 0.046 mV above baseline in lead II, against 0.070 mV for the median of the real normal ECGs it was fitted to[30](https://therealryc.github.io/heart-in-twelve-leads/#ref-30 "Strodthoff 2023"). The letters above the strip mark each P wave.

### First-degree AV block

First-degree AV block is "P waves associated with 1:1 atrioventricular conduction and a PR interval >200 ms". The guideline calls the term a misnomer: no P wave is blocked, each is conducted late[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). In the simulation the extra time is spent in the AV node, so the upper part of each AV line is longer.

### Second degree: Mobitz I and Mobitz II

Second-degree AV block is "P waves with a constant rate (<100 bpm) where atrioventricular conduction is present but not 1:1". In Mobitz I (Wenckebach) a periodic single P wave is not conducted and the P waves before and after it have "inconstant PR intervals"; in Mobitz II the PR intervals are constant[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). In the simulated Mobitz I the AV node takes longer with each beat, by smaller and smaller steps, until one impulse fails; after the pause the PR is short again and the cycle repeats. In the simulated Mobitz II every conducted P wave has the same PR, and the block lies below the His bundle. Mobitz I is usually associated with a narrow QRS and Mobitz II most often with a wide one, though Mobitz I with a narrow QRS can arise below the node[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). The toggle adds right bundle branch block to every beat that crosses the His bundle: the conducted beats and, in complete block, a junctional escape.

### 2:1 block

In 2:1 AV block "every other P wave conducts to the ventricles"[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). It cannot be classed as Mobitz I or Mobitz II from the strip. Both definitions turn on the PR intervals of the P waves before and after a non-conducted one: changing in Mobitz I, constant in Mobitz II. In 2:1 block each conducted P wave stands between two blocked ones, so it is always the first beat of its cycle. There is never a second conducted PR to show whether conduction was slowing before the block, and the PR is the same before and after every blocked P whatever the mechanism. The guideline's definition of Mobitz II explicitly excludes 2:1 block[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). If you move the block between the AV node and the His–Purkinje system, only the ladder changes. In patients the strip can still hint at the level. The guideline notes that "severe first-degree atrioventricular block (PR >0.30 s) and a narrow QRS usually indicates atrioventricular node delay", and that 2:1 block with bundle branch block "is frequently assumed to be indicative of infranodal block; however, 15% to 20% of these patients can have block in the atrioventricular node"[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). Ambulatory monitoring or an exercise test can help: exercise improves conduction through the AV node, whereas block below the node will not resolve and is likely to worsen as the sinus rate rises[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019").

### High-grade and complete block

High-grade AV block is "≥2 consecutive P waves at a constant physiologic rate that do not conduct to the ventricles with evidence for some atrioventricular conduction"; complete (third-degree) block is "no evidence of atrioventricular conduction"[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). In complete block the ventricles are driven by an escape rhythm. Block at the level of the AV node is associated with "a faster and more reliable" junctional escape; block within or below the His bundle with "a slower and more unpredictable" ventricular escape[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). A junctional escape reaches the ventricles through the His–Purkinje system, so its QRS is as narrow as a conducted one; a ventricular escape starts in muscle and is wide. The escape rates in the simulation are illustrative settings, not published values, and the simulation adds an escape rhythm only in complete block. In the simulated high-grade and 2:1 block the ventricles wait for the next conducted P wave, even through pauses longer than the interval at which the junctional escape fires in complete block. In complete block the P waves march through at their own rate, unrelated to the QRS complexes.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

12 leads · II and V1 as rhythm strips · 25 mm/s · 10 mm/mV · ladder below, PR in ms

Lead II · 50 mm/s · around the first non-conducted P wave

The PR interval of every P wave

## Puntos clave del original

- First-degree AV block is 1:1 conduction with a PR over 200 ms; no P wave is blocked.
- Mobitz I: a periodic single non-conducted P wave with inconstant PR intervals around it. Mobitz II: the same with constant PR intervals.
- 2:1 block cannot be called Mobitz I or II from the strip: there is never a second conducted PR to compare, and the guideline excludes it from Mobitz II.
- High-grade block is two or more consecutive non-conducted P waves with some conduction; in complete block there is none, and an escape rhythm drives the ventricles.
- Block in the AV node usually has a faster, more reliable junctional escape with a narrow QRS; block below it a slower, less predictable ventricular escape.

## Referencias del capítulo



---

# 14. Bundle branch block

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#bbb

HeartNormal
Inside the heart

Chapters

Sources

Sound


14

## Bundle branch block

Intraventricular conduction

When a bundle branch is blocked, its territory is activated late and slowly through working muscle. The QRS widens, and its terminal forces point toward the territory activated last.

Block in

NoneRight bundleLeft bundleLeft anterior fascicleLeft posterior fascicleRight bundle + left anterior

Conduction in that branchblocked

normal+10+20+30block

Time after QRS onset57 ms

050100150200 ms

Normal beat in grey

QRS duration

158ms

QRS axis

+107°

V1

RSr′

S in lead I

67ms

R-peak time V6

43ms

Reading

Complete RBBB

**Complete RBBB.** The right bundle conducts nothing, so its territory is reached through muscle. The QRS is 158 ms and the axis +107°.

### How a block widens the QRS

Below the His bundle the conduction system divides. The right bundle runs to the right ventricle; the left bundle fans into an anterior fascicle, a posterior fascicle and septal fibres. In the normal heart the His–Purkinje system delivers the impulse to the endocardium of both ventricles almost at once, and the ventricles are activated within about 80 ms[27](https://therealryc.github.io/heart-in-twelve-leads/#ref-27 "Durrer 1970"). When a bundle branch is blocked, its ventricle is reached instead by the wave that crosses the septum through working muscle, which conducts several times more slowly than Purkinje fibres. The blocked ventricle is activated late and alone, so its forces are no longer cancelled by the other ventricle's and form the broad terminal part of the QRS.

### Right bundle branch block

The septum and the left ventricle are activated normally, so the first half of the QRS resembles the normal complex. The right ventricular free wall is activated last, rightward and anteriorly. That late force produces the R′ in V1 and the broad S in I and V6. In adults, complete right bundle branch block (RBBB) requires a QRS of 120 ms or more, an rsr′, rsR′ or rSR′ in V1 or V2, and an S wave in I and V6 longer than the R or longer than 40 ms[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"). The same pattern with a QRS of 110 to 119 ms is incomplete RBBB[26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"); the 2009 statement prints 110 to 120 ms[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"). The simulated RBBB axis is further right than in most patients: among the 274 real RBBB tracings whose median beat the model was fitted to, the median axis is −21.5°[30](https://therealryc.github.io/heart-in-twelve-leads/#ref-30 "Strodthoff 2023"). In the simulated lead I the broad terminal S outweighs the small r wave, so the net area of lead I, from which the axis is computed, is negative.

### Left bundle branch block

The septum is activated from right to left, the reverse of normal, so the small septal q waves of I, V5 and V6 disappear. The left ventricle is then activated slowly, from the septum around to the lateral wall. Complete left bundle branch block (LBBB) requires a QRS of 120 ms or more, a broad notched or slurred R in I, aVL, V5 and V6, no q wave in I, V5 and V6, and an R-peak time over 60 ms in V5 and V6[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"). A QRS over 110 ms without either the RBBB or the LBBB pattern is a nonspecific intraventricular conduction delay (IVCD)[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"). Stricter criteria, proposed for the era of cardiac resynchronization therapy, require a QRS of 140 ms or more in men or 130 ms or more in women, with mid-QRS notching or slurring in at least two contiguous leads[51](https://therealryc.github.io/heart-in-twelve-leads/#ref-51 "Strauss 2011").

Hearts with LBBB are often diseased as well as blocked. In this simulation conduction everywhere, in both ventricles and the atria, is also about 16% slower, so the P wave and the PR interval lengthen too. That factor best fitted the median beat of 291 real LBBB tracings from the PTB-XL and PTB-XL+ datasets[34](https://therealryc.github.io/heart-in-twelve-leads/#ref-34 "Wagner 2020"), [30](https://therealryc.github.io/heart-in-twelve-leads/#ref-30 "Strodthoff 2023"), but the fit is loose: the simulated QRS is 176 ms, against the median's 156 ms. The simulated LBBB also keeps a small q wave in V6, which the criteria exclude, and ends with a small r′ in V1, so the page reads it as a nonspecific IVCD. In the median of the real tracings, V6 has no q wave[30](https://therealryc.github.io/heart-in-twelve-leads/#ref-30 "Strodthoff 2023").

### Fascicular block

A fascicle's territory is small and the rest of the left ventricle reaches it quickly, so a fascicular block shifts the axis without widening the QRS beyond 120 ms. In left anterior fascicular block (LAFB) the anterosuperior wall activates last, pulling the axis to between −45° and −90°, with qR in aVL, an R-peak time in aVL of 45 ms or more, and rS in II, III and aVF[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"), [26](https://therealryc.github.io/heart-in-twelve-leads/#ref-26 "Kusumoto 2019"). Left posterior fascicular block (LPFB) moves the axis to between +90° and 180°, with rS in I and aVL and qR in III and aVF[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"). Both fascicular blocks also require a QRS under 120 ms[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"). When RBBB occurs with a fascicular block, the 2009 recommendations advise naming each defect (RBBB with LAFB) rather than calling it bifascicular block[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"); beside RBBB, which already widens the QRS, this page reads the fascicular criteria without the 120 ms limit. The simulated left posterior fascicular block moves the axis only to about +75°, short of the criteria, so the page reads it as normal conduction. Neither fascicular block was used to fit the model.

### Secondary ST–T changes

Repolarization follows the order of activation. When activation is abnormal, the ST segment and T wave are discordant, pointing away from the terminal QRS forces. In bundle branch block this discordance is expected and is not, by itself, a sign of ischemia.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

Long axis, from the front

Short axis, from below

V1, V6 · 50 mm/s · grey: normal

## Puntos clave del original

- When a branch is blocked, its territory activates late through working muscle, and the QRS widens to 120 ms or more.
- The terminal QRS points toward the territory that activated last: rightward and anterior in RBBB (R′ in V1, broad S in I and V6), leftward and posterior in LBBB (broad R in I and V6, QS or rS in V1).
- LBBB removes the septal q waves of I, V5 and V6, because the septum activates from right to left.
- Fascicular blocks shift the axis without widening the QRS: LAFB to between −45° and −90°, LPFB to between +90° and 180°.
- In bundle branch block, discordant ST–T changes are the expected secondary pattern.

## Referencias del capítulo



---

# 15. Pre-excitation

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#wpw

HeartNormal
Inside the heart

Chapters

Sources

Sound


15

## Pre-excitation

Accessory pathways and the delta wave

An accessory pathway connects atrium to ventricle outside the atrioventricular (AV) node. It starts ventricular activation early, from a single site, so the PR is short, the QRS begins with a slurred delta wave, and the complex points away from the pathway.

Rhythm

Sinus rhythmAtrial fibrillation

Accessory pathway

Right anteroseptalRight free wallRight posteroseptalLeft posteroseptalLeft posteriorLeft lateral

Extra delay in the AV node+0 ms

04080 ms

Pathway refractory period240 ms

200300400 ms

PR interval

99ms

QRS duration

142ms

Pathway ahead by

70ms

QRS axis

−20°

V1

mainly negative

Reading

Pre-excitation

Ventricular rate

–/min

Shortest pre-excited RR

–ms

QRS duration

–ms

Pre-excited beats

–

RR intervals

irregular

P waves

none

**A right free wall pathway.** The pathway fires 70 ms before the His–Purkinje system, so the PR is 99 ms and the QRS 142 ms, starting with a slurred delta wave. Both numbers meet the criteria that suggest full pre-excitation. The QRS is mainly negative in V1: the right side activates first, and the wave travels leftward and back, away from V1.

### Two routes to the ventricles

An accessory pathway connects an atrium to a ventricle across the AV groove, bypassing the AV node and the His–Purkinje system. It is manifest when it conducts from atrium to ventricle and so shows on the electrocardiogram (ECG), and concealed when it conducts only backward and does not change the ECG in sinus rhythm[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). In a manifest pathway, ventricular activation over the pathway "competes with the anterograde conduction over the AV node and spreads from the accessory pathway insertion point in the ventricular myocardium"; depending on the relative contribution of the two routes, a variable degree of pre-excitation is seen, with a short PR and slurring of the initial upstroke of the QRS, the delta wave[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). In the simulation the pathway's ventricular end fires 10 ms after the atrial wave reaches its atrial end. From there the wave crosses working muscle slowly, producing the delta wave; when the impulse through the AV node arrives, the Purkinje network activates the rest of the ventricles quickly, and the QRS is a fusion of the two. Slowing the AV node lets the pathway work alone for longer. The PR stays the same, but the delta wave and the QRS lengthen, until the QRS is as wide as a beat activated over the pathway alone. With the left posteroseptal pathway the QRS is that wide already.

### The ECG criteria

In adults, full pre-excitation is suggested by a PR under 120 ms, assuming no block within the atria; a delta wave "which either interrupts the P wave or arises immediately after its termination"; a QRS over 120 ms; and secondary ST–T changes[17](https://therealryc.github.io/heart-in-twelve-leads/#ref-17 "Surawicz 2009"). How short the PR is depends on how soon the sinus impulse reaches the pathway. In the simulated heart it reaches the right anteroseptal pathway first and the left lateral one last; with a left lateral pathway the PR stays above 120 ms and the QRS below 120 ms, because the AV node's impulse arrives soon after the pathway's. The beat is pre-excited but does not meet the criteria. Left lateral pathways in particular may show varying degrees of pre-excitation because of fusion with conduction through the AV node[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016").

### Locating the pathway

The pre-excited part of the QRS starts at the pathway's ventricular end and travels away from it. In the simulated heart a left lateral or left posterior pathway activates the left ventricle first, the wave travels rightward and forward, and the QRS is mainly positive in V1. A right-sided pathway activates the right ventricle first and the left posteroseptal one the septum, and with both V1 is mainly negative. With the two posteroseptal pathways the QRS is mainly negative in III and aVF. Published algorithms read the delta wave. Arruda and colleagues used the first 20 ms of the delta wave in I, II, aVF and V1, scored positive, negative or isoelectric, with the ratio of R to S in III and V1, to place a pathway at one of 10 sites around the tricuspid and mitral rings or in the coronary venous system; prospectively, sensitivity was 90% and specificity 99%, and a truly negative delta wave in lead II predicted ablation within the coronary venous system[52](https://therealryc.github.io/heart-in-twelve-leads/#ref-52 "Arruda 1998"); later series found that sign in only 70% of such pathways, with a specificity of 68%[53](https://therealryc.github.io/heart-in-twelve-leads/#ref-53 "Lebloa 2022"). The first step of Arruda's algorithm rules out a left free-wall pathway from the delta wave's polarity in I and V1, and in patients inferior paraseptal (posteroseptal) pathways characteristically show negative delta waves in at least two inferior leads[53](https://therealryc.github.io/heart-in-twelve-leads/#ref-53 "Lebloa 2022"). In a 2023 multicentre study in which the authors of EASY-WPW developed and validated their algorithm in 211 patients, Arruda's algorithm located 75% of pathways correctly, against 94% for EASY-WPW[54](https://therealryc.github.io/heart-in-twelve-leads/#ref-54 "El Hamriti 2023"). Arruda's full decision tree is not reproduced here, and the simulated heart is not a test of it: in this idealized heart, whose ventricles are cut flat at the base, the first 20 ms of the delta wave are small, and at both posteroseptal sites they point toward the feet before the rest of the QRS turns away from them. The page therefore shows the direction of the whole pre-excited QRS, not the first 20 ms.

### Pattern and syndrome

The Wolff-Parkinson-White (WPW) pattern is the ECG sign of a manifest pathway. Without documented supraventricular tachycardia (SVT) or symptoms consistent with it, the pattern is asymptomatic pre-excitation; the WPW syndrome is documented SVT, or symptoms consistent with SVT, in a patient with pre-excitation in sinus rhythm[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). Manifest pre-excitation is found on 0.1% to 0.3% of ECGs in the general population[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016").

### Pre-excited atrial fibrillation

In atrial fibrillation (AF) the pathway can conduct the fibrillation to the ventricles: "When AF occurs in patients with ventricular pre-excitation, if the accessory pathway has a short refractory period, this may allow for rapid pre-excited AV conduction; the resulting fast, often irregular, broad-complex tachycardia is often unstable and may lead to ventricular fibrillation." A shortest pre-excited RR interval under 250 ms during AF is one of the features associated with a higher risk of sudden cardiac death, and verapamil or diltiazem, given for a pre-excited AF, may accelerate the ventricular rate[31](https://therealryc.github.io/heart-in-twelve-leads/#ref-31 "Page 2016"). In the simulation the fibrillatory waves are a generic signal added to the tracing, not computed from the atrial muscle. The pathway conducts at a random moment once its refractory period has passed, and after the longer pauses the AV node may join in, so each QRS is a different mixture of the two routes and its width varies from beat to beat. The slider sets the pathway's refractory period.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

Right free wall pathway · 25 mm/s · 10 mm/mV

One beat, lead V1 · 100 mm/s · grey: no pathway · ladder below

The AV rings, seen from the apex · pick a pathway

## Puntos clave del original

- Suggestive of full pre-excitation: PR under 120 ms, a delta wave, QRS over 120 ms, and secondary ST–T changes.
- The pre-excited QRS is a fusion: the pathway starts it early and slowly, the AV node and His–Purkinje system finish it; slowing the node increases pre-excitation.
- A pathway reached late by the sinus impulse, such as a left lateral one, may show little pre-excitation.
- The pre-excited QRS points away from the pathway; published algorithms localize the pathway from the delta wave in specific leads, and the full Arruda decision tree is not reproduced here.
- WPW syndrome is pre-excitation with documented SVT or symptoms consistent with SVT; pre-excited AF is fast, irregular and broad, and a shortest pre-excited RR under 250 ms marks higher risk.

## Referencias del capítulo

- **Lebloa 2022**. Lebloa M, Pascale P. Preprocedural Discrimination of Posteroseptal Accessory Pathways Ablated from the Right Endocardium from Those Requiring a Left-sided or Epicardial Coronary Venous Approach. Arrhythm Electrophysiol Rev. 2022;11:e07. [DOI](https://doi.org/10.15420/aer.2021.55) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/35734142/)
- **El Hamriti 2023**. El Hamriti M, Braun M, Molatta S, et al. EASY-WPW: a novel ECG-algorithm for easy and reliable localization of manifest accessory pathways in children and adults. Europace. 2023;25(2):600-609. [DOI](https://doi.org/10.1093/europace/euac216) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/36504238/)


---

# 16. Atrial abnormality

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#atria

HeartNormal
Inside the heart

Chapters

Sources

Sound


16

## Atrial abnormality

The P wave and the two atria

The P wave is the sum of two atria activating one after the other, the right before the left. Enlarge the left atrium and the P wave lengthens and turns negative late in V1; enlarge the right and its early, inferior forces grow.

Atria

NormalLeft enlargedRight enlargedBoth enlarged

Atrial walls (both atria)

3 mm6 mm

Conduction in the atria

NormalSlowed

Time after the sinus node fires57 ms

060120180240 ms

Normal P wave in grey

P duration

135ms

P in lead II

0.049mV

Initial P, V1 or V2

0.022mV

Terminal force V1

0.034mm·s

P axis

+54°

PR interval

183ms

**Meets: P duration 120 ms or more.** In this heart the left atrium holds 85 mL instead of 36. The atria finish activating 165 ms after the sinus node fires; measured on atrial activation alone, the P wave lasts 135 ms, with its axis at +54°. The late left atrial activation is a low shoulder at the end of the P wave in II, not a second peak.

### Two atria in one wave

The sinus node fires in the high right atrium. The wave spreads through the right atrium and reaches the left mainly through Bachmann’s bundle, about 30 ms after the right[22](https://therealryc.github.io/heart-in-twelve-leads/#ref-22 "Lemery 2007"). The left atrium’s forces, which come later, point more to the left and back than the right atrium’s[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). So in lead II the P wave is one rounded hump, and in V1, which looks at the heart from the front, it is often biphasic: positive while the right atrium activates, negative while the left does.

### Left atrial abnormality

Left atrial abnormality usually prolongs total atrial activation, because the left atrium begins and ends later than the right. As the delay grows, the right and left atrial peaks, normally fused, separate into a notched or double-peaked P wave[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). The 2009 recommendations list a P-wave duration of 120 ms or more and a widely notched P wave, with peaks 40 ms or more apart, as of equal value to the P terminal force in V1 (the product of the depth and the duration of the terminal negative part), which is the criterion used most often; a terminal P axis of −30° to −90° is also useful, and a purely negative P wave in V1 is suggestive[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). That document gives no cutoff for the terminal force. In a general-population study, Eranti and colleagues treated 0.04 mm·s or more as abnormal; only 0.06 mm·s or more independently predicted death and atrial fibrillation[55](https://therealryc.github.io/heart-in-twelve-leads/#ref-55 "Eranti 2014"). The conduction delay often lies in Bachmann’s bundle and possibly in the left atrial muscle[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009").

### Right atrial abnormality

Right atrial abnormality raises the amplitude of the early P-wave forces and shifts the P vector to the right. A P wave taller than 2.5 mm in lead II is characteristic, often peaked, presumably because a larger right atrial component adds to the simultaneous left atrial one. An initial positive P of 1.5 mm (0.15 mV) or more in V1 or V2 also indicates right atrial abnormality; a rightward P axis and a peaked shape without increased height are supportive. Total P duration is usually normal[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009").

### The term “atrial abnormality”

Dilatation, hypertrophy of the atrial muscle, raised atrial pressure, a stiff ventricle and slow conduction inside the atria all change the P wave, often together, and the electrocardiogram (ECG) may not be able to tell them apart. The recommendations therefore prefer “left atrial abnormality” and “right atrial abnormality” to enlargement, and name intra-atrial conduction delay as its own category when the P wave widens without taller atrial components[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009").

### The simulated atria

Each control changes the simulated atria, and the P waves are computed from the new heart. Enlarging an atrium dilates its cavity. The simulated atria share one wall thickness, so thickening the walls thickens both. Slowing conduction slows the wave in the muscle of both atria and in Bachmann’s bundle. In this heart the two atria also meet along a broad septum that conducts at ordinary speed, so slowing Bachmann’s bundle alone changes little; the delay comes from the larger atrium and the slower muscle. The late left atrial activation shows as a low late shoulder in lead II rather than a separate peak, and the simulated limb-lead P waves are smaller than the median normal PTB-XL P wave the heart was fitted to[34](https://therealryc.github.io/heart-in-twelve-leads/#ref-34 "Wagner 2020"), [30](https://therealryc.github.io/heart-in-twelve-leads/#ref-30 "Strodthoff 2023"), so no setting reaches the amplitude criteria, and the figure shows only the direction of each change. The measurements are made on atrial activation alone, because the atrial recovery wave starts inside the P wave. A larger or slower atrium also delays the wave's arrival at the atrioventricular node, so the PR interval lengthens with it.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

The atria, cut through · colour: activation

II and V1 · 50 mm/s · 40 mm/mV

## Puntos clave del original

- The P wave is right atrial activation followed by left; the left atrium’s later forces point more to the left and back.
- Left atrial abnormality lengthens and splits the P wave: a duration of 120 ms or more, a notch of 40 ms or more, a deep, broad terminal negative P in V1.
- Right atrial abnormality raises the early P forces: a P wave over 2.5 mm in II or an initial P of 1.5 mm or more in V1 or V2, with a rightward P axis.
- The 2009 recommendations give no cutoff for the P terminal force in V1; 0.04 mm·s is one study’s threshold for abnormal.
- The ECG may not separate dilatation, hypertrophy, pressure and slow conduction, so the recommendations prefer “atrial abnormality”.

## Referencias del capítulo

- **Eranti 2014**. Eranti A, Aro AL, Kerola T, et al. Prevalence and prognostic significance of abnormal P terminal force in lead V1 of the ECG in the general population. Circ Arrhythm Electrophysiol. 2014;7(6):1116-21. [DOI](https://doi.org/10.1161/CIRCEP.114.001557) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/25381332/)


---

# 17. Ventricular hypertrophy

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#lvh

HeartNormal
Inside the heart

Chapters

Sources

Sound


17

## Ventricular hypertrophy

Wall thickness and the voltage criteria

A thicker wall takes longer to cross and produces larger forces, so the QRS grows taller and a little wider. Most hearts with hypertrophy still do not meet the voltage criteria.

Left ventricular wall

9 mm (normal)12 mm15 mm18 mm

Right ventricular wall

4 mm (normal)6 mm8 mm10 mm

Measure

Sokolow-LyonCornellPeguero-Lo PrestiRight ventricle

Thresholds for

MenWomen

Secondary ST–T change (a modelling choice)

Sokolow-Lyon

3.39mV

Cornell voltage

1.47mV

Cornell product

1367mm·ms

Peguero-Lo Presti

2.92mV

QRS axis

+53°

R/S in V1

0.5

**Peguero-Lo Presti is positive; Sokolow-Lyon, Cornell voltage and Cornell product are not.** The left ventricular wall is 15 mm and the right 4 mm, with 213 g of left ventricular muscle. The QRS is 93 ms and the axis +53°. Thresholds are for men.

### More muscle, larger forces

The changes that go with ventricular hypertrophy are a larger and longer QRS, a shift of its vectors, abnormal ST segments and T waves, and abnormal P waves[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). In this simulation the activation wave crosses the wall from the inner to the outer surface far more slowly than it runs along the inner surface, so in a thicker wall a larger area of activated muscle faces resting muscle for longer, and the left ventricle’s forces grow and last a little longer. The simulated left ventricular walls are normally 9 mm thick, within the adult range of 6 to 10 mm for men and 6 to 9 mm for women, and the right ventricular wall 4 mm, against 3 ± 1 mm[56](https://therealryc.github.io/heart-in-twelve-leads/#ref-56 "Lang 2015"). The controls thicken the walls evenly, as in concentric hypertrophy.

### The voltage criteria

Amplitudes are given in millimetres at standard gain (10 mm = 1 mV)[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). The Sokolow-Lyon index adds the S wave in V1 to the R wave in V5 or V6; over 35 mm (3.5 mV) is positive[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"), [57](https://therealryc.github.io/heart-in-twelve-leads/#ref-57 "Casale 1987"). The Cornell voltage adds the R wave in aVL to the S wave in V3: over 2.8 mV in men and 2.0 mV in women[57](https://therealryc.github.io/heart-in-twelve-leads/#ref-57 "Casale 1987"). The Cornell product multiplies the Cornell voltage by the QRS duration; over 2436 mm·ms is positive[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"), [58](https://therealryc.github.io/heart-in-twelve-leads/#ref-58 "Molloy 1992"), and a later convention adds 0.8 mV to the Cornell voltage in women[59](https://therealryc.github.io/heart-in-twelve-leads/#ref-59 "Pewsner 2007"), as this page does, keeping the 2436 mm·ms threshold. The Peguero-Lo Presti criterion adds the deepest S wave in any lead to the S wave in V4[60](https://therealryc.github.io/heart-in-twelve-leads/#ref-60 "Peguero 2017"), positive at 2.8 mV or more in men and 2.3 mV or more in women[61](https://therealryc.github.io/heart-in-twelve-leads/#ref-61 "Tavares 2021"). The voltage criteria apply to adults older than 35 years[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009").

### Low sensitivity

Sensitivity is usually less than 50%, and specificity often 85% to 90%[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). Against autopsy in 135 patients, Sokolow-Lyon was 22% sensitive and 100% specific, Cornell voltage 42% and 96%[57](https://therealryc.github.io/heart-in-twelve-leads/#ref-57 "Casale 1987"). In another autopsy series, with specificity held at 95%, the Cornell product detected 51% of hypertrophied hearts and the Cornell voltage 36%[58](https://therealryc.github.io/heart-in-twelve-leads/#ref-58 "Molloy 1992"). A systematic review of 21 studies in hypertension found a median sensitivity of 21% for Sokolow-Lyon (range 4% to 52%) with a median specificity of 89%, and concluded that the electrocardiogram (ECG) should not be used to rule hypertrophy out[59](https://therealryc.github.io/heart-in-twelve-leads/#ref-59 "Pewsner 2007"). Against echocardiography, Peguero-Lo Presti was 62% sensitive where Cornell voltage was 35%, with all specificities at 90% or more[60](https://therealryc.github.io/heart-in-twelve-leads/#ref-60 "Peguero 2017"); in 592 older adults sensitivity and specificity were 28% and 93% for Sokolow-Lyon, 35% and 90% for Cornell voltage, and 52% and 82% for Peguero-Lo Presti[61](https://therealryc.github.io/heart-in-twelve-leads/#ref-61 "Tavares 2021"). Voltage also depends on age, sex, race and build: obesity raises left ventricular mass without raising voltage, perhaps because fat insulates and moves the heart away from the electrodes[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). The simulated heart shows the same insensitivity: its normal Sokolow-Lyon index is well under the threshold, and the left ventricular wall has to double before the index crosses it.

### Secondary ST–T abnormalities

The “typical strain” pattern of older texts consisted of J-point depression, convex, down-sloping ST depression and an asymmetrically inverted T wave. Because such changes also occur without increased work, as in dilated and hypertrophic cardiomyopathy, the 2009 recommendations call them secondary ST–T abnormalities and discourage “strain”. Their presence gives major support to a diagnosis otherwise based on voltage alone, and goes with a larger left ventricular mass and a higher risk[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). The toggle produces them at any wall thickness by changing recovery: the inner half of the left ventricular free wall, and nearly all of the septum, hold a slightly lower plateau and recover 20 ms earlier than the rest. That is a modelling choice that reproduces the shape, not a measured property of hypertrophied muscle.

### Right ventricular hypertrophy

The right ventricle is thin, and its forces are normally hidden by the left ventricle’s. As it thickens, its rightward and anterior forces emerge: a tall R wave in V1, deep S waves in V5 and V6, and a rightward axis. The 2009 recommendations tabulate fifteen amplitude and timing criteria, among them an R wave in V1 over 6 mm, an R/S ratio in V1 over 1, an S wave in V6 over 3 mm and an R-peak time in V1 over 35 ms, with supporting signs such as an S wave in I with a Q wave in III and negative T waves in V1 to V3, and state that right axis deviation and prominent anterior forces should be required in nearly all cases[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). The note under the cards lists the criteria this heart meets. One row, a limb-lead index given as under 15 mm, is not computed here: as printed it would be met by most normal hearts. This heart's R wave in V1 is taller than in most adults: 0.56 mV, against 0.13 mV in the median of the real normal ECGs it was fitted to[30](https://therealryc.github.io/heart-in-twelve-leads/#ref-30 "Strodthoff 2023"). A thicker left ventricle alone makes it taller still, so in this heart a tall R in V1 is not specific to the right ventricle.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

Short axis, from below · colour: activation

Sokolow-Lyon leads · 50 mm/s · 10 mm/mV

## Puntos clave del original

- A thicker wall takes longer to cross and produces larger forces: taller voltages and a slightly wider QRS.
- Sokolow-Lyon (SV1 + RV5 or RV6 over 3.5 mV), Cornell voltage (RaVL + SV3 over 2.8 mV in men, 2.0 mV in women), the Cornell product and Peguero-Lo Presti all measure the larger QRS.
- Their sensitivity is usually under 50%, so a normal ECG does not rule hypertrophy out.
- Secondary ST–T abnormalities, once called strain, support the diagnosis; the term strain is discouraged.
- Right ventricular hypertrophy shows as a tall R in V1, deep S in V5 and V6 and right axis deviation, which should be present in nearly all cases.

## Referencias del capítulo

- **Tavares 2021**. Tavares CAM, Samesima N, Hajjar LA, et al. Clinical applicability and diagnostic performance of electrocardiographic criteria for left ventricular hypertrophy diagnosis in older adults. Sci Rep. 2021;11(1):11516. [DOI](https://doi.org/10.1038/s41598-021-91083-9) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/34075174/)
- **Molloy 1992**. Molloy TJ, Okin PM, Devereux RB, et al. Electrocardiographic detection of left ventricular hypertrophy by the simple QRS voltage-duration product. J Am Coll Cardiol. 1992;20(5):1180-6. [DOI](https://doi.org/10.1016/0735-1097(92)90376-x) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/1401620/)


---

# 18. ST-elevation myocardial infarction

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#stemi

HeartNormal
Inside the heart

Chapters

Sources

Sound


18

## ST-elevation myocardial infarction

Acute coronary occlusion

When a coronary artery closes, the muscle it supplies is injured. Current then flows between injured and healthy muscle, so the leads facing the injured wall record ST elevation and the leads on the far side record reciprocal ST depression.

Occluded artery and level

LAD proximalLAD midLAD distalLCxRCA proximalRCA distal

After the occlusion (schematic)Full injury current

TST ↑necrosis, QT ↓old

Cut-points in V2–V3 for

Man, 40 or olderMan, under 40Woman

Culprit

LAD prox

Stage

Injury

STEMI criteria

Met

Highest ST

V3 +3.4mm

Lowest ST

III −1.6mm

Pathological Q

none

**Proximal LAD occlusion, full injury current: STEMI criteria met in V2–V6, I and aVL.** The ST segment is highest in V3 (+3.4 mm) and lowest in III (−1.6 mm).

### The injury current

The three main coronary arteries, the left anterior descending (LAD), the left circumflex (LCx) and the right coronary artery (RCA), each supply their own part of the ventricles. The bull’s-eye shows the 17 segments of the American Heart Association’s standard model of the left ventricle[62](https://therealryc.github.io/heart-in-twelve-leads/#ref-62 "Cerqueira 2002"), coloured where the chosen artery and level supply this simulated heart. On this heart the LAD also supplies the apical lateral segment (16), which the standard model gives to the circumflex. In the simulation, muscle whose artery has closed rests at a less negative voltage, holds a lower plateau and recovers early. Current therefore flows between injured and healthy muscle both between beats and during the plateau, in opposite directions. The electrocardiogram measures the ST segment against the baseline between beats, so the two currents add: the ST segment rises in the leads that face the injured wall and falls in the leads that face it from the opposite side, the reciprocal depression.

### The criteria

The Fourth Universal Definition of Myocardial Infarction asks for new ST elevation at the J point in two contiguous leads of 1 mm (0.1 mV) or more in every lead except V2 and V3, where the cut-points are 2 mm in men aged 40 or older, 2.5 mm in men under 40 and 1.5 mm in women of any age[28](https://therealryc.github.io/heart-in-twelve-leads/#ref-28 "Thygesen 2019"), [63](https://therealryc.github.io/heart-in-twelve-leads/#ref-63 "Byrne 2023"). Elevation of 1 to 2 mm confined to V2 and V3 in men, or under 1.5 mm in women, may be a normal finding. The J point is measured against the onset of the QRS, and the criteria assume no left ventricular hypertrophy and no bundle branch block[28](https://therealryc.github.io/heart-in-twelve-leads/#ref-28 "Thygesen 2019"). On this page, contiguous means neighbours across the chest, or two leads of one limb group (I and aVL; II, III and aVF), the groupings the definition uses for Q waves. New horizontal or downsloping ST depression of 0.5 mm or more in two contiguous leads is the corresponding sign of ischemia without elevation[28](https://therealryc.github.io/heart-in-twelve-leads/#ref-28 "Thygesen 2019"). The 2023 European Society of Cardiology (ESC) guideline uses the same cut-points and asks that the tracing be read within 10 minutes of first medical contact[63](https://therealryc.github.io/heart-in-twelve-leads/#ref-63 "Byrne 2023").

### Finding the artery

The leads with the most elevation face the injured wall, and published rules refine the guess. In inferior ST-elevation myocardial infarction (STEMI), elevation greater in III than in II, with more depression in aVL than in I, points to the RCA[64](https://therealryc.github.io/heart-in-twelve-leads/#ref-64 "Herz 1997"); elevation in aVL, V5 or V6 with a level or raised ST segment in I points to the LCx, with a sensitivity of 83% and a specificity of 96%[65](https://therealryc.github.io/heart-in-twelve-leads/#ref-65 "Bairey 1987"). The ratio of the depression in V3 to the elevation in III separates a proximal RCA occlusion (under 0.5) from a distal one (0.5 to 1.2) and from the LCx (over 1.2), with sensitivities of 84 to 91% and specificities of 91 to 95%[66](https://therealryc.github.io/heart-in-twelve-leads/#ref-66 "Kosuge 1998"). In anterior STEMI, elevation in aVR, complete right bundle branch block, depression in V5, elevation in V1 over 2.5 mm or inferior depression of 1 mm or more predicted an LAD occlusion before its first septal branch; a Q wave in aVL was associated with an occlusion before the first diagonal branch, and depression in aVL suggested one after it; Q waves in V4 to V6 were associated with an occlusion beyond the first septal branch[67](https://therealryc.github.io/heart-in-twelve-leads/#ref-67 "Engelen 1999").

The note under the cards applies these rules to the simulated tracing. Where a rule names a sign without a cut-point, the page counts elevation from 1 mm and depression from 0.5 mm. The rules were derived from tracings recorded on admission or before reperfusion[64](https://therealryc.github.io/heart-in-twelve-leads/#ref-64 "Herz 1997"), [65](https://therealryc.github.io/heart-in-twelve-leads/#ref-65 "Bairey 1987"), [66](https://therealryc.github.io/heart-in-twelve-leads/#ref-66 "Kosuge 1998"), [67](https://therealryc.github.io/heart-in-twelve-leads/#ref-67 "Engelen 1999"), so the note applies them only from the hyperacute T waves to the full injury current. Later, as the ST segment falls, they mislead: at the Q-wave stage of the distal RCA occlusion, the ratio of the depression in V3 to the elevation in III is 0.31, the range of a proximal occlusion. On this heart the circumflex occlusion only just meets the criteria, in V5 and V6; its largest change is ST depression in V1 to V3, the subject of the next chapter.

### The evolution

Prominent, symmetrical T waves in two or more contiguous leads, hyperacute T waves, may come before the ST segment rises[28](https://therealryc.github.io/heart-in-twelve-leads/#ref-28 "Thygesen 2019"). New Q waves mark necrosis, which begins minutes to hours after the insult. The definition counts as pathological any Q wave over 20 ms, or a QS complex, in V2 or V3; and in I, II, aVL, aVF or V4 to V6, a Q wave of 30 ms or more and 1 mm or more deep, or a QS complex, in two leads of one group (I and aVL; V1 to V6; II, III and aVF)[28](https://therealryc.github.io/heart-in-twelve-leads/#ref-28 "Thygesen 2019"). Reperfusion is usually associated with a large and prompt fall in ST elevation[28](https://therealryc.github.io/heart-in-twelve-leads/#ref-28 "Thygesen 2019"). A consensus on Takotsubo syndrome notes that, as in acute coronary syndromes, resolution of the ST elevation is typically followed by progressive T-wave inversion[68](https://therealryc.github.io/heart-in-twelve-leads/#ref-68 "Ghadri 2018").

The time slider plays an occlusion that is never reopened, as a series of changes in the territory’s muscle: early recovery for the hyperacute T wave; the injury current; necrosis that spreads from the inner wall outward, to six tenths of the wall’s thickness; late recovery of the surviving outer wall, which turns the T wave over; and finally normal recovery, which leaves the Q waves. The order follows the published descriptions, but the timing is schematic, so the slider has no time scale. Necrosis in the simulation spares the one-cell layer that stands in for the Purkinje network, a modelling choice that keeps the scar from widening the QRS on this heart.

### Colours in the figure

The bull’s-eye and the two cuts colour the muscle as injured (rose), dead (taupe) or recovering late (blue); RV marks the right ventricle. The bar chart gives each lead’s ST deviation at the J point, with its cut-point as a dashed line. Leads that meet the criteria with a contiguous partner are drawn in rose, on the chart and on the tracing; a lead over its cut-point without a partner is mauve, and a lead depressed by 0.5 mm or more is blue.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

17 segments

Long axis · front

Short axis · below

ST at the J point · dashed: cut-point

## Puntos clave del original

- ST elevation comes from the injury current: injured and healthy muscle sit at different voltages between beats and during the plateau, and the leads facing the injury record the difference.
- STEMI requires new J-point elevation in two contiguous leads: 1 mm, except in V2 and V3 (2 mm in men 40 or older, 2.5 mm in men under 40, 1.5 mm in women).
- Reciprocal depression appears in the leads facing away from the injured wall: the inferior leads in a proximal LAD occlusion, aVL and I in an inferior one.
- In inferior STEMI, elevation greater in III than II with more depression in aVL than I points to the RCA; the V3/III ratio separates proximal from distal RCA and from the LCx.
- An infarct evolves: hyperacute T waves, ST elevation, Q waves as necrosis spreads, then T-wave inversion; the Q waves remain.

## Referencias del capítulo

- **Cerqueira 2002**. Cerqueira MD, Weissman NJ, Dilsizian V, et al. Standardized myocardial segmentation and nomenclature for tomographic imaging of the heart. A statement for healthcare professionals from the Cardiac Imaging Committee of the Council on Clinical Cardiology of the American Heart Association. Circulation. 2002;105(4):539-42. [DOI](https://doi.org/10.1161/hc0402.102975) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/11815441/)


---

# 19. Occlusion beyond the STEMI criteria

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#omi

HeartNormal
Inside the heart

Chapters

Sources

Sound


19

## Occlusion beyond the STEMI criteria

Occlusion without the textbook elevation

Some acute occlusions and critical narrowings of a coronary artery do not meet the ST-elevation cut-points. The injured wall may face no standard lead, a narrowed artery may show its pattern only after the pain has passed, and a bundle branch block hides the injury current inside its secondary ST changes.

Case

Posterior wallRight ventricleWellensde WinterLBBB

Late recovery of the reperfused wall+90 ms at the epicardium

nonebiphasicinverted

LBBB with

No injuryLAD injuryRCA injuryLCx injury

STEMI criteria

Not met

Deepest V1–V3

V3 −2.2mm

Highest inferior

III +0.8mm

V7–V9

not simulated

STEMI criteria

–

III minus II

–

V1, proximal

–

V1, distal

–

V3R, V4R

not simulated

STEMI criteria

–

Highest ST

–

T in V2

–

T in V3

–

T in V4

–

QT

–

Simulated

no

QRS

–

Sgarbossa score

–

Sgarbossa

–

Smith-modified

–

Concordant ST ↑

–

Lowest ST/S

–

**Inferolateral injury: ST depression in V1–V3 (deepest V3, −2.2 mm), STEMI criteria not met.** The injured wall faces away from V1–V3, so they record the injury current from behind, as depression. The inferior leads reach +0.8 mm at most.

### Occlusion without ST elevation

The 2023 European Society of Cardiology (ESC) guideline on acute coronary syndromes speaks of “ongoing coronary artery acute occlusion” and of “ST-segment elevation equivalents”, and it notes that some patients “warrant … immediate reperfusion therapy despite the absence of ST-segment elevation”[63](https://therealryc.github.io/heart-in-twelve-leads/#ref-63 "Byrne 2023"). It recommends the right-sided leads V3R and V4R and the posterior leads V7 to V9 in inferior ST-elevation myocardial infarction (STEMI), or when an occlusion is suspected and the standard leads are inconclusive[63](https://therealryc.github.io/heart-in-twelve-leads/#ref-63 "Byrne 2023"). Posterior infarction, right ventricular infarction, the Wellens pattern and left bundle branch block are simulated on this heart; the de Winter pattern is only described. The simulation has the twelve standard leads only: V3R, V4R and V7 to V9 are not computed.

### Posterior infarction

In the simulated heart the occluded territory is the basal and mid inferior and inferolateral wall (segments 4, 5, 10 and 11 of the 17-segment model), at the back and underside of the left ventricle: the wall the Fourth Universal Definition calls inferobasal, previously termed posterior. It faces away from V1 to V3, and on this heart the inferior leads see it only obliquely. Its injury current therefore shows as ST depression in V1 to V3. ST depression in V1 to V3, especially with a positive terminal T wave, suggests inferobasal ischemia, often from an occlusion of the left circumflex artery (LCx), a sign that is not specific[28](https://therealryc.github.io/heart-in-twelve-leads/#ref-28 "Thygesen 2019"), [63](https://therealryc.github.io/heart-in-twelve-leads/#ref-63 "Byrne 2023"). Leads V7 to V9, placed in the fifth intercostal space on the back, see the same injury as elevation, with a recommended cut-point of 0.5 mm, or 1 mm in men under 40[28](https://therealryc.github.io/heart-in-twelve-leads/#ref-28 "Thygesen 2019"). In the simulation an injury of the inferolateral wall depresses the ST segment in V1 to V3 by up to 2.2 mm and raises it in the inferior leads by less than 1 mm, so the STEMI criteria are not met. The lower panel turns V1 to V3 upside down, which shows the depression as the elevation that would be seen from the other side of the heart; this is a reading aid and does not replace posterior leads.

### Right ventricular infarction

An occlusion of the right coronary artery (RCA) before its right ventricular branches injures the right ventricle (RV) as well as the inferior wall. In the right-sided leads V3R and V4R, ST elevation of 0.5 mm or more (1 mm or more in men under 30) points to right ventricular infarction, and it may be transient[28](https://therealryc.github.io/heart-in-twelve-leads/#ref-28 "Thygesen 2019"). ST elevation of 1 mm or more in V4R had a sensitivity of 93% and an accuracy of 93%, and it disappeared within 10 hours in half of the patients[69](https://therealryc.github.io/heart-in-twelve-leads/#ref-69 "Braat 1983"). On this heart a proximal RCA occlusion, which includes the right ventricle, raises the ST segment in V1, the lead nearest the right ventricle, by 2.1 mm, against 1.2 mm when the occlusion is beyond the right ventricular branches.

### The Wellens pattern

In 1982 de Zwaan and colleagues described characteristic precordial ST–T changes in 26 of 145 patients (18%) admitted with unstable angina; 12 of the 16 who did not have surgery (75%) developed an anterior infarction, usually extensive, within a few weeks; the authors called the stenosis behind the pattern critical[70](https://therealryc.github.io/heart-in-twelve-leads/#ref-70 "de Zwaan 1982"). In a later series the pattern was found in 180 of 1260 patients. All had a narrowing of 50% or more in the proximal left anterior descending artery (LAD), and in 33 the artery was completely occluded[71](https://therealryc.github.io/heart-in-twelve-leads/#ref-71 "de Zwaan 1989"). The T waves in V2 and V3 are biphasic, or symmetrical and deeply inverted, after the pain has resolved, and the change may extend to V4 to V6[72](https://therealryc.github.io/heart-in-twelve-leads/#ref-72 "Wang 2024"); the ESC describes “biphasic T waves or prominent negative T waves”[63](https://therealryc.github.io/heart-in-twelve-leads/#ref-63 "Byrne 2023"), and the Fourth Universal Definition “symmetrical, often deep (>2 mm), T wave inversions in the anterior precordial leads”[28](https://therealryc.github.io/heart-in-twelve-leads/#ref-28 "Thygesen 2019"). The mechanism is not settled; reperfusion injury and stunned myocardium are among those proposed[72](https://therealryc.github.io/heart-in-twelve-leads/#ref-72 "Wang 2024"). The simulation assumes the reperfused anterior wall recovers late, most at the epicardium, with no injury current left: the T wave turns biphasic, then deeply inverted, while the ST segment stays level. On this heart the inversion is deepest in V4, runs from V3 to V6 and into I and aVL, and V2 stays upright: the simulated anterior territory projects most strongly onto V3 to V5, as its ST elevation does in the previous chapter, rather than onto V2 and V3. The same late recovery makes the T waves in III and aVF taller, up to 7.3 mm in III at the longest delay against 0.9 mm before, because the T wave turns away from the late anterior wall and toward the inferior leads. That is an effect of the model; the descriptions quoted above do not include it.

### The de Winter pattern

Instead of ST elevation, some proximal LAD occlusions show upsloping ST depression of more than 1 mm at the J point in the precordial leads running into tall, symmetrical T waves, usually with ST elevation of more than 1 mm in aVR[28](https://therealryc.github.io/heart-in-twelve-leads/#ref-28 "Thygesen 2019"), [73](https://therealryc.github.io/heart-in-twelve-leads/#ref-73 "de Winter 2008"). J-point depression of 1 to 3 mm in V1 to V6 with 1 to 2 mm of elevation in aVR has been described[72](https://therealryc.github.io/heart-in-twelve-leads/#ref-72 "Wang 2024"). The pattern was present in 35 of 1890 patients (2%) undergoing primary percutaneous coronary intervention for an LAD occlusion[74](https://therealryc.github.io/heart-in-twelve-leads/#ref-74 "Verouden 2009"). Its mechanism is not established[72](https://therealryc.github.io/heart-in-twelve-leads/#ref-72 "Wang 2024"). In this simulation, ST deviation arises only from currents between muscle at different voltages, and drawing upsloping J-point depression into tall T waves across all six chest leads would mean choosing a mechanism the literature has not settled. The pattern is therefore described but not simulated.

### Left bundle branch block

Left bundle branch block (LBBB) already moves the ST segment away from the main QRS deflection (chapter 14), which hides an injury current. In the Global Utilization of Streptokinase and Tissue Plasminogen Activator for Occluded Coronary Arteries (GUSTO-1) trial 0.5% of patients with infarction had LBBB, and Sgarbossa and colleagues found three independent criteria: ST elevation of 1 mm or more concordant with the QRS; ST depression of 1 mm or more in V1, V2 or V3; and ST elevation of 5 mm or more discordant with the QRS[75](https://therealryc.github.io/heart-in-twelve-leads/#ref-75 "Sgarbossa 1996"). With the criteria weighted 5, 3 and 2 points, a score of 3 or more is diagnostic[76](https://therealryc.github.io/heart-in-twelve-leads/#ref-76 "Anghel 2024"). Smith’s modification replaces the third criterion with discordant ST elevation of at least 1 mm that is a quarter or more of the preceding S wave (an ST/S ratio of −0.25 or less), and any one criterion suffices: sensitivity 91% against 52% for the weighted and 67% for the unweighted rule, specificity 90% against 98% and 90%[77](https://therealryc.github.io/heart-in-twelve-leads/#ref-77 "Smith 2012"); in a validation cohort, sensitivity 80% against 49% and specificity 99% against 100%[78](https://therealryc.github.io/heart-in-twelve-leads/#ref-78 "Meyers 2015"). The ESC advises managing a patient with bundle branch block and suspected ongoing ischemia like one with clear ST elevation, whether or not the block is known[63](https://therealryc.github.io/heart-in-twelve-leads/#ref-63 "Byrne 2023").

The page applies both rules to the simulated beat, measuring the ST segment at the J point against the onset of the QRS and taking the larger of the R and the S (or QS) wave as the QRS deflection. The block is the one in chapter 14. On this heart an LAD injury scores 7 points and meets Smith’s ratio in V3 and V4; an RCA injury scores 5 with concordant elevation in II, III and aVF; a circumflex injury meets neither rule.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

One beat per lead · 50 mm/s · grey: before the occlusion

V1–V3, and the same turned over

Territory

## Puntos clave del original

- An occlusion can be present without meeting the STEMI cut-points: the ESC 2023 guideline speaks of ongoing acute occlusion and of ST-elevation equivalents.
- A posterior (inferolateral) injury shows as ST depression in V1 to V3; posterior leads V7 to V9 see it as elevation, with a 0.5 mm cut-point.
- Right ventricular involvement in an RCA occlusion is sought in V3R and V4R (0.5 mm; 1 mm in men under 30).
- Biphasic or deeply inverted T waves in V2 and V3 after the pain resolves (Wellens) signal a critical stenosis of the proximal LAD.
- In LBBB, concordant ST elevation, ST depression in V1 to V3, or disproportionate discordant elevation (ST/S −0.25 or less) point to an acute occlusion.

## Referencias del capítulo

- **Wang 2024**. Wang F, Zhang X, Pang H, et al. Evolution of de Winter syndrome to Wellens syndrome: a case report and literature review. Front Cardiovasc Med. 2024;11:1415306. [DOI](https://doi.org/10.3389/fcvm.2024.1415306) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/39850375/)
- **Anghel 2024**. Anghel L, Stătescu C, Sascău RA, et al. Impact of Newly Diagnosed Left Bundle Branch Block on Long-Term Outcomes in Patients with STEMI. J Clin Med. 2024;13(18). [DOI](https://doi.org/10.3390/jcm13185479) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/39336966/)


---

# 20. Mimics of infarction

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#mimics

HeartNormal
Inside the heart

Chapters

Sources

Sound


20

## Mimics of infarction

ST elevation without an occluded artery

ST elevation does not always mean an occluded artery. Inflamed pericardium, a normal variant, an old aneurysm and stress cardiomyopathy all raise the ST segment, and published measurements help tell them apart.

Mimic

PericarditisEarly repolarizationAneurysmTakotsubo

Spodick stage

Stage 1Stage 2Stage 3Stage 4

Phase

AcuteLater

STEMI criteria

Met

ST/T in V6

0.55

T in V6

0.20mV

J point in II

+1.5mm

ST in V1

+0.1mm

ST in aVR

−1.2mm

STEMI criteria

–

J point in II

–

ST/T in V6

–

T in V6

–

Lowest ST

–

QRS

–

STEMI criteria

–

Q waves

–

T/QRS, aneurysm

–

T/QRS, acute

–

STEMI criteria

–

ST in aVR

–

ST in V1

–

Kosuge pattern

–

QTc

–

Pathological Q

–

Heart-rate-corrected QT interval (QTc).

**Pericarditis, stage 1: diffuse ST elevation (II +1.5, V3 +2.8 mm), aVR depressed (−1.2 mm), ST/T in V6 0.55.** The tracing meets the STEMI cut-points in II, aVF, V3, V4, V5, V6, but without the reciprocal depression of the STEMI beside it. Early repolarization’s ST/T in V6 is 0.24, below Ginzton’s 0.25. PR depression is not drawn: the simulated atria are left uninjured (see the text).

### Each mimic beside an acute occlusion

Each mimic is drawn on the left, one beat per lead with the normal beat in grey, beside a true ST-elevation myocardial infarction (STEMI) on the right, from an occlusion of the right coronary artery (RCA) or the left anterior descending artery (LAD) simulated as in chapter 18. The lower panel shows the published measurement for each mimic, computed from the simulated beats: the ST/T ratio in V6 for pericarditis and early repolarization, the T/QRS ratio in V1 to V4 for the aneurysm, and ST deviation in aVR and V1 for Takotsubo. ST deviation is measured at the J point against the onset of the QRS. On wider screens, a cut through the heart, or the bull’s-eye for early repolarization, shows the changed muscle in colour; RV marks the right ventricle.

### Acute pericarditis

The 2015 European Society of Cardiology (ESC) guideline bases the diagnosis of acute pericarditis on at least two of four findings: pericarditic chest pain, a pericardial rub, “new widespread ST-elevation or PR depression” on the electrocardiogram, and a new or worsening pericardial effusion. By its count the electrocardiogram changes in up to 60% of cases, and their evolution is “highly variable”[79](https://therealryc.github.io/heart-in-twelve-leads/#ref-79 "Adler 2015"). As summarized by Sheth and colleagues, Spodick’s four stages are: stage 1, “diffuse ST segment elevations that are concave up in all leads except V1 and aVR, with down-sloping PR segment depression”, most marked in II, aVF and V4 to V6; stage 2, “ST and PR segments normalize and T waves flatten”; stage 3, “diffuse T wave inversion”; and stage 4, T waves back to baseline[80](https://therealryc.github.io/heart-in-twelve-leads/#ref-80 "Sheth 2010"), [81](https://therealryc.github.io/heart-in-twelve-leads/#ref-81 "Spodick 1973"). One review places stage 1 in the first two weeks, stage 2 at one to three weeks, stage 3 from the third week and stage 4 from several weeks on[82](https://therealryc.github.io/heart-in-twelve-leads/#ref-82 "Mangas 2026"). In a series of 50 patients the stages came faster: stage 2 at about 1.5 days, stage 3 at about 9 days and stage 4 at 10 to 11 days[80](https://therealryc.github.io/heart-in-twelve-leads/#ref-80 "Sheth 2010").

Ginzton and Laks compared 19 patients with pericarditis and 20 with the normal variant, early repolarization. An ST/T ratio in V6, the height of the ST segment at its onset divided by the height of the T wave, of 0.25 or more identified every patient with pericarditis (positive and negative predictive values 1.0); a T wave in V6 of 0.3 mV or less had a positive predictive value of 0.85; and where V6 cannot be used, a ratio of 0.24 or more in V5, V4 or I is suggestive[83](https://therealryc.github.io/heart-in-twelve-leads/#ref-83 "Ginzton 1982").

In the simulation, stage 1 injures the outer third of every ventricular wall. Because the injury surrounds the heart, most of its current cancels; what is left points toward the apex, which the open base does not balance, so the ST segment rises in most leads and falls in aVR. The atria are left uninjured, so the PR depression of stage 1 is described but not drawn: in this model an injured outer atrial wall erases the P wave instead of depressing the PR segment. Stages 2 to 4 are the same outer wall recovering a little late, then later, then normally. The pericarditis model is phenomenological and scaled by eye, and the depth of the stage 3 T-wave inversion (9.3 mm in V3) is not calibrated against patients.

### Early repolarization

The early repolarization pattern is J-point elevation: the peak of a notch at the end of the QRS, or the onset of a slur, of 0.1 mV or more; ST elevation is not required[84](https://therealryc.github.io/heart-in-twelve-leads/#ref-84 "Macfarlane 2015"). It must appear in two or more contiguous leads other than V1 to V3, with a QRS shorter than 120 ms[85](https://therealryc.github.io/heart-in-twelve-leads/#ref-85 "Antzelevitch 2016"). The ESC defines the pattern as J-point elevation of 1 mm or more in two adjacent inferior or lateral leads; the syndrome is that pattern in a person resuscitated from otherwise unexplained ventricular fibrillation or polymorphic ventricular tachycardia[86](https://therealryc.github.io/heart-in-twelve-leads/#ref-86 "Zeppenfeld 2022"). On this heart, the outer quarter of the inferior wall and the apex loses part of its plateau just after the upstroke, as though the notch of its action potential were held, and recovers a little early. The result is a notch or slur at the end of the QRS, J-point elevation of 1.3 to 1.8 mm in II, III and aVF and of 1.1 to 2.2 mm in V4 to V6, and tall T waves; the ST/T ratio in V6 is 0.24, just on the normal-variant side of Ginzton’s cut-point. No lead but aVR is depressed by 0.5 mm or more. The region is a modelling choice: placed on the inferior and inferolateral walls, the same change also produced ST depression of up to 1.4 mm in V1 to V3 and aVL, the reciprocal picture of an inferior infarction. In a patient, reciprocal depression helps to separate an infarction from early repolarization and pericarditis[28](https://therealryc.github.io/heart-in-twelve-leads/#ref-28 "Thygesen 2019").

### Left ventricular aneurysm

A previous infarction may leave persistent ST elevation, the “left ventricular aneurysm” morphology, which mimics an acute one. In comparison with acute anterior infarction from a proven LAD occlusion, the best discriminator was the sum of the T-wave amplitudes in V1 to V4 divided by the sum of the QRS amplitudes there: a ratio over 0.22 favoured acute infarction and 0.22 or less an aneurysm, misclassifying 4 of 59 tracings (6.8%)[87](https://therealryc.github.io/heart-in-twelve-leads/#ref-87 "Smith 2005"). In a validation of 59 acute infarctions and 16 aneurysms the same rule had a sensitivity of 91.5% and a specificity of 68.8% for acute infarction; a T/QRS ratio of 0.36 or more in any one of V1 to V4 had the same sensitivity and a specificity of 81.3%[88](https://therealryc.github.io/heart-in-twelve-leads/#ref-88 "Klein 2015"). In the simulated aneurysm, the mid-LAD territory of the left ventricle is scar through the full thickness of the wall, and a rim of living muscle two cells wide keeps a mild injury and recovers late; how late is a free choice in this model, made to keep the T waves small. The tracing has Q waves in V3 to V6 and ST elevation that meets the STEMI cut-points, but its T/QRS ratio is 0.20, against 0.61 for the acute occlusion of the same artery beside it. The QRS amplitude is taken as the larger of the R wave and the Q or S wave in each lead.

### Takotsubo syndrome

The International Takotsubo (InterTAK) criteria count new electrocardiographic abnormalities, ST elevation, ST depression, T-wave inversion and prolongation of the corrected QT interval (QTc), “however, rare cases exist without any ECG changes”[89](https://therealryc.github.io/heart-in-twelve-leads/#ref-89 "Ghadri 2018"). In the InterTAK registry ST elevation was present in 44% of patients, ST depression in 8%, T-wave inversion in 41% and left bundle branch block in 5%[68](https://therealryc.github.io/heart-in-twelve-leads/#ref-68 "Ghadri 2018"). In one small series cited by the same consensus, of 13 patients with each condition, pathological Q waves were seen in 15% with Takotsubo against 69% with anterior STEMI[68](https://therealryc.github.io/heart-in-twelve-leads/#ref-68 "Ghadri 2018"), [90](https://therealryc.github.io/heart-in-twelve-leads/#ref-90 "Frangieh 2016"). The elevation is centred on V2 to V5 and lead II, whereas in anterior STEMI it centres on V1 to V4, I and aVL, and elevation limited to the inferior leads is “distinctly uncommon”. Life-threatening ventricular arrhythmias occur in 3.0 to 8.6% of patients, mostly with a QTc over 500 ms[68](https://therealryc.github.io/heart-in-twelve-leads/#ref-68 "Ghadri 2018"). In Kosuge’s study of 33 patients with Takotsubo and 342 with anterior infarction, ST depression in aVR without ST elevation in V1, measured 80 ms after the J point, had a sensitivity of 91% and a specificity of 95% for Takotsubo, as tabulated by Frangieh and colleagues. In their own admission tracings with ST elevation, from 111 patients with Takotsubo and 106 with STEMI and measured at the J point, the same sign had a sensitivity of 38% and a specificity of 95%[90](https://therealryc.github.io/heart-in-twelve-leads/#ref-90 "Frangieh 2016").

The simulated acute phase is an injury of the apical left ventricle in every wall, beyond the territory of any one artery; the later phase is the same apex recovering late. On this heart the acute tracing has ST elevation from V2 to V6 and in I, II and aVF, depression in aVR and none in V1, while the proximal LAD occlusion beside it raises I, aVL and V2 to V6 and lowers the inferior leads. The later phase has deep, widespread T-wave inversion and a QTc of 475 ms.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

Pericarditis, stage 1 · grey: normal

STEMI: distal RCA occlusion

V6 of pericarditis and early repolarization: ST/T · II

Short axis · below

## Puntos clave del original

- Pericarditis raises the ST segment in most leads except aVR and V1, often with PR depression; an ST/T ratio of 0.25 or more in V6 separated it from early repolarization.
- Early repolarization is J-point elevation, a notch or slur of 0.1 mV or more, in two contiguous inferior or lateral leads.
- Persistent ST elevation after an old anterior infarct comes with small T waves: a T/QRS ratio in V1 to V4 of 0.22 or less favours aneurysm over acute infarction.
- Takotsubo injures the apex beyond any one artery: ST elevation centred on V2 to V5 and II, with depression in aVR and no elevation in V1.
- On the simulated heart, pericarditis, early repolarization and the aneurysm all meet the STEMI cut-points: the cut-points alone do not separate them.

## Referencias del capítulo

- **Sheth 2010**. Sheth S, Wang DD, Kasapis C. Current and emerging strategies for the treatment of acute pericarditis: a systematic review. J Inflamm Res. 2010;3:135-42. [DOI](https://doi.org/10.2147/JIR.S10268) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/22096363/)
- **Mangas 2026**. Mangas GM, Rodriguez JGV, Santos JARBD, et al. Fundamentals of Acute Pericarditis: State of the Art. Arq Bras Cardiol. 2026;123(2):e20240572. [DOI](https://doi.org/10.36660/abc.20240572) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/42018907/)
- **Klein 2015**. Klein LR, Shroff GR, Beeman W, et al. Electrocardiographic criteria to differentiate acute anterior ST-elevation myocardial infarction from left ventricular aneurysm. Am J Emerg Med. 2015;33(6):786-90. [DOI](https://doi.org/10.1016/j.ajem.2015.03.044) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/25862248/)


---

# 21. Potassium

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#potassium

HeartNormal
Inside the heart

Chapters

Sources

Sound


21

## Potassium

Hyperkalemia and hypokalemia

Potassium sets how quickly the ventricles recover and, at high levels, how quickly the heart conducts. Raise it and the T wave narrows and peaks before conduction slows; lower it and the T wave flattens as a U wave appears.

Serum potassium4.0 mmol/L

U > Tpeaked TP fades

Potassium 4.0 in grey

PR interval

170ms

QRS duration

87ms

QT interval

405ms

P wave, II

100% of normal

T wave, V3

0.45mV

U wave, V3

–

**Potassium 4.0 mmol/L: the simulated heart is unchanged.** Between 3.5 and 5.0 mmol/L the simulation leaves the action potential and conduction as they are. Move the slider either way.

### What the slider changes

The slider sets the serum potassium of the simulated heart. Potassium acts on the cells' action potentials and conduction, and the tracing is computed from the cells. The model has no ion channels, so the link from potassium to the action potential is phenomenological, chosen to reproduce the published electrocardiogram (ECG) descriptions. Between 3.5 and 5.0 mmol/L the simulation leaves the heart unchanged. Above 5.0 mmol/L ventricular recovery becomes shorter and steeper; above 6.0 the P wave shrinks; above 6.5 conduction slows in the atria and the ventricles. Below 3.5 mmol/L the final phase of repolarization slows, the plateau of the inner wall declines faster than that of the outer wall, and a small late wave, the simulation's stand-in for the U wave, follows the T wave. The lower right panel shows the action potential of a ventricular muscle cell, with the normal one in grey. The model holds the resting potential at −85 mV at every level. In reality it rises by about 18 mV as potassium doubles from 4 to 8 mmol/L, and falls in hypokalemia[91](https://therealryc.github.io/heart-in-twelve-leads/#ref-91 "Weiss 2017"); advanced hypokalemia also brings a taller, wider P wave, a slightly longer PR interval and a wider QRS[92](https://therealryc.github.io/heart-in-twelve-leads/#ref-92 "El-Sherif 2011"). None of these changes is simulated.

### Hyperkalemia

The sequence usually taught as potassium rises is "peaked T waves, PR interval prolongation, QRS prolongation, loss of P wave, escape rhythms, 'sine wave' configuration, ventricular fibrillation, and pulseless activity or asystole"[93](https://therealryc.github.io/heart-in-twelve-leads/#ref-93 "Durfey 2017"). A raised extracellular potassium shortens the action potential, and ventricular repolarization becomes more synchronous: the T wave narrows and peaks. It also depolarizes the resting membrane, which first speeds and then, above about 8 mmol/L in experimental models, slows conduction: the P wave broadens and disappears and the QRS widens[91](https://therealryc.github.io/heart-in-twelve-leads/#ref-91 "Weiss 2017"). In patients it is not uncommon for the P wave to disappear and the QRS to widen at 7 to 8 mmol/L, and the sinus impulse can still reach the ventricles after the P wave has gone (sinoventricular conduction)[91](https://therealryc.github.io/heart-in-twelve-leads/#ref-91 "Weiss 2017"), as it does in the simulated heart. At the top of the slider the QRS runs into the T wave, the pattern El-Sherif shows at a potassium of 10 mmol/L[92](https://therealryc.github.io/heart-in-twelve-leads/#ref-92 "El-Sherif 2011"). The simulation stops there: it does not produce the sine wave, escape rhythms or ventricular arrhythmias.

### Bands and severity grades

The bands under the slider are named for the pattern the simulated ECG shows in each, because published grades of severity disagree. The two upper bands use the cut-points of El-Sherif's table, which lists tall, peaked, narrow-based T waves and fascicular blocks from 5.5 to 7.5 mmol/L; first-degree atrioventricular (AV) block, a smaller and then absent P wave, sinus arrest and ST depression from 7.5 to 10.0; and, beyond the slider, atypical bundle branch block, ventricular tachycardia and fibrillation above 10.0[92](https://therealryc.github.io/heart-in-twelve-leads/#ref-92 "El-Sherif 2011"). El-Sherif's table calls 5.5 to 7.5 mmol/L mild and 7.5 to 10.0 moderate hyperkalemia. Weiss calls 5.5 to 6.0 mmol/L mild, 6.0 to 7.0 moderate and anything above 7.0 severe[91](https://therealryc.github.io/heart-in-twelve-leads/#ref-91 "Weiss 2017"), and Durfey studied 6.5 mmol/L or more as severe hyperkalemia[93](https://therealryc.github.io/heart-in-twelve-leads/#ref-93 "Durfey 2017"). Weiss puts conduction slowing above about 8 mmol/L in animal models, though in patients the P wave can disappear and the QRS widen at 7 to 8 mmol/L. The same review warns that heart block, asystole and ventricular tachycardia or fibrillation can occur above 7.0, and stresses that the level at which any change appears varies considerably between people[91](https://therealryc.github.io/heart-in-twelve-leads/#ref-91 "Weiss 2017"). The lowest band marks the levels at which the simulated late wave stands taller than the T wave in at least one lead: 2.7 mmol/L and below.

The ECG follows the serum level loosely. Among 90 patients with potassium of 6.0 mmol/L or more, about half (52%) had a new or resolving peaked or symmetric T wave; peaked T waves were seen in 32% on study review but reported in 3% of official readings, and no T-wave amplitude could be set as a diagnostic threshold. The authors judged the ECG insensitive[94](https://therealryc.github.io/heart-in-twelve-leads/#ref-94 "Montague 2008"). The simulated heart shows the changes every time, in the same order.

### Which changes predict harm

Among 188 patients with potassium of 6.5 mmol/L or more, 15% had an adverse event within six hours, and every one of them had at least one hyperkalemic ECG abnormality beforehand. QRS prolongation beyond 110 ms (relative risk 4.74), a heart rate below 50 per minute (relative risk 12.29) and a junctional rhythm (relative risk 7.46) marked higher risk; peaked T waves did not (relative risk 0.77, not significant)[93](https://therealryc.github.io/heart-in-twelve-leads/#ref-93 "Durfey 2017"). Most adverse events were symptomatic bradycardia (22 of the 28 patients with an event), so the slow heart rate partly overlaps the outcome it predicts[93](https://therealryc.github.io/heart-in-twelve-leads/#ref-93 "Durfey 2017"). The QRS card is flagged once the QRS passes 110 ms.

### Hypokalemia

Low potassium slows the final phase of repolarization, giving the action potential a long tail; it prolongs the plateau of the Purkinje fibres but shortens that of the ventricular muscle, so the conducting system recovers later than the muscle around it[92](https://therealryc.github.io/heart-in-twelve-leads/#ref-92 "El-Sherif 2011"). El-Sherif lists "decreased amplitude and broadening of the T waves; prominent U waves; ST segment depression; and T and U wave fusion, which is seen in severe hypokalemia", and states that when the U wave exceeds the T wave in amplitude, potassium is below 3 mmol/L[92](https://therealryc.github.io/heart-in-twelve-leads/#ref-92 "El-Sherif 2011"). The American Heart Association (AHA) statement on repolarization puts the threshold at 2.7 mmol/L and adds that the apparent growth of the U wave may be its fusion with the T wave rather than a larger U wave[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). The U wave is most evident in V2 and V3, and at heart rates of 50 to 100 per minute its peak usually falls more than 150 ms after the T-wave peak[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). Hypokalemia is also a risk factor for torsade de pointes[42](https://therealryc.github.io/heart-in-twelve-leads/#ref-42 "Drew 2010").

The same AHA statement describes the U wave as a mechanoelectric phenomenon[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"), which a model of electrical recovery cannot produce. The simulated late wave is a stand-in: a small voltage in the fast-conducting subendocardial layer some 170 to 290 ms after that layer recovers, sized so that the published sequence appears in order. Its timing and size are schematic.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

V3 · 50 mm/s · grey: 4.0 mmol/L

II · P wave · 50 mm/s · 50 mm/mV

Ventricular action potential

## Puntos clave del original

- Rising potassium first narrows and peaks the T wave, then slows conduction: a longer PR, a smaller and then absent P wave, a wider QRS, until the QRS runs into the T wave.
- The ECG is an insensitive guide to the serum level: only about half of patients with potassium of 6.0 mmol/L or more had a new or resolving peaked or symmetric T wave.
- In hyperkalemia, a QRS beyond 110 ms, a heart rate below 50 and a junctional rhythm marked higher short-term risk; peaked T waves did not.
- Hypokalemia lowers and broadens the T wave, depresses the ST segment and brings out the U wave; a U wave taller than the T wave suggests potassium below 3 mmol/L (2.7 in the AHA statement).
- Published severity grades disagree, and the potassium level at which each change appears varies widely between patients; in the simulation it is fixed.

## Referencias del capítulo



---

# 22. Calcium and temperature

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#calcium

HeartNormal
Inside the heart

Chapters

Sources

Sound


22

## Calcium and temperature

The plateau, and the J wave of hypothermia

Calcium sets how long the ventricular plateau lasts, so its classic effect is to move the T wave later or earlier without reshaping it. Cold lengthens every interval and notches the outer wall’s action potential, which produces the J (Osborn) wave.

Serum calcium (model)2.40 mmol/L

1.41.92.4: unchanged2.93.4

Core temperature37.0 °C

hypothermia: below 35 °C

Reference heart in grey

PR interval

170ms

QRS duration

87ms

QT interval

405ms

J to T peak, II

211ms

T wave, V3

0.45mV

J wave, V4

–

**The reference heart: calcium 2.4 mmol/L, 37 °C.** Lower the calcium to lengthen the plateau, raise it to shorten it, or cool the heart.

### Calcium and the plateau

Low extracellular calcium prolongs phase 2, the plateau of the ventricular action potential, and high calcium shortens it[92](https://therealryc.github.io/heart-in-twelve-leads/#ref-92 "El-Sherif 2011"). On the electrocardiogram (ECG), in El-Sherif’s words, hypocalcemia "results in prolonged ST segment and QT interval while hypercalcemia ... results in shortening of both intervals"; in hypercalcemia the changes are "limited to shortening or elimination of the ST segment and decreased QTc \[corrected QT\] interval"[92](https://therealryc.github.io/heart-in-twelve-leads/#ref-92 "El-Sherif 2011"). The ST segment is the plateau: while every cell holds it, no current flows between them. A longer plateau lengthens the ST segment, and the T wave, which marks recovery, arrives later.

The calcium slider lengthens or shortens the plateau of every ventricular cell and changes nothing else, so the ST segment and the QT change while the T wave keeps its shape. This link from calcium to the plateau is phenomenological and simplified. In patients, hypocalcemia can also alter the T wave ("upright, low, flat, or sharply inverted T waves in leads with an upright QRS complex")[92](https://therealryc.github.io/heart-in-twelve-leads/#ref-92 "El-Sherif 2011"), and hypercalcemia, like hypothermia, has long been reported to produce J waves[85](https://therealryc.github.io/heart-in-twelve-leads/#ref-85 "Antzelevitch 2016"); neither appears in this simulation. Although hypocalcemia also prolongs the QT, it has been linked to torsade de pointes only in rare cases[42](https://therealryc.github.io/heart-in-twelve-leads/#ref-42 "Drew 2010"). No numeric QT cut-points for calcium disorders could be verified for this chapter, so none is given. The slider’s values are on the model’s scale: its action potential is unchanged at 2.4 mmol/L.

### Hypothermia

Hypothermia is generally defined as a core temperature below 35 °C[95](https://therealryc.github.io/heart-in-twelve-leads/#ref-95 "Mattu 2002"). Its classic ECG findings are "J (Osborn) waves, interval (PR, QRS, QT) prolongation, and atrial and ventricular dysrhythmias"; it can also produce changes that mimic acute ischemia or infarction, and blunt the expected ECG findings of hyperkalemia[95](https://therealryc.github.io/heart-in-twelve-leads/#ref-95 "Mattu 2002"). The J wave is a dome or hump at the junction of the QRS and the ST segment. Experimental evidence places its origin in the ventricular wall: it is "inscribed as a consequence of a transmural voltage gradient caused by the manifestation of an AP \[action potential\] notch in epicardium but not endocardium", owing to an uneven distribution across the wall of the transient outward potassium current (Ito)[85](https://therealryc.github.io/heart-in-twelve-leads/#ref-85 "Antzelevitch 2016").

### How the simulation builds the J wave

Below 35 °C each cell in the outer 40% of the ventricular free walls gains a notch: just after its upstroke, its voltage dips and then returns over about 50 ms, deeper as the temperature falls. The endocardium keeps its plateau, so during those milliseconds current flows across the wall, and leads facing the epicardium record a positive deflection at the end of the QRS. The action-potential shape the model uses for every cell cannot include a transient notch (lowering the whole plateau would instead produce the ST elevation of an injury current), so the notched heart is computed from two simulations: the cold heart, minus a heart in which only those epicardial cells fire a brief pulse. In the model every lead is a linear sum of the cells' voltages, so the difference is exactly the ECG of the notched heart. As the temperature falls, conduction slows in the atrioventricular (AV) node and throughout the heart, and recovery slows too, lengthening the PR, the QRS and the QT. The rates of slowing per degree, and the growth of the J wave with cold, are schematic: the published sources do not give an amplitude for each temperature, and the simulation shows the direction of each change rather than its size.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

II and V4 · 50 mm/s · grey: 2.4 mmol/L, 37 °C

Action potentials, inner and outer wall

## Puntos clave del original

- Low calcium lengthens the plateau, and with it the ST segment and the QT; high calcium shortens or eliminates the ST segment.
- In the simulation only the plateau changes, so the T wave keeps its shape; in patients hypocalcemia can also alter the T wave. No numeric QT cut-point for calcium disorders could be verified for this chapter.
- Hypothermia below 35 °C brings J (Osborn) waves, a longer PR, QRS and QT, and dysrhythmias; it can mimic ischemia and blunt the signs of hyperkalemia.
- The J wave comes from a transmural voltage gradient: an action-potential notch in the epicardium that the endocardium lacks.
- The size of the simulated J wave at each temperature is schematic.

## Referencias del capítulo



---

# 23. Drugs

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#drugs

HeartNormal
Inside the heart

Chapters

Sources

Sound


23

## Drugs

Repolarization, conduction, psychotropics

Drugs change the electrocardiogram (ECG) by changing the action potential: blocking the rapid delayed-rectifier potassium current (IKr), carried by the human ether-à-go-go-related gene (hERG) channel, lengthens the QT; blocking the sodium current widens the QRS; and digoxin sags the ST segment. The ECG changes with lithium and clozapine are less specific.

Section

QT-prolonging drugsSodium-channel blockDigoxinLithium and clozapine

IKr (hERG) block, model50%

none255075100%

Heart rate60 per min

5085120

Sodium-channel block, model60%

none255075100%

Digoxin effect, model70%

none255075100%

Heart

LithiumClozapine myocarditis

Drug-free heart in grey

QT interval

480ms

QTc, Bazett

480ms

QTc, Fridericia

480ms

Rise from no drug

+75ms, Bazett

Heart rate

60per min

Drew 2010

act

Heart-rate-corrected QT interval (QTc).

QRS (all leads)

87ms

Terminal R, aVR

–mm

Boehnert group

–

PR interval

170ms

QT interval

480ms

QRS axis

+57°

ST at J+20, V5

–mV

ST at J+60, V5

–mV

T wave, V5

–mV

PR interval

170ms

QT interval

480ms

QRS duration

87ms

Heart rate

60per min

T wave, V5

–mV

PR interval

170ms

QT interval

480ms

QTc, Bazett

480ms

QTc, Fridericia

480ms

Heart-rate-corrected QT interval (QTc).

**Drew’s rule says act: the Bazett QTc has risen 75 ms from the drug-free heart.** Every action potential is longer and recovers more slowly, so the T wave arrives later and lower.

#### Psychotropics and the QT interval

CitalopramAppears to prolong the QT more than other selective serotonin reuptake inhibitors (SSRIs), though the clinical significance remains unclear[98](https://therealryc.github.io/heart-in-twelve-leads/#ref-98 "Beach 2018"). US prescribing information: at most 40 mg a day; at most 20 mg a day over age 60, with hepatic impairment, in cytochrome P450 2C19 (CYP2C19) poor metabolizers or with cimetidine or another CYP2C19 inhibitor; stop if the corrected QT (QTc) stays above 500 ms[102](https://therealryc.github.io/heart-in-twelve-leads/#ref-102 "Celexa label 2023"). Placebo-corrected rise in QTc in healthy volunteers: 8.5 ms at 20 mg, 18.5 ms at 60 mg[102](https://therealryc.github.io/heart-in-twelve-leads/#ref-102 "Celexa label 2023").EscitalopramAppears to prolong the QT less[98](https://therealryc.github.io/heart-in-twelve-leads/#ref-98 "Beach 2018").ZiprasidoneThe greatest QT prolongation among atypical antipsychotics, possibly with iloperidone[98](https://therealryc.github.io/heart-in-twelve-leads/#ref-98 "Beach 2018").AripiprazoleAppears safest of the atypicals for the QT[98](https://therealryc.github.io/heart-in-twelve-leads/#ref-98 "Beach 2018").HaloperidolCarries QT risk; the apparent extra risk of intravenous use may reflect how ill its recipients are[98](https://therealryc.github.io/heart-in-twelve-leads/#ref-98 "Beach 2018"). Named among high-risk drugs in the American Heart Association (AHA) statement on torsade de pointes[42](https://therealryc.github.io/heart-in-twelve-leads/#ref-42 "Drew 2010").MethadoneAn expert panel (2009) advised an ECG before treatment, within 30 days, yearly, and if the dose exceeds 100 mg a day; at a QTc of 450 to 500 ms, discussing the risks and monitoring more often; above 500 ms, considering stopping or reducing the dose[99](https://therealryc.github.io/heart-in-twelve-leads/#ref-99 "Krantz 2009"). A 2014 guideline from the American Pain Society and the College on Problems of Drug Dependence, with the Heart Rhythm Society, also uses the ECG to identify people at greater risk of methadone-associated arrhythmia; most of its recommendations are based on low-quality evidence[100](https://therealryc.github.io/heart-in-twelve-leads/#ref-100 "Chou 2014").CredibleMedsMore than 220 drugs in 2018, in four risk categories[101](https://therealryc.github.io/heart-in-twelve-leads/#ref-101 "Woosley 2018"): known risk of torsade de pointes; possible risk (QT prolongation without substantial evidence of torsade); conditional risk (under conditions such as overdose, interacting drugs or hypokalemia); and drugs to avoid in congenital long-QT syndrome. Category wording from CredibleMeds' own definitions[103](https://therealryc.github.io/heart-in-twelve-leads/#ref-103 "CredibleMeds").

### Drugs in the model

Each section changes the simulated heart the way a class of drug changes the cardiac action potential. The model has no ion channels, so each drug is represented phenomenologically, as a change to the length or shape of every cell's action potential, or to the speed of conduction, chosen to reproduce published ECG findings. No slider position is the dose of any drug.

### QT-prolonging drugs

The section on QT-prolonging drugs lengthens every ventricular action potential and slows its final phase, a stand-in for block of the rapid delayed-rectifier potassium current (IKr) carried by the hERG channel (named for the human ether-à-go-go-related gene, KCNH2). Because the QT shortens as the heart rate rises, it is corrected for rate: Bazett divides the QT by the square root of the RR interval in seconds, Fridericia by its cube root[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). Bazett overcorrects at fast rates and undercorrects at slow ones[39](https://therealryc.github.io/heart-in-twelve-leads/#ref-39 "Sagie 1992"), overstating the corrected QT (QTc) particularly above 85 per minute[42](https://therealryc.github.io/heart-in-twelve-leads/#ref-42 "Drew 2010"). In this simulation only each action potential's duration scales with rate, with the cube root of the RR interval (a modelling choice); the spread of activation and the final phase of recovery do not. So the simulated QT shortens less with rate than a person's does, and even Fridericia's QTc creeps up at fast rates: in the drug-free heart it is 397 ms at 50 per minute and 440 ms at 120. In population data Fridericia's QTc instead tends to fall as the rate rises (a correlation of −0.26 to −0.32 with heart rate)[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009").

In the 2009 recommendations for interpreting the ECG, a QTc of 450 ms or more in men, or 460 ms or more in women, is prolonged[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). The 2010 statement on preventing torsade de pointes (TdP) in hospital instead treats a QTc above the 99th percentile, about 470 ms in men and 480 ms in women, as abnormally prolonged; above 500 ms is highly abnormal, and data from congenital long-QT syndrome tie it to a two- to threefold higher risk of TdP[42](https://therealryc.github.io/heart-in-twelve-leads/#ref-42 "Drew 2010"). After a drug with TdP risk is given, prompt action is indicated if the QTc exceeds 500 ms or has risen by at least 60 ms from the pre-drug baseline[42](https://therealryc.github.io/heart-in-twelve-leads/#ref-42 "Drew 2010"). The cards check both action thresholds against the simulated beat, using the drug-free heart at the same rate as the pre-drug baseline.

The congenital loss of IKr (long-QT type 2) gives bifid, notched T waves[96](https://therealryc.github.io/heart-in-twelve-leads/#ref-96 "Tardo 2023"), and its T waves are small: 0.13 mV in lead II on average, against 0.36 and 0.37 mV in the two other genotypes Moss compared[97](https://therealryc.github.io/heart-in-twelve-leads/#ref-97 "Moss 1995"). After an overdose the ECG should be checked for QT-U distortion, a sign of impending TdP[42](https://therealryc.github.io/heart-in-twelve-leads/#ref-42 "Drew 2010"). The simulated T wave lengthens and flattens but is not notched: every ventricular cell changes in the same way, so recovery stays one wave; chapter 24 notches the T wave of long-QT type 2 by delaying the right ventricle's recovery.

The panel under the cards summarizes the evidence on psychiatric drugs[98](https://therealryc.github.io/heart-in-twelve-leads/#ref-98 "Beach 2018"), [99](https://therealryc.github.io/heart-in-twelve-leads/#ref-99 "Krantz 2009"), [100](https://therealryc.github.io/heart-in-twelve-leads/#ref-100 "Chou 2014"), [101](https://therealryc.github.io/heart-in-twelve-leads/#ref-101 "Woosley 2018"), [102](https://therealryc.github.io/heart-in-twelve-leads/#ref-102 "Celexa label 2023"), [103](https://therealryc.github.io/heart-in-twelve-leads/#ref-103 "CredibleMeds"). For most classes, evidence of clinically meaningful QT prolongation "remains minimal", and Beach's review advises weighing the patient's other QT risk factors when prescribing[98](https://therealryc.github.io/heart-in-twelve-leads/#ref-98 "Beach 2018").

### Sodium-channel blockers and tricyclic overdose

The sodium-channel section slows conduction through every tissue and slows each cell's upstroke, as block of the fast sodium current does: the P wave, the PR and the QRS all lengthen. In one study of 49 patients with acute tricyclic antidepressant overdose, no seizures or ventricular arrhythmias occurred when the maximal limb-lead QRS was under 100 ms; at 100 ms or more, 34% had seizures and 14% ventricular arrhythmias, and ventricular arrhythmias occurred only at 160 ms or more. In that study serum drug levels predicted neither[104](https://therealryc.github.io/heart-in-twelve-leads/#ref-104 "Boehnert 1985"). In another, of 79 patients, a terminal R wave in aVR of 3 mm or more had a sensitivity of 81% and a positive predictive value of 43% for seizures or arrhythmias, against 82% and 35% for a QRS over 100 ms, and it was the only independent ECG predictor (odds ratio 6.9, 95% confidence interval 1.2 to 40)[105](https://therealryc.github.io/heart-in-twelve-leads/#ref-105 "Liebelt 1995"). Pooled across 18 studies, the QRS predicted seizures with a sensitivity and specificity of 0.69 and 0.69, and ventricular arrhythmias with 0.79 and 0.46; the serum drug concentration did about as well, and the authors judged the two to have "similar but relatively poor performance for predicting complications"[106](https://therealryc.github.io/heart-in-twelve-leads/#ref-106 "Bailey 2004").

The simulation reproduces the QRS widening but not the terminal R wave in aVR. Slowing every pathway by the same factor stretches the QRS in time without turning its terminal forces rightward, so the terminal R in aVR stays small and even shrinks; the card reports the measured value. The QRS card measures from the first ventricular activation to the last, across all leads. That is at least as long as the widest limb-lead QRS that Boehnert and Lovejoy grouped patients by, so the group on the card can be higher than theirs would be, never lower. Tricyclic and tetracyclic antidepressants can also unmask a Brugada pattern, as can class IC antiarrhythmic drugs[85](https://therealryc.github.io/heart-in-twelve-leads/#ref-85 "Antzelevitch 2016"); this simulation does not show it (chapter 24 simulates the Brugada pattern).

### Digoxin

Digoxin changes the ECG at therapeutic levels as well as in toxicity: "down-sloping ST segment depression ('scooped out' or 'reverse tick' appearance), flattened/inverted T waves and increased U wave amplitude" occur in both, and serum levels "do not correlate consistently with toxicity"[107](https://therealryc.github.io/heart-in-twelve-leads/#ref-107 "Andrews 2023"). The hallmark of toxicity is "increased automaticity coupled with concomitant conduction delay": frequent premature ventricular complexes, bradyarrhythmias, atrial tachycardia with block, junctional tachycardia and bidirectional ventricular tachycardia[108](https://therealryc.github.io/heart-in-twelve-leads/#ref-108 "Ma 2001"). The digoxin section makes the plateau of the inner half of the wall decline faster, which depresses the ST segment in leads facing the epicardium; it also shortens the action potential and slows its final phase (a lower T wave) and slows the atrioventricular (AV) node (a longer PR). The arrhythmias are not simulated. Digoxin also has "a QT-interval shortening effect": in a population cohort, people taking it had shorter QT intervals than those who did not[109](https://therealryc.github.io/heart-in-twelve-leads/#ref-109 "Soroush 2022"). The simulated QT barely changes, so this shortening is not shown.

### Lithium and clozapine

In a review of 56 reports, T-wave inversion was the ECG finding most often linked to lithium; sinus node dysfunction, sinoatrial block, PR and QT prolongation and ventricular tachyarrhythmias were also reported, with case reports of heart block and the Brugada pattern. The changes depended on the serum level and the duration of treatment, and there are no standardized ECG guidelines[110](https://therealryc.github.io/heart-in-twelve-leads/#ref-110 "Mehta 2017"). The simulated lithium heart has a slower sinus rate and a flatter T wave, made by shrinking the spread of recovery times across the ventricles; the size of both changes is illustrative. Shrinking that spread also shortens the simulated QT slightly, the opposite of the QT prolongation reported with lithium, and correcting for the slow simulated rate lowers both QTc values further. The QTc cards therefore read low; the note under them gives the numbers.

In one series, clozapine myocarditis began between days 10 and 33 of treatment (83% between days 14 and 21), and stopping clozapine was advised if troponin exceeded twice the upper limit of normal or C-reactive protein exceeded 100 mg/L[111](https://therealryc.github.io/heart-in-twelve-leads/#ref-111 "Ronaldson 2011"). Tachycardia was reported in 58% of published cases[112](https://therealryc.github.io/heart-in-twelve-leads/#ref-112 "Bellissima 2018"). In a retrospective health-record study of 254 suspected episodes in 228 patients, 29 of them confirmed as probable myocarditis, a heart rate above 90 per minute had a sensitivity of 100% for myocarditis but a specificity of 9.5%[113](https://therealryc.github.io/heart-in-twelve-leads/#ref-113 "Segev 2021"). No ECG change is specific: sinus tachycardia, arrhythmias, QT prolongation, T-wave inversion and ST-segment elevation are among those reported[114](https://therealryc.github.io/heart-in-twelve-leads/#ref-114 "Li 2025"). The simulated clozapine heart has a faster sinus rate and no other change. The ECG can raise suspicion of myocarditis, but the monitoring protocol relies on troponin and C-reactive protein[111](https://therealryc.github.io/heart-in-twelve-leads/#ref-111 "Ronaldson 2011").

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

II and V3 · 50 mm/s · grey: no drug, 60 per min

Action potentials, inner and outer wall

## Puntos clave del original

- Correct the QT for rate and name the formula: Bazett overstates the QTc at fast heart rates.
- After a drug with torsade risk, act if the QTc exceeds 500 ms or rises by 60 ms or more from baseline.
- In tricyclic overdose, one study saw no seizures or ventricular arrhythmias below a QRS of 100 ms and arrhythmias only from 160 ms; in another, a terminal R in aVR of 3 mm or more was the only independent ECG predictor. Pooled across studies, the QRS and the drug level predict complications similarly and relatively poorly.
- Digoxin effect (down-sloping ST depression, flat T waves) appears with or without toxicity, and serum levels do not track toxicity reliably.
- T-wave inversion is the ECG finding most often reported with lithium; clozapine myocarditis has no specific ECG sign, and tachycardia is sensitive but not specific.

## Referencias del capítulo

- **Li 2025**. Li M, Bai Y, Wang Y, et al. A Review of Clinical Advances and Challenges in Clozapine-Induced Myocarditis. Neuropsychiatr Dis Treat. 2025;21:525-538. [DOI](https://doi.org/10.2147/NDT.S502312) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/40070369/)
- **Bailey 2004**. Bailey B, Buckley NA, Amre DK. A meta-analysis of prognostic indicators to predict seizures, arrhythmias or death after tricyclic antidepressant overdose. J Toxicol Clin Toxicol. 2004;42(6):877-88. [DOI](https://doi.org/10.1081/clt-200035286) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/15533027/)
- **Soroush 2022**. Soroush N, Aarnoudse AJ, Kavousi M, et al. A NOS1AP gene variant is associated with a paradoxical increase of the QT-interval shortening effect of digoxin. Pharmacogenomics J. 2022;22(1):55-61. [DOI](https://doi.org/10.1038/s41397-021-00256-2) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/34616002/)
- **Chou 2014**. Chou R, Cruciani RA, Fiellin DA, et al. Methadone safety: a clinical practice guideline from the American Pain Society and College on Problems of Drug Dependence, in collaboration with the Heart Rhythm Society. J Pain. 2014;15(4):321-37. [DOI](https://doi.org/10.1016/j.jpain.2014.01.494) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/24685458/)


---

# 24. Channelopathies

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#channel

HeartNormal
Inside the heart

Chapters

Sources

Sound


24

## Channelopathies

Long QT, short QT, Brugada

In the long and short QT syndromes the cells of a structurally normal heart repolarize too slowly or too quickly: the heart-rate-corrected QT interval (QTc) lengthens or shortens and the T wave changes shape. In Brugada syndrome the ST segment rises in V1 and V2; whether abnormal repolarization or slowed conduction in the right ventricular outflow tract, or both, causes that pattern is still debated[85](https://therealryc.github.io/heart-in-twelve-leads/#ref-85 "Antzelevitch 2016"). Catecholaminergic polymorphic ventricular tachycardia, another inherited channelopathy, is diagnosed in a structurally normal heart with a normal resting electrocardiogram, from ventricular tachycardia brought on by exercise or emotion[86](https://therealryc.github.io/heart-in-twelve-leads/#ref-86 "Zeppenfeld 2022").

Pattern

NormalLQT1LQT2LQT3Short QTBrugada type 1Brugada type 2

Normal beat in grey

Long QT score · 2012 table and ESC 2022

| Finding | 2012 | ESC |
| --- | --- | --- |
| QTc 540 ms from the tracing | 3 | 3.5 |
| Notched T waves in 3 leads 6 in the tracing | 1 | 1 |
| QTc ≥480 ms at minute 4 of exercise recovery | – | – |
| Torsade de pointes | – | – |
| T-wave alternans | – | – |
| Low heart rate for age | – | – |
| Congenital deafness | – | n/a |
| Family member with definite LQTS | – | – |
| Unexplained sudden death under 30 in close family | – | – |
| Pathogenic mutation | n/a | – |
| No syncopeSyncope without stressSyncope with stress | – | – |
| Total | 4 | 4.5 |

**2012:** high probability by the paper’s text (3.5 points); its table, apparently misprinted, starts that band at 5. **ESC 2022:** LQTS, if a QTc of 480 ms or more is confirmed on repeated ECGs.

ECG rows in slate are read from the simulated tracing. In the 2012 table torsade and syncope are mutually exclusive; deafness is not in the ESC score and a mutation is not in the 2012 one.

QT interval

540ms

QTc (Bazett)

540ms

T wave, lead II

0.16mV

T peak, lead II

340ms

Notched T waves

6leads

J point, V1

0.1mm

**A low, notched T wave.** QTc 540 ms. The right ventricle recovers after the left, so the T wave has two humps, notched in 6 leads (II, aVF, V2, V3, V4, V5). In lead II it is 0.16 mV, the lowest of the three simulated types; Moss 1995 measured 0.13 mV against about 0.37 mV in the others.

### What the simulation changes

Every cell in the simulated heart follows one action-potential shape, stretched to its own duration. The simulation represents long QT, short QT and the Brugada patterns as changes to that shape; it does not model ion currents. Long QT lengthens the action potential and changes how its last phase falls, short QT shortens it, and the Brugada patterns lower the plateau of the epicardium of the right ventricle (RV) beneath V1 and V2. The changes are phenomenological, chosen so that the surface electrocardiogram (ECG) shows the published patterns. The heart’s geometry and activation sequence are untouched, so the QRS lasts as long as before; the Brugada patterns do reshape its end in V1 and V2, adding a small terminal r′ wave.

### Long QT: three genotypes and their T waves

Long QT syndrome (LQTS) types 1, 2 and 3 (LQT1 to LQT3) arise from variants in KCNQ1, KCNH2 and SCN5A, the genes behind the slow and rapid delayed-rectifier potassium currents (IKs and IKr) and the sodium current (INa)[115](https://therealryc.github.io/heart-in-twelve-leads/#ref-115 "Schwartz 2012"). Their T waves differ: early-onset broad T waves in LQT1, bifid (notched) T waves in LQT2 and late-onset T waves in LQT3[96](https://therealryc.github.io/heart-in-twelve-leads/#ref-96 "Tardo 2023"), [97](https://therealryc.github.io/heart-in-twelve-leads/#ref-97 "Moss 1995"). In the families Moss studied, the interval from QRS onset to T-wave onset in lead II, corrected for rate, was 243 ms in LQT1, 290 ms in LQT2 and 341 ms in LQT3; the T wave was smallest in LQT2 (0.13 mV, against 0.37 and 0.36 mV) and longest in LQT1 (262 ms, against about 190 ms)[97](https://therealryc.github.io/heart-in-twelve-leads/#ref-97 "Moss 1995"). The patterns overlap[97](https://therealryc.github.io/heart-in-twelve-leads/#ref-97 "Moss 1995"). Typical ST–T patterns were present in 88% of LQT1 and LQT2 carriers and 65% of LQT3 carriers[116](https://therealryc.github.io/heart-in-twelve-leads/#ref-116 "Zhang 2000").

In the simulation, LQT1 lengthens every action potential and slows its last phase, which spreads the T wave out. LQT3 lengthens the plateau: the ST segment grows and a normal-looking T wave arrives late. For LQT2 the RV recovers 110 ms after the left ventricle (LV), so the T wave forms in two steps, low and notched. That split reproduces the published shape; the model does not say where recovery is delayed in patients.

### Making the diagnosis

The diagnostic score introduced in 1993 and updated to 2011 is printed in Schwartz, Crotti and Insolia 2012[115](https://therealryc.github.io/heart-in-twelve-leads/#ref-115 "Schwartz 2012"). A rate-corrected QT (QTc, by Bazett’s formula) of 480 ms or more scores 3 points, 460 to 479 ms 2, and 450 to 459 ms in a man 1. Torsade de pointes scores 2; T-wave alternans, notched T waves in three leads and a QTc of 480 ms or more at minute 4 of exercise recovery 1 each; a low heart rate for age 0.5; syncope with stress 2 or without stress 1; congenital deafness 0.5; a family member with definite LQTS 1; and unexplained sudden death before 30 in the immediate family 0.5. One point or less means a low probability, 1.5 to 3 an intermediate one. For the top band the paper’s table and text disagree: the table, as printed in the author manuscript, says 5 points or more, apparently a misprint, while the text says 3.5 points is sufficient for a high probability[115](https://therealryc.github.io/heart-in-twelve-leads/#ref-115 "Schwartz 2012"). The score above the cards follows the text, so every total falls in a band.

The 2022 European Society of Cardiology (ESC) guideline diagnoses LQTS with a QTc of 480 ms or more on repeated 12-lead ECGs, a score above 3, or a pathogenic mutation; with arrhythmic syncope, a QTc of 460 ms or more is enough to consider it[86](https://therealryc.github.io/heart-in-twelve-leads/#ref-86 "Zeppenfeld 2022"). Its modified score gives 3.5 points both to a QTc of 480 ms or more and to a pathogenic mutation, so either alone passes the threshold[86](https://therealryc.github.io/heart-in-twelve-leads/#ref-86 "Zeppenfeld 2022").

### Short QT

In adults a QTc of 390 ms or less is short[6](https://therealryc.github.io/heart-in-twelve-leads/#ref-6 "Rautaharju 2009"). The ESC diagnoses short QT syndrome (SQTS) with a QTc of 360 ms or less plus a pathogenic mutation, a family history of SQTS, or survival from ventricular tachycardia or fibrillation (VT or VF) without heart disease, and says it should be considered with a QTc of 320 ms or less alone[86](https://therealryc.github.io/heart-in-twelve-leads/#ref-86 "Zeppenfeld 2022"). In 61 reported cases the mean QTc was 306.7 ms, and symptomatic patients ranged from 248 to 381 ms[117](https://therealryc.github.io/heart-in-twelve-leads/#ref-117 "Gollob 2011"). In the simulation every action potential is 80 ms shorter.

### Brugada patterns

Only the coved type 1 pattern is diagnostic: ST elevation of 2 mm (0.2 mV) or more in at least one right precordial lead, V1 to V3 in the 2016 consensus, placed in the fourth, third or second intercostal space[85](https://therealryc.github.io/heart-in-twelve-leads/#ref-85 "Antzelevitch 2016"); the 2022 ESC guideline names V1 or V2[86](https://therealryc.github.io/heart-in-twelve-leads/#ref-86 "Zeppenfeld 2022"). The pattern may appear spontaneously or be brought out by sodium-channel-blocking drugs or fever[86](https://therealryc.github.io/heart-in-twelve-leads/#ref-86 "Zeppenfeld 2022"). A spontaneous type 1 pattern without other heart disease establishes Brugada syndrome; one that appears only on provocation also needs other clinical features, such as documented VF or polymorphic VT, arrhythmic syncope or a relevant family history[86](https://therealryc.github.io/heart-in-twelve-leads/#ref-86 "Zeppenfeld 2022"), [85](https://therealryc.github.io/heart-in-twelve-leads/#ref-85 "Antzelevitch 2016"). The type 2, saddle-back pattern has ST elevation of 0.5 mm or more (generally 2 mm or more in V2) followed by a positive T wave in V2, and cannot substitute for type 1[85](https://therealryc.github.io/heart-in-twelve-leads/#ref-85 "Antzelevitch 2016"). The 2012 consensus keeps only these two patterns, folding the old type 3 into the saddle-back[118](https://therealryc.github.io/heart-in-twelve-leads/#ref-118 "Bayés de Luna 2012").

The simulated pattern comes from the basal RV epicardium that faces the front of the chest, the model’s stand-in for the right ventricular outflow tract, the region most affected in Brugada syndrome[85](https://therealryc.github.io/heart-in-twelve-leads/#ref-85 "Antzelevitch 2016"). Its plateau is lowered after the spike and climbs back slowly, so during the ST segment current flows between it and the muscle beneath, most strongly at first. The two types differ only in when the region recovers. For type 1 it recovers 60 ms late: the ST segment falls from a high J point straight into a negative T wave, the coved shape. For type 2 it recovers 60 ms early: the falling ST segment reaches a trough and rises again into an upright T wave, the saddle. The timing was chosen to reproduce the two published shapes, and the model makes no claim about how they arise in patients.

Placing V1 and V2 in the third or second intercostal space increases the sensitivity of the ECG[85](https://therealryc.github.io/heart-in-twelve-leads/#ref-85 "Antzelevitch 2016"), and the pattern is sometimes concealed, recorded only in these upper leads[118](https://therealryc.github.io/heart-in-twelve-leads/#ref-118 "Bayés de Luna 2012"). The simulation cannot show this: its right ventricle ends at the valve plane, with no outflow tract rising above it, and the muscle with the lowered plateau sits level with the fourth-interspace electrodes, so moving V1 and V2 up carries them away from it. The model also produces a small mirror-image ST depression in V5 and V6; the published criteria concern V1 to V3.

### Early repolarization: pattern and syndrome

The early repolarization (ER) pattern is defined by Jp, the peak of a notch or the onset of a slur at the end of the QRS: a Jp of 0.1 mV or more, with or without ST elevation[84](https://therealryc.github.io/heart-in-twelve-leads/#ref-84 "Macfarlane 2015"), in two or more contiguous leads other than V1 to V3, with a QRS under 120 ms[85](https://therealryc.github.io/heart-in-twelve-leads/#ref-85 "Antzelevitch 2016"). The ESC defines the pattern as J-point elevation of 1 mm or more in two adjacent inferior or lateral leads, and the syndrome as that pattern in a patient resuscitated from otherwise unexplained VF or polymorphic VT; in a victim of sudden death with a negative autopsy and chart review, and an ECG recorded before death that shows the pattern, it says the syndrome should be considered[86](https://therealryc.github.io/heart-in-twelve-leads/#ref-86 "Zeppenfeld 2022"). The pattern was considered benign until 2008, when it was linked to cardiac arrest from idiopathic VF[84](https://therealryc.github.io/heart-in-twelve-leads/#ref-84 "Macfarlane 2015"). Experimental work attributes the J wave to a notch early in the action potential of the epicardium but not the endocardium[85](https://therealryc.github.io/heart-in-twelve-leads/#ref-85 "Antzelevitch 2016"). This chapter does not draw the pattern; chapter 20 shows it by lowering the early plateau of the inferolateral outer wall, and chapter 22 draws the J wave of hypothermia from a transient notch, computed by superposing two simulations.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

One beat per lead · 25 mm/s · 10 mm/mV · grey: normal

II and V3 · 50 mm/s · 20 mm/mV · grey: normal

Action potentials · grey: normal

## Puntos clave del original

- The simulation represents long QT, short QT and Brugada as changes to the action potential’s shape and duration, chosen to reproduce the published ECGs; it does not model ion currents.
- LQT1 tends to give a broad T wave, LQT2 a low, notched one and LQT3 a late one after a long ST segment; the patterns overlap.
- ESC 2022 diagnoses LQTS with a QTc of 480 ms or more on repeated ECGs, a score above 3 or a pathogenic mutation. The 2012 Schwartz score’s text puts high probability at 3.5 points, though its table, apparently misprinted, says 5.
- SQTS is diagnosed with a QTc of 360 ms or less plus a mutation, a family history or survived VT or VF, and considered at 320 ms or less.
- Only the coved type 1 Brugada pattern, 2 mm or more in V1 or V2 (V1 to V3 in the 2016 consensus), is diagnostic: when it appears spontaneously, or, after a sodium-channel blocker or fever, only with a clinical feature such as arrhythmic syncope or documented VF.
- The early repolarization pattern becomes a syndrome in a patient resuscitated from otherwise unexplained VF or polymorphic VT, and the syndrome should be considered in a sudden-death victim with a negative autopsy and an earlier ECG showing the pattern.

## Referencias del capítulo



---

# 25. Cardiomyopathy, pericardium and pulmonary embolism

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#cm

HeartNormal
Inside the heart

Chapters

Sources

Sound


25

## Cardiomyopathy, pericardium and pulmonary embolism

Structural disease in one simulated heart

Five conditions, each simulated in the same heart: walls that thicken, a right ventricle that scars, walls infiltrated by amyloid, fluid around the heart, and a right ventricle suddenly overloaded.

Condition

NormalHypertrophicArrhythmogenic RVAmyloidosisEffusionPulmonary embolism

Normal beat in grey

Heart rate

60bpm

QRS duration

80ms

QRS axis

+46°

Largest limb QRS

0.69mV

Sokolow-Lyon

1.85mV

T inverted in

V1–V3

**T-wave inversion in V1–V3, a major criterion.** The scar delays the last activation to 105 ms after QRS onset, but the islands of muscle activating that late are too small to produce a visible deflection: on the tracing the QRS lasts 80 ms, so there is no complete right bundle branch block. Terminal activation, from the nadir of the S wave to the end of the QRS, is V1 36 ms, V2 37 ms, V3 15 ms, short of the 55 ms minor criterion (the normal heart: V1 33 ms). No separate epsilon wave appears.

### Hypertrophic cardiomyopathy

In adults, hypertrophic cardiomyopathy is defined by a left ventricular (LV) wall thickness of 15 mm or more that is not explained solely by abnormal loading conditions; walls of 13 to 14 mm require evaluation of other features, including family history, genetic findings and electrocardiogram (ECG) abnormalities[119](https://therealryc.github.io/heart-in-twelve-leads/#ref-119 "Arbelo 2023"). The ECG can also point to a cause: pre-excitation (Danon disease and PRKAG2 disease, both glycogen storage disorders, and Fabry disease), atrioventricular (AV) block (amyloidosis, sarcoidosis), low voltage (amyloidosis) or an axis between −90° and ±180°, sometimes called northwest (Noonan syndrome)[119](https://therealryc.github.io/heart-in-twelve-leads/#ref-119 "Arbelo 2023"). Voltage criteria alone are seen in under 2% of patients, while T-wave inversion appears in 62% to over 90% of patients, depending on the cohort; inversion in V4 to V6 was found in 38% of patients with hypertrophic cardiomyopathy against 0.8% of athletes[120](https://therealryc.github.io/heart-in-twelve-leads/#ref-120 "Drezner 2017"). Pathological hypertrophy commonly brings T-wave inversion in the inferior and lateral leads, ST depression and pathological Q waves, and deep T-wave inversion in V5 and V6 should prompt imaging for apical hypertrophic cardiomyopathy[120](https://therealryc.github.io/heart-in-twelve-leads/#ref-120 "Drezner 2017"). In the simulation the LV wall is 18 mm. The model thickens it evenly all round, septum included, so the hypertrophy is concentric; asymmetric septal hypertrophy and the apical form are not represented. The T-wave inversion comes from making the inner half of the wall recover early, a modelling choice.

### Arrhythmogenic right ventricular cardiomyopathy

Fibrofatty tissue replaces the muscle of the right ventricle (RV). The classic description puts early disease in the inflow, the outflow and the apex[121](https://therealryc.github.io/heart-in-twelve-leads/#ref-121 "Marcus 2010"), but it predates genetic testing: in 74 mutation-positive patients the basal inferior and basal anterior walls were the most often affected, and the apex was involved only in advanced disease[122](https://therealryc.github.io/heart-in-twelve-leads/#ref-122 "Te Riele 2013"). The 2010 task force criteria count T-wave inversion in V1, V2 and V3 or beyond, after age 14 and without complete right bundle branch block (RBBB), as a major criterion, and inversion in V1 and V2 alone as minor. An epsilon wave, reproducible low-amplitude signals between the end of the QRS and the start of the T wave in V1 to V3, is major. A terminal activation duration of 55 ms or more, from the nadir of the S wave to the end of the QRS in V1, V2 or V3, without complete RBBB, is minor[121](https://therealryc.github.io/heart-in-twelve-leads/#ref-121 "Marcus 2010"). The 2023 European Society of Cardiology (ESC) guideline urges caution with epsilon waves: they are “frequently overdiagnosed”, there is “poor agreement even between experts” on their presence, and they occur with severe structural disease, so they “add little to the diagnosis”[119](https://therealryc.github.io/heart-in-twelve-leads/#ref-119 "Arbelo 2023").

In the simulation about three cells in four of the three classic zones become scar, and the RV’s fast inner layer conducts at 1.0 instead of 1.46 m/s, so in the computed activation the wave reaches the surviving muscle late and by winding paths. The last islands of surviving muscle activate about 105 ms after the QRS begins, but they are too small to produce a visible deflection. On the tracing the QRS still ends about 80 ms after its onset, and terminal activation in V1 and V2 is under 40 ms, close to the normal heart’s, so the 55 ms criterion is not met. In this chapter the QRS and terminal activation are read off the drawn leads, as a reader measures them; other chapters time the QRS from the simulated activation times, which in a heart without scar gives a few milliseconds more. No separate epsilon wave emerges either. The T-wave inversion is a modelling choice: the outer layer of the RV wall recovers after the inner layer, the reverse of normal.

### Cardiac amyloidosis

Amyloid deposits thicken the walls without adding working muscle. An ESC position statement lists QRS voltage that is low for the degree of wall thickness as a red flag[123](https://therealryc.github.io/heart-in-twelve-leads/#ref-123 "Garcia-Pavia 2021"). In an early series, S in V1 plus R in V5 or V6 was 14.6 mm (normal 15 to 35 mm) while LV muscle area was increased, 11.4 cm²/m² (normal 6 to 10); voltage and muscle area were inversely related (r = −0.79)[124](https://therealryc.github.io/heart-in-twelve-leads/#ref-124 "Carroll 1982"). In 127 patients with light-chain (AL) amyloidosis and biopsy-proven cardiac involvement, 46% had low voltage, 47% a pseudoinfarct pattern and 16% met criteria for hypertrophy[125](https://therealryc.github.io/heart-in-twelve-leads/#ref-125 "Murtagh 2005"). Low voltage was defined in one study of 200 patients as a QRS of 0.5 mV or less in every limb lead, 1.0 mV or less in every chest lead, or a Sokolow-Lyon index of 1.5 mV or less; it was found in 34%, 13% and 60% by those three definitions and was a relatively late finding[126](https://therealryc.github.io/heart-in-twelve-leads/#ref-126 "Cyrille 2014"). The simulated LV walls are 15 mm thick (the RV wall keeps its 4 mm), and each ventricular cell makes 40% of the normal action-potential amplitude, a chosen value that stands in for fewer working cells in the same volume.

### Pericardial effusion

Tamponade gives “decreased electrocardiographic voltage with electrical alternans”, attributed to the damping effect of the pericardial fluid and the swinging heart[79](https://therealryc.github.io/heart-in-twelve-leads/#ref-79 "Adler 2015"). The simulation represents both directly but approximately: one damping factor (0.45) scales every lead, and the heart’s orientation swings by 12° and 8° each way on alternate beats. Both values are chosen to make the signs visible; the true effect depends on the volume of fluid and the torso, and a real heart also moves toward and away from the chest wall.

### Acute pulmonary embolism

In a meta-analysis of 45 studies and 8,209 patients, a heart rate over 100 was found in 38%, T-wave inversion in V1 in 38%, ST elevation in aVR in 36%, T-wave inversion in V1 to V4 in 29%, S1Q3T3 (an S wave in lead I, a Q wave and an inverted T wave in lead III) in 24%, atrial fibrillation in 15%, incomplete RBBB in 12% and complete RBBB in 10%. In 10 of these studies (3,007 patients), a fast rate, S1Q3T3, complete RBBB, inversion in V1 to V4, ST elevation in aVR and atrial fibrillation were associated with shock or death, though weakly for two of them: for inversion in V1 to V4 the pooled odds ratio was 1.69, with a 95% confidence interval of 0.83 to 3.43 that includes no effect, and complete RBBB lost significance when one study was left out[127](https://therealryc.github.io/heart-in-twelve-leads/#ref-127 "Shopp 2015"). In an earlier series of patients with embolism and no prior heart or lung disease, the commonest ECG abnormality was nonspecific ST-segment or T-wave change, in 49%[128](https://therealryc.github.io/heart-in-twelve-leads/#ref-128 "Stein 1991"). Signs of RV overload are usually found in more severe cases; in milder embolism the only abnormality may be sinus tachycardia[129](https://therealryc.github.io/heart-in-twelve-leads/#ref-129 "Konstantinides 2020"). The simulated heart beats at 110 per minute, with a dilated RV and a right bundle that conducts 30 ms late, and the QRS changes are computed from these. The T-wave inversion is again a modelling choice: the outer layer of the RV wall recovers after the inner layer. The normal simulated heart already has a small S wave in I and a small q wave in III; the simulated embolism deepens the S and inverts the T in III.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

Short axis near the base · colour: activation

V1, V2, V3 · 50 mm/s · 10 mm/mV · grey: normal

Twelve leads · 10 s · 25 mm/s · 10 mm/mV

## Puntos clave del original

- Hypertrophic cardiomyopathy: walls of 15 mm or more; T-wave inversion is far commoner than voltage criteria alone.
- Arrhythmogenic right ventricular cardiomyopathy: in the 2010 task force criteria, T-wave inversion in V1–V3 and epsilon waves are major criteria and a terminal activation of 55 ms or more is minor; the 2023 ESC guideline advises caution with epsilon waves.
- Amyloidosis: QRS voltage low for the wall thickness; frank low voltage in only about half of patients, and late.
- Tamponade: low voltage with electrical alternans, from the damping fluid and the swinging heart.
- Pulmonary embolism: of the right-heart signs pooled in one meta-analysis, a rate over 100 and T-wave inversion in V1 were the most frequent (38% each), and in milder embolism sinus tachycardia may be the only one; nonspecific ST–T change, not among them, was the most common abnormality in an earlier series (49%). T-wave inversion in V1–V4, S1Q3T3 and right bundle branch block are usually found in more severe cases.

## Referencias del capítulo

- **Te Riele 2013**. Te Riele AS, James CA, Philips B, et al. Mutation-positive arrhythmogenic right ventricular dysplasia/cardiomyopathy: the triangle of dysplasia displaced. J Cardiovasc Electrophysiol. 2013;24(12):1311-20. [DOI](https://doi.org/10.1111/jce.12222) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/23889974/)


---

# 26. Pacing

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#pacing

HeartNormal
Inside the heart

Chapters

Sources

Sound


26

## Pacing

Lead position, modes and malfunction

A paced beat starts where the lead touches the heart: from right ventricular muscle it spreads slowly and the QRS is wide, from the His or left bundle it uses the conduction system. On a rhythm strip, the spikes show when the device paced and whether it captured and sensed correctly.

Lead position

RV apexRV septumHis bundleLeft bundle areaLV epicardiumBoth ventricles

Left bundle capturedSinus beat in grey

NBG code · click a letterVVI

VIventricleVIIventricleIIIIinhibited·IVrate modulation·Vmultisite pacing

VVI: paces ventricle; senses ventricle; response to sensing: inhibited.

Strip: pacing mode

AAIVVIDDD

Strip: malfunction

NoneFailure to captureUndersensingOversensing

Paced QRS

165ms

Spike to QRS onset

0ms

Spike to V6 R peak

77ms

QRS axis

-76°

V1

Qr

Lead I

r

**RV apical pacing: wide, with a superior axis.** The wave starts at the apex and crosses both ventricles through muscle: QRS 165 ms, axis -76°.

### The pacing code

Pacing modes are named by the generic code of the North American Society of Pacing and Electrophysiology and the British Pacing and Electrophysiology Group (the NBG code)[130](https://therealryc.github.io/heart-in-twelve-leads/#ref-130 "Bernstein 2002"). The first letter is the chamber paced and the second the chamber sensed, each O (none), A (atrium), V (ventricle) or D (dual); the third is the response to a sensed event, O (none), T (triggered), I (inhibited) or D (dual); the fourth is R for rate modulation; the fifth marks multisite pacing in the atrium, the ventricle or both[131](https://therealryc.github.io/heart-in-twelve-leads/#ref-131 "Kim 2024"). The 2002 revision limited the fourth position to the presence or absence of rate modulation and the fifth to the location or absence of multisite pacing[130](https://therealryc.github.io/heart-in-twelve-leads/#ref-130 "Bernstein 2002"). The decoder above the cards takes any code; click a letter to change it.

### Where the lead sits

A stimulus in the right ventricular (RV) muscle starts the wave where the lead tip touches, and the wave crosses the ventricles through muscle. From the RV apex the QRS is broad: in one series of 252 patients the paced QRS from the apical septum averaged 148.9 ms, and the series’ example apical tracing has a superior axis[132](https://therealryc.github.io/heart-in-twelve-leads/#ref-132 "Gupta 2018"). From the RV septum the paced QRS has notches in the lateral leads, a “W” in V1 and a V6 R-wave peak time over 120 ms[133](https://therealryc.github.io/heart-in-twelve-leads/#ref-133 "Burri 2023").

His bundle pacing uses the conduction system, and a 2018 working group standardized the definitions of its forms[134](https://therealryc.github.io/heart-in-twelve-leads/#ref-134 "Vijayaraman 2018"). The lead sits where the interval from the His potential to the QRS is 35 ms or more[133](https://therealryc.github.io/heart-in-twelve-leads/#ref-133 "Burri 2023"). When only the His bundle is captured (selective capture) an isoelectric interval follows the spike in all 12 leads, as long as the His-ventricular (HV) interval, and the QRS is identical to the native one[133](https://therealryc.github.io/heart-in-twelve-leads/#ref-133 "Burri 2023"), [135](https://therealryc.github.io/heart-in-twelve-leads/#ref-135 "Chung 2023"); when the muscle beside it is captured too (non-selective capture), the QRS starts at the spike with a pseudo-delta wave[133](https://therealryc.github.io/heart-in-twelve-leads/#ref-133 "Burri 2023"). The simulation shows selective capture.

Left bundle branch area pacing (LBBAP) captures the left side of the septum, with or without the conduction system, from a lead screwed deep into the septum about 1 to 2 cm from the His bundle[133](https://therealryc.github.io/heart-in-twelve-leads/#ref-133 "Burri 2023"). The left ventricle is activated through the left bundle, while the right ventricle activates only after the wave crosses the septum: V1 ends with an R wave (qR, Qr, QR or rSR′), a sign that is sensitive for LBBAP but not specific for left bundle capture[135](https://therealryc.github.io/heart-in-twelve-leads/#ref-135 "Chung 2023"), [133](https://therealryc.github.io/heart-in-twelve-leads/#ref-133 "Burri 2023"). Capture is judged by the time from the stimulus to the peak of the R wave in V6: under 75 ms with a narrow native QRS or isolated right bundle branch block, under 80 ms with left bundle branch block or a wide escape rhythm. Both cut-offs were 100% specific in their groups; the first was only about 40% sensitive[133](https://therealryc.github.io/heart-in-twelve-leads/#ref-133 "Burri 2023"). In the simulation the captured left bundle activates the left ventricle’s conduction system 30 ms after the stimulus, the middle of the 25 to 34 ms interval from left bundle potential to QRS reported for left bundle pacing[133](https://therealryc.github.io/heart-in-twelve-leads/#ref-133 "Burri 2023"); switch capture off to pace the septal muscle alone.

For cardiac resynchronization a second lead paces the left ventricle (LV) from a lateral coronary vein, on the epicardium. Biventricular pacing from the RV apex and a lateral vein gave a dominant R wave in V1 in 65% of 181 patients with left bundle branch block, and a Q or q wave in lead I in 85%; their absence did not necessarily mean a problem[136](https://therealryc.github.io/heart-in-twelve-leads/#ref-136 "Fazelifar 2018"). At implant, a lead I complex that is neither QS nor QR is one of the findings listed for changing approach[135](https://therealryc.github.io/heart-in-twelve-leads/#ref-135 "Chung 2023").

In this simulation a wave that enters the conduction system from the muscle travels through it slowly, so paced complexes are wide; the RV apical QRS is 165 ms. The widths also come in the wrong order: Gupta 2018 found the paced QRS narrower from the mid-septum and the outflow tract septum than from the apical septum[132](https://therealryc.github.io/heart-in-twelve-leads/#ref-132 "Gupta 2018"), but the simulated RV septal QRS, 177 ms, is wider than the apical one. Burri 2023 describes the paced QRS narrowing as the lead advances from the right side of the septum to the left[133](https://therealryc.github.io/heart-in-twelve-leads/#ref-133 "Burri 2023"), but in the simulation pacing the left septal muscle alone gives 188 ms, wider still, and capturing the left bundle gives 172 ms, only 5 ms narrower than RV septal pacing, because the right ventricle, reached through the septum, finishes late. The simulated RV septal stimulus to V6 R-peak time is 110 ms, short of the more than 120 ms that Burri 2023 describes[133](https://therealryc.github.io/heart-in-twelve-leads/#ref-133 "Burri 2023"). The spikes are drawn at one fixed size.

### Modes on a rhythm strip

AAI paces and senses the atrium and is inhibited by a sensed P wave; the ventricles then activate through the patient’s own atrioventricular (AV) node and conduction system. AAI cannot pace patients who develop atrial arrhythmias, and such an arrhythmia can leave them without backup pacing[137](https://therealryc.github.io/heart-in-twelve-leads/#ref-137 "Waqanivavalagi 2024"). VVI paces the ventricle when no QRS is sensed at the set rate; DDD senses both chambers and paces either or both[137](https://therealryc.github.io/heart-in-twelve-leads/#ref-137 "Waqanivavalagi 2024"). In the strips the lower rate is set to 60 per minute, the ventricular lead sits at the RV apex and the atrial lead in the right atrial appendage. Beneath the strip is the device’s marker channel, its record of what it sensed and paced: AS and AP for a sensed or paced atrial event, VS and VP for the ventricle, and, in rose on a third line, anything a channel sensed that was not its own chamber’s activity. On a narrow screen the strip shows the 6 seconds around the events its note describes.

### When pacing fails

In failure to capture the device fires and the spikes appear, but the chamber does not depolarize, so the heart rate stays below the set rate[137](https://therealryc.github.io/heart-in-twelve-leads/#ref-137 "Waqanivavalagi 2024"). An undersensing device fails to detect the underlying rhythm, so it paces without regard to where the heart is in its cycle; a ventricular spike can fall on the T wave, the R-on-T phenomenon, which can lead to ventricular fibrillation[137](https://therealryc.github.io/heart-in-twelve-leads/#ref-137 "Waqanivavalagi 2024"). An oversensing device counts low-voltage deflections as P waves or QRS complexes and withholds pacing it should deliver[137](https://therealryc.github.io/heart-in-twelve-leads/#ref-137 "Waqanivavalagi 2024"); in a patient who depends on the pacemaker, oversensing of electromagnetic interference can cause asystole[131](https://therealryc.github.io/heart-in-twelve-leads/#ref-131 "Kim 2024"). In the simulation the oversensed signals are the heart’s own: P waves on the ventricular channel, or the QRS on the atrial channel. A spike that falls before the end of the previous T wave does not capture, because the simulated muscle is still refractory.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

Paced beat · 25 mm/s · 10 mm/mV · grey: sinus

Long axis, from the front

VVI · lead II and V1 · 25 mm/s · 10 s

## Puntos clave del original

- The NBG code gives the chamber paced, the chamber sensed and the response (O, T, I, D), then rate modulation (R) and multisite pacing.
- From an RV lead the wave spreads through muscle: a wide QRS and, from the septum, notched lateral leads and a “W” in V1.
- Selective His capture gives an isoelectric interval after the spike and a QRS identical to the native one.
- With left bundle area pacing V1 ends in an R wave; a stimulus to V6 R-peak time under 75 ms (narrow native QRS) or 80 ms (left bundle branch block) is specific for left bundle capture.
- Failure to capture: spikes without a complex. Undersensing: spikes in the wrong place, including on the T wave. Oversensing: pacing withheld, and pauses.

## Referencias del capítulo

- **Kim 2024**. Kim M, Kwon CH. Perioperative management of patients with cardiac implantable electronic devices. Korean J Anesthesiol. 2024;77(3):306-315. [DOI](https://doi.org/10.4097/kja.23826) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/38287213/)


---

# 27. AI-ECG

Fuente: https://therealryc.github.io/heart-in-twelve-leads/#ai

HeartNormal
Inside the heart

Chapters

Sources

Sound


27

## AI-ECG

A real network reads a simulated heart

The network on this page learned from about 17,000 real electrocardiograms (ECGs) and runs in your browser. Choose a simulated heart to see the network’s five outputs and where in the tracing its answer is most sensitive.

Simulated heart

NormalLBBBRBBBLAFBOld anterior MIAcute inferior MIAcute anterior MILV wall 15 mmLV wall 19 mmPotassium 7.5 mmol/LPre-excitation

Explain

Top outputNORMMISTTCCDHYP

Show where the output is most sensitive

Top output

NORM 1.00

Explaining

NORM

Test AUROC

0.929macro

**Normal, 1.00.** For the simulated normal heart, the network’s highest output is normal.

### The model on this page

PTB-XL (version 1.0.3) is a public collection of 21,799 ten-second, 12-lead ECGs from 18,869 patients; its first release, described in 2020, held 21,837 from 18,885[34](https://therealryc.github.io/heart-in-twelve-leads/#ref-34 "Wagner 2020"). Each record was labelled by up to two cardiologists or, for about a quarter, possibly only by the ECG machine’s automatic interpretation, with statements that group into five diagnostic superclasses: normal (NORM), myocardial infarction (MI), ST/T change (STTC), conduction disturbance (CD) and hypertrophy (HYP)[34](https://therealryc.github.io/heart-in-twelve-leads/#ref-34 "Wagner 2020"). Its records come split into ten folds by patient; the last two hold only records a person reviewed, and the standard practice is to train on folds 1 to 8, tune on fold 9 and test once on fold 10[34](https://therealryc.github.io/heart-in-twelve-leads/#ref-34 "Wagner 2020"), [138](https://therealryc.github.io/heart-in-twelve-leads/#ref-138 "Strodthoff 2021"). The network here is a small one-dimensional convolutional network of about 275,000 parameters, written for this site and trained that way on the 100-samples-per-second recordings. On the 2,158 test records its macro area under the receiver operating characteristic curve (AUROC), the average over the five superclasses, is 0.93, in line with the published benchmark for this task[138](https://therealryc.github.io/heart-in-twelve-leads/#ref-138 "Strodthoff 2021"). It reads 2.5-second windows, half-overlapping, and keeps each output's highest score across the ten seconds.

### Reading a simulated heart

The network has never seen a simulated tracing. Each heart in the menu is a variant of the same simulated heart, so the network’s output is a test of transfer from real patients to a model of physiology. It reads the normal heart as normal; left bundle branch block (LBBB), right bundle branch block (RBBB) and left anterior fascicular block (LAFB) as conduction disturbances; and the scar and the acute inferior injury as infarction. It reads a left ventricle (LV) with 15 mm walls as normal and flags hypertrophy only at 19 mm, much as the voltage criteria for hypertrophy miss most thickened ventricles in patients[19](https://therealryc.github.io/heart-in-twelve-leads/#ref-19 "Hancock 2009"). For the fascicular block its infarction output is nearly as high as its conduction output, and it reads the pre-excited heart as infarction. It misses the acute anterior injury and reads it as normal. In this simulation that injury raises the ST segment without Q waves in V1 to V4, while the inferior injury it catches also has Q waves about 40 ms wide in III and aVF. PTB-XL does hold acute infarcts, but where it gives an infarct’s stage, most are subacute or old[34](https://therealryc.github.io/heart-in-twelve-leads/#ref-34 "Wagner 2020"). It reads the hyperkalemic heart as normal too. PTB-XL has no potassium label: electrolyte effects appear only in 96 records marked “electrolytic disturbance or drug”, filed under ST/T change[34](https://therealryc.github.io/heart-in-twelve-leads/#ref-34 "Wagner 2020"), and that output stays near zero here.

### What ECG networks can detect

Networks trained on thousands to millions of ECGs, an approach called artificial intelligence ECG (AI-ECG), detect conditions and traits that are hard to judge by eye. In Attia's Mayo Clinic work, an ECG network detected a left ventricular ejection fraction of 35% or less with an AUROC of 0.93[139](https://therealryc.github.io/heart-in-twelve-leads/#ref-139 "Attia 2019"); in a pragmatic trial in primary care, giving clinicians that result raised new diagnoses of an ejection fraction of 50% or less within 90 days from 1.6% to 2.1%[140](https://therealryc.github.io/heart-in-twelve-leads/#ref-140 "Yao 2021"). Networks have found atrial fibrillation from an ECG in sinus rhythm (AUROC 0.87)[141](https://therealryc.github.io/heart-in-twelve-leads/#ref-141 "Attia 2019"), sex (AUROC 0.97) and age[142](https://therealryc.github.io/heart-in-twelve-leads/#ref-142 "Attia 2019"), hyperkalemia from two limb leads (AUROC 0.85 to 0.88 at three sites)[143](https://therealryc.github.io/heart-in-twelve-leads/#ref-143 "Galloway 2019"), hypertrophic cardiomyopathy (0.96)[144](https://therealryc.github.io/heart-in-twelve-leads/#ref-144 "Ko 2020"), cardiac amyloidosis (0.91)[145](https://therealryc.github.io/heart-in-twelve-leads/#ref-145 "Grogan 2021") and structural heart disease as defined by echocardiography (0.85 at the training hospitals), where the network also outperformed cardiologists in a controlled evaluation[146](https://therealryc.github.io/heart-in-twelve-leads/#ref-146 "Poterucha 2025").

### Where the output is sensitive

The lower panel, a saliency map, colours each lead by the gradient of the chosen output with respect to each sample of the input: how much the output would change if that point of the tracing moved. Among the explanation methods compared for ECG networks, this plain gradient was the one that pointed to specific moments in the tracing[147](https://therealryc.github.io/heart-in-twelve-leads/#ref-147 "Wagner 2024"). It shows where an output is sensitive and does not say why; explanations of this kind have been called a false hope for judging an individual patient’s prediction, and they do not replace validation[148](https://therealryc.github.io/heart-in-twelve-leads/#ref-148 "Ghassemi 2021").

### Domain shift

Performance measured where a model was trained often falls when it moves to another hospital, device or population (a domain shift), so it must be measured again there. Structural heart disease detection fell from 0.85 to between 0.78 and 0.80 at external sites[146](https://therealryc.github.io/heart-in-twelve-leads/#ref-146 "Poterucha 2025"); a kidney disease model fell from 0.77 to 0.71[149](https://therealryc.github.io/heart-in-twelve-leads/#ref-149 "Holmstrom 2023"); in the 2020 PhysioNet challenge, top algorithms scored lower on the hidden test data, and lowest, on average, on the one institution held back entirely[150](https://therealryc.github.io/heart-in-twelve-leads/#ref-150 "Perez Alday 2021"); and a heart failure model performed worse in some groups, notably young Black women[151](https://therealryc.github.io/heart-in-twelve-leads/#ref-151 "Kaur 2024"). Reading simulated ECGs is a domain shift too, and it may account for some of the network’s misreadings of the simulated hearts.

For learning to read ECGs, not for clinical decisions. Every tracing is simulated.

The simulated ECG · 10 s

Network outputs

Where NORM is most sensitive · the 2.5 s window that scored highest · gradient of the output

## Puntos clave del original

- The network on this page is a real model, trained on PTB-XL’s recommended folds; it scores a macro AUROC of 0.93 on the held-out test fold.
- It reads most simulated hearts as their diagnosis, but misses ST elevation without Q waves and reads the hyperkalemic heart as normal.
- AI-ECG can detect low ejection fraction, atrial fibrillation from an ECG in sinus rhythm, amyloidosis and structural heart disease, findings that are hard to judge by eye.
- A saliency map shows where an output is sensitive and does not say why.
- Performance can drop at new hospitals and in some patient groups: validate a model where it will be used.

## Referencias del capítulo

