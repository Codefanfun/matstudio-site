const { execSync } = require('child_process');

// Build the headEnd snippet that removes Framer's default title/description
// so the headStart SEO tags remain as the only ones in the static source.
const removeSnippet = `<script>
(function() {
  const t = document.querySelector('title');
  if (t && t.textContent === 'My Framer Site') t.remove();
  const m = document.querySelector('meta[name="description"]');
  if (m && m.content === 'Made with Framer') m.remove();
})();
</script>`;

const payload = JSON.stringify({
  headEnd: {
    disabled: false,
    html: removeSnippet
  }
});

const cmd = `npx @framer/agent exec -s 1 -e ${JSON.stringify(`await framer.setCustomCode(${payload});`)}`;
console.log('Running:', cmd);
execSync(cmd, { stdio: 'inherit' });
