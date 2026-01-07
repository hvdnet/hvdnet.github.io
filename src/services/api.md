---
layout: layout.njk
title: HVDNet API
---

# HVDNet API

Our API serves as the foundation for our vision and services, focusing on simplifying dataset discovery, access, and utilization through standards-based metadata. By enforcing a robust standardization layer over diverse APIs from multiple platforms and public data services, it ensures alignment on FAIR principles and related best practices.

We are also developing a suite of utility services to facilitate the creation and use of machine-actionable data and metadata.

Explore and experiment with the API using our [Playground](https://www.highvaluedata.net/playground){target="_blank" rel="noopener noreferrer"} web application.

Consult the documentation below for more information:

- [Redoc](/resources/api/redoc)
- [Scalar](/resources/api/scalar)
- [Swagger](/resources/api/swagger)


## Resource Identifiers{.mt-4}

Uniquely identifying resources is always a challenge. While these may in some cases exists (e.g. DOI), this is not generally available for most high-value datasets and related entities.

For the HVDNet API, we are using the following platform/service dependent schemes to identify servers, catalogs, and datasets:

| Platform | Scheme | Examples |
| --- | --- | --- |
| MTNA RDS | `mtnards:<server_id>:<catalog_id>:<dataset_id>` | `mtnards:rds.highvaluedata.net:us_anes:anes1948` |
| Socrata | `socrata:<server_id>:<dataset_id>` | `socrata:data.calgary.ca:iahh-g8bj`| 
| U.S. Census Bureau | `uscensus:api.census.gov:<dataset_id>` | `uscensus:api.census.gov:<dataset_id>`| 

{.table .table-sm}

<div class="mt-4"/>

## Datasets services{.mt-4}

The `/datasets` endpoints generates standardized metadata based on the information available from the back-end platforms. This is not always ideal as metadata exposed by the is typically proprietary and sparse. Future versions will add knowledge inference services that will generate new metadata from the data and available documentation. The current implementation is experimental, particularly for new or emerging specifications such as DDI-CDI and Croissant.

In addition, the dataset services include a data-centric Postman Collection generator, which is used to populate public workspaces for various data publishers.

A markdown generator is also included to produce both human and AI friendly documentation.

At this time, these features are being implemented for the following platforms and public API:
- [Socrata / Data Insights](https://www.tylertech.com/solutions/transformative-technology/data-insights){target="_blank" rel="noopener noreferrer"}
- [MTNA Rich Data Service](https://www.richdataservices.com){target="_blank" rel="noopener noreferrer"}
- [U.S. Census Bureau API](https://www.census.gov/data/developers/data-sets.html){target="_blank" rel="noopener noreferrer"}











