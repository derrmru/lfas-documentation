---
type: "Databases"
title: "Master Sheet"
link: "https://docs.google.com/spreadsheets/d/1xznYDjAysp0_M0Z0pS7TqVGu1g-rj3yTMs7zm0EPtA4/edit#gid=0"
---

This is a Google Sheet that behaves as a 'single source of truth' for patient profiles.

It is referenced by a large number of applications and microservices, including:

- [Clinic List Generation](/projects/clinic-list-generator)
- [Sending Confirmation Emails](/projects/bulk-mailer)
- [Checking If Patients Exist](/projects/lfas-book-online)

### Notes

In the medium term this database should be migrated to a new system, such as [Firestore](https://firebase.google.com/docs/firestore), as query times will become intolerable when the entry size is between 10000 - 20000.
