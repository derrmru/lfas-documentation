---
type: "Web Apps"
title: "Podogo Online Bookings Web Apps"
framework: "Google Apps Script"
repository: "https://drive.google.com/drive/folders/1fWjK7ViaVBHuR1_smKYATzvgHsHvygQW"
---

This is a collection of Web Apps that facilitate integration with the [Podogo Online Bookings Standalone Application](/projects/lfas-book-online). There are four relevant files:

1. Find Availability - this is a Web App shared by all online booking applications. It receives the appointment length, start date and a coded appointment type (e.g. KN-NP, KN-FU, ST-NP, ST-FU, ST-IGTN etc.). It finds the relevant calendars and determines appointment slots, which are returned in the response.
2. Patient Search - this is a Web App shared by all online booking applications. It receives the name and date of birth of a patient, searches our primary database (Master Sheet), and returns either true or false as the response. No personal information is sent from the server to the front end. This Web App is pivotal in providing follow up appointment availability and prevents the requirement of the user to reinput all personal details to register the appointment.
3. Podogo - Receive Appointment Request - this receives the requested appointment and personal details and carries out a series of actions, including:\
   --> Create entry in Master Sheet\
   --> Create entry in Analytics Database\
   --> Create appointment Calendar entry for relevant clinician\
   --> Create a PDF registration form on the drive\
   --> Send emails to confirm the appointment, which are sent to the patient, admin and the clinician\
4. Podogo - Receive Follow Up Request - this receives the requested appointment and carries out the following actions:\
   --> Create appointment Calendar entry for relevant clinician\
   --> Create a PDF registration form on the drive\
   --> Send emails to confirm the appointment, which are sent to the patient, admin and the clinician\

### Used Technologies and Libraries

- [Google Apps Script](https://developers.google.com/apps-script)
