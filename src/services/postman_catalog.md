---
layout: layout.njk
title: HVDNet API
---

# Postman Workspaces

 The following Postman workspaces contain data-centric collections and related resources that have been generated for selected open data portal and public services. 

<div class="row">
  {% for server in hvdnet_servers %}
  {% if server.postman and server.postman.workspace %}
  <div class="col-md-4 mb-4">
    <div class="card text-white bg-primary mb-3 w-100 h-100 d-flex flex-column">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title mb-0">{{ server.name }}</h5>
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

