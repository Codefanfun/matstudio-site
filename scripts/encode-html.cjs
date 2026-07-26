const fs = require('fs');
const html = fs.readFileSync('scripts/html-embed.html', 'utf8');
const b64 = Buffer.from(html).toString('base64');
fs.writeFileSync('scripts/html-embed.b64', b64);
console.log('encoded', b64.length);
