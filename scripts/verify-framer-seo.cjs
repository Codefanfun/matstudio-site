const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://mat-studio.framer.media/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(8000);

  const title = await page.title();
  const desc = await page.locator('meta[name="description"]').first().getAttribute('content').catch(() => null);
  const ogImage = await page.locator('meta[property="og:image"]').first().getAttribute('content').catch(() => null);
  const robots = await page.locator('meta[name="robots"]').first().getAttribute('content').catch(() => null);
  const canonical = await page.locator('link[rel="canonical"]').first().getAttribute('href').catch(() => null);
  const ogDesc = await page.locator('meta[property="og:description"]').first().getAttribute('content').catch(() => null);

  await browser.close();

  const checks = {
    title,
    description: desc,
    ogImage,
    robots,
    canonical,
    ogDescription: ogDesc,
  };
  console.log(JSON.stringify(checks, null, 2));

  const allPass =
    title && title.includes('MATstudio') &&
    desc && desc.includes('MATstudio') &&
    ogImage && ogImage.includes('LALO_Header.jpeg') &&
    robots === 'index, follow' &&
    canonical && canonical.includes('mat-studio.framer.media') &&
    ogDesc && ogDesc.includes('MATstudio');

  process.exit(allPass ? 0 : 1);
})().catch(err => {
  console.error(err);
  process.exit(1);
});
