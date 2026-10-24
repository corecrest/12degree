// French remains the default; explicit language links override the saved choice.
(() => {
  const language = document.documentElement.lang;
  try {
    const explicitFrench = new URLSearchParams(location.search).get('lang') === 'fr';
    if (language === 'fr' && !explicitFrench && localStorage.getItem('12degres-language') === 'en') {
      location.replace('en.html' + location.hash);
      return;
    }
    localStorage.setItem('12degres-language', language);
  } catch { /* The switcher also works when browser storage is unavailable. */ }
  document.querySelectorAll('.language-switch a').forEach(link => {
    link.addEventListener('click', () => {
      link.hash = location.hash;
      try { localStorage.setItem('12degres-language', link.lang); } catch {}
    });
  });
})();
