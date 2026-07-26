const fs = require('fs');
const code = fs.readFileSync('custom-code.js', 'utf8');
const match = code.match(/const html = '((?:[^']|'\\'')*)'/);
if (!match) {
  console.error('HTML string not found');
  process.exit(1);
}
const html = match[1].replace(/\\'/g, "'");
fs.writeFileSync('scripts/fixed-embed.html', html);
const b64 = Buffer.from(html).toString('base64');
fs.writeFileSync('scripts/fixed-embed.b64', b64);
console.log('extracted html chars', html.length);
