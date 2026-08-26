# share-buttons

Кнопки «Поделиться» для Telegram, Одноклассников, ВКонтакте, MAX и WhatsApp.
Без зависимостей: один CSS и один JS, вместе ~2 КБ.

**Демо:** https://USER.github.io/share-buttons/

## Установка

Скопируйте `share-buttons.css` и `share-buttons.js` в проект и подключите:

```html
<link rel="stylesheet" href="share-buttons.css">
<script src="share-buttons.js" defer></script>
```

Разметка:

```html
<div class="share-buttons">
  <span class="share-buttons__label">Поделиться:</span>
  <a class="share-btn share-btn--tg"  data-share="telegram" href="#">Телеграм</a>
  <a class="share-btn share-btn--ok"  data-share="ok"       href="#">Одноклассники</a>
  <a class="share-btn share-btn--vk"  data-share="vk"       href="#">ВКонтакте</a>
  <a class="share-btn share-btn--max" data-share="max"      href="#">MAX</a>
  <a class="share-btn share-btn--wa"  data-share="whatsapp" href="#">WhatsApp</a>
</div>
```

Лишние сети просто удалите из разметки.

## Настройки

| Атрибут | Где | Что делает |
|---|---|---|
| `data-share` | ссылка | сеть: `telegram`, `ok`, `vk`, `max`, `whatsapp` |
| `data-share-url` | контейнер или ссылка | адрес вместо `location.href` |
| `data-share-title` | контейнер или ссылка | заголовок / текст сообщения |
| `share-buttons--column` | класс контейнера | вертикальная раскладка |

```html
<div class="share-buttons"
     data-share-url="https://example.com/article"
     data-share-title="Заголовок статьи">
  ...
</div>
```

## API

```js
ShareButtons.init(container);          // инициализировать блок, добавленный после загрузки
ShareButtons.link('vk', url, title);   // получить готовый URL шаринга
```

## Как это работает

Скрипт при загрузке проставляет каждой ссылке настоящий `href`, `target="_blank"` и
`rel="noopener noreferrer"`. По клику открывается попап; если браузер его заблокировал,
срабатывает обычный переход по ссылке. Поэтому кнопки работают и без наведения мыши —
на тач-устройствах, при копировании ссылки и при открытии в новой вкладке.

## Публикация демо на GitHub Pages

Settings → Pages → Source: `Deploy from a branch` → ветка `main`, папка `/ (root)`.

## Лицензия

MIT
