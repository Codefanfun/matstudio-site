const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://mat-studio.framer.media/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(8000);

  const get = async (sel, attr) => page.locator(sel).first().getAttribute(attr).catch(() => null);

  const title = await page.title();
  const description = await get('meta[name="description"]', 'content');
  const robots = await get('meta[name="robots"]', 'content');
  const canonical = await get('link[rel="canonical"]', 'href');
  const ogTitle = await get('meta[property="og:title"]', 'content');
  const ogDescription = await get('meta[property="og:description"]', 'content');
  const ogUrl = await get('meta[property="og:url"]', 'content');
  const ogImage = await get('meta[property="og:image"]', 'content');
  const twitterTitle = await get('meta[name="twitter:title"]', 'content');
  const twitterDescription = await get('meta[name="twitter:description"]', 'content');
  const twitterImage = await get('meta[name="twitter:image"]', 'content');

  await browser.close();

  const checks = {
    title,
    description,
    robots,
    canonical,
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
  };
  console.log(JSON.stringify(checks, null, 2));

  const allPass =
    title === 'MATstudio | Animation & Story Studio | Tel Aviv' &&
    description && description.includes('MATstudio is a Tel Aviv animation') &&
    robots === 'index, follow' &&
    canonical === 'https://mat-studio.framer.media/' &&
    ogTitle === title &&
    ogDescription && ogDescription.includes('MATstudio crafts') &&
    ogUrl === 'https://mat-studio.framer.media/' &&
    ogImage && ogImage.includes('LALO_Header.jpeg') &&
    twitterTitle === title &&
    twitterDescription && twitterDescription.includes('MATstudio crafts') &&
    twitterImage && twitterImage.includes('LALO_Header.jpeg');

  process.exit(allPass ? 0 : 1);
})().catch(err => {
  console.error(err);
  process.exit(1);
});
