fetch('https://mat-studio.framer.media/')
  .then(r => r.text())
  .then(html => {
    const headStart = html.indexOf('<head>');
    const headEnd = html.indexOf('</head>');
    const head = html.slice(headStart, headEnd + 7);
    const lines = head.split('\n').map(l => l.trim()).filter(Boolean);
    lines.slice(0, 40).forEach((line, i) => console.log(`${i}: ${line}`));
  })
  .catch(err => { console.error(err); process.exit(1); });
