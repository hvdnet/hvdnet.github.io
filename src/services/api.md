---
layout: layout.njk
title: HVDNet API
---

# HVDNet API

## Documentation
- [Redoc](/resources/api/redoc)
- [Scalar](/resources/api/scalar)
- [Swagger](/resources/api/swagger)

## Dataset services

A fundamental objective of the HVDNet API is to complement existing data API and underlying datasets with standards based metadata to align on FAIR and related best practices. 

The `/datasets` endpoints achieve this by converting metadata available from the back-end platforms into various specifications, including: ML Croissant, DCAT, DDI-Codebook, DDI-CDI, and schema.org. 
This is not always ideal as metadata exposed by the is typically proprietary and sparse. Future versions will add knowledge inference services that will generate new metadata from the data and available 
documentation. The current implementation is experimental, particularly for new or emerging specifications such as DDI-CDI and Croissant.

In addition, the dataset services include a data-centric Postman Collection generator, which is used to populate public workspaces for various data publishers.

A markdown generator is also included to produce both human and AI friendly documentation.

At this time, these features are being implemented for the following platforms and public API:
- [Socrata / Data Insights](https://www.tylertech.com/solutions/transformative-technology/data-insights){target="_blank"}
- [MTNA Rich Data Service](https://www.richdataservices.com){target="_blank"}
- [U.S. Census Bureau API](https://www.census.gov/data/developers/data-sets.html){target="_blank"}


The [Playground](https://www.highvaluedata.net/playground/datasets) web application to explore these services and their outputs.










