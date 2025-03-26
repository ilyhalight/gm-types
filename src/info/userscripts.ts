import type { InfoFields, InfoScriptMeta, InjectInto } from "./shared";

/**
 * @available Userscripts
 */
export type USInfoScriptMeta = InfoScriptMeta<""> & {
  /**
   * @example [ "user1, user2, user3..." ]
   */
  author?: string[];
  connect?: string[];
  /**
   * @example [ "https://..." ]
   */
  downloadURL?: string[];
  "exclude-match": string[];
  /**
   * GM_info.script.name + user.js
   *
   * @example "New Userscript.user.js"
   */
  filename: string;
  /**
   * @example [ "https://..." ]
   */
  homepageURL?: string[];
  /**
   * Always empty string
   */
  namespace: "";
  icon: string;
  "inject-into": InjectInto;
  noframes: boolean;
  /**
   * @example [ "https://..." ]
   */
  supportURL: string[];
  /**
   * @example [ "https://..." ]
   */
  updateURL: string[];
  require: string[];
};

/**
 * @available Userscripts
 */
export type USInfoFields = InfoFields<USInfoScriptMeta> & {
  scriptHandler: "Userscripts";
};
