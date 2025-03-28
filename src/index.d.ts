import type { GMInfo } from "./info";
import type { GMNotificationOptions } from "./notification";
import type { GMXmlHttpRequestDetails } from "./xmlHttpRequest";

type KeysOrDefaultValue = null | object | string | number | undefined | boolean;

declare const GM_info: GMInfo;

/**
 * @available Tampermonkey, Violetmonkey, OrangeMonkey, FireMonkey
 * @warning ❌ Adguard, ❌ UserScripts, ❌ Greasemonkey
 */
declare function GM_notification(
  text: string,
  title?: string,
  image?: string,
  onclick?: () => void
): undefined;
/**
 * @available Tampermonkey, Violetmonkey
 */
declare function GM_notification(options: GMNotificationOptions): undefined;

/**
 * @available Greasemonkey, Tampermonkey, Violetmonkey, AdGuard, OrangeMonkey, Firemonkey
 * @note In Firemonkey, if grant has GM_getValue and GM.getValue, GM_getValue becomes unvailable
 * @warning ❌ UserScripts
 */
declare function GM_getValue<T = unknown>(
  key: string,
  defaultValue?: unknown
): T;

/**
 * @available Tampermonkey 5.3+, Violetmonkey 2.19.1+
 */
declare function GM_getValues<T = Record<string, KeysOrDefaultValue>>(
  keysOrDefault: string[]
): T;
/**
 * @available Tampermonkey 5.3+, Violetmonkey 2.19.1+
 */
declare function GM_getValues<T = Record<string, KeysOrDefaultValue>>(
  keysOrDefault: T
): T;

/**
 * @available Greasemonkey, Tampermonkey, Violetmonkey, AdGuard, OrangeMonkey, Firemonkey
 * @note In Firemonkey, if grant has GM_setValue and GM.setValue, GM_setValue becomes unvailable
 * @warning ❌ UserScripts
 */
declare function GM_setValue<T = string | boolean | number | undefined>(
  key: string,
  value: T
): undefined;

/**
 * @available Tampermonkey 5.3+, Violetmonkey 2.19.1+
 */
declare function GM_setValues<T = Record<string, KeysOrDefaultValue>>(
  keysOrDefault: T
): undefined;

/**
 * @available Greasemonkey, Tampermonkey, Violetmonkey, AdGuard, OrangeMonkey, Firemonkey
 * @note In Firemonkey, if grant has GM_deleteValue and GM.deleteValue, GM_deleteValue becomes unvailable
 * @warning ❌ UserScripts
 */
declare function GM_deleteValue(key: string): undefined;

/**
 * @available Tampermonkey 5.3+, Violetmonkey 2.19.1+
 */
declare function GM_deleteValues(keys: string[]): undefined;

/**
 * @available Greasemonkey, Tampermonkey, Violetmonkey, AdGuard, OrangeMonkey, Firemonkey
 * @note In Firemonkey, if grant has GM_listValues and GM.listValues, GM_listValues becomes unvailable
 * @warning ❌ UserScripts
 */
declare function GM_listValues<T extends string = string>(): T[];

/**
 * @available Tampermonkey, Violetmonkey, AdGuard, OrangeMonkey, Firemonkey
 * @note Older versions of Violentmonkey (prior to 2.12.0) returned an imitation of Promise, which is still maintained for compatibility
 * @warning ❌ UserScripts, ❌ Greasemonkey
 */
declare function GM_addStyle(css: string): HTMLStyleElement;

/**
 * @available Tampermonkey, Violetmonkey, OrangeMonkey, Firemonkey, UserScripts, AdGuard (!)
 * @throws AdGuard using your own proxy for all requests and can throw on error statuc code
 * @warning ❌ Greasemonkey
 */
declare function GM_xmlhttpRequest(details: GMXmlHttpRequestDetails): {
  abort: () => void;
};

/**
 * Allows userscripts to access the URL of a resource (such as a CSS or image file)
 * that has been included in the userscript via a `@resource` tag at the script header.
 *
 * @available Greasemonkey, Tampermonkey, Violetmonkey, FireMonkey, AdGuard
 * @warning ❌ UserScripts, ❌ OrangeMonkey
 */
declare function GM_getResourceURL(name: string): string;
/**
 * Retrieves a blob: or data: URL of a resource from the metadata block.
 *
 * @param isBlobUrl (default: true) - return `blob:`?
 * @available Violetmonkey 2.13.1+
 */
declare function GM_getResourceURL(name: string, isBlobUrl: boolean = true);
