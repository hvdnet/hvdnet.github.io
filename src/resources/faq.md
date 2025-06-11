---
layout: layout.njk
title: HVDNet FAQ
---

<h1>FAQs</h1>

<h3 class="mt-4">General</h3>

<details>
<summary>What is the status of this project?</summary>
<div class="card  p-2 rounded-2">
ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis augue et turpis sagittis sodales. Proin consectetur odio sed erat egestas finibus eu vitae nunc. Fusce quis orci eu ex ornare commodo a a dui. Pellentesque lectus lacus, sollicitudin sed dolor vitae, accumsan pellentesque nulla.
</div>
</details>

<h3 class="mt-4">Standards and Best Practices</h3>

<details>
<summary>What is FAIR?</summary>
<div class="card  p-2 rounded-2">
ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis augue et turpis sagittis sodales. Proin consectetur odio sed erat egestas finibus eu vitae nunc. Fusce quis orci eu ex ornare commodo a a dui. Pellentesque lectus lacus, sollicitudin sed dolor vitae, accumsan pellentesque nulla.
</div>
</details>


<details>
<summary>Which domain standards/specifications are recommended?</summary>
<div class="card  p-2 rounded-2">

This project is closely aligned on global standards and best practices supported and endorsed by national and international high-value data producers, custodians and user communities.
Our works is guided by the FAIR data principles and of the CODATA Cross-Domain Interoperability Framework

See [Standard](/resources/standards) for a list of specifications that we are currently working with.

</div>
</details>



<h3 class="mt-4">Technologies</h3>

<details>
<summary>Which data API platforms and public services and are supported?</summary>

<div class="card  p-2 rounded-2">

The following platforms and public APIs are currently actively being integrated with:
<ul>
<li><a href="https://www.census.gov/data/developers/data-sets.html" target="_blank">U.S. Census Bureau API</a>: providing access to key demographic and economic data for the United States</li>
<li><a href="https://www.socrata.com" target="_blank">Socrata / Data Insights</a>; a cloud based open data platform popular major cities and other agencies in North America</li>
<li><a href="https://www.richdataservices.com" target="_blank">MTNA Rich Data Services</a>: a modern API platform providing concurrent access to data and metadata and equipped with robust web based user interfaces.</li>
</ul>

Our pipeline includes APIs from the <a href="https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information" target="_blank"> World Bank</a>, and other custodians.

On the data cataloging side, we anticipate integration with:
<ul>
<li><a href="https://dataverse.org/" target="_blank">Dataverse</a></li>
<li><a href="https://ckan.org/" target="_blank">CKAN</a></li>
<li><a href="https://nada.ihsn.org/" target="_blank">IHSN NADA</a></li>
</ul>

<p>
Many other options are available when it comes to providing access to data over APIs, such as <a href="https://www.dreamfactory.com/" target="_blank">Dreamfactory</a>,
 <a href="https://redivis.com/" target="_blank">Redivis</a>, or <a href="https://www.opendatasoft.com/" target="_blank">OpenDataSoft</a>.
 <a href="https://www.graphql.org/" target="_blank">GraphQL</a> further presents promising options, with several open source and commercial solutions available. 
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
