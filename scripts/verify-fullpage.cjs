const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const url = process.argv[2] || 'https://codefanfun.github.io/matstudio-site/';
const outDir = path.resolve(__dirname, '../out');
fs.mkdirSync(outDir, { recursive: true });
const slug = new URL(url).hostname.replace(/\./g, '_');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    // Force reduced motion so Framer Motion reveals content immediately for screenshots.
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();

  for (const [mode, width, height] of [
    ['desktop', 1440, 900],
    ['mobile', 375, 812],
  ]) {
    await page.setViewportSize({ width, height });
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
      await page.waitForTimeout(3000);
      const shotPath = path.join(outDir, `${slug}-fullpage-${mode}.png`);
      await page.screenshot({ path: shotPath, fullPage: true });
      console.log(`Full-page screenshot saved: ${shotPath}`);
    } catch (err) {
      console.error(`Failed ${mode}: ${err.message}`);
      process.exitCode = 1;
    }
  }

  await browser.close();
})();
