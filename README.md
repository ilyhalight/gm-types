# GM API Types

[tampermonkey-link]: https://www.tampermonkey.net/index.php
[userscripts-safari]: https://github.com/quoid/userscripts
[violentmonkey-link]: https://violentmonkey.github.io
[adguard-userscripts]: https://kb.adguard.com/en/general/userscripts#supported-apps
[firemonkey-link]: https://github.com/erosman/firemonkey
[greasemonkey-link]: https://github.com/greasemonkey/greasemonkey
[orangemonkey-link]: https://chromewebstore.google.com/detail/OrangeMonkey/ekmeppjgajofkpiofbebgcbohbmfldaf

All-in-One GM API types (Greasemonkey, Tampermonkey, Violentmonkey and etc)

## Install

To install:

Bun:

```bash
bun install @toil/gm-types
```

NPM:

```bash
npm install @toil/gm-types
```

## Usage

After installation add `@toil/gm-types/v4` or/and `@toil/gm-types/v3` to tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["@toil/gm-types/v3"]
    //...
  }
}
```

## Supported APIs

Currently, only these APIs are supported (with their `GM.` alternatives):

- GM_info
- GM_notification
- GM Storage (GM_getValue, GM_setValue and etc)
- GM_addStyle
- GM_xmlhttpRequest
- GM_getResourceURL
- GM_cookie

## Supported Extensions

Supported userscript managers:

- [Tampermonkey][tampermonkey-link]
- [Greasemonkey][greasemonkey-link]
- [Violentmonkey][violentmonkey-link]
- [FireMonkey][violentmonkey-link]
- [OrangeMonkey][violentmonkey-link]
- [UserScripts][userscripts-safari]
- [AdGuard UserScripts][adguard-userscripts]
