import type { GMInfo } from "./info";
import type { GMNotificationOptions } from "./notification";
import type { GMXmlHttpRequestDetails } from "./xmlHttpRequest";
import type { KeysOrDefaultValue } from "./utils";
import type {
  TMCookie,
  TMCookieListDetails,
  TMCookieSetDetails,
  TMCookieDeleteDetails,
} from "./cookie/tampermonkey";

declare global {
  /**
   * @warning ❌ OrangeMonkey
   */
  export namespace GM {
    const info: GMInfo;
    function notification(
      text: string,
      title?: string,
      image?: string,
      onclick?: () => void
    ): undefined;
    function notification(options: GMNotificationOptions): undefined;

    /**
     * @available Greasemonkey, Tampermonkey, Violentmonkey, UserScripts, AdGuard, FireMonkey
     * @note In FireMonkey, if grant has GM_getValue and GM.getValue, GM_getValue becomes unvailable
     */
    function getValue<T = unknown>(
      key: string,
      defaultValue?: unknown
    ): Promise<T>;

    /**
     * @available Tampermonkey 5.3+, Violentmonkey 2.19.1+
     */
    function getValues<
      T extends Record<string, KeysOrDefaultValue> = Record<
        string,
        KeysOrDefaultValue
      >
    >(keysOrDefault: string[]): Promise<T>;
    /**
     * @available Tampermonkey 5.3+, Violentmonkey 2.19.1+
     */
    function getValues<
      T extends Record<string, KeysOrDefaultValue> = Record<
        string,
        KeysOrDefaultValue
      >
    >(keysOrDefault: T): Promise<T>;

    /**
     * @available Greasemonkey, Tampermonkey, Violentmonkey, UserScripts, AdGuard, FireMonkey
     * @note In FireMonkey, if grant has GM_setValue and GM.setValue, GM_setValue becomes unvailable
     */
    function setValue<T extends KeysOrDefaultValue = undefined>(
      key: string,
      value: T
    ): Promise<undefined>;

    /**
     * @available Tampermonkey 5.3+, Violentmonkey 2.19.1+
     */
    function setValues<
      T extends Record<string, KeysOrDefaultValue> = Record<
        string,
        KeysOrDefaultValue
      >
    >(keysOrDefault: T): Promise<undefined>;

    /**
     * @available Greasemonkey, Tampermonkey, Violentmonkey, UserScripts, AdGuard, FireMonkey
     * @note In FireMonkey, if grant has GM_deleteValue and GM.deleteValue, GM_deleteValue becomes unvailable
     */
    function deleteValue(key: string): Promise<undefined>;

    /**
     * @available Tampermonkey 5.3+, Violentmonkey 2.19.1+
     */
    function deleteValues(keys: string[]): Promise<undefined>;

    /**
     * @available Greasemonkey, Tampermonkey, Violentmonkey, UserScripts, AdGuard, FireMonkey
     * @note In FireMonkey, if grant has GM_listValues and GM.listValues, GM_listValues becomes unvailable
     */
    function listValues<T extends string = string>(): Promise<T[]>;

    /**
     * @available Tampermonkey, Violentmonkey, Firemonkey
     * @warning ❌ UserScripts, ❌ Greasemonkey, ❌ AdGuard, ❌ OrangeMonkey
     */
    function addValueChangeListener(
      name: string,
      callback: GMAddValueChangeCallback
    ): Promise<string>;

    /**
     * @available Tampermonkey, Violentmonkey, Firemonkey
     * @warning ❌ UserScripts, ❌ Greasemonkey, ❌ AdGuard, ❌ OrangeMonkey
     */
    function removeValueChangeListener(listenerId: string): Promise<void>;

    /**
     * @available Tampermonkey, Violentmonkey, UserScripts, FireMonkey
     * @note I guess only FireMonkey return undefined
     * @warning ❌ Greasemonkey, ❌ AdGuard
     */
    function addStyle(css: string): Promise<HTMLStyleElement | undefined>;

    /**
     * @available Greasemonkey, Tampermonkey, Violentmonkey, UserScripts, FireMonkey, AdGuard (!)
     * @note Greasemonkey: response equal undefined
     */
    function xmlHttpRequest(details: GMXmlHttpRequestDetails): undefined;

    /**
     * Allows userscripts to access the URL of a resource (such as a CSS or image file)
     * that has been included in the userscript via a `@resource` tag at the script header.
     *
     * @available Greasemonkey, Tampermonkey, Violentmonkey, FireMonkey, AdGuard
     * @warning ❌ UserScripts
     */
    declare function getResourceUrl(name: string): string;
    /**
     * Retrieves a blob: or data: URL of a resource from the metadata block.
     *
     * @param isBlobUrl (default: true) - return `blob:`?
     * @available Violentmonkey 2.13.1+
     */
    declare function getResourceUrl(name: string, isBlobUrl: boolean = true);

    /**
     * @available Tampermonkey
     */
    const cookie: {
      list(details: TMCookieListDetails): Promise<TMCookie[]>;
      set(details: TMCookieSetDetails): Promise<void>;
      delete(details: TMCookieDeleteDetails): Promise<void>;
    };
  }
}
