import type { KeysOrDefaultValue } from "../utils";

export type GMAddValueChangeCallback = (
  name: string,
  oldValue: KeysOrDefaultValue,
  newValue: KeysOrDefaultValue,
  remote: boolean
) => void;
