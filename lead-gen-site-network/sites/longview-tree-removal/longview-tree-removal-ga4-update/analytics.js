// GA4 setup + conversion event tracking for longviewtreepros.com
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-59V2KDND9Y');

document.addEventListener('DOMContentLoaded', function () {
  // Conversion event: click-to-call (any tel: link on the page — header, mobile bar, hero, CTAs)
  document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
    link.addEventListener('click', function () {
      gtag('event', 'click_to_call', {
        event_category: 'engagement',
        event_label: link.getAttribute('href'),
        page_location: window.location.href
      });
    });
  });
});
