(function () {
  'use strict';

  var navSections = [
    {
      label: 'Overview',
      dropdown: true,
      items: [
        { label: 'Dashboard', href: 'stratavor-dashboardv2.html' },
        { label: 'Intelligence Hub', href: '01_intelligence_hub_dashboard.html' },
        { label: 'Signals Inbox', href: '02_intelligence_hub_chat.html' }
      ]
    },
    {
      label: 'Reports',
      dropdown: true,
      items: [
        { label: 'Financial Snapshot', href: 'stratavor-reporting-snapshots.html' },
        { label: 'Management Snapshot', href: 'stratavor-dashboard.html' }
      ]
    },
    {
      label: 'Risk',
      dropdown: true,
      items: [
        { label: 'Risk Intelligence', href: 'stratavor-risk-intelligence.html' },
        { label: 'Risk Snapshot', href: 'stratavor-risk-snapshot.html' }
      ]
    },
    {
      label: 'Strategy',
      dropdown: true,
      items: [
        { label: 'Strategic Profile', href: '04_strategic_profile.html' },
        { label: 'Cost Savings', href: 'stratavor-cost-saving-hub.html' },
        { label: 'Strategy Delivery', href: 'stratavor-strategy-delivery.html' }
      ]
    },
    {
      label: 'Connect',
      dropdown: false,
      href: 'stratavor-integrations.html',
      itemLabel: 'Integrations'
    },
    {
      label: 'Account',
      dropdown: true,
      items: [
        { label: 'Settings', href: '05_settings.html' },
        { label: 'Support', href: 'stratavor-support.html' }
      ]
    }
  ];

  function currentPageFilename() {
    var path = typeof window !== 'undefined' && window.location && window.location.pathname;
    if (!path) return '';
    var parts = path.split('/');
    var file = parts[parts.length - 1] || '';
    return file || (window.location.href && window.location.href.split('/').pop().split('?')[0]) || '';
  }

  function isActive(href) {
    if (!href) return false;
    var current = currentPageFilename();
    var target = href.split('/').pop().split('?')[0];
    return current === target || (current === '' && target === 'stratavor-dashboardv2.html');
  }

  function buildLogo() {
    var a = document.createElement('a');
    a.href = 'stratavor-dashboardv2.html';
    a.className = 'sidebar-logo';
    a.setAttribute('style', 'text-decoration:none;');
    var img = document.createElement('img');
    img.src = 'assets/stratavor-logo.svg';
    img.alt = 'Stratavor — Devour The Data. Deliver The Strategy.';
    img.className = 'sidebar-logo-img';
    a.appendChild(img);
    return a;
  }

  function buildNavItem(item, isSub) {
    var a = document.createElement('a');
    a.className = 'nav-item' + (isSub ? ' nav-item-sub' : '');
    a.href = item.href || '#';
    a.textContent = item.label;
    if (item.href && item.href !== '#') {
      if (isActive(item.href)) a.classList.add('active');
    } else {
      a.classList.add('nav-item-unlinked');
      a.setAttribute('aria-disabled', 'true');
    }
    return a;
  }

  function buildSection(section) {
    var fragment = document.createDocumentFragment();
    var label = document.createElement('div');
    label.className = 'nav-section-label';
    label.textContent = section.label;
    fragment.appendChild(label);

    if (section.dropdown && section.items && section.items.length) {
      section.items.forEach(function (item) {
        fragment.appendChild(buildNavItem(item, true));
      });
    } else if (!section.dropdown && section.href) {
      fragment.appendChild(buildNavItem({ label: section.itemLabel || section.label, href: section.href }, false));
    }
    return fragment;
  }

  function render() {
    var el = document.getElementById('app-sidebar');
    if (!el) return;

    el.innerHTML = '';
    el.classList.add('sidebar');

    el.appendChild(buildLogo());

    var nav = document.createElement('nav');
    nav.className = 'sidebar-nav';
    navSections.forEach(function (section) {
      nav.appendChild(buildSection(section));
    });
    el.appendChild(nav);

    var footer = document.createElement('div');
    footer.className = 'sidebar-footer';
    var switcher = document.createElement('div');
    switcher.className = 'entity-switcher';
    var avatar = document.createElement('div');
    avatar.className = 'entity-avatar';
    avatar.textContent = 'AS';
    var info = document.createElement('div');
    var name = document.createElement('div');
    name.className = 'entity-name';
    name.textContent = 'Acme SaaS Ltd';
    var role = document.createElement('div');
    role.className = 'entity-role';
    role.textContent = 'Admin';
    info.appendChild(name);
    info.appendChild(role);
    switcher.appendChild(avatar);
    switcher.appendChild(info);
    footer.appendChild(switcher);
    el.appendChild(footer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
