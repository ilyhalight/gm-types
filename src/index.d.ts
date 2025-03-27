import type { GMInfo } from "./info";
import type { GMNotificationOptions } from "./notification";

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
