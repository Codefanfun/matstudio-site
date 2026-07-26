const { chromium } = require('playwright');

const url = process.argv[2] || 'https://codefanfun.github.io/matstudio-site/';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);

  const section = await page.$('#feature-project');
  if (section) {
    const box = await section.boundingBox();
    const text = await section.textContent();
    console.log('Feature project section found:', JSON.stringify({ box, textSnippet: text?.slice(0, 200) }));
  } else {
    console.log('Feature project section NOT found.');
  }

  const video = await page.$('video');
  if (video) {
    const src = await video.getAttribute('src');
    console.log('Video source:', src);
  } else {
    console.log('No video element found.');
  }

  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  await page.waitForTimeout(1000);
  console.log('Console errors:', errors);

  await browser.close();
})();
