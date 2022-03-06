---
type: "Google Workspace Addons"
title: "Create Cadogan Invoice"
framework: "Google Apps Script"
repository: "https://drive.google.com/drive/folders/1Kn8MkMi4eHaThEfjekaDyZNpI3bIjjiq"
---

This is a Workspace Drive Addon installable manually for a particular user directly from the script file.

The Addon is a basic sidebar to generate an invoice for the Cadogan clinic once per month.

### Instructions

1. Open the application and then select (highlight) the folder containing clinic lists for the desired month.
2. The application will identify the lists for Cadogan clinic and list these for you to verify before running.
3. Click 'Create Invoice'
4. When the function completes you will have a Cadogan Invoice for the selected month in the normal folder.

### Used Technologies and Libraries

- [Google Apps Script](https://developers.google.com/apps-script)

### Notes

If the data in the clinic lists is not correctly entered this can prevent the application from working properly. Normally not a problem, but new admin could expect some hiccups.

It would be sensible to improve error handling for typical problems.
