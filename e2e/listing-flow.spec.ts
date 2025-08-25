import { test, expect } from '@playwright/test';

// E2E example: create listing -> admin approves -> listing visible

test('user can submit listing and see it after approval', async ({ page }) => {
  await page.goto('/branchen/listings/create');
  await page.fill('input[placeholder="Name"]', 'Testfirma');
  await page.fill('input[placeholder="Slug"]', 'testfirma');
  await page.click('text=Absenden');

  // Simulate admin approval via API
  await page.request.put(`${process.env.NEXT_PUBLIC_API_URL}/listings/1`, {
    data: { verified: true }
  });

  await page.goto('/branchen/aerzte');
  await expect(page.locator('text=Testfirma')).toBeVisible();
});
