/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValues#formfactor
 */
export type Hint =
  | "architecture"
  | "bitness"
  | "formFactor"
  | "fullVersionList"
  | "model"
  | "platformVersion"
  /**
   * @deprecated uaFullVersion
   */
  | "uaFullVersion"
  | "wow64";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/brands
 */
export type Brand = {
  brand: string;
  version: string;
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Sec-CH-UA-Form-Factors
 */
export type FormFactor =
  | "Desktop"
  | "Automotive"
  | "Mobile"
  | "Tablet"
  | "XR"
  | "EInk"
  | "Watch";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValues#formfactor
 */
export type UADataValues = {
  brands: Brand[];
  mobile: boolean;
  /**
   * @example Windows
   */
  platform: string;
  /**
   * @example x86
   */
  architecture: string;
  bitness: "32" | "64";
  formFactor: FormFactor;
  fullVersionList: Brand[];
  /**
   * Possible empty string
   *
   * @example "Pixel 2XL"
   * @example ""
   */
  model: string;
  /**
   * @example "10.0"
   */
  platformVersion: string;
  /**
   * @example "103.0.5060.134"
   */
  uaFullVersion: string;
  wow64: boolean;
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValues
 */
export type getHighEntropyValues = (hints: Hint[]) => Promise<UADataValues>;
