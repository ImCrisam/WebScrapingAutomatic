import type { Page } from "playwright";
import { findElementFromSpecificToGeneral, selectorToSteps } from "../FindUtils/FindElement";

export async function goToOrders(
  page: Page,
): Promise<void> {
  const targetSelector =
    "#mainHeader > div._2UbxPzJy.bb4_zDqy.ZVmrxsji > div > div._1CmrZeBi.yzL0lSdQ > div > div._10iL_95W > div:nth-child(1) > div > div._313Z71lG._3GBVQxAr._32_XPgZj._3_UO0FF2";
 
  const selectorSteps = selectorToSteps(targetSelector);
  const elementTarget = await findElementFromSpecificToGeneral(page, selectorSteps);

  if (elementTarget) {
    console.log("🖱️ Haciendo click...");
    await elementTarget.click();
    console.log("✅ Click realizado con éxito.");
  } else {
    console.error("🚫 No se encontró ningún elemento válido para hacer click.");
  }
}