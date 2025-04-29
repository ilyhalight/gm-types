import type { AGInfoFields } from "./adguard";
import type { FMInfoFields } from "./firemonkey";
import type { GMInfoFields } from "./greasemonkey";
import type { OMInfoFields } from "./orangemonkey";
import type { TMInfoFields } from "./tampermonkey";
import type { USInfoFields } from "./userscripts";
import type { VMInfoFields } from "./violentmonkey";

export type GMInfo =
  | GMInfoFields
  | TMInfoFields
  | VMInfoFields
  | FMInfoFields
  | OMInfoFields
  | USInfoFields
  | AGInfoFields;
