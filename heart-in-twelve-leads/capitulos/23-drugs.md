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
