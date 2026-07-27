const { connect } = require('framer-api');
const fs = require('fs');
const path = require('path');
const os = require('os');

function getConfigDir() {
  if (process.env.XDG_CONFIG_HOME) return path.join(process.env.XDG_CONFIG_HOME, 'framer');
  if (process.platform === 'win32') return path.join(process.env.APPDATA || os.homedir(), 'framer');
  return path.join(os.homedir(), '.config', 'framer');
}

const configPath = path.join(getConfigDir(), 'projects.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
const project = Object.values(config.projects)[0];

(async () => {
  const framer = await connect(project.id, project.apiKey, { clientId: 'framer-api-probe' });
  console.log('Connected. Framer keys:', Object.keys(framer).sort());
  // Search for any method containing site, seo, title, desc on the first level and one level deeper.
  const search = (obj, prefix = '') => {
    const matches = [];
    for (const key of Object.keys(obj || {})) {
      const full = prefix ? `${prefix}.${key}` : key;
      if (/site|seo|title|description|meta|social/i.test(key) && typeof obj[key] === 'function') {
        matches.push(full);
      }
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        matches.push(...search(obj[key], full));
      }
    }
    return matches;
  };
  console.log('Candidate methods:', search(framer));
  await framer.disconnect();
})().catch(err => {
  console.error(err);
  process.exit(1);
});
