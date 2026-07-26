import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://mat-studio.framer.media/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.screenshot({ path: 'matstudio-framer-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: 'matstudio-framer-mobile.png', fullPage: true });
  console.log('screenshots saved');
  await browser.close();
})();
