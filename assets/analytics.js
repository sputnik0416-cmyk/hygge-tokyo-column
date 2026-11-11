/* Preview never sends data. GA4 is activated only on the published custom domain. */
(() => {
  const enabled = document.documentElement.dataset.published === 'true';
  if (!enabled || location.hostname !== 'hyggetokyo.com') return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', 'G-KZ3FVX6G32');
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-KZ3FVX6G32';
  document.head.appendChild(script);
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const url = new URL(link.href, location.href);
    if (url.hostname === 'hyggetokyo.official.ec') {
      gtag('event', 'shop_click', {
        article_slug: url.searchParams.get('utm_campaign'),
        link_position: url.searchParams.get('utm_content'),
        link_url: url.href
      });
    } else if (url.hostname === 'www.instagram.com') {
      gtag('event', 'instagram_click', {link_url: url.href});
    }
  });
})();
