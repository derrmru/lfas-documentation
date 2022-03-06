---
type: "Google Workspace Addons"
title: "Letter Sanitisation"
framework: "Google Apps Script"
repository: "https://drive.google.com/drive/folders/1-GrvESJ3mL1j1fZWT1TkLvHY3PP8oD7Y"
---

This is a Workspace Drive Addon available for installation across the podogo.com domain.

The Addon provides an interface to run a sanitise script for the letters, which carries out the following automations where possible:

- Insert clinic date in letter based on name of file
- Based on the type of letter (report or GP Letter), it will attempt to insert recipient GP if there is one already associated with the patient, or insert 'Clinical Report' in prefix of the letter. If it is a GP letter and there is no known GP to the application it will insert 'GP Letter', which indicates that admin must input this manually.
- It will insert patient details from the corresponding clinic list. The script derives this from the date and name in the title of the document
- It will remove double spaces

The application can run on a batch of selected letters simultaneously and also offers a function to create a pdf version of all selected letters in place.

### Used Technologies and Libraries

- [Google Apps Script](https://developers.google.com/apps-script)

### Notes

This application works well only if the title of the document has correct spelling of the patient and the correct date that the patient was seen. It is still quicker to check the spelling and date in the title than to input these details by hand for a batch of letters.
