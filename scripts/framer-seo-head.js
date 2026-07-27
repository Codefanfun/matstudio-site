const headHTML = `
<title>MATstudio | Animation &amp; Story Studio | Tel Aviv</title>
<meta name="description" content="MATstudio is a Tel Aviv animation and story studio crafting bold characters, cinematic visuals, and design systems for films, series, games, and brands." />
<meta name="keywords" content="animation studio, story studio, character design, Tel Aviv animation, motion design, cartoon production, Lalo, MATstudio" />
<meta name="author" content="MATstudio" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://mat-studio.framer.media/" />
<meta name="theme-color" content="#0a0a0c" />
<meta property="og:title" content="MATstudio | Animation &amp; Story Studio | Tel Aviv" />
<meta property="og:description" content="MATstudio crafts bold characters, cinematic animation, and design systems that move people." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://mat-studio.framer.media/" />
<meta property="og:image" content="https://mat-studio.framer.media/matstudio-site/LALO_Header.jpeg" />
<meta property="og:image:alt" content="MATstudio - Lalo hero artwork" />
<meta property="og:site_name" content="MATstudio" />
<meta property="og:locale" content="en_US" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="MATstudio | Animation &amp; Story Studio | Tel Aviv" />
<meta name="twitter:description" content="MATstudio crafts bold characters, cinematic animation, and design systems that move people." />
<meta name="twitter:image" content="https://mat-studio.framer.media/matstudio-site/LALO_Header.jpeg" />
<meta name="twitter:image:alt" content="MATstudio - Lalo hero artwork" />
<script>
(function() {
  const setOnce = function() {
    document.title = 'MATstudio | Animation & Story Studio | Tel Aviv';
    let d = document.querySelector('meta[name="description"]');
    if (!d) { d = document.createElement('meta'); d.name = 'description'; document.head.appendChild(d); }
    d.content = 'MATstudio is a Tel Aviv animation and story studio crafting bold characters, cinematic visuals, and design systems for films, series, games, and brands.';
  };
  setOnce();
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', setOnce); } else { setOnce(); }
})();
</script>
`.trim();

await framer.setCustomCode({ html: headHTML, location: 'headEnd' });
console.log('headEnd SEO tags set');
