(function () {
  'use strict';

  var DEMO_PARAM = 'demo=1';
  function isDemoMode() {
    return typeof window !== 'undefined' && window.location && window.location.search.indexOf(DEMO_PARAM) !== -1;
  }

  function currentPageFile() {
    var path = window.location.pathname || '';
    var parts = path.split('/');
    return (parts[parts.length - 1] || '').split('?')[0] || '';
  }

  function addDemoParam(url) {
    if (!url || url.indexOf('demo=1') !== -1) return url;
    var sep = url.indexOf('?') !== -1 ? '&' : '?';
    return url + sep + DEMO_PARAM;
  }

  function injectBanner() {
    var banner = document.createElement('div');
    banner.className = 'demo-banner';
    banner.setAttribute('role', 'status');
    var demoDashboard = (function () { var p = window.location.pathname; var i = p.lastIndexOf('/'); return (i >= 0 ? p.slice(0, i + 1) : './') + 'stratavor-dashboardv2.html?demo=1'; })();
    banner.innerHTML = '🎬 <strong>Interactive demo</strong> — Read-only. All data is sample data. <a href="' + demoDashboard + '">Back to dashboard</a>';
    document.body.insertBefore(banner, document.body.firstChild);
  }

  function rewriteLinks() {
    var base = window.location.origin + (window.location.pathname.replace(/\/[^/]+$/, '') || '') + '/';
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:')) return;
      if (href.startsWith('http') && href.indexOf(window.location.host) === -1) return;
      var resolved = href.startsWith('http') ? href : (href.startsWith('/') ? window.location.origin + href : new URL(href, base).href);
      if (resolved.indexOf(window.location.host) !== -1) a.setAttribute('href', addDemoParam(a.getAttribute('href')));
    });
  }

  /* Explainer callouts disabled — no callouts on any page */
  var calloutsByPage = {};

  function injectCallouts() {
    var file = currentPageFile();
    var list = calloutsByPage[file];
    if (!list || !list.length) return;
    list.forEach(function (item) {
      var el = document.querySelector(item.selector);
      if (!el) return;
      var wrap = document.createElement('div');
      wrap.className = 'demo-callout-inline';
      var callout = document.createElement('div');
      callout.className = 'demo-callout demo-callout-bottom';
      callout.innerHTML = '<div class="demo-callout-title">' + (item.title || '') + '</div><p>' + (item.body || '') + '</p>';
      wrap.appendChild(callout);
      el.parentNode.insertBefore(wrap, el.nextSibling);
    });
  }

  function showToast(message) {
    var existing = document.getElementById('demo-toast');
    if (existing) existing.remove();
    var toast = document.createElement('div');
    toast.id = 'demo-toast';
    toast.className = 'demo-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(function () { toast.classList.add('demo-toast-visible'); });
    setTimeout(function () {
      toast.classList.remove('demo-toast-visible');
      setTimeout(function () { toast.remove(); }, 320);
    }, 2800);
  }

  function showConnectModal() {
    var existing = document.getElementById('demo-connect-modal');
    if (existing) { existing.classList.add('demo-modal-visible'); return; }
    var overlay = document.createElement('div');
    overlay.id = 'demo-connect-modal';
    overlay.className = 'demo-modal-overlay';
    overlay.innerHTML = '<div class="demo-modal"><h3>Connection simulated</h3><p>In the full product, this would connect your account. This demo is read-only — no data is sent or saved.</p><button class="demo-btn-close">Got it</button></div>';
    overlay.querySelector('.demo-btn-close').onclick = function () { overlay.classList.remove('demo-modal-visible'); };
    overlay.onclick = function (e) { if (e.target === overlay) overlay.classList.remove('demo-modal-visible'); };
    document.body.appendChild(overlay);
    requestAnimationFrame(function () { overlay.classList.add('demo-modal-visible'); });
  }

  function interceptActions() {
    document.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Demo — no data is saved.');
      return false;
    }, true);

    document.addEventListener('click', function (e) {
      var t = e.target.closest('button, [role="button"], .topbar-btn-primary, .btn-sm-primary, .upload-btn');
      if (!t) return;
      var text = (t.textContent || '').toLowerCase();
      if (/connect|reconnect|save|submit|generate|upload|disconnect/.test(text)) {
        e.preventDefault();
        e.stopPropagation();
        if (/connect|reconnect/.test(text)) showConnectModal();
        else showToast('Demo — no data is saved.');
      }
    }, true);
  }

  function init() {
    if (!isDemoMode()) return;
    document.body.classList.add('demo-mode');
    injectBanner();
    rewriteLinks();
    interceptActions();
    if (document.readyState === 'complete') {
      injectCallouts();
    } else {
      window.addEventListener('load', injectCallouts);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
