'use strict'

import 'bootstrap'
import { ready } from 'jquery'

import './styles/app.scss'

var fWrapper = $("#feature-test-container")

for (var i = 0; i < 100; i++) {
  fWrapper.append(`
    <div class="card col-12 app-feature-card border-0 mb-3">
      <div class="card-body d-flex flex-row">
        <div class="me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
        </div>
        <div class="app-feature-card-title me-3 text-truncate">
          Initial UE Attachments Success
        </div>
        <div class="me-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-right-square text-primary" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
          </svg>
        </div>
        <div class="text-secondary fw-bold me-2 ms-2 text-truncate">
          2 min 10 second
        </div>
      </div>
    </div>
  `)
}