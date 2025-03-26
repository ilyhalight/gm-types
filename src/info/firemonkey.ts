import type { InfoFields, InfoScriptMeta, InjectInto, RunAt } from "./shared";

/**
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformOs
 * @available FireMonkey
 */
export type OS =
  | "mac"
  | "ios"
  | "win"
  | "android"
  | "cros"
  | "linux"
  | "openbsd"
  | "fuchsia";

/**
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch
 * @available FireMonkey
 */
export type Arch = "arm" | "x86-32" | "x86-64";

/**
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch
 * @available FireMonkey
 */
export type Platform = {
  os: OS;
  arch: Arch;
};

/**
 * We hardcoded name and vendor because FireMonkey support only Firefox
 *
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getBrowserInfo
 * @available FireMonkey
 */
export type BrowserInfo = {
  name: "Firefox";
  vendor: "Mozilla";
  version: string;
  buildID: string;
};

/**
 * @available FireMonkey
 */
export type Resource = {
  [resourceName: string]: string;
};

/**
 * @see https://github.com/erosman/firemonkey/blob/ea289f1a551d0e22f614700050437dd2d7f02d8b/src/content/script.js#L211
 * @available FireMonkey
 */
export type FMInfoScriptMeta = Omit<InfoScriptMeta<Resource>, "description"> & {
  description: string | null;
  excludeMatches: string[];
  includeGlobs?: string[];
  excludeGlobs: string[];
  /**
   * Empty is the same as @grant none
   *
   * @available FireMonkey 2.68
   */
  grant: string[];
  /**
   * @available FireMonkey 2.68
   */
  require: string[];
  /**
   * @available FireMonkey 2.68
   */
  runAt: RunAt;
  /**
   * @available FireMonkey 2.68
   */
  injectInto: InjectInto;
  isIncognito: boolean;
  /**
   * Script metadata string
   *
   * @available FireMonkey 2.68
   */
  metadata: string;
};

/**
 * @see https://github.com/erosman/firemonkey/blob/ea289f1a551d0e22f614700050437dd2d7f02d8b/src/content/script.js#L211
 * @available FireMonkey
 */
export type FMInfoFields = InfoFields<FMInfoScriptMeta> & {
  scriptHandler: "FireMonkey";
  /**
   * @available FireMonkey
   */
  platform: Platform;
  /**
   * @available FireMonkey
   */
  browserInfo: BrowserInfo;
  /**
   * @available FireMonkey 2.73+
   */
  isIncognito?: boolean;
};
