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
