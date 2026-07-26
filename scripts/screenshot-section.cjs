const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const url = process.argv[2] || 'https://codefanfun.github.io/matstudio-site/';
const outDir = path.resolve(__dirname, '../out');
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);

  const section = await page.$('#feature-project');
  if (!section) {
    console.log('Section not found');
    await browser.close();
    return;
  }

  await section.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  const shotPath = path.join(outDir, 'feature-project-viewport.png');
  await page.screenshot({ path: shotPath });
  console.log('Saved:', shotPath);

  await browser.close();
})();
