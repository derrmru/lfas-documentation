---
type: "Standalone Applications"
title: "Bunion Surgeon Online Appointments"
link: "https://bookonline.bunionsurgeon.co.uk"
host: "https://vercel.com/"
framework: "Next JS"
repository: "https://github.com/derrmru/bunion-surgeon-online-appointments"
---

This is a Single Page Application that allows the user to reserve and pay for in-person and virtual appointments online.

The application is boot strapped with Next JS and built served as a static site via Vercel.

The application communicates with Google Workspace, where appointments are managed, via a library of [Google Web Apps](https://developers.google.com/apps-script/guides/web). These web apps expose essential functionality, including:

- appointment availability
- verification with a simple Boolean whether a patient exists (for follow up appointments)
- receive appointment requests

See section on Web Apps for more information.

Payments are facilitated via Paypal.

Address autocompletion available from Google Maps Places API.

## Used Technologies and Libraries

- [Next JS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Google Maps API](https://developers.google.com/maps/documentation)
- [Paypal](https://developer.paypal.com/home)
- [Vercel](https://vercel.com/)
