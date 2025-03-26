import type { UADataValues } from "../web/navigator";
import type {
  InfoFields,
  InfoScriptMeta,
  RunAt,
  ResourceItem as SharedResourceItem,
} from "./shared";

/**
 * @available Tampermonkey
 */
export type SandboxMode = "js" | "raw" | "dom";

/**
 * @available Tampermonkey
 */
export type RelaxedCSP = "yes" | "no" | "auto";

/**
 * @available Tampermonkey 4.19+
 */
export type UserAgentData = {
  brands?: UADataValues["brands"];
  mobile?: UADataValues["mobile"];
  platform?: UADataValues["platform"];
  architecture?: UADataValues["architecture"];
  bitness?: UADataValues["bitness"];
};

/**
 * @available Tampermonkey
 */
export type ResourceItem = SharedResourceItem & {
  error?: string;
  content?: string;
  meta?: string;
};

export type I18nData = { [locale: string]: string };

/**
 * @available Tampermonkey
 */
export type AntiFeatures = {
  [antifeature: string]: I18nData;
};

/**
 * @available Tampermonkey
 */
type WebRequestRuleSelectorData = {
  include?: string | string[];
  match?: string | string[];
  exclude?: string | string[];
};

/**
 * @available Tampermonkey
 */
type WebRequestRuleActionRedirectData = {
  url: string;
  from?: string;
  to?: string;
};

/**
 * @available Tampermonkey
 */
type WebRequestRuleActionData = {
  cancel?: boolean;
  redirect?: WebRequestRuleActionRedirectData | string;
};

/**
 * @available Tampermonkey
 */
type WebRequestRule = {
  selector: WebRequestRuleSelectorData | string;
  action: string | WebRequestRuleActionData;
};

/**
 * @see https://www.tampermonkey.net/documentation.php?locale=en#api:GM_info
 * @available Tampermonkey
 */
export type TMInfoScriptMeta = Omit<
  InfoScriptMeta<ResourceItem[]>,
  "namespace" | "run-at"
> & {
  antifeatures: AntiFeatures;
  author: string | null;
  blockers: string[];
  connects: string[];
  copyright: string[];
  deleted?: number | undefined;
  description_i18n: I18nData | null;
  downloadURL: string | null;
  fileURL: string | null;
  grant: string[];
  header: string | null;
  homepage: string | null;
  icon: string | null;
  icon64: string | null;
  lastModified: number;
  name_i18n: I18nData | null;
  namespace: string | null;
  position: number;
  supportURL: string | null;
  system?: boolean | undefined;
  "run-at": RunAt | null;
  /**
   * @available Tampermonkey 5.3+
   */
  "run-in": string[] | null;
  unwrap: boolean | null;
  updateURL: string | null;
  webRequest: WebRequestRule[] | null;
  options: {
    check_for_updates: boolean;
    comment: string | null;
    compatopts_for_requires: boolean;
    compat_wrappedjsobject: boolean;
    compat_metadata: boolean;
    compat_foreach: boolean;
    compat_powerful_this: boolean | null;
    sandbox: string | null;
    noframes: boolean | null;
    unwrap: boolean | null;
    run_at: RunAt | null;
    /**
     * @available Tampermonkey 5.3+
     */
    run_in: string | null;
    override: {
      use_includes: string[];
      orig_includes: string[];
      merge_includes: boolean;
      use_matches: string[];
      orig_matches: string[];
      merge_matches: boolean;
      use_excludes: string[];
      orig_excludes: string[];
      merge_excludes: boolean;
      use_connects: string[];
      orig_connects: string[];
      merge_connects: boolean;
      use_blockers: string[];
      orig_run_at: RunAt | null;
      /**
       * @available Tampermonkey 5.3+
       */
      orig_run_in: string[] | null;
      orig_noframes: boolean | null;
    };
    /**
     * timestamp of last edit by user
     *
     * @note not documented
     */
    user_modified?: number | null;
  };
};

/**
 * @see https://www.tampermonkey.net/documentation.php?locale=en#api:GM_info
 * @available Tampermonkey
 */
export type TMInfoFields = InfoFields<TMInfoScriptMeta> & {
  scriptHandler: "Tampermonkey";
  /**
   * @available Tampermonkey 5.3+ (Firefox only)
   */
  container?: {
    id: string;
    name?: string;
  };
  /**
   * @available Tampermonkey
   * @example native
   */
  downloadMode: string;
  /**
   * @available Tampermonkey
   */
  isFirstPartyIsolation?: boolean;
  /**
   * @available Tampermonkey
   */
  isIncognito: boolean;
  /**
   * @available Tampermonkey 4.18+
   */
  sandboxMode: SandboxMode;
  /**
   * @available Tampermonkey
   */
  scriptUpdateURL: string | null;
  /**
   * @available Tampermonkey
   */
  scriptWillUpdate: boolean;
  /**
   * @available Tampermonkey 4.19+
   */
  userAgentData: UserAgentData;
  /**
   * @note not documentated
   */
  relaxedCsp?: RelaxedCSP;
};
