---
type: "Google Workspace Addons"
title: "Clinical Analytics"
framework: "Google Apps Script"
repository: "https://drive.google.com/drive/folders/1jsNwDAPRhk6DH6AGjV68lphO5Qal54Z9"
---

This is a Workspace Addon available for installation across the podogo.com domain.

The Addon is a basic sidebar form allowing administrators to input information and associate with particular patients or bookings. There are two views:

- Email
- Standard

The email view uses a trigger to source information concerning the current patient from enquiry emails in the Google Inbox.

The standard view requires manual input and is useful if the patient has booked online.

Data is stored in a 'Marketing' sheet and visualised using [Google Data Studio](https://datastudio.google.com/). For appointments booked online the marketing sheet is automatically updated in full via the recipient Web App (see section on Web Apps for more detail).

### Used Technologies and Libraries

- [Google Apps Script](https://developers.google.com/apps-script)

### Notes

The marketing database should be moved away from a Google Sheet to a normal database in the medium term. Queries on the data will start to become intolerable when entries start to number between 10000 - 20000. So there are a few years to make this change.
