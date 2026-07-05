// Clicks dispatched through WebDriver — whether the native Actions API or a Puppeteer/CDP
// bridge obtained via browser.getPuppeteer() — can silently fail to register on this site:
// WebDriver/Puppeteer reports the click as successful and the element is found, but the
// app's click handler never fires. This is most reliably triggered by running an axe-core
// accessibility scan on the page beforehand. Dispatching the click via the page's own DOM
// API sidesteps both failure modes and reliably registers.
export async function domClick(selector: string): Promise<void> {
  await browser.execute((sel) => {
    (document.querySelector(sel) as HTMLElement)?.click();
  }, selector);
}
