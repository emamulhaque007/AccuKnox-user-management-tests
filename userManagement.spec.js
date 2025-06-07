const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { AdminPage } = require('../pages/AdminPage');

test('Add, Search, and Validate User', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await loginPage.login('Admin', 'admin123');
  await adminPage.navigateToAdmin();

  const username = 'testuser' + Math.floor(Math.random() * 1000);
  const password = 'TestPass@123';

  await adminPage.addUser(username, password);
  await page.waitForTimeout(3000);
  await adminPage.searchUser(username);

  const userExists = await page.locator(`div.oxd-table-cell:has-text("${username}")`).isVisible();
  expect(userExists).toBeTruthy();
});
