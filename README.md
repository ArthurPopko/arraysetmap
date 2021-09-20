# ArraySetMap
homework p.5
### Project Description ###

This is an example of project based on Cypress.
The project contains examples of arrays and sets usage.
1) set.js - Testing data in set.js for solving task 5 is generated randomly using chance library chance.pickone and chance.pickset.
2) array.js - 9 tasks solved for now.

## 1. Prerequisites
Before running test NodeJS >6.1.0 should be installed  at you environment:
https://nodejs.org/en/download/

## 2. Running of auto-tests locally
In order to run testing script at your own machine perform the following instructions:
#### 2.1 Load the project from the GitHub
Project URL: https://github.com/QAfun/Cypress_automation.git
For example, you may load the project using the command line:
```
git clone https://github.com/QAfun/arraysetmap.git
```
#### 2.2 Install components
As soon as project is loaded, go to the root and perform command:
```
npm install
```
It will install all components based on package.json file into node_modules folder.
#### 2.3 As soon as all components are loaded you may run testing scripts.
##### 2.3.1 Run all tests

*If you are not interested in seeing GUI while tests execution you may run tests in Electron*
https://www.npmjs.com/package/electron.

To run all tests in Electron:
```
npx cypress run
```
*If you prefer to see the application GUI while tests execution you may run tests in Chrome.*

To run all tests in Chrome:
```
npx cypress run -b chrome
```
In order to get the report in the Cypress Dashboard you should add some more parameters:
```
npx cypress run --record --key 8e1c01f5-c4ce-4d9b-9652-70e7d60f0ab0
```
**--record** means that transfer results to the Cypress Dashboard is on.
**--key** parameter followed by value **8e1c01f5-c4ce-4d9b-9652-70e7d60f0ab0** is used for access
to project in the Cypress Dashboard.

So, the command above will run testing scrips in Chrome and will create the report in the Cypress
Dashboard.

To do the same in a headless mode (Electron) use the following command:
```
npx cypress run --record --key 8e1c01f5-c4ce-4d9b-9652-70e7d60f0ab0
```

##### 2.3.2 Run single test file
Cypress provides the Test Runner that allows you to run testing files separately and see
the execution process:  https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview

To open it use the following command:
```
npx cypress open
```
In the Test Runner you will see the list of testing files. You may click any of them and execution
tests within a single it would be started in a separate window. In the particular case it's the best way to see the test perfomance.
Press F12 in your browser and choose "console" tab to see the console log.

#### 3. Reporting

##### 3.1 Results are loaded into the Cypress Dashboard
Link for the reporting project: https://dashboard.cypress.io/#/projects/hkjmbo/runs
Please, log in with your credentials - since the project is public you will be able to see results and report
into this project in case of running of tests at your local env with the key.

*Note*: Report is created in Test Rail only if you run all scope with command npx cypress run.
Report is not created if you run tests one by one in Cypress interactive window.