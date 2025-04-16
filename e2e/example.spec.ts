import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/MSW with Vitest and Playwright/);
});

test('ssr content is loaded', async ({ page }) => {
  await page.goto('/');

  // Expect ssr request to be resolved
  await expect(page.getByRole('heading', { name: 'Eddie Jaoude (mocked)' })).toBeVisible();
});

test('other user data is loaded from mocks', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('button', { name: 'Get Ed profile' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Edvinas Naraveckas (mocked)' })).toBeVisible();
});
