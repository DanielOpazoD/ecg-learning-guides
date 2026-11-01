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

