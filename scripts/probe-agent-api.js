console.log('framer.agent keys:', Object.keys(framer.agent || {}).sort());
console.log('framer.agent type:', typeof framer.agent);
if (framer.agent && typeof framer.agent === 'object') {
  for (const key of Object.keys(framer.agent)) {
    console.log(`  ${key}:`, typeof framer.agent[key]);
  }
}
