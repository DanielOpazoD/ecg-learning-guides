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
