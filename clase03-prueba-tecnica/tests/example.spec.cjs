import { test, expect } from '@playwright/test';

const prefixUrl = 'https://cataas.com/cat/says/'
const LOCAL_HOST='http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCAL_HOST);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imgeSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgeSrc?.startsWith(prefixUrl)).toBeTruthy()
});
