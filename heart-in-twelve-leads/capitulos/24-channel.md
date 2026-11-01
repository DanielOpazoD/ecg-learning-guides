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

