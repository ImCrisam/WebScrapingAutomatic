import type { Page } from "playwright";

/**
 * Busca el primer selector válido desde el más específico hacia el más general.
 * @param page Página actual de Playwright
 * @param selectorSteps Array de strings que componen el selector CSS en orden
 * @returns El Locator del primer elemento encontrado o `null` si ninguno se encuentra
 */
export async function findElementFromSpecificToGeneral(
  page: Page,
  selectorSteps: string[]
): Promise<ReturnType<Page["locator"]> | null> {
  for (let i = selectorSteps.length - 1; i >= 0; i--) {
    const partialSelector = selectorSteps.slice(0, i + 1).join(" > ");
    console.log(`🔎 Verificando selector: ${partialSelector}`);
    try {
      const el = page.locator(partialSelector);
      await el.waitFor({ timeout: 3000 });
      console.log(`✅ Encontrado: ${partialSelector}`);
      await el.hover();
      return el;
    } catch (e) {
      console.log(`❌ No encontrado: ${partialSelector}`);
    }
  }

  console.error("❌ Ningún elemento de la ruta fue encontrado.");
  return null;
}

/**
 * Convierte un selector CSS completo a un array de pasos individuales.
 * @param fullSelector Selector en forma de string (usando `>` como separador)
 * @returns Array de pasos del selector
 */
export function selectorToSteps(fullSelector: string): string[] {
  return fullSelector
    .split(">")
    .map(step => step.trim())
    .filter(step => step.length > 0);
}
