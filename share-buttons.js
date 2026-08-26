/*!
 * share-buttons — v1.0
 * Кнопки «Поделиться»: Telegram, Одноклассники, ВКонтакте, MAX, WhatsApp.
 * Без зависимостей. Подключается один раз, инициализируется сам.
 */
(function (window, document) {
  'use strict';

  var NETWORKS = {
    telegram: function (url, title) {
      return 'https://t.me/share/url?url=' + enc(url) + (title ? '&text=' + enc(title) : '');
    },
    ok: function (url, title) {
      return 'https://connect.ok.ru/offer?url=' + enc(url) + (title ? '&title=' + enc(title) : '');
    },
    vk: function (url, title) {
      return 'https://vk.com/share.php?url=' + enc(url) + (title ? '&title=' + enc(title) : '');
    },
    max: function (url, title) {
      return 'https://max.ru/:share?text=' + enc(title ? title + ' ' + url : url);
    },
    whatsapp: function (url, title) {
      return 'https://api.whatsapp.com/send?text=' + enc(title ? title + ' ' + url : url);
    }
  };

  function enc(s) { return encodeURIComponent(s); }

  function closest(el, selector) {
    while (el && el.nodeType === 1) {
      if (el.matches ? el.matches(selector) : el.msMatchesSelector(selector)) return el;
      el = el.parentNode;
    }
    return null;
  }

  /** Публичный API: ShareButtons.link('vk') -> готовый URL */
  function link(network, url, title) {
    var build = NETWORKS[network];
    if (!build) return '#';
    return build(url || window.location.href, title || '');
  }

  function init(root) {
    var scope = root || document;
    var links = scope.querySelectorAll('[data-share]');

    for (var i = 0; i < links.length; i++) {
      (function (el) {
        var box = closest(el, '.share-buttons') || document.body;
        var url = el.getAttribute('data-share-url') || box.getAttribute('data-share-url') || window.location.href;
        var title = el.getAttribute('data-share-title') || box.getAttribute('data-share-title') || '';

        el.href = link(el.getAttribute('data-share'), url, title);
        el.target = '_blank';
        el.rel = 'noopener noreferrer';

        el.addEventListener('click', function (e) {
          var win = window.open(el.href, '_blank', 'noopener,noreferrer,width=680,height=560');
          // Если попап заблокирован — не мешаем обычному переходу по href.
          if (win) { e.preventDefault(); win.focus(); }
        });
      })(links[i]);
    }
  }

  var ShareButtons = { init: init, link: link, networks: NETWORKS };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(); });
  } else {
    init();
  }

  window.ShareButtons = ShareButtons;
})(window, document);
