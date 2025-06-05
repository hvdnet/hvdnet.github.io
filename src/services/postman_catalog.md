---
layout: layout.njk
title: HVDNet API
---

# Postman Workspaces

 The following Postman workspaces contain *data-centric collections* and related resources that have been generated for selected open data portal and public services. If you are not already a Postman user, it's quick and easy to sign up for a free account.

<div class="row">
  {% for server in hvdnet_servers %}
  {% if server.postman and server.postman.workspace %}
  <div class="col-md-4 mb-4">
    <div class="card text-white bg-primary mb-3 w-100 h-100 d-flex flex-column">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title mb-0">
          {% if server.platform == "socrata" %}<img src="/img/socrata-icon.png" alt="Socrata" style="height: 20px; width: auto; display: inline-block; vertical-align: middle;" />{% elseif server.platform == "mtnards" %}<img src="/img/RDS-Icon-2023.png" alt="MTNARDS" style="height: 24px; width: auto; display: inline-block; vertical-align: middle;" />{% endif %}
          {{ server.name }}
          </h5>
        </div>
        <div class="card-body">
          <p class="card-text">{{ server.description }}</p>
        </div>
        <div class="card-footer bg-transparent border-top-0">
          <a href="https://www.postman.com/workspace/{{ server.postman.workspace }}" class="btn btn-sm btn-primary" target="_blank" rel="noopener">View Workspace</a>
          <a href="https://{{ server.host }}" class="btn btn-sm btn-primary" target="_blank" rel="noopener">Visit Portal</a>
        </div>
      </div>
    </div>
  </div>
  {% endif %}
  {% endfor %}
</div>

<!--
        <div class="card-header d-flex align-items-center" style="gap: 0.5rem;">
          {% if server.platform == "socrata" %}
            <img src="/img/socrata-icon.png" alt="Socrata" style="height: 24px; width: auto; display: inline-block; vertical-align: middle;" />
          {% elseif server.platform == "mtnards" %}
            <img src="/img/RDS-Icon-2023.png" alt="MTNARDS" style="height: 24px; width: auto; display: inline-block; vertical-align: middle;" />
          {% endif %}
          <h5 class="card-title mb-0 align-middle" style="display: inline-block; vertical-align: middle;">{{ server.name }}</h5>
        </div>
-->