project to-do
- Set up in Jenkins with job that can be run by anyone


Running automation tests (subject to change as project develops):
note: these steps are extracted and distilled from the following Cypress tutorial: https://docs.cypress.io/guides/getting-started/installing-cypress

- clone this repo onto your local machine: this github repo>> green "Code" button in top-right>> "Download ZIP" (or any option that you know will work)   
    note: (do this step if there is no Jenkins job is set up yet and you want to run this local while pointing to a remote endpoint)
- move this ZIP file into an appropriate project folder on your local machine (ie. "projects" folder on your desktop)
- in a terminal window:
    - install Node version 14 or higher (requiired): npm install -g npm
    - install yarn: npm install -g yarn
    - change directories into the repo
    - install the dependencies: yarn install

- Open 2 separate terminals inside of VS Code
- in one, run yarn with this command: 
    - yarn start
- in the other, run cypress with this command: 
    - yarn cypress:open
- when Cypress opens, select the test you want to run. For now, it is “login.spec.js”

- you can then open your browser to the HTTP server URL shown in the console (e.g. https://web-shadow-qa4.getter-dev.tk/)


note: included in this repo, there is an application that is part of the "Testing Your First Application" Course in the Real World Testing with Cypress Curriculum. The tutorial can be found here- https://learn.cypress.io/testing-your-first-application/todomvc-app-install-and-overview


