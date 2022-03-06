---
type: "Standalone Applications"
title: "LFAS Virtual Appointments"
link: "https://appointments.londonfootandanklesurgery.co.uk"
host: "https://godaddy.co.uk/"
framework: "Create React App"
repository: "https://github.com/derrmru/lfas-virtual-consults-II"
---

This is a Single Page Application that allows the user to reserve, and if needed, pay for a virtual appointment online.

The application is boot strapped with Create React App, built locally and served via Godaddy. The corresponding directory is calendar.londonfootandanklesurgery.co.uk.

The application communicates with Google Workspace, where appointments are managed, via a library of [Google Web Apps](https://developers.google.com/apps-script/guides/web). These web apps expose essential functionality, including:

- appointment availability
- receipt of appointment requests

See section on Web Apps for more information.

Payments are facilitated via Paypal.

Address autocompletion available from Google Maps Places API and implemented via our bespoke component, Places Autocomplete React.

## Used Technologies and Libraries

- [Create React App](https://github.com/facebook/create-react-app)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Places AutoComplete React](https://www.npmjs.com/package/places-autocomplete-react)
- [Paypal](https://developer.paypal.com/home)
