To do
- Set up in Jenkins with job that can be run by anyone

Running automation tests (subject to change as project develops):
note: these steps are extracted and distilled from the following Cypress tutorial: https://docs.cypress.io/guides/getting-started/installing-cypress
- requires Node.js 12 or 14 and above- https://nodejs.org/en/download/
- Open this folder in Visual studio code: gettr_automation
- Open 2 separate terminals inside of VS Code
- In one, run yarn with this command: 
    - yarn start
- In the other, run cypress with this command: 
    - yarn cypress:open
- When Cypress opens, select the test you want to run. For now, it is “login.spec.js”

note: included in this repo, there is an application that is part of the "Testing Your First Application" Course in the Real World Testing with Cypress Curriculum. The tutorial can be found here- https://learn.cypress.io/testing-your-first-application/todomvc-app-install-and-overview


