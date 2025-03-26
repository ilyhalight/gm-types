import type { GMInfo } from "./info";
import type { GMNotificationOptions } from "./notification";

declare namespace GM {
  const info: GMInfo;
  function notification(
    text: string,
    title?: string,
    image?: string,
    onclick?: () => void
  ): undefined;
  function notification(options: GMNotificationOptions): undefined;
}
