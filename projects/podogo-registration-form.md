---
type: "Standalone Applications"
title: "Podogo Registration Form"
link: "https://registration.podogo.com"
host: "https://godaddy.co.uk/"
framework: "Create React App"
repository: "https://github.com/derrmru/podogo_reg_form"
---

This is a Single Page Application that allows the user to submit personal information digitially. This link is automatically sent to the patient when confirming their appointments, offering them the option to complete patient registration digitally and in advance of arrival.

The application is boot strapped with Create React App, built locally and served via Godaddy. The corresponding directory is registration.podogo.com.

The application communicates with Google Workspace, where the forms are stored, via a library of [Google Web Apps](https://developers.google.com/apps-script/guides/web). These web apps expose essential functionality, including:

- receive and store the submitted form

See section on Web Apps for more information.

## Used Technologies and Libraries

- [Create React App](https://github.com/facebook/create-react-app)
- [React](https://reactjs.org/)
- [Places Autocomplete React](https://www.npmjs.com/package/places-autocomplete-react)
- [React Signature Canvas](https://www.npmjs.com/package/react-signature-canvas)
