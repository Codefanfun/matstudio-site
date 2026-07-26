const html = `<style>
  html, body { margin: 0; padding: 0; background: #0a0a0c; }
  #matstudio-wrap { position: relative; width: 100vw; min-height: 100vh; }
  #matstudio-frame { width: 100%; border: 0; display: block; }
</style>
<div id="matstudio-wrap">
  <iframe id="matstudio-frame" src="https://codefanfun.github.io/matstudio-site/?v=2" allow="fullscreen" loading="eager" scrolling="no"></iframe>
</div>
<script>
  (function () {
    const frame = document.getElementById('matstudio-frame');
    if (!frame) return;
    const setHeight = (height) => {
      const px = Math.max(Math.round(height), window.innerHeight) + 'px';
      if (frame.style.height !== px) frame.style.height = px;
    };
    window.addEventListener('message', (e) => {
      if (e.data && e.data.type === 'matstudio-resize' && typeof e.data.height === 'number') {
        setHeight(e.data.height);
      }
    });
    setHeight(5000);
    frame.addEventListener('load', () => {
      setTimeout(() => frame.contentWindow.postMessage({ type: 'request-matstudio-resize' }, '*'), 200);
    });
  })();
</script>`;

await framer.setCustomCode({ html, location: 'bodyEnd' });
console.log('custom code set');
<style>
  html, body { margin: 0; padding: 0; background: #0a0a0c; }
  #matstudio-wrap { position: relative; width: 100vw; height: 100vh; min-height: 100vh; overflow: auto; -webkit-overflow-scrolling: touch; }
  #matstudio-frame { width: 100%; min-height: 100vh; border: 0; display: block; }
</style>
<div id="matstudio-wrap">
  <iframe id="matstudio-frame" src="${iframeSrc}" allow="fullscreen" loading="eager"></iframe>
</div>
<script>
  (function () {
    const frame = document.getElementById('matstudio-frame');
    if (!frame) return;
    function resizeFrame() {
      try {
        const doc = frame.contentDocument || frame.contentWindow && frame.contentWindow.document;
        if (doc && doc.documentElement) {
          const height = Math.max(doc.documentElement.scrollHeight, doc.body ? doc.body.scrollHeight : 0, window.innerHeight);
          frame.style.height = height + 'px';
        }
      } catch (e) { frame.style.height = window.innerHeight + 'px'; }
    }
    frame.addEventListener('load', resizeFrame);
    window.addEventListener('resize', resizeFrame);
    setTimeout(resizeFrame, 100);
    setTimeout(resizeFrame, 500);
    setTimeout(resizeFrame, 1500);
  })();
</script>
`.trim();

await framer.setCustomCode({ html, location: 'bodyEnd' });
console.log('custom code set');
