import type { InfoFields, InfoScriptMeta, RunAtWithEmpty } from "./shared";

/**
 * @example { "resourceName": "https://..." }
 * @available OrangeMonkey
 */
export type Resource = { [resourceName: string]: string };

/**
 * @available OrangeMonkey
 */
export type OMInfoScriptMeta = InfoScriptMeta<Resource> & {
  unwrap: boolean;
  "run-at": RunAtWithEmpty;
};

/**
 * @available OrangeMonkey
 */
export type OMInfoFields = InfoFields<OMInfoScriptMeta> & {
  scriptHandler: "OrangeMonkey";
  downloadMode: "browser";
  scriptWillUpdate: boolean;
};
