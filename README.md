# OPO - Data Model

The Open OPO - Data Model is a project created to allow better understanding of all data relevant to Organ Donation and Transplants.

[Latest Documentation Website](https://open-opo.github.io/data-model/)

## Background

## Sources

Where possible we conform to terminology and structure found in [FHIR](https://hl7.org/fhir/). Ideally we would love to see the data model conform to FHIR in the future.

## Create Docs Website

```bash
"docs:serve": "http-server ./docs",
"docs:build": "typedoc lib/index.ts",
"docs:watch": "typedoc --watch lib/index.ts",
```
