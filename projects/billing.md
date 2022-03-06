---
type: "Google Sheets Addons"
title: "Billing Lists"
framework: "Google Apps Script"
repository: "https://drive.google.com/drive/folders/1GR3b19s7tAOy-0wrp7Z_TnDQbEclaKjz"
---

This is a Google Sheets Addon installable across the podogo.com domain.

The addon provides a set of actions available in a Google Sheet from:

Extensions > Billing

### Actions

1. Add To List - to be used in a clinic list. This function compiles insurance appointments and their values and adds them to the monthly billing chart where invoices are tracked. If the monthly billing chart does not yet exist, it creates it.
2. Create Invoice - to be used in the Monthly Billing List. Select one or multiple entries and create an invoice from the entry.
3. Compile By Status - to be used in Monthly Billing List. Generates a new spreadsheet comprised of all entries matching selected payment status and between selected Dates. This is to create todo lists for outstanding payments.

### Used Technologies and Libraries

- [Google Apps Script](https://developers.google.com/apps-script)
