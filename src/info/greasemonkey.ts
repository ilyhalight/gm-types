import type {
  InfoFields,
  InfoScriptMeta,
  ResourceItem as SharedResourceItem,
} from "./shared";

/**
 * @available Greasemonkey
 */
export type ResourceItem = SharedResourceItem & {
  mimetype: string;
};

/**
 * An objects keyed by resource name
 *
 * @available Greasemonkey
 */
export type Resource = Record<string, ResourceItem>;

/**
 * @available Greasemonkey
 */
export type RunAt = "end";

/**
 * @available Greasemonkey
 * @see https://wiki.greasespot.net/index.php?title=GM.info
 */
export type GMInfoScriptMeta = Omit<
  InfoScriptMeta<Resource>,
  "run-at" | "description" | "namespace" | "version"
> & {
  description: string | null;
  namespace: string | null;
  runAt: RunAt;
  version: string | null;
};

/**
 * @available Greasemonkey
 * @see https://wiki.greasespot.net/index.php?title=GM.info
 */
export type GMInfoFields = InfoFields & {
  scriptHandler: "Greasemonkey";
};
