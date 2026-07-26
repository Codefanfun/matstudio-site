const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://mat-studio.framer.media/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  // Find the MATstudio iframe (no id on the restored overlay)
  const iframe = page.frameLocator('iframe[src*="matstudio-site"]');
  const studioSection = iframe.locator('section#studio');
  const footerSection = iframe.locator('footer');

  // Check initial visibility
  console.log('Initial studio visible:', await studioSection.isVisible().catch(() => false));

  // Scroll inside the iframe to the Studio section
  await studioSection.scrollIntoViewIfNeeded({ timeout: 10000 });
  await page.waitForTimeout(500);
  console.log('After scroll studio visible:', await studioSection.isVisible().catch(() => false));

  // Scroll to footer
  await footerSection.scrollIntoViewIfNeeded({ timeout: 10000 });
  await page.waitForTimeout(500);
  console.log('Footer visible:', await footerSection.isVisible().catch(() => false));

  await page.screenshot({ path: 'out/framer-iframe-scrolled.png' });
  await browser.close();
})();
