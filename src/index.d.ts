import type { GMInfo } from "./info";
import type { GMNotificationOptions } from "./notification";

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
