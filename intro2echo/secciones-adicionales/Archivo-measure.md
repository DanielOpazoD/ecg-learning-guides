# Archivo. Automated measurements

Fuente: https://intro2echo.com/#measure

## Automated measurements

EchoNet-Measurements: calipers and peaks from heat maps

A report holds dozens of measurements, each a caliper or a peak that a sonographer places by hand. EchoNet-Measurements places them with one deep learning model for each measurement, and converts the points to centimeters and velocities with the calibration stored in the image.

Image

B-modeDoppler and M-mode

Measurement undefined

Measurement undefined

Two-peaked map

OffOn

No DICOM data

OffOn

### Measurement by deep learning

Manual measurement takes time, and it varies from one sonographer to the next. The first video model of LV function, EchoNet-Dynamic, segmented the LV in apical four-chamber videos with a Dice coefficient of 0.92 and estimated the LVEF over several beats, with a mean absolute error of 4.1% in internal and 6.0% in external validation. EchoNet-LVH measured the parasternal long axis: the septum with a mean absolute error of 1.2 mm, the LV diameter with 2.4 mm and the posterior wall with 1.4 mm.

Deep learning can also guide the acquisition itself. Eight nurses with no experience in ultrasonography, guided by a deep learning algorithm, each scanned 30 patients; their studies were of diagnostic quality for LV size, LV function and pericardial effusion in 237 of 240 patients (98.8%), and for RV size in 222 (92.5%).

### How EchoNet-Measurements measures

EchoNet-Measurements was trained on 877,983 measurements that sonographers and cardiologists made in routine practice, in 155,215 studies of 78,037 patients at Cedars-Sinai Medical Center. It has a separate segmentation model (DeepLabv3) for each of 18 measurements:

- **Nine B-mode measurements.** The septum, the LV internal diameter and the posterior wall; the LA diameter; the RV basal diameter; the aortic root and the ascending aorta; the pulmonary artery; and the IVC.
- **Nine Doppler and M-mode measurements.** The peak velocities of TR, the aortic valve, MR and the LVOT; septal and lateral e′; the mitral E velocity and E/A; and TAPSE.

A model does not draw a line. It outputs a heat map for each point it looks for: two for a caliper, its two ends, and one for a Doppler peak. In the public code, each point is the weighted center of its heat map. The distance between the two ends, in pixels, times the pixel size that the DICOM file stores gives centimeters. For a Doppler peak, the distance from the baseline, times the velocity per pixel that the file stores, gives the velocity. A B-mode model measures every frame of the video, and the frames with the largest and the smallest LV diameter mark end-diastole and end-systole.

### What the figure shows

The heat maps in the figure are drawn on the site's own caliper points; EchoNet-Measurements did not process these images. The _Two-peaked map_ switch splits one heat map into two peaks, for example at the septum and at an RV trabeculation. The weighted center then falls between the peaks, on neither structure, and the wall measures wrong. The _No DICOM data_ switch removes the calibration, as an export to a common video format does: the points remain, but the model cannot give a number.

### Performance

Agreement with sonographers was given as a coverage probability: the share of paired measurements that differ by less than an acceptable difference, set for each measurement from published intraobserver variability. Across the 18 measurements, the mean coverage probability was 0.796 in held-out studies at Cedars-Sinai and 0.839 in external studies at Stanford Healthcare, and the mean relative difference was 0.120 and 0.096. Run end to end on 2,103 later studies at Cedars-Sinai, the model had a mean coverage probability of 0.803 and a mean relative difference of 0.108. Performance was consistent across age, sex, atrial fibrillation, obesity and machine vendor. The models also measured images of another vendor, video recorded from a scanner's screen, stress studies and teaching videos.

Agreement was higher for the Doppler measurements than for the linear ones. The authors attribute this to the greater freedom of a linear measurement: there are more frames to choose from, and the caliper's place is more subjective. Two cardiologists reviewed 180 images on which the AI and the sonographer differed most (the top 10% of differences). They preferred the sonographer's measurement in 50.6%, preferred the AI's in 11.1%, and found both acceptable in 30.0%; in 8.3% the image was too noisy or blurred to measure.

### Limits

- The models were trained at one center, and they learn from its sonographers' measurements: their conventions and their errors.
- A model measures a single image. On a poor image, a sonographer can use the clinical context and the frames around it; the model cannot.
- Image quality changes accuracy. An image-quality model removed low-quality videos and Doppler images before the end-to-end measurement.
- The 18 measurements are not all of a comprehensive study: the velocity time integral, the PISA radius and the LA volume are not yet measured.
- Each model measures one thing in the view it expects. The right view, the right beat and the calibration stored in the file all come before the measurement.

### Key points

1. EchoNet-Measurements has one segmentation model for each of 18 measurements: 9 in B-mode and 9 in Doppler and M-mode.
2. A model outputs a heat map for each point. The point is the weighted center of its map, and the calibration stored in the DICOM file converts the points to centimeters or velocities.
3. A heat map with two peaks puts the point between them, on neither structure.
4. The agreement with sonographers held in external validation and when the model ran on whole studies.

## Cuestionario del original

### 1. How does EchoNet-Measurements find the end of a caliper?

1. The weighted center of a heat map that the model outputs
2. The brightest pixel of the image
3. An edge found by a fixed threshold

**Respuesta del original:** The weighted center of a heat map that the model outputs

**Explicación:** Each model outputs a heat map for each point that it looks for, and the public code takes the weighted center of the map as the point.

### 2. A video is exported without its DICOM header. What can the model still do?

1. Find the caliper ends, but not convert them to centimeters
2. Measure in centimeters as before
3. Nothing: it needs the header to find the points

**Respuesta del original:** Find the caliper ends, but not convert them to centimeters

**Explicación:** The points come from the image. The pixel size that converts pixels to centimeters, and the velocity per pixel of a Doppler image, come from the DICOM file.

### 3. A heat map has two peaks of equal height, at the septum and at an RV trabeculation. Where does the point fall?

1. Between the two peaks
2. On the septum
3. On the trabeculation

**Respuesta del original:** Between the two peaks

**Explicación:** The weighted center of two equal peaks lies midway between them, on neither structure, so the wall measures wrong.
