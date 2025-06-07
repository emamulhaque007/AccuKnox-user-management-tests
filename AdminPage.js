// pages/AdminPage.js

export class AdminPage {
  constructor(page) {
    this.page = page;
    this.adminTab = page.getByRole('link', { name: 'Admin' });

    // other locators for form fields
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.userRoleDropdown = page.locator('label:has-text("User Role")').locator('..').locator('.oxd-select-text');
    this.employeeNameInput = page.locator('input[placeholder="Type for hints..."]');
    this.statusDropdown = page.locator('label:has-text("Status")').locator('..').locator('.oxd-select-text');
    this.usernameInput = page.locator('input[autocomplete="off"]').nth(1);
    this.passwordInput = page.locator('input[type="password"]').nth(0);
    this.confirmPasswordInput = page.locator('input[type="password"]').nth(1);
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async navigateToAdmin() {
    await this.adminTab.click();
  }

  async addUser(username, password) {
    await this.addButton.click();
    await this.userRoleDropdown.click();
    await this.page.locator('div[role="option"]', { hasText: 'Admin' }).click();
    await this.employeeNameInput.fill('O');
    await this.page.locator('.oxd-autocomplete-dropdown > div').first().click();
    await this.statusDropdown.click();
    await this.page.locator('div[role="option"]', { hasText: 'Enabled' }).click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.saveButton.click();
  }

  // You can add editUser, searchUser, deleteUser methods too.
}
