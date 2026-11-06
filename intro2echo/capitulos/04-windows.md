# 04. Views

Fuente: https://intro2echo.com/windows

## Views

Acoustic windows and imaging planes

Each standard transthoracic view is a single imaging plane through the heart. The plane is determined by the position of the probe, the rotation of its marker and the tilt of the beam.

Window

Parasternal longParasternal shortApicalSubcostalSuprasternal

View \[ and \] step through all

StandardDeepAV + MVAV zoomMV zoomAscending AoRV inflowRV outflow

Labels Probe and body Free probe

Free probe, from the view above

Rotate 0°

Tilt 0°

Rock 0°

Slide along 0.0 cm

Slide across 0.0 cm

Back to the starting view

Probe movementLeft sternal border, 3rd or 4th space; marker toward the right shoulder (9 to 10 o’clock)

ShowsLA, mitral valve, LV, LVOT, aortic valve, aortic root, septum, RV

Recorded in this viewSeptum, LV diameter and inferolateral wall at end-diastole; LV diameter at end-systole; proximal RVOT; LA diameter

**Parasternal long axis.** Views and measurements are as defined in the ASE guideline[4](https://intro2echo.com/#ref-4). Annotation class: PLAX\_IVS\_LVPW\_LVIDD.

### Acoustic windows

The ASE guideline describes four acoustic windows: parasternal, apical, subcostal and suprasternal notch[4](https://intro2echo.com/#ref-4). Parasternal and apical imaging is performed with the patient in the left lateral decubitus position, and subcostal and suprasternal imaging with the patient supine[4](https://intro2echo.com/#ref-4).

- **Parasternal long axis.** The probe is placed in the third or fourth left intercostal space, with the marker toward the right shoulder at 9 to 10 o’clock[4](https://intro2echo.com/#ref-4).
- **Parasternal short axis.** The probe is rotated 90° clockwise from the long-axis position, so that the marker points to the left shoulder[4](https://intro2echo.com/#ref-4). The beam is then tilted inferiorly to move the plane from the great vessels to the mitral valve and the papillary muscles; for the apical level, the probe is moved one or two intercostal spaces lower and more laterally[4](https://intro2echo.com/#ref-4).
- **Apical window.** The probe is placed at the apical impulse, with the marker at 4 to 5 o’clock[4](https://intro2echo.com/#ref-4). From the four-chamber view, the two-chamber view is obtained by a counterclockwise rotation of about 60°, and the three-chamber view by a further 60°[4](https://intro2echo.com/#ref-4). The five-chamber view is obtained by tilting the beam anteriorly[4](https://intro2echo.com/#ref-4).
- **Subcostal window.** The probe is placed below the xiphoid. The subcostal views show the heart, the pericardium, the RV free wall and the inferior vena cava (IVC)[4](https://intro2echo.com/#ref-4); with the beam angled slightly to the patient's left, they show the abdominal aorta. [Chapter 07](https://intro2echo.com/pressure) measures the IVC and distinguishes it from the aorta.
- **Suprasternal window.** The suprasternal views show the ascending aorta, the aortic arch, the head vessels and the descending aorta[4](https://intro2echo.com/#ref-4).

### Moving the probe

The ASE guideline defines the transducer movements[4](https://intro2echo.com/#ref-4). To rotate is to turn the index marker to a new position, with the transducer in the same place. To tilt is to move the face of the transducer, with the transducer fixed in position, to show other imaging planes in the same axis. To rock is to move the transducer toward or away from the orientation marker, within the same imaging plane. Rocking centers a structure or extends the field of view. To slide is to move the transducer over the skin to a new position. To angle is to direct the beam toward a structure from the same position, and it combines several small movements[4](https://intro2echo.com/#ref-4).

### The interactive figure

The left panel shows the whole heart from the front, with the current plane and the probe, and a small figure of the body, oriented as the heart is, with the probe on the skin at the acoustic window, the heart within the chest, the head and the patient's left side. With the **Probe and body** option off, the panel shows the imaging planes of the nine standard views instead, each in the color of its acoustic window. The current plane is highlighted, with the lines along which it intersects the other planes. Selecting a plane displays its view. The middle panel shows the heart model sectioned in the imaging plane and viewed perpendicular to that plane, in the orientation of the echocardiographic image. The **Labels** option displays the names of the structures on the model. The right panel shows the echocardiographic image of the same plane through the model. When another view is selected, the plane moves from its current position, as the probe would move.

The **Free probe** option moves the probe away from the standard views. Five sliders move it from the view above, in the guideline's terms. Rotate turns the probe about its beam, clockwise as the examiner sees it. Tilt turns the beam across the imaging plane. Rock turns the beam within the plane, toward or away from the marker. Slide along moves the probe over the skin toward or away from the marker, and Slide across moves it at a right angle to the plane. As it slides, the probe follows the curve of the chest and keeps its angle to the skin. The three panels follow the moved plane. While the free probe is on, the left panel shows the moved plane among the nine standard planes; when it is turned off, the probe and the body return. The panel of the sliders names the standard view nearest the plane, in any window. It gives the angle between the two beams, the angle between the two markers, and the distance from the probe to that view's beam. Within 5° and 0.5 cm it names the plane as that view. A drag that stops there settles the probe on the view, and the sliders go back to zero. Angling has no slider, because it combines the other movements. The button under the sliders brings the probe back to the starting view.

The model builds each view on its own, so one move of the guideline gives the plane of the next view, but not always its aim or its place. On the normal heart, a 90° clockwise rotation from the long axis gives a plane within 4° of the short axis at the mitral valve. The beam of that view aims 29° away, and the rotated probe lies 3.8 cm from that view's beam. From any view, the sliders reach every standard view in any window. From the long axis, for example, the apical four-chamber view lies 15.1 cm away from the marker and 3.8 cm across, rotated 140° clockwise, tilted 44° and rocked 30° away from the marker.

Below the diaphragm, the liver, the IVC, two hepatic veins, the abdominal aorta with the celiac trunk and the superior mesenteric artery, and the spine are simple shapes added for the subcostal views. These structures are not part of the heart model, and only the liver appears in the 3D view. Each view is labeled with its view class name for image annotation, where the annotation list contains the view. The model is a normal adult heart; in a patient, the angles vary with the position of the heart.

### Apical foreshortening

In an apical view through the true apex, the LV occupies about two thirds and the LA about one third of the long axis[4](https://intro2echo.com/#ref-4); a shorter, rounder LV indicates a foreshortened view ( [chapter 08](https://intro2echo.com/eject)).

The minimum dataset of the British Society of Echocardiography lists the views in scanning order and specifies at least two cardiac cycles for each clip[11](https://intro2echo.com/#ref-11).

### Key points

1. The parasternal short-axis view is obtained by rotating the probe 90° clockwise from the parasternal long-axis view.
2. The apical two-chamber and three-chamber views are obtained from the four-chamber view by successive counterclockwise rotations of about 60°.
3. The five-chamber view is obtained by tilting the beam anteriorly from the four-chamber view.

## Cuestionario del original

### 1. How is the parasternal short-axis view obtained from the parasternal long-axis view?

1. Rotation of the probe 90° clockwise
2. Rotation of the probe 90° counterclockwise
3. Sliding the probe toward the apex

**Respuesta del original:** Rotation of the probe 90° clockwise

**Explicación:** In the ASE guideline, the probe is rotated 90° clockwise, so that the marker points to the left shoulder.

### 2. In which position is the patient placed for parasternal and apical imaging?

1. Left lateral decubitus
2. Supine
3. Right lateral decubitus

**Respuesta del original:** Left lateral decubitus

**Explicación:** In the ASE guideline, parasternal and apical imaging is performed in the left lateral decubitus position, and subcostal and suprasternal imaging with the patient supine.

### 3. How is the apical five-chamber view obtained from the apical four-chamber view?

1. By tilting the beam anteriorly
2. By rotating the probe 90° clockwise
3. By moving the probe to the subcostal window

**Respuesta del original:** By tilting the beam anteriorly

**Explicación:** In the ASE guideline, the five-chamber view is obtained by tilting the beam anteriorly from the four-chamber view.
