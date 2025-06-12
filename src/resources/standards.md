---
layout: layout.njk
title: HVDNet Standards
---
# Standards and Best Practices{.mb-4}

## Guiding Principles{.mt-4}

Machine-actionable metadata is essential for enabling data scientists, developers, APIs, and AI systems to efficiently discover, access, and utilize data resources. As the volume and complexity of data continue to grow, ensuring that metadata is both human- and machine-readable becomes critical for supporting automation, interoperability, and advanced analytics.

Our project is guided by the [FAIR data principles](https://www.go-fair.org/fair-principles/) - emphasizing Findability, Accessibility, Interoperability, and Reusability — which provide a framework for making data and metadata more useful and actionable across diverse platforms and communities. In addition, we align with the [CODATA cross-domain integration framework (CDIF)](https://cdif.codata.org) recommendations, which emphasize the harmonization of metadata standards and practices to facilitate seamless data exchange and integration across scientific and technical domains. By adopting these principles, we aim to foster a robust data ecosystem that supports innovation, collaboration, and reproducibility.

## Domain Standards{.mt-4}

Our project leverages the FAIR and CDIF standards as foundational frameworks for metadata management and data interoperability. By implementing these standards, we ensure that our metadata is structured, discoverable, and reusable across domains.  This combination supports robust data sharing, integration, and automation within our ecosystem.

A brief overview of the specifications are provided below. Consult their respective home page and related resources for more information.

Note that you of course do not need to use all of these standards in every project. Instead, select the standard(s) that best fit your specific use case, data type, or interoperability requirements.

| Standard         | Description / Recommended Use |
|------------------|------------------------------|
| **DCAT**         | Describe datasets and data catalogs for discovery, access, and interoperability, especially for open data portals and FAIR data initiatives. |
| **DDI Codebook** | Document social science datasets in detail, focusing on study-level metadata, methodologies, and variables for research repositories. |
| **DDI-CDI**      | Integrate and harmonize complex datasets across domains, modeling data relationships and provenance for cross-domain research and enterprise integration. |
| **Frictionless Data Package** | Package and describe tabular datasets in a lightweight, language-agnostic way for sharing, validation, and integration, especially with CSV files. |
| **MLCommons Croissant** | Describe machine learning datasets with rich, standardized metadata for discoverability, interoperability, and integration with ML pipelines. |
| **ODRL**         | Specify and automate policies for rights, permissions, and obligations regarding digital resources, supporting licensing and compliance. |
| **PROV-O**       | Capture and represent provenance of data and processes for transparency, reproducibility, and auditability in data workflows. |
| **RO-Crate**     | Package research data, software, workflows, and metadata into a portable archive to support reproducibility, sharing, and FAIR research outputs. |
| **schema-org**   | Annotate datasets for improved discoverability and interoperability on the web, enhancing indexing and integration with search engines. |
| **SDMX**         | Exchange and integrate statistical data and metadata between organizations, especially for official statistics and international reporting. |
| **SKOS**         | Represent and share controlled vocabularies, taxonomies, and classification schemes in a machine-readable way for semantic search and integration. |
| **XKOS**         | Model complex statistical classifications and mappings between classification systems, supporting detailed analysis and integration in statistics and social sciences. |

The [W3C Data Catalog Vocabulary (DCAT)](https://www.w3.org/TR/vocab-dcat/) is a standard for describing datasets and data catalogs using RDF. DCAT enables interoperability between data catalogs published on the web, making it easier to discover, access, and reuse datasets across organizations and domains. It provides a flexible model for representing metadata about datasets, distributions, and catalog structures.

Several widely adopted profiles extend DCAT to meet regional or domain-specific requirements. Notable examples include [DCAT-AP](https://interoperable-europe.ec.europa.eu/collection/semic-support-centre/dcat-ap) (Application Profile for data portals in Europe), [DCAT-US](https://resources.data.gov/resources/dcat-us/) (the US federal government profile), and other national or sectoral profiles. These profiles tailor DCAT to specific policy, legal, or technical contexts, promoting harmonized data sharing and interoperability at scale.

_Use DCAT when you need to describe datasets and data catalogs to enable their discovery, access, and interoperability—especially when publishing data on the web or integrating with open data portals. DCAT is ideal for organizations aiming to make their datasets findable and reusable across institutional, national, or international boundaries, and when aligning with open data or FAIR data initiatives._

### DDI Codebook{.mt-4}

The [DDI Codebook](https://ddialliance.org/Specification/DDI-Codebook/) is an international standard for documenting social science datasets. It provides a structured XML-based format to describe study-level metadata, including methodology, data collection, variables, and file structure. The DDI Codebook enhances data sharing, discovery, and reuse by enabling consistent, detailed documentation across research projects and repositories.

_Use the DDI Codebook specification when you need to document social science datasets in detail, especially for survey or observational studies. It is ideal for capturing study-level metadata, methodologies, variables, and data collection processes, supporting data sharing, discovery, and reuse in research repositories and archives._

### DDI Cross Domain Integration (DDI-CDI){.mt-4}

The [DDI Cross Domain Integration (DDI-CDI)](https://ddialliance.org/Specification/DDI-CDI/) specification is designed to support the integration and interoperability of data across different domains and formats. DDI-CDI provides a flexible, model-driven approach for describing complex datasets, relationships, and provenance, enabling seamless data exchange between diverse systems. It facilitates the harmonization of metadata standards, making it easier to combine, analyze, and reuse data from multiple sources in research and enterprise environments.

_Use DDI-CDI when you need to integrate, harmonize, or exchange complex datasets across different scientific or technical domains, especially when data comes from multiple sources or formats. It is ideal for projects requiring detailed modeling of data relationships, provenance, and interoperability between heterogeneous systems, such as cross-domain research, enterprise data integration, or multi-source analytics._

### Frictionless Data Package (v2){.mt-4}

The [Frictionless Data Package](https://specs.frictionlessdata.io/data-package/) specification (version 2) defines a simple, extensible format for packaging and describing datasets. A Data Package consists of a `datapackage.json` metadata file and associated data resources (such as CSV files). Version 2 introduces enhanced support for resource schemas, improved validation, and better interoperability with other standards. The specification enables clear documentation of data structure, provenance, and licensing, making it easier to share, validate, and reuse datasets across platforms and tools.

_Use the Frictionless Data Package specification when you need a lightweight, language-agnostic way to package and describe tabular datasets for sharing, validation, or integration. It is ideal for projects that require clear metadata, easy data exchange, and compatibility with a wide range of tools and platforms, especially when working with CSV or similar file formats._

### MLCommons Croissant{.mt-4}

[MLCommons Croissant](https://mlcommons.org/croissant/) is an open specification for describing machine learning datasets in a standardized, machine-readable format. It enables dataset creators to provide rich metadata, including data structure, licensing, and usage instructions, facilitating dataset discovery, interoperability, and reproducibility. Croissant leverages existing standards like schema.org and supports integration with data catalogs and ML pipelines, making it easier for practitioners to find, understand, and use datasets across diverse platforms.

_Use the Croissant specification when you need to describe machine learning datasets in a way that is both standardized and machine-readable. It is ideal for projects that require rich metadata, integration with ML pipelines, and enhanced discoverability and reproducibility of datasets across platforms._

### ODRL{.mt-4}

The [Open Digital Rights Language (ODRL)](https://www.w3.org/TR/odrl-model/) is a W3C standard for expressing policies related to the usage, rights, and obligations associated with digital content and services. ODRL provides a flexible, machine-readable framework for specifying permissions, prohibitions, and duties, enabling organizations to clearly define how data and resources can be accessed, shared, or reused. By supporting interoperability and automation of rights management, ODRL helps ensure compliance with licensing, legal, and policy requirements across diverse digital ecosystems.

_Use ODRL when you need to specify, communicate, or automate policies regarding the rights, permissions, and obligations for accessing or using digital resources. It is especially useful for managing licensing, data sharing agreements, and compliance with legal or organizational requirements in digital content and data ecosystems._

### RO-Crate

The [RO-Crate](https://www.researchobject.org/ro-crate/) specification provides a lightweight, JSON-LD-based format for packaging research data, software, workflows, and metadata into a single, portable archive. RO-Crate enables researchers to bundle all relevant digital objects and their contextual metadata, supporting reproducibility, sharing, and reuse of research outputs. It is widely used for publishing FAIR research objects and facilitating interoperability across repositories and platforms.

_Use RO-Crate when you need to package and describe research data, code, and workflows together with rich metadata, ensuring that research outputs are portable, reproducible, and easily shared or published in accordance with FAIR principles._

### PROV-O{.mt-4}

The [W3C PROV-O](https://www.w3.org/TR/prov-o/) (Provenance Ontology) is a standard for representing provenance information using RDF and OWL. PROV-O enables the description of the origins, history, and transformations of data and resources, capturing how entities, activities, and agents are related. By providing a structured model for provenance, PROV-O supports transparency, reproducibility, and trust in data workflows, making it easier to track data lineage and support auditability across systems.

_Use PROV-O when you need to capture, represent, or communicate the provenance of data, resources, or processes. It is especially valuable for projects that require transparency, reproducibility, or auditability, such as scientific research, data pipelines, or regulatory reporting. PROV-O is ideal for documenting data lineage, tracking transformations, and supporting trust in data by making its origins and history explicit._

### schema-org{.mt-4}

[schema.org](https://schema.org/) offers standardized vocabularies for describing structured data on the web, including statistical datasets and variables. Using schema.org types such as `Dataset`, `StatisticalVariable`, and related properties, organizations can annotate their data resources to improve discoverability and interoperability. This enables search engines and data consumers to better understand, index, and integrate statistical information, supporting richer search experiences and data-driven applications.

_Use schema.org when you want to enhance the discoverability and interoperability of your datasets on the web, especially for integration with search engines and data catalogs. It is ideal for projects that require lightweight, widely recognized metadata annotations to improve indexing, search, and integration of structured data across diverse platforms and applications._

### SDMX{.mt-4}

The [Statistical Data and Metadata eXchange (SDMX)](https://sdmx.org/) is an international standard for exchanging and sharing statistical data and metadata among organizations. SDMX provides a common framework and set of XML and JSON formats for describing, transmitting, and disseminating statistical information. It supports efficient data integration, harmonization, and automation, making it widely used by national statistical offices, central banks, and international agencies for reporting and analysis.

_Use SDMX when you need to exchange, report, or integrate statistical data and metadata between organizations, especially in official statistics, economics, or international reporting contexts. It is ideal for projects that require standardized formats for sharing time series, indicators, or aggregated data, and for ensuring interoperability between statistical systems, data providers, and consumers at national or international levels._

### SKOS{.mt-4}

The W3C [Simple Knowledge Organization System (SKOS)](https://www.w3.org/TR/skos-reference/) is a standard for representing knowledge organization systems such as thesauri, classification schemes, and taxonomies using RDF. SKOS provides a simple, flexible model for expressing concepts, labels, relationships, and hierarchies, making it easier to publish, share, and link controlled vocabularies on the web. By enabling consistent representation and interoperability of knowledge structures, SKOS supports improved data discovery, integration, and semantic search across diverse domains.

_Use SKOS when you need to represent, share, or link controlled vocabularies, taxonomies, or classification schemes in a machine-readable way. It is ideal for projects that require consistent modeling of concepts and relationships, such as publishing thesauri, enabling semantic search, or integrating knowledge structures across systems and domains._

### XKOS{.mt-4}

The DDI Alliance [Extended Knowledge Organization System XKOS](https://ddialliance.org/xkos) specification extends the W3C SKOS standard to better support the representation of statistical classifications and related structures. XKOS introduces additional concepts and properties for describing hierarchical relationships, classification levels, and correspondences between classifications. This enables more precise modeling and interoperability of statistical and social science classifications, supporting improved data integration, analysis, and reuse across organizations and domains.

_Use XKOS when you need to represent complex statistical classifications, such as hierarchical taxonomies or mappings between classification systems, in a machine-readable format. It is particularly useful for projects that require detailed modeling of classification structures, levels, and correspondences—such as official statistics, social science research, or data integration tasks involving multiple classification schemes._

