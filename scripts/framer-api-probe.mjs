import { connect } from 'framer-api';
import fs from 'fs';
import path from 'path';
import os from 'os';

function getConfigDir() {
  if (process.env.XDG_CONFIG_HOME) return path.join(process.env.XDG_CONFIG_HOME, 'framer');
  if (process.platform === 'win32') return path.join(process.env.APPDATA || os.homedir(), 'framer');
  return path.join(os.homedir(), '.config', 'framer');
}

const configPath = path.join(getConfigDir(), 'projects.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
const projectId = Object.keys(config.projects)[0];
const project = config.projects[projectId];

const framer = await connect(projectId, project.apiKey, { clientId: 'framer-api-probe' });
console.log('Connected. Framer keys:', Object.keys(framer).sort());

const search = (obj, prefix = '', depth = 0) => {
  if (depth > 2) return [];
  const matches = [];
  for (const key of Object.keys(obj || {})) {
    const full = prefix ? `${prefix}.${key}` : key;
    if (/site|seo|title|description|meta|social/i.test(key) && typeof obj[key] === 'function') {
      matches.push(full);
    }
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      matches.push(...search(obj[key], full, depth + 1));
    }
  }
  return matches;
};
console.log('Candidate methods:', search(framer));

await framer.disconnect();
