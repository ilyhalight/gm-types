import type { HttpMethod } from "../web/http";

/**
 * @see https://github.com/lisonge/vite-plugin-monkey/blob/01a5e89f4dd653232c5430b499fef94981d7f1b9/packages/vite-plugin-monkey/src/client/types/xmlhttpRequest.ts
 */
export type XHResponseMap = {
  text: string;
  json: any;
  arrayBuffer: ArrayBuffer;
  blob: Blob;
  document: Document;
  stream: ReadableStream<Uint8Array>;
};

export type XHResponseType = keyof XHResponseMap;
export type XHREventHandler = (response: GMXmlHttpResponse) => any;

/**
 * Will be called when the request is aborted
 */
export type OnAbortHandler = XHREventHandler;

/**
 * Will be called if an error occurs while processing the request
 */
export type OnErrorHandler = XHREventHandler;

/**
 * Will be called when the request has completed successfully
 */
export type OnLoadHandler = XHREventHandler;

/**
 * Callback to be executed on load start, provides access to the stream object if responseType is set to stream
 */
export type OnLoadStartHandler = XHREventHandler;

/**
 * Will be called when the request progress changes
 */
export type OnProgressHandler = XHREventHandler;

/**
 * Will be called repeatedly while the request is in progress
 */
export type OnReadyStateChangeHandler = XHREventHandler;

/**
 * Will be called if/when the request times out
 */
export type OnTimeoutHandler = XHREventHandler;

export type GMXHRUploadMap = {
  onabort: OnAbortHandler;
  onerror: OnErrorHandler;
  onload: OnLoadHandler;
  onprogress: OnProgressHandler;
};

/**
 * @see https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState
 */
export type XHRReadyState = 0 | 1 | 2 | 3 | 4;

/**
 * controls what to happen when a redirect is detected
 *
 * @available Tampermonkey (build 6180+, enforces fetch mode)
 */
export type XHRRedirect = "follow" | "error" | "manual";

export type GMXmlHttpRequestDetails = {
  /**
   * The URL to make the request to. Must be an absolute URL, beginning with the scheme. May be relative to the current page.
   */
  url: string;
  /**
   * Type of HTTP request to make
   */
  method: HttpMethod;
  /**
   * Send the data string in binary mode
   *
   * @default false
   * @available Greasemonkey, Tampermonkey, Violentmonkey 2.12.2
   */
  binary?: boolean;
  /**
   * A property which will be added to the response object
   */
  context?: Record<string, unknown>;
  /**
   * Data to send in the request body. Usually for POST method requests
   *
   * @throws OrangeMonkey convert all data to string and can throw invalid data for FormData and maybe something else
   */
  data?: string | Blob | File | object | unknown[] | FormData | URLSearchParams;
  /**
   * A set of headers to include in the request
   *
   * @note Tampermonkey: some special headers are not supported by Safari and Android browsers
   */
  headers?: Record<string, unknown>;
  /**
   * A MIME type to specify with the request (e.g. "text/html; charset=ISO-8859-1").
   */
  overrideMimeType?: string;
  /**
   * Password to use for authentication purposes.
   */
  password?: string;
  /**
   * User name to use for authentication purposes.
   */
  user?: string;
  /**
   * Decode the response as specified type
   *
   * @default "text".
   */
  responseType?: XHResponseType;
  /**
   * When true, this is a synchronous request. In this mode, more data will be available in the return value.
   *
   * @warning The entire Firefox UI will be locked and frozen until the request completes.
   * @warning ❌ Tampermonkey, ❌ Violentmonkey
   */
  synchronous?: boolean;
  /**
   * The number of milliseconds to wait before terminating the call; zero (the default) means wait forever.
   *
   * @default 0
   * @available Greasemonkey, Tampermonkey, Violentmonkey 2.9.5+
   */
  timeout?: number;
  /**
   * Object containing optional function callbacks (onabort, onerror, onload, onprogress) to monitor the upload of data
   */
  upload?: Partial<GMXHRUploadMap>;
  /**
   * controls what to happen when a redirect is detected
   *
   * @available Tampermonkey (build 6180+, enforces fetch mode)
   */
  redirect?: "follow" | "error" | "manual";
  /**
   * A cookie to be patched into the sent cookie set
   *
   * @available Tampermonkey
   */
  cookie?: Record<string, unknown>;
  /**
   * Containing the partition key to be used for sent and received partitioned cookies
   *
   * @available Tampermonkey
   */
  cookiePartition?: {
    topLevelSite?: string;
  };
  /**
   * Don't cache the resource
   *
   * @available Tampermonkey
   */
  nocache?: boolean;
  /**
   * Revalidate maybe cached content
   *
   * @available Tampermonkey
   */
  revalidate?: boolean;
  /**
   * Don't send cookies with the request (enforces fetch mode)
   *
   * @default false
   * @available Tampermonkey, Violentmonkey 2.10.1+
   */
  anonymous?: boolean;
  /**
   * Use a fetch instead of a XMLHttpRequest request
   * (at Chrome this causes details.timeout and xhr.onprogress to not work and makes xhr.onreadystatechange receive only readyState DONE (==4) events)
   *
   * @available Tampermonkey
   */
  fetch?: boolean;
  onabort?: OnAbortHandler;
  onerror?: OnErrorHandler;
  onload?: OnLoadHandler;
  /**
   * callback to be executed on load start, provides access to the stream object if responseType is set to stream
   *
   * @available Tampermonkey, Violentmonkey 2.12.5+
   */
  onloadstart?: OnLoadStartHandler;
  onprogress?: OnProgressHandler;
  onreadystatechange?: OnReadyStateChangeHandler;
  ontimeout?: OnTimeoutHandler;
};

export type GMXmlHttpResponse<R extends XHResponseType = "text", T = null> = {
  /**
   * The same object passed into the original request.
   */
  context: T;
  /**
   * The final URL after all redirects from where the data was loaded
   */
  finalUrl: string;
  /**
   * Property for progress callbacks
   *
   * @available Greasemonkey, Violentmonkey
   */
  lengthComputable: null | boolean;
  /**
   * Property for progress callbacks
   *
   * @available Greasemonkey, Violentmonkey
   */
  loaded: null | number;
  readyState: XHRReadyState;
  /**
   * The response data as object if details.responseType was set
   */
  response: XHResponseMap[R];
  responseHeaders: string;
  responseText: string;
  /**
   * The response data as XML document
   *
   * @note Greasemonkey return boolean instead of Document|null
   * @note Violentmonkey return Document|null and also can return string in Firefox
   * @available Tampermonkey, Greasemonkey (read note), Violentmonkey 2.13.4+ (read note)
   */
  responseXML: boolean | Document | string | null;
  status: number;
  statusText: string;
  /**
   * Property for progress callbacks
   *
   * @available Greasemonkey, Violentmonkey
   */
  total: null | number;
};
