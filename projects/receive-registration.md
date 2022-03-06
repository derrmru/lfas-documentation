---
type: "Web Apps"
title: "Receive Registration Forms"
framework: "Google Apps Script"
repository: "https://drive.google.com/drive/folders/144QkTY_z4to8AlLrZoyZ6CF_7SNgM9mo"
---

These Web Apps receive and process data from the standalone registration form applications:

1. [LFAS Registration Form](/projects/lfas-registration-form) --> [Web App](https://script.google.com/home/projects/1DtLhS7ZOeyC1vYjtQDxvI8i2B7hWqBGZSD3vHJvriFK-bxhVAUKpYu0b/edit)
2. [Podogo Registration Form](/projects/podogo-registration-form) --> [Web App](https://script.google.com/home/projects/1Yt2U35wJozID1mywxygCcsPEFSN_FZlgUTX23u5my2_PW5A1T9vp01ys/edit)

Both Web Apps handle the received data with the same set of actions:

- Create PDF registration form on the drive
- Notify admin (and Harley Street Admin) of submission
- Update Master Sheet with new patient details
- If marketing is accepted by patient, they are added to the marketing database

### Used Technologies and Libraries

- [Google Apps Script](https://developers.google.com/apps-script)
