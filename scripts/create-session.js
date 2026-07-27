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

const href = `http://127.0.0.1:${process.env.FRAMER_CLI_PORT || 19988}`;
console.log(JSON.stringify({ projectId, userId: project.userId, href }));
