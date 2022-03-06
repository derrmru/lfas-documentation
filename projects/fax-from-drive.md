---
type: "Google Workspace Addons"
title: "Fax or Email to GP"
framework: "Google Apps Script"
repository: "https://drive.google.com/drive/folders/1G6vtmW9H8QqUoIn8DfBfiNKvzQE4eKTR"
---

This is a Workspace Drive Addon available for installation across the podogo.com domain.

The Addon provides an interface to send a patient letter to their GP, either by fax or email.

### Instructions

1. With the application sidebar open, select a G-Doc letter in the Drive that you wish to send.
2. The application will attempt to auto-populate the receipient details based on the Post Code of the recipient in the letter.
3. Edit any details in the form as required.
4. Click either 'Fax' or 'Email' buttons at the base of the sidebar to send.
5. The application will notify you of succesful sending or failure. You can view what is sent from your Gmail sent box to verify.
6. If the recipient is new, the GP is automatically added to the [GP database](https://docs.google.com/spreadsheets/d/1M1A7fLHI4J5kCuCks_EgRl1wbPTeLYrDvtL7lTWnU2M/edit) file, which feeds the autocompletion feature for future uses.

### Used Technologies and Libraries

- [Google Apps Script](https://developers.google.com/apps-script)
