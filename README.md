# AccuKnox-user-management-tests
Project Setup steps:
Make a new folder named as "orangehrm-automation"
Open the folder by VS Code.
Create a Folders named as (i) tests (2) pages
In folder "tests", create a file named as :
 login.spec.js
 addUser.spec.js
 searchUser.spec.js
 editUser.spec.js
 deleteUser.spec.js

 In folder "pages", create the following file:
 LoginPage.js
 AdminPage.js
 
 Create another file named as "playwright.config.js"

 How to run the test cases:
 To run the test in vs code, use the following command in terminal:
 "npx playwright test --project=chromium --headed"  -> This will run the test in Chrome browser.

 Playwright version used:
 run this command in vs code terminal to check the version of your playwright:  "npx playwright --version"
 In this test case playwright version used is : Version 1.52.0
