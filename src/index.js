'use strict'

import 'bootstrap'
import { ready } from 'jquery'

import './styles/app.scss'

var fWrapper = $("#feature-test-container")

const featureList = [
  {
    name: 'Attachments',
    status: 'passed'
  },
  {
    name: 'Data Tables',
    status: 'passed'
  },
  {
    name: 'Example tables',
    status: 'failed'
  },
  {
    name: 'Hooks',
    status: 'failed'
  },
  {
    name: 'Minimal',
    status: 'passed'
  },
  {
    name: 'Parameter',
    status: 'passed'
  },
  {
    name: 'Unknown Parameter Types',
    status: 'warning'
  },
]

for (var i = 0; i < featureList.length; i++) {
  
  let statIcon
  switch (featureList[i].status) {
    case 'passed':
      statIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
      `    
      break;
    case 'failed':
      statIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle-fill text-danger" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
      </svg>
      `
    break
    case 'warning':
      statIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-circle-fill text-warning" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      </svg>
      `
      break;
    default:
      break;
  }
  
  fWrapper.append(`
    <div class="card col-12 app-feature-card border-0 mb-3">
      <div class="card-body d-flex flex-row">
        <div class="me-3">
          ${statIcon}
        </div>
        <div class="app-feature-card-title me-3 text-truncate">
          ${featureList[i].name}
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