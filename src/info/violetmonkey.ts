import type { getHighEntropyValues, UADataValues } from "../web/navigator";
import type {
  InfoFields,
  InfoScriptMeta,
  InjectInto,
  ResourceItem,
  RunAtWithEmpty,
} from "./shared";

/**
 * @available Violetmonkey
 */
export type Arch =
  | "aarch64"
  | "arm"
  | "arm64"
  | "mips"
  | "mips64"
  | "ppc64"
  | "s390x"
  | "sparc64"
  | "x86-32"
  | "x86-64";

/**
 * @available Violetmonkey
 */
export type OS =
  | "mac"
  | "win"
  | "android"
  | "cros"
  | "linux"
  | "openbsd"
  | "fuchsia";

/**
 * @available Violetmonkey 2.27.0
 */
export type FullVersionItem = {
  brand: string;
  version: string;
};

/**
 * Unlike navigator.userAgent,
 * which can be overriden by other extensions/userscripts or by devtools in device-emulation mode,
 * GM_info.platform is more reliable as the data is obtained in the background page of Violentmonkey
 * using a specialized extension API (browser.runtime.getPlatformInfo and getBrowserInfo).
 *
 * @available Violetmonkey
 */
export type Platform = {
  arch: Arch;
  browserName: string;
  browserVersion: string;
  /**
   * A copy of navigator.userAgentData.getHighEntropyValues() from the background script of the extension,
   * so it's not affected by devtools of the web page tab.
   * Only present in browsers that implement this API (Chromium >= 90).
   *
   * @available Violetmonkey 2.27.0
   */
  fullVersionList?: FullVersionItem[];
  /**
   * A copy of navigator.userAgentData.mobile from the background script of the extension,
   * so it's not affected by devtools of the web page tab.
   * Only present in browsers that implement this API (Chromium >= 90).
   *
   * @available Violetmonkey 2.27.0
   */
  mobile?: boolean;
  os: OS;
};

/**
 * @available Violetmonkey 2.20.2+
 */
export type UserAgentData = {
  brands: UADataValues["brands"];
  mobile: UADataValues["mobile"];
  platform: UADataValues["platform"];
  getHighEntropyValues: getHighEntropyValues;
  architecture?: UADataValues["architecture"];
  bitness?: UADataValues["bitness"];
};

/**
 * @see https://violentmonkey.github.io/api/gm/#gm_info
 * @available Violetmonkey
 */
export type VMInfoScriptMeta = Omit<
  InfoScriptMeta<ResourceItem[]>,
  "run-at"
> & {
  antifeature?: string[];
  author?: string;
  compatible?: string[];
  connect?: string[];
  downloadURL?: string;
  excludeMatches: string[];
  /**
   * Empty is the same as @grant none
   */
  grant: string[];
  /**
   * @deprecated Use homepageURL instead. Firefox doesn't have homepage
   */
  homepage?: string;
  homepageURL?: string;
  icon?: string;
  noframes?: boolean;
  require: string[];
  runAt: RunAtWithEmpty;
  supportURL?: string;
  unwrap?: boolean;
  updateURL?: string;
} & Partial<{
    [key: `description:${string}`]: string;
    [key: `name:${string}`]: string;
  }>;

/**
 * @see https://violentmonkey.github.io/api/gm/#gm_info
 * @available Violetmonkey
 */
export type VMInfoFields = InfoFields<VMInfoScriptMeta> & {
  scriptHandler: "Violetmonkey";
  /**
   * The injection mode of current script
   *
   * @available Violetmonkey
   */
  injectInto?: InjectInto;
  /**
   * True when this is an incognito profile (Chrome) or private mode (Firefox)
   *
   * @available Violetmonkey 2.15.4+
   */
  isIncognito: boolean;
  /**
   * @available Violetmonkey
   */
  platform: Platform;
  /**
   * Whether the script will be updated automatically.
   *
   * @available Violetmonkey
   */
  scriptWillUpdate: boolean;
  /**
   * A safe copy of navigator.userAgent from the content script of the extension,
   * so it cannot be overridden by other extensions/userscripts,
   * but unlike GM_info.platform it can be customized in devtools “device emulation” or “network conditions” for this tab.
   *
   * @available Violetmonkey 2.20.2+
   */
  userAgent: string;
  /**
   * A safe copy of navigator.userAgentData from the content script of the extension,
   * so it cannot be overridden by other extensions/userscripts,
   * but unlike GM_info.platform it can be customized in devtools "device emulation" or "network conditions" for this tab.
   *
   * Only present if the browser actually implements it (currently Chromium-based 90+),
   * because there's no reliable/official polyfill.
   *
   * Violentmonkey implements the official API,
   * including getHighEntropyValues function to obtain the extra info asynchronously.
   *
   * @available Violetmonkey 2.20.2+
   */
  userAgentData?: UserAgentData;
  /**
   * A unique ID of the script.
   * @available Violetmonkey
   */
  uuid: string;
};
