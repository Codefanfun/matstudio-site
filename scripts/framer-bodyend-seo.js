const bodyHTML = `
<style>html,body{margin:0;padding:0;overflow:hidden;height:100%;background:#0a0a0c}</style>
<div style="position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;min-height:100vh;overflow:hidden;z-index:2147483647;background:#0a0a0c">
  <iframe src="https://codefanfun.github.io/matstudio-site/?v=17" style="width:100%;height:100%;border:0;" allow="fullscreen" loading="eager"></iframe>
</div>
<script>
(function () {
  const title = 'MATstudio | Animation & Story Studio | Tel Aviv';
  const description = 'MATstudio is a Tel Aviv animation and story studio crafting bold characters, cinematic visuals, and design systems for films, series, games, and brands.';
  const ogDescription = 'MATstudio crafts bold characters, cinematic animation, and design systems that move people.';
  function setOrUpdateMeta(selector, attr, value, prop) {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      if (prop) el.setAttribute('property', prop);
      if (attr) el.setAttribute(attr, value);
      document.head.appendChild(el);
    }
    if (el.getAttribute(attr || 'content') !== value) el.setAttribute(attr || 'content', value);
  }
  function fix() {
    if (document.title !== title) document.title = title;
    setOrUpdateMeta('meta[name="description"]', 'content', description, null);
    setOrUpdateMeta('meta[property="og:description"]', 'content', ogDescription, 'og:description');
    setOrUpdateMeta('meta[name="robots"]', 'content', 'index, follow', null);
  }
  fix();
  window.addEventListener('load', fix);
  setTimeout(fix, 1000);
  setTimeout(fix, 3000);
})();
</script>
`.trim();

await framer.setCustomCode({ html: bodyHTML, location: 'bodyEnd' });
console.log('bodyEnd iframe + runtime SEO fix set');
