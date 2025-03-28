# GM API Types

[tampermonkey-link]: https://www.tampermonkey.net/index.php
[userscripts-safari]: https://github.com/quoid/userscripts
[violetmonkey-link]: https://violentmonkey.github.io
[adguard-userscripts]: https://kb.adguard.com/en/general/userscripts#supported-apps
[firemonkey-link]: https://github.com/erosman/firemonkey
[greasemonkey-link]: https://github.com/greasemonkey/greasemonkey
[orangemonkey-link]: https://chromewebstore.google.com/detail/OrangeMonkey/ekmeppjgajofkpiofbebgcbohbmfldaf

All-in-One GM API types (Greasemonkey, Tampermonkey, Violetmonkey and etc)

## Install

To install:

```bash
bun install @vot.js/shared
```

## Supported APIs

Currently, only these APIs are supported (with their `GM.` alternatives):

- GM_info
- GM_notification
- GM Storage (GM_getValue, GM_setValue and etc)
- GM_addStyle
- GM_xmlhttpRequest
- GM_getResourceURL

<!-- window.focus, GM storage not supported in UserScripts -->

## Supported Extensions

Supported userscript managers:

- [Tampermonkey][tampermonkey-link]
- [Greasemonkey][greasemonkey-link]
- [Violetmonkey][violetmonkey-link]
- [FireMonkey][violetmonkey-link]
- [OrangeMonkey][violetmonkey-link]
- [UserScripts][userscripts-safari]
- [AdGuard UserScripts][adguard-userscripts]
