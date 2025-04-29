import type { GMInfo } from "./info";
import type { GMNotificationOptions } from "./notification";
import type { GMXmlHttpRequestDetails } from "./xmlHttpRequest";
import type { KeysOrDefaultValue } from "./utils";
import type {
  TMCookieListCallback,
  TMCookieListDetails,
  TMCookieSetCallback,
  TMCookieSetDetails,
  TMCookieDeleteCallback,
  TMCookieDeleteDetails,
} from "./cookie/tampermonkey";
import type { GMAddValueChangeCallback } from "./values";

declare global {
  const GM_info: GMInfo;

  /**
   * @available Tampermonkey, Violentmonkey, OrangeMonkey, FireMonkey
   * @warning ❌ Adguard, ❌ UserScripts, ❌ Greasemonkey
   */
  function GM_notification(
    text: string,
    title?: string,
    image?: string,
    onclick?: () => void
  ): undefined;
  /**
   * @available Tampermonkey, Violentmonkey
   */
  function GM_notification(options: GMNotificationOptions): undefined;

  /**
   * @available Greasemonkey, Tampermonkey, Violentmonkey, AdGuard, OrangeMonkey, Firemonkey
   * @note In Firemonkey, if grant has GM_getValue and GM.getValue, GM_getValue becomes unvailable
   * @warning ❌ UserScripts
   */
  function GM_getValue<T = unknown>(key: string, defaultValue?: unknown): T;

  /**
   * @available Tampermonkey 5.3+, Violentmonkey 2.19.1+
   */
  function GM_getValues<
    T extends Record<string, KeysOrDefaultValue> = Record<
      string,
      KeysOrDefaultValue
    >
  >(keysOrDefault: string[]): T;
  /**
   * @available Tampermonkey 5.3+, Violentmonkey 2.19.1+
   */
  function GM_getValues<
    T extends Record<string, KeysOrDefaultValue> = Record<
      string,
      KeysOrDefaultValue
    >
  >(keysOrDefault: T): T;

  /**
   * @available Greasemonkey, Tampermonkey, Violentmonkey, AdGuard, OrangeMonkey, Firemonkey
   * @note In Firemonkey, if grant has GM_setValue and GM.setValue, GM_setValue becomes unvailable
   * @warning ❌ UserScripts
   */
  function GM_setValue<
    T extends string | boolean | number | undefined = undefined
  >(key: string, value: T): undefined;

  /**
   * @available Tampermonkey 5.3+, Violentmonkey 2.19.1+
   */
  function GM_setValues<
    T extends Record<string, KeysOrDefaultValue> = Record<
      string,
      KeysOrDefaultValue
    >
  >(keysOrDefault: T): undefined;

  /**
   * @available Greasemonkey, Tampermonkey, Violentmonkey, AdGuard, OrangeMonkey, Firemonkey
   * @note In Firemonkey, if grant has GM_deleteValue and GM.deleteValue, GM_deleteValue becomes unvailable
   * @warning ❌ UserScripts
   */
  function GM_deleteValue(key: string): undefined;

  /**
   * @available Tampermonkey 5.3+, Violentmonkey 2.19.1+
   */
  function GM_deleteValues(keys: string[]): undefined;

  /**
   * @available Greasemonkey, Tampermonkey, Violentmonkey, AdGuard, OrangeMonkey, Firemonkey
   * @note In Firemonkey, if grant has GM_listValues and GM.listValues, GM_listValues becomes unvailable
   * @warning ❌ UserScripts
   */
  function GM_listValues<T extends string = string>(): T[];

  /**
   * @available Tampermonkey, Violentmonkey, Firemonkey
   * @warning ❌ UserScripts, ❌ Greasemonkey, ❌ AdGuard, ❌ OrangeMonkey
   */
  function GM_addValueChangeListener(
    name: string,
    callback: GMAddValueChangeCallback
  ): string;

  /**
   * @available Tampermonkey, Violentmonkey, Firemonkey
   * @warning ❌ UserScripts, ❌ Greasemonkey, ❌ AdGuard, ❌ OrangeMonkey
   */
  function GM_removeValueChangeListener(listenerId: string): void;

  /**
   * @available Tampermonkey, Violentmonkey, AdGuard, OrangeMonkey, Firemonkey
   * @note Older versions of Violentmonkey (prior to 2.12.0) returned an imitation of Promise, which is still maintained for compatibility
   * @warning ❌ UserScripts, ❌ Greasemonkey
   */
  function GM_addStyle(css: string): HTMLStyleElement;

  /**
   * @available Tampermonkey, Violentmonkey, OrangeMonkey, Firemonkey, UserScripts, AdGuard (!)
   * @throws AdGuard using your own proxy for all requests and can throw on error statuc code
   * @warning ❌ Greasemonkey
   */
  function GM_xmlhttpRequest(details: GMXmlHttpRequestDetails): {
    abort: () => void;
  };

  /**
   * Allows userscripts to access the URL of a resource (such as a CSS or image file)
   * that has been included in the userscript via a `@resource` tag at the script header.
   *
   * @available Greasemonkey, Tampermonkey, Violentmonkey, FireMonkey, AdGuard
   * @warning ❌ UserScripts, ❌ OrangeMonkey
   */
  function GM_getResourceURL(name: string): string;
  /**
   * Retrieves a blob: or data: URL of a resource from the metadata block.
   *
   * @param isBlobUrl (default: true) - return `blob:`?
   * @available Violentmonkey 2.13.1+
   */
  function GM_getResourceURL(name: string, isBlobUrl: boolean = true);

  /**
   * @available Tampermonkey
   */
  const GM_cookie: {
    list(
      details: TMCookieListDetails,
      callback: TMCookieListCallback
    ): undefined;
    set(details: TMCookieSetDetails, callback: TMCookieSetCallback): undefined;
    delete(
      details: TMCookieDeleteDetails,
      callback: TMCookieDeleteCallback
    ): undefined;
  };
}
