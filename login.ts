import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://temu.com');
  console.log('Inicia sesión manualmente. Tienes 60 segundos...');
  await page.waitForTimeout(150000); // tiempo para que hagas login

  await context.storageState({ path: 'session.json' });
  console.log('✅ Sesión guardada');
  await browser.close();
})();
