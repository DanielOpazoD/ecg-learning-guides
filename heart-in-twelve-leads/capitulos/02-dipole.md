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
