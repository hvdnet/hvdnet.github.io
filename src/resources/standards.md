---
layout: layout.njk
title: HVDNet Standards
---
# Standards and Best Practices

## Guiding Principles

Machine-actionable metadata is essential for enabling data scientists, developers, APIs, and AI systems to efficiently discover, access, and utilize data resources. As the volume and complexity of data continue to grow, ensuring that metadata is both human- and machine-readable becomes critical for supporting automation, interoperability, and advanced analytics.

Our project is guided by the [FAIR data principles](https://www.go-fair.org/fair-principles/) - emphasizing Findability, Accessibility, Interoperability, and Reusability — which provide a framework for making data and metadata more useful and actionable across diverse platforms and communities. In addition, we align with the [CODATA cross-domain integration framework (CDIF)](https://cdif.codata.org) recommendations, which emphasize the harmonization of metadata standards and practices to facilitate seamless data exchange and integration across scientific and technical domains. By adopting these principles, we aim to foster a robust data ecosystem that supports innovation, collaboration, and reproducibility.

## Domain Standards

Our project leverages the FAIR and CDIF standards as foundational frameworks for metadata management and data interoperability. By implementing these standards, we ensure that our metadata is structured, discoverable, and reusable across domains.  This combination supports robust data sharing, integration, and automation within our ecosystem.

A brief overview of the specifications are provided below. Consult their respective home page and related resources for more information.

### W3C DCAT

The [W3C Data Catalog Vocabulary (DCAT)](https://www.w3.org/TR/vocab-dcat/) is a standard for describing datasets and data catalogs using RDF. DCAT enables interoperability between data catalogs published on the web, making it easier to discover, access, and reuse datasets across organizations and domains. It provides a flexible model for representing metadata about datasets, distributions, and catalog structures.

Several widely adopted profiles extend DCAT to meet regional or domain-specific requirements. Notable examples include [DCAT-AP](https://interoperable-europe.ec.europa.eu/collection/semic-support-centre/dcat-ap) (Application Profile for data portals in Europe), [DCAT-US](https://resources.data.gov/resources/dcat-us/) (the US federal government profile), and other national or sectoral profiles. These profiles tailor DCAT to specific policy, legal, or technical contexts, promoting harmonized data sharing and interoperability at scale.

### DDI Codebook

The [DDI Codebook](https://ddialliance.org/Specification/DDI-Codebook/) is an international standard for documenting social science datasets. It provides a structured XML-based format to describe study-level metadata, including methodology, data collection, variables, and file structure. The DDI Codebook enhances data sharing, discovery, and reuse by enabling consistent, detailed documentation across research projects and repositories.

### DDI Cross Domain Integration (DDI-CDI)

The [DDI Cross Domain Integration (DDI-CDI)](https://ddialliance.org/Specification/DDI-CDI/) specification is designed to support the integration and interoperability of data across different domains and formats. DDI-CDI provides a flexible, model-driven approach for describing complex datasets, relationships, and provenance, enabling seamless data exchange between diverse systems. It facilitates the harmonization of metadata standards, making it easier to combine, analyze, and reuse data from multiple sources in research and enterprise environments.

### Frictionless Data Package (v2)

The [Frictionless Data Package](https://specs.frictionlessdata.io/data-package/) specification (version 2) defines a simple, extensible format for packaging and describing datasets. A Data Package consists of a `datapackage.json` metadata file and associated data resources (such as CSV files). Version 2 introduces enhanced support for resource schemas, improved validation, and better interoperability with other standards. The specification enables clear documentation of data structure, provenance, and licensing, making it easier to share, validate, and reuse datasets across platforms and tools.

### MLCommons Croissant

[MLCommons Croissant](https://mlcommons.org/croissant/) is an open specification for describing machine learning datasets in a standardized, machine-readable format. It enables dataset creators to provide rich metadata, including data structure, licensing, and usage instructions, facilitating dataset discovery, interoperability, and reproducibility. Croissant leverages existing standards like schema.org and supports integration with data catalogs and ML pipelines, making it easier for practitioners to find, understand, and use datasets across diverse platforms.

### schema-org

[schema.org](https://schema.org/) offers standardized vocabularies for describing structured data on the web, including statistical datasets and variables. Using schema.org types such as `Dataset`, `StatisticalVariable`, and related properties, organizations can annotate their data resources to improve discoverability and interoperability. This enables search engines and data consumers to better understand, index, and integrate statistical information, supporting richer search experiences and data-driven applications.

### SDMX

The [Statistical Data and Metadata eXchange (SDMX)](https://sdmx.org/) is an international standard for exchanging and sharing statistical data and metadata among organizations. SDMX provides a common framework and set of XML and JSON formats for describing, transmitting, and disseminating statistical information. It supports efficient data integration, harmonization, and automation, making it widely used by national statistical offices, central banks, and international agencies for reporting and analysis.

### W3C SKOS

The [W3C Simple Knowledge Organization System (SKOS)](https://www.w3.org/TR/skos-reference/) is a standard for representing knowledge organization systems such as thesauri, classification schemes, and taxonomies using RDF. SKOS provides a simple, flexible model for expressing concepts, labels, relationships, and hierarchies, making it easier to publish, share, and link controlled vocabularies on the web. By enabling consistent representation and interoperability of knowledge structures, SKOS supports improved data discovery, integration, and semantic search across diverse domains.

### DDI XKOS

The [DDI XKOS](https://ddialliance.org/Specification/XKOS/) specification extends the W3C SKOS standard to better support the representation of statistical classifications and related structures. XKOS introduces additional concepts and properties for describing hierarchical relationships, classification levels, and correspondences between classifications. This enables more precise modeling and interoperability of statistical and social science classifications, supporting improved data integration, analysis, and reuse across organizations and domains.

## Technology Standards

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam sapien eu erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
