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

