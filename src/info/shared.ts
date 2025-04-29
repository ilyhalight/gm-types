/**
 * The name of the userscript manager handling this script's execution
 */
export type ScriptHandler =
  | "Greasemonkey"
  | "Tampermonkey"
  | "Violentmonkey"
  | "FireMonkey"
  | "OrangeMonkey"
  | "AdGuard"
  | "Userscripts"
  /**
   * Polyfill for my other script. Real userscript managers doesn't use it
   */
  | "Other (Polyfill)";

/**
 * @available except Greasemonkey
 */
export type RunAt =
  | "document-start"
  | "document-body"
  | "document-end"
  | "document-idle";

/**
 * @available Violentmonkey, OrangeMonkey
 */
export type RunAtWithEmpty = "" | RunAt;

/**
 * @available Userscripts, Violentmonkey, Firemonkey
 */
export type InjectInto = "auto" | "page" | "content";

export type ResourceItem = {
  name: string;
  url: string;
};

/**
 * An objects keyed by resource name
 *
 * @available FireMonkey, OrangeMonkey
 */
export type Resource = Record<string, ResourceItem>;

export type InfoScriptMeta<R = unknown> = {
  /**
   * Possible empty string.
   */
  description: string;
  /**
   * Possibly empty array of strings.
   */
  excludes: string[];
  /**
   * Possibly empty array of strings
   */
  includes: string[];
  /**
   * Possibly empty array of strings
   */
  matches: string[];
  name: string;
  /**
   * Possible empty string
   */
  namespace: string;
  /**
   * An list of objects keyed by resource name
   */
  resources: R;
  "run-at": RunAt;
  /**
   * Possibly empty string.
   */
  version: string;
};

export type InfoFields<M = InfoScriptMeta> = {
  /**
   * An object containing data about the currently running script
   */
  script: M;
  /**
   * A string, the entire literal Metadata Block (without the delimiters) for the currently running script.
   */
  scriptMetaStr: string;
  /**
   * The name of the userscript manager handling this script's execution
   */
  scriptHandler: ScriptHandler;
  /**
   * The version of userscript manager
   */
  version: string;
};
