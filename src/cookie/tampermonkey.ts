export type CookiePartitionKey = {
  topLevelSite?: string;
};

/**
 * @see https://www.tampermonkey.net/documentation.php?locale=en#api:GM_cookie.list
 * @available Tampermonkey
 * @note `httpOnly` cookies are supported at the BETA versions of Tampermonkey only for now
 */
export type TMCookieListDetails = {
  /**
   * @default current document URL
   */
  url?: string;
  domain?: string;
  name?: string;
  path?: string;
  /**
   * @available Tampermonkey 5.2+
   */
  partitionKey?: CookiePartitionKey;
};

export type TMCookie = {
  domain: string;
  expirationDate?: number;
  firstPartyDomain?: string;
  /**
   * @available Tampermonkey 5.2+
   */
  partitionKey?: CookiePartitionKey;
  hostOnly: boolean;
  httpOnly: boolean;
  name: string;
  path: string;
  sameSite: string;
  secure: boolean;
  /**
   * indicating whether the cookie is a session cookie
   */
  session: boolean;
  value: string;
};

export type TMCookieListCallback = (
  cookies: TMCookie[],
  error: string | null
) => void;

export type TMCookieSetDetails = {
  /**
   * @default current document URL
   */
  url?: string;
  name: string;
  value: string;
  domain?: string;
  firstPartyDomain?: string;
  /**
   * @available Tampermonkey 5.2+
   */
  partitionKey?: CookiePartitionKey;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
  expirationDate?: number;
};

export type TMCookieSetCallback = (error: string | undefined) => void;

export type TMCookieDeleteDetails = {
  /**
   * @default current document URL
   */
  url?: string;
  name: string;
  firstPartyDomain?: string;
  /**
   * @available Tampermonkey 5.2+
   */
  partitionKey?: CookiePartitionKey;
};

export type TMCookieDeleteCallback = (error: string | undefined) => void;
