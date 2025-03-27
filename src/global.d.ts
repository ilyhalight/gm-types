import type { GMInfo } from "./info";
import type { GMNotificationOptions } from "./notification";

declare namespace GM {
  const info: GMInfo;
  function notification(
    text: string,
    title?: string,
    image?: string,
    onclick?: () => void
  ): undefined;
  function notification(options: GMNotificationOptions): undefined;

  /**
   * @available Greasemonkey, Tampermonkey, Violetmonkey, UserScripts, AdGuard, Firemonkey
   * @note In Firemonkey, if grant has GM_getValue and GM.getValue, GM_getValue becomes unvailable
   */
  function getValue<T = unknown>(
    key: string,
    defaultValue?: unknown
  ): Promise<T>;

  /**
   * @available Tampermonkey 5.3+, Violetmonkey 2.19.1+
   */
  function getValues<T = Record<string, KeysOrDefaultValue>>(
    keysOrDefault: string[]
  ): Promise<T>;
  /**
   * @available Tampermonkey 5.3+, Violetmonkey 2.19.1+
   */
  function getValues<T = Record<string, KeysOrDefaultValue>>(
    keysOrDefault: T
  ): Promise<T>;

  /**
   * @available Greasemonkey, Tampermonkey, Violetmonkey, UserScripts, AdGuard, Firemonkey
   * @note In Firemonkey, if grant has GM_setValue and GM.setValue, GM_setValue becomes unvailable
   */
  function setValue<T = string | boolean | number | undefined>(
    key: string,
    value: T
  ): Promise<undefined>;

  /**
   * @available Tampermonkey 5.3+, Violetmonkey 2.19.1+
   */
  function setValues<
    T = Record<string, null | object | string | number | undefined | boolean>
  >(keysOrDefault: T): Promise<undefined>;

  /**
   * @available Greasemonkey, Tampermonkey, Violetmonkey, UserScripts, AdGuard, Firemonkey
   * @note In Firemonkey, if grant has GM_deleteValue and GM.deleteValue, GM_deleteValue becomes unvailable
   */
  function deleteValue(key: string): Promise<undefined>;

  /**
   * @available Tampermonkey 5.3+, Violetmonkey 2.19.1+
   */
  function deleteValues(keys: string[]): Promise<undefined>;

  /**
   * @available Greasemonkey, Tampermonkey, Violetmonkey, UserScripts, AdGuard, Firemonkey
   * @note In Firemonkey, if grant has GM_listValues and GM.listValues, GM_listValues becomes unvailable
   */
  function listValues<T extends string = string>(): Promise<T[]>;
}
