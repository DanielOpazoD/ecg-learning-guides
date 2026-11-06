# Modos ventilatorios del simulador

## AC/VC

Assist-control volume control

Identificador: vc-cmv · Taxonomía: VC-CMVs

Every breath is mandatory. You set tidal volume and inspiratory flow; the ventilator controls flow, so airway pressure is what varies. Look at the pressure scalar for the load and for patient effort.

Nombres de ejemplo: A/C Volume Control, Volume Control (CMV)

## AC/PC

Assist-control pressure control

Identificador: pc-cmv · Taxonomía: PC-CMVs

Every breath is mandatory and time-cycled. You set the inspiratory pressure and inspiratory time; tidal volume depends on resistance, compliance and patient effort. Look at the flow scalar.

Nombres de ejemplo: A/C Pressure Control, Pressure Control (CMV)

## PRVC

Pressure control with adaptive targeting

Identificador: pc-cmva · Taxonomía: PC-CMVa

Looks like volume control on the settings screen, but every breath is pressure control. Between breaths the ventilator adjusts the inspiratory pressure (up to 3 cmH₂O per breath) to hit the target tidal volume. When the patient pulls harder, the ventilator gives less pressure.

Nombres de ejemplo: PRVC, VC+, AutoFlow, Volume Guarantee

## AC/VC + flow adaptation

Volume control with dual targeting

Identificador: vc-cmvd · Taxonomía: VC-CMVd

Dual targeting: the breath starts as volume control, but if the patient pulls harder than the set flow can satisfy, the ventilator switches to pressure control within the breath and lets flow (and volume) rise to meet demand. If the ventilator also lets that breath flow-cycle, the 2022 taxonomy calls it VC-IMV(4)d,d.

Nombres de ejemplo: Dual-targeted volume control (names vary by ventilator)

## SIMV-VC + PS

Synchronized IMV, volume control, with pressure support

Identificador: vc-imv · Taxonomía: VC-IMV(1)s,s

A set number of volume-control breaths per minute are always delivered (synchronized to effort when possible). Extra patient efforts between them get pressure-supported spontaneous breaths.

Nombres de ejemplo: SIMV Volume Control + Pressure Support

## SIMV-PC + PS

Synchronized IMV, pressure control, with pressure support

Identificador: pc-imv · Taxonomía: PC-IMV(1)s,s

A set rate of time-cycled pressure-control breaths, with pressure-supported spontaneous breaths in between.

Nombres de ejemplo: SIMV Pressure Control + Pressure Support

## APRV / BiLevel

Airway pressure release ventilation

Identificador: aprv · Taxonomía: PC-IMV(1)s,s

Two pressure levels, switched on a timer. Releases from P-high to P-low are the mandatory breaths; the patient can breathe spontaneously at either level because the valves stay open.

Nombres de ejemplo: APRV, BiLevel, Bi-Vent

## ASV

Adaptive support ventilation (simplified)

Identificador: asv · Taxonomía: PC-IMVoi,oi

Optimal targeting: you set a % of predicted minute ventilation. The ventilator measures the expiratory time constant and uses the Otis equation to choose the rate and tidal volume with the least work, then adjusts pressure to deliver them. Spontaneous breaths reduce the mandatory rate. (Simplified teaching model.)

Nombres de ejemplo: ASV, IntelliVent-ASV

## PSV

Pressure support ventilation

Identificador: psv · Taxonomía: PC-CSVs

Every breath is patient-triggered and flow-cycled. You set the support pressure and the expiratory trigger (cycle) as a % of peak flow. No set rate: if the patient stops breathing, only the apnea backup saves them.

Nombres de ejemplo: Pressure Support, Spontaneous/CPAP + PS

## CPAP

Continuous positive airway pressure

Identificador: cpap · Taxonomía: PC-CSVs

Pressure support of zero. The ventilator just holds PEEP; the patient does all of the inspiratory work.

Nombres de ejemplo: CPAP, Spontaneous (PS 0)

## Volume Support

Pressure support with adaptive targeting

Identificador: vs · Taxonomía: PC-CSVa

Pressure support whose level is adjusted breath to breath to reach a target tidal volume. The harder the patient pulls, the less support it gives.

Nombres de ejemplo: Volume Support, Spontaneous Volume Support

## Variable PS

Pressure support with bio-variable targeting

Identificador: varps · Taxonomía: PC-CSVb

Bio-variable targeting: the support pressure changes randomly from breath to breath around the set level, mimicking natural breath-to-breath variability.

Nombres de ejemplo: Variable Pressure Support (noisy PSV)

## PAV+

Proportional assist ventilation

Identificador: pav · Taxonomía: PC-CSVr

Servo targeting: the ventilator measures R and E and, moment to moment, supplies a set percentage of the pressure needed to overcome them. Pull harder and it pushes harder. With no effort, it gives nothing.

Nombres de ejemplo: PAV+, Proportional Assist

## NAVA

Neurally adjusted ventilatory assist

Identificador: nava · Taxonomía: PC-CSVr

Servo targeting from the diaphragm electrical signal (Edi). Pressure is proportional to Edi, the breath is neurally triggered and cycles when Edi falls to 70% of its peak, so timing follows the patient’s own brain. Because of its pressure-control backup, some mode tables list NAVA as PC-IMV(2)s,rs.

Nombres de ejemplo: NAVA (diaphragm EMG, Edi)

## Spontaneous

Off the ventilator: negative-pressure breathing

Identificador: off · Taxonomía: —

No ventilator. Respiratory muscles lower pleural pressure, alveolar pressure dips just below atmospheric, and air flows in. Hold the BREATHE button to make a breath.

Nombres de ejemplo: Your own breathing
