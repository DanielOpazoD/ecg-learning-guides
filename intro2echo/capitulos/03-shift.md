# 03. Doppler

Fuente: https://intro2echo.com/shift

## Doppler

The Doppler effect

Doppler echocardiography measures blood velocity from the frequency shift of the returning echoes. The angle between the beam and the direction of flow, together with the Nyquist limit, determines the velocity that the ultrasound system can report.

Mode

Pulsed waveContinuous waveColor

Beam angle to flow 0°

True peak velocity 1.00 m/s

Sample depth 10.0 cm

Doppler frequency 2.5 MHz

Doppler shift3.25kHz

Measured1.00m/s

Underestimate0%

Pulse rate (PRF)7.7kHz

Nyquist limit1.19m/s

Signalclean

The true peak blood velocity is 1.00 m/s. At a beam angle of 0° to the flow, the ultrasound system reports the true velocity, 1.00 m/s, because the beam is parallel to the flow[9](https://intro2echo.com/#ref-9). A sample volume at 10.0 cm permits a pulse repetition frequency of 7.7 kHz, so velocities up to 1.19 m/s are measured without aliasing.

### The Doppler equation

Δf = 2 × f0 × v × cos θ ÷ c

Flow toward the transducer produces a positive frequency shift, and flow away from the transducer produces a negative shift[9](https://intro2echo.com/#ref-9). The speed of sound in the equation is c = 1540 m/s[9](https://intro2echo.com/#ref-9). For a blood velocity of approximately 1 m/s and transducer frequencies in the MHz range, the shift is a few kHz, which lies within the audible range[1](https://intro2echo.com/#ref-1).

### Beam angle to the flow

Cardiac Doppler measurement assumes that the beam is parallel to the flow (θ = 0)[9](https://intro2echo.com/#ref-9). An angle of 20° between the beam and the flow underestimates the velocity by only approximately 6%[4](https://intro2echo.com/#ref-4). At 60° the ultrasound system reports half the true velocity (by calculation, cos 60° = 0.5). The ASE does not recommend angle correction; the beam should be aligned with the flow, several windows should be used, and the highest velocity should be reported[4](https://intro2echo.com/#ref-4), [9](https://intro2echo.com/#ref-9).

### Pulsed-wave Doppler and the Nyquist limit

Pulsed-wave (PW) Doppler measures velocity at a single depth, but the echo from each pulse must return before the next pulse is transmitted. The depth of the sample volume therefore determines the pulse repetition frequency (PRF), and the highest velocity that can be measured without aliasing is c² ÷ (8 × depth × f0)[1](https://intro2echo.com/#ref-1). The Nyquist limit is PRF ÷ 2; flow faster than this limit wraps around to the opposite side of the baseline[9](https://intro2echo.com/#ref-9).

- A sample volume closer to the transducer or a lower Doppler frequency increases the Nyquist limit.
- High-PRF Doppler adds sample volumes to increase the Nyquist limit but introduces range ambiguity[4](https://intro2echo.com/#ref-4).
- Continuous-wave (CW) Doppler has no Nyquist limit but provides no depth information[4](https://intro2echo.com/#ref-4).

### Color Doppler

Color Doppler displays the mean velocity at many sample volumes[1](https://intro2echo.com/#ref-1), with flow toward the transducer in red and flow away from the transducer in blue[4](https://intro2echo.com/#ref-4). Because color Doppler is a pulsed technique, it is also subject to aliasing. The ASE suggests a velocity scale of 50 to 70 cm/s for routine color Doppler imaging and approximately 30 cm/s for low-velocity flow[4](https://intro2echo.com/#ref-4). A small, shallow color box maintains a high frame rate[4](https://intro2echo.com/#ref-4).

Spectral broadening does not always indicate turbulent flow; a large sample volume or a high gain setting also broadens the spectrum[10](https://intro2echo.com/#ref-10), [4](https://intro2echo.com/#ref-4).

### Tissue Doppler

Tissue Doppler measures the velocity of the myocardium and of the mitral and tricuspid annulus. Tissue moves slowly, below 20 cm/s, but returns strong echoes, so tissue Doppler uses its own filter settings and a velocity scale below 25 cm/s[4](https://intro2echo.com/#ref-4). From the apical window, it records the systolic (s′), early diastolic (e′) and late diastolic (a′) velocities of the annulus[4](https://intro2echo.com/#ref-4). [Chapter 08](https://intro2echo.com/eject) uses the tricuspid S′ for RV function, and [chapter 09](https://intro2echo.com/fill) uses the mitral e′ for diastolic function.

### Key points

1. The measured velocity equals the true velocity × cos θ, where θ is the angle between the beam and the flow.
2. A deeper sample volume or a higher Doppler frequency lowers the Nyquist limit.
3. High velocities should be measured with continuous-wave Doppler.

## Cuestionario del original

### 1. The angle between the Doppler beam and the flow is 60°. What fraction of the true velocity does the ultrasound system report?

1. 87%
2. 50%
3. 100%

**Respuesta del original:** 50%

**Explicación:** The reported velocity equals the true velocity × cos θ, and cos 60° = 0.5.

### 2. A pulsed-wave Doppler signal aliases. Which change does NOT reduce the aliasing?

1. A deeper sample volume
2. A lower Doppler frequency
3. A change to continuous-wave Doppler

**Respuesta del original:** A deeper sample volume

**Explicación:** A deeper sample volume lowers the PRF and therefore lowers the Nyquist limit.

### 3. Why does continuous-wave Doppler not identify the depth at which the peak velocity originates?

1. It samples every depth along the beam
2. It uses a wall filter
3. It does not correct for the beam angle

**Respuesta del original:** It samples every depth along the beam

**Explicación:** Continuous-wave Doppler transmits and receives continuously, so every depth along the beam contributes to the signal.
