const fs = require('fs');
const code = fs.readFileSync('/tmp/custom-code-send.js', 'utf8');
console.log(JSON.stringify(code.slice(-300)));
