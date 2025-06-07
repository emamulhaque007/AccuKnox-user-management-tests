// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }, // Only Chromium
    },
  ],
});
