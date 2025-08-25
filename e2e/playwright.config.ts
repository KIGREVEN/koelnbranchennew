import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  webServer: {
    command: 'npm run dev --prefix frontend',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
