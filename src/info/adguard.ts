import type {
  InfoFields,
  InfoScriptMeta,
  ResourceItem as SharedResourceItem,
  RunAt,
} from "./shared";

export type ScriptMetaOptions = {
  "run-at": RunAt;
  noframes: boolean;
};

/**
 * @available AdGuard
 */
export type ResourceItem = SharedResourceItem & {
  type: string;
  content: string;
};

/**
 * @available AdGuard
 */
export type AGInfoScriptMeta = Omit<
  InfoScriptMeta<ResourceItem[]>,
  "run-at"
> & {
  homepage: string;
  /**
   * @example "2025-03-26_11-58-16"
   */
  lastUpdated: string;
};

/**
 * @available AdGuard
 */
export type AGInfoFields = InfoFields<AGInfoScriptMeta> & {
  scriptHandler: "AdGuard";
  isIncognito: boolean;
  isPrivate: boolean;
  scriptUpdateURL: string;
  /**
   * i guess it return broken content
   * @example "}))}})\\n..."
   */
  scriptSource: string;
  /**
   * Broken? Always returns empty string
   */
  scriptMetaStr: "";
  scriptWillUpdate: boolean;
};
