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
