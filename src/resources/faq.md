---
layout: layout.njk
title: HVDNet FAQ
---

<h1>FAQs</h1>

<h3 class="mt-4">General</h3>

<details>
<summary>What is the status of this project?</summary>
<div class="card  p-2 rounded-2">
We’re in early development. The website is in an initial (alpha) release, core metadata/API services are being prototyped and to be released for early adopters by end of year, along with a first wave of data‑centric Postman workspaces. Expect iterative updates to content, API coverage, and infrastructure over the coming weeks.
</div>
</details>

<h3 class="mt-4">Standards and Best Practices</h3>

<details>
<summary>What is FAIR?</summary>
<div class="card  p-2 rounded-2">
FAIR is a set of guiding principles that make data and digital knowledge more useful to people and machines: Findable (rich metadata, persistent identifiers), Accessible (standard, open protocols with clear access rules), Interoperable (shared vocabularies, formats, and schemas), and Reusable (clear licenses, provenance, and community standards). In practice, FAIR means publishing machine‑actionable metadata and well‑documented APIs so datasets can be reliably discovered, accessed, integrated, and reused across tools, domains, and workflows.
</div>
</details>


<details>
<summary>Which domain standards/specifications are recommended?</summary>
<div class="card  p-2 rounded-2">

This project aligns with global standards and best practices endorsed by high‑value data producers, custodians, and user communities. Our work is guided by the FAIR principles and CODATA’s Cross‑Domain Interoperability Framework (CDIF).

See our overview of [Standards & Best Practices](/resources/standards/) for the specifications we currently support and prioritize.

</div>
</details>



<h3 class="mt-4">Technologies</h3>

<details>
<summary>Which data API platforms and public services are supported?</summary>

<div class="card  p-2 rounded-2">

The following platforms and public APIs are currently actively being integrated with:
<ul>
<li><a href="https://www.census.gov/data/developers/data-sets.html" target="_blank" rel="noopener noreferrer">U.S. Census Bureau API</a>: access to key demographic and economic indicators for the United States</li>
<li><a href="https://www.socrata.com" target="_blank" rel="noopener noreferrer">Socrata / Data Insights</a>: a cloud‑based open data platform widely used by major cities and public agencies in North America</li>
<li><a href="https://www.richdataservices.com" target="_blank" rel="noopener noreferrer">MTNA Rich Data Services</a>: a modern platform providing integrated access to data and metadata, with robust web‑based user interfaces</li>
</ul>

Our pipeline includes APIs from the <a href="https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information" target="_blank" rel="noopener noreferrer">World Bank</a> and other custodians.

On the data cataloging side, we anticipate integration with:
<ul>
<li><a href="https://dataverse.org/" target="_blank" rel="noopener noreferrer">Dataverse</a></li>
<li><a href="https://ckan.org/" target="_blank" rel="noopener noreferrer">CKAN</a></li>
<li><a href="https://nada.ihsn.org/" target="_blank" rel="noopener noreferrer">IHSN NADA</a></li>
</ul>

<p>
Other options for providing API access to data include <a href="https://www.dreamfactory.com/" target="_blank" rel="noopener noreferrer">DreamFactory</a>, <a href="https://redivis.com/" target="_blank" rel="noopener noreferrer">Redivis</a>, and <a href="https://www.opendatasoft.com/" target="_blank" rel="noopener noreferrer">OpenDataSoft</a>. <a href="https://www.graphql.org/" target="_blank" rel="noopener noreferrer">GraphQL</a> also presents promising patterns with a range of open‑source and commercial solutions.
</p>

</div>
</details>

<details>
<summary>What is Postman?</summary>
<div class="card  p-2 rounded-2">
Postman stands as the industry's leading API platform, trusted by over 40 million developers worldwide. Founded in 2014, Postman has experienced remarkable growth, expanding to over 700 employees across the US, India, and remote locations, achieving a valuation of $5.6 billion.

At its core, Postman provides a comprehensive set of tools designed to streamline the entire API lifecycle. This includes robust capabilities for API documentation, seamless collaboration among teams, rigorous testing, continuous monitoring, and the orchestration of complex API workflows, increasingly augmented by advanced AI features.

Postman offers flexible plans to suit various needs, from a free tier for individual developers to Team and Enterprise plans for larger organizations.

Critically, Postman is engineered to make APIs **FAIR (Findable, Accessible, Interoperable, and Reusable)**, embodying this commitment through its platform design and features. It serves as a powerful metadata and collaboration hub for APIs:

* **Findable:** APIs become easily discoverable through features like the **Postman Discovery Network**, allowing developers to quickly locate and understand available APIs.
* **Accessible:** Postman facilitates access through organized **Workspaces and Collections**, comprehensive **API documentation**, and direct interaction with APIs within the platform.
* **Interoperable:** For teams and enterprises, Postman promotes interoperability through collaborative features, **Flows** for chaining requests, support for **API standards**, and robust **governance** capabilities that ensure consistency across an organization's API landscape.
* **Reusable:** The platform encourages reusability by allowing developers to easily **fork** collections, integrate with version control systems like **GitHub**, and leverage a wide array of other integrations to incorporate APIs seamlessly into new projects.

By unifying the API development experience, Postman empowers developers and organizations to build, manage, and consume APIs more efficiently and effectively, aligning with the principles of open, well-managed API ecosystems.

</div>
</details>

<details>
<summary>What are data-centric Postman collections?</summary>
<div class="card  p-2 rounded-2">
<p>
Unlike traditional application developers who care about APIs, data users naturally think in terms of 'datasets'. APIs are secondary or even a foreign concept to them. Their focus is on discovering and accessing ‘data’ to support their work and mission. 
</p>
<p>
A data-centric collection is a resource that represents a well-documented dataset and its underlying APIs. It meets the needs and perspectives of high-value data users or agents by providing a view of APIs that make sense to them. In this case, there is a one-to-one relationship between a collection and a dataset: 1 dataset = 1 collection.
</p>
<p>
Such collection not only provides access to data endpoints, but also ‘metadata’ endpoints, delivering the combined knowledge in machine-friendly standard formats. The embedded documentation talks about the dataset, its structure, content, provenance, how to use it, and other aspects necessary for the effective use of high-value data. 
</p>
<p>
The objective is also to demystify APIs and make them understandable and consumable by potentially less tech-savvy users. It further provides a collaborative space where data users and developers can come together and help each other.
</p>
<p>
Data-centric collections are also an entry point to other Postman features, particularly Flows, which can be used to stitch multiple data sources together or automate analytical pipelines.
</p>

</div>
</details>
