import { execSync } from 'child_process';

const snippet = `<script>
(function() {
  const t = document.querySelector('title');
  if (t && t.textContent === 'My Framer Site') t.remove();
  const m = document.querySelector('meta[name="description"]');
  if (m && m.content === 'Made with Framer') m.remove();
})();
</script>`;

const jsExpr = `await framer.setCustomCode({
  headEnd: { disabled: false, html: ${JSON.stringify(snippet)} }
});`;

execSync(`npx @framer/agent exec -s 1 -e ${JSON.stringify(jsExpr)}`, {
  stdio: 'inherit',
  cwd: new URL('..', import.meta.url).pathname,
});
