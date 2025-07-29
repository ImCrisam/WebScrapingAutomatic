import { chromium, expect } from '@playwright/test';
import { goToOrders } from './goTo/goToOrders';

(async () => {
  console.log("🚀 Iniciando navegador...");
  const browser = await chromium.launch({ headless: false });

  console.log("🔐 Cargando sesión desde 'session.json'...");
  const context = await browser.newContext({ storageState: 'session.json' });
  const page = await context.newPage();

  console.log("🌐 Navegando a Temu...");
  await page.goto('https://www.temu.com');

  console.log("⏳ Esperando que cargue la página...");
  await page.waitForTimeout(6000);

  goToOrders(page);

})();
