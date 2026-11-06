# Perfiles de paciente

## normal

Identificador: normal

R ≈ 10, Crs ≈ 0.05 L/cmH₂O, τ ≈ 0.5 s (intubated, normal lungs).

```json
{
  "label": "Normal lungs",
  "R": 10,
  "Rexp": 10,
  "CL": 0.1,
  "Ccw": 0.1,
  "Ppl0": 0,
  "frc": 2.2,
  "shunt": 0.05,
  "recruit": 0.5,
  "vdAlv": 0.05,
  "vco2": 3,
  "hco3": 24,
  "map": 82,
  "hr": 82,
  "od": 0,
  "note": "R ≈ 10, Crs ≈ 0.05 L/cmH₂O, τ ≈ 0.5 s (intubated, normal lungs)."
}
```

## ards

Identificador: ards

Stiff, small lungs: increased elastic load, short time constant.

```json
{
  "label": "ARDS",
  "R": 12,
  "Rexp": 13,
  "CL": 0.03,
  "Ccw": 0.1,
  "Ppl0": 0,
  "frc": 1.2,
  "shunt": 0.55,
  "recruit": 0.5,
  "vdAlv": 0.4,
  "vco2": 3.6,
  "hco3": 24,
  "map": 74,
  "hr": 104,
  "od": 0.8,
  "note": "Stiff, small lungs: increased elastic load, short time constant."
}
```

## copd

Identificador: copd

Increased resistive load with a long expiratory time constant: watch expiratory flow.

```json
{
  "label": "COPD",
  "R": 20,
  "Rexp": 30,
  "CL": 0.14,
  "Ccw": 0.1,
  "Ppl0": 0,
  "frc": 3.6,
  "shunt": 0.1,
  "recruit": 0.2,
  "vdAlv": 0.35,
  "vco2": 3,
  "hco3": 28,
  "map": 80,
  "hr": 96,
  "od": 0,
  "note": "Increased resistive load with a long expiratory time constant: watch expiratory flow."
}
```

## asthma

Identificador: asthma

Severe bronchospasm: very high resistive load in both directions.

```json
{
  "label": "Status asthmaticus",
  "R": 32,
  "Rexp": 40,
  "CL": 0.09,
  "Ccw": 0.1,
  "Ppl0": 0,
  "frc": 3,
  "shunt": 0.12,
  "recruit": 0.2,
  "vdAlv": 0.25,
  "vco2": 3.2,
  "hco3": 24,
  "map": 84,
  "hr": 118,
  "od": 0,
  "note": "Severe bronchospasm: very high resistive load in both directions."
}
```

## fibrosis

Identificador: fibrosis

Elastic load from the lung itself; Pplat is high and expiratory flow returns to zero quickly.

```json
{
  "label": "Pulmonary fibrosis",
  "R": 10,
  "Rexp": 10,
  "CL": 0.025,
  "Ccw": 0.1,
  "Ppl0": 0,
  "frc": 1.4,
  "shunt": 0.2,
  "recruit": 0.15,
  "vdAlv": 0.2,
  "vco2": 3,
  "hco3": 24,
  "map": 80,
  "hr": 92,
  "od": 0.3,
  "note": "Elastic load from the lung itself; Pplat is high and expiratory flow returns to zero quickly."
}
```

## obesity

Identificador: obesity

Heavy chest wall raises pleural pressure: Pplat overestimates the stress on the lung. Turn on the esophageal balloon.

```json
{
  "label": "Obesity",
  "R": 12,
  "Rexp": 12,
  "CL": 0.09,
  "Ccw": 0.04,
  "Ppl0": 9,
  "frc": 1.5,
  "shunt": 0.22,
  "recruit": 0.8,
  "vdAlv": 0.1,
  "vco2": 3.2,
  "hco3": 25,
  "map": 86,
  "hr": 90,
  "od": 0,
  "note": "Heavy chest wall raises pleural pressure: Pplat overestimates the stress on the lung. Turn on the esophageal balloon."
}
```

## plug

Identificador: plug

Partial blockage in the straw: peak pressure jumps, plateau stays normal.

```json
{
  "label": "Kinked tube / mucus plug",
  "R": 40,
  "Rexp": 40,
  "CL": 0.1,
  "Ccw": 0.1,
  "Ppl0": 0,
  "frc": 2.2,
  "shunt": 0.1,
  "recruit": 0.4,
  "vdAlv": 0.05,
  "vco2": 3,
  "hco3": 24,
  "map": 82,
  "hr": 98,
  "od": 0,
  "note": "Partial blockage in the straw: peak pressure jumps, plateau stays normal."
}
```
