const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const logs = [];
  page.on('console', msg => logs.push({ type: msg.type(), text: msg.text() }));
  page.on('pageerror', err => logs.push({ type: 'pageerror', text: err.message }));

  await page.goto('https://mat-studio.framer.media/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  const html = await page.evaluate(() => document.documentElement.outerHTML);
  const bodyStart = html.slice(0, 2000);
  const bodyEnd = html.slice(-2000);

  console.log('BODY_START');
  console.log(bodyStart);
  console.log('BODY_END');
  console.log(bodyEnd);
  console.log('LOGS');
  console.log(JSON.stringify(logs, null, 2));

  await browser.close();
})();
