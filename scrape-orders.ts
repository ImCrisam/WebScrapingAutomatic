import { chromium, expect } from '@playwright/test';

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

  const divLocator = page.locator('div._1zY-dOWw');

  const childCount = await divLocator.locator('>*').count();
  console.log(`🔍 El div tiene ${childCount} hijos:`);

  for (let i = 0; i < childCount; i++) {
    const child = divLocator.locator('>*').nth(i);
    const tag = await child.evaluate(el => el.tagName);
    const classList = await child.evaluate(el => el.className);
    const text = await child.textContent();

    console.log(`🧩 Hijo ${i + 1}: <${tag.toLowerCase()} class="${classList}"> -> "${text?.trim()}"`);
  }




  // console.log("📦 Buscando pedidos...");
  // await page.waitForSelector('[data-testid="order-card"]', { timeout: 15000 });

  // const orders = page.locator('[data-testid="order-card"]');
  // const count = await orders.count();
  // console.log(`✅ Se encontraron ${count} pedidos`);

  // for (let i = 0; i < count; i++) {
  //   console.log(`🔍 Procesando pedido ${i + 1}...`);
  //   const order = orders.nth(i);

  //   const title = await order.locator('h2, h3').first().textContent();
  //   const totalEl = await order.locator('text=/Total/i').first();
  //   const totalValue = await totalEl.evaluate((el) => el.nextSibling?.textContent?.trim());

  //   console.log(`🧾 Pedido ${i + 1}: ${title?.trim() || 'Sin título'} | Total: ${totalValue || 'Desconocido'}`);
  // }

  // console.log("🛑 Cerrando navegador...");
  // await browser.close();
  // console.log("✅ Proceso finalizado correctamente.");
})();
