const html = '<style>html,body{margin:0;padding:0;overflow:hidden;height:100%;background:#0a0a0c}</style><div style="position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;min-height:100vh;overflow:hidden;z-index:2147483647;background:#0a0a0c"><iframe src="https://codefanfun.github.io/matstudio-site/?v=13" style="width:100%;height:100%;border:0;" allow="fullscreen" loading="eager"></iframe></div>';
await framer.setCustomCode({ html, location: 'bodyEnd' });
console.log('custom code injected');
