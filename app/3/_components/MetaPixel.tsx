"use client";

import Script from "next/script";
import { useEffect } from "react";

const PIXEL_ID = "949387491200248";
const DEALER_HOST = "sunseekerelite.com";
const DEALER_PATH = "/dk/where-to-buy";

// Average MSRP across the X Gen 2 series (DKK incl. moms),
// rounded to a clean number. Sent on Purchase so Meta has a
// value to optimise on. Adjust if per-model attribution is wired up later.
const PURCHASE_VALUE_DKK = 18999;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function MetaPixel() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      let url: URL;
      try {
        url = new URL(anchor.href);
      } catch {
        return;
      }

      const isDealerLink =
        url.hostname.endsWith(DEALER_HOST) &&
        url.pathname.startsWith(DEALER_PATH);
      if (!isDealerLink) return;

      if (typeof window.fbq === "function") {
        window.fbq("track", "Purchase", {
          value: PURCHASE_VALUE_DKK,
          currency: "DKK",
        });
      }
    };

    document.addEventListener("click", handler, { capture: true });
    return () =>
      document.removeEventListener("click", handler, { capture: true });
  }, []);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
