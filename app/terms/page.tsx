import Script from "next/script";
import type { HTMLAttributes } from "react";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div
        {...({ name: "termly-embed" } as HTMLAttributes<HTMLDivElement>)}
        data-id="61d5c222-f50c-4c6c-b8cf-c52e7ade4c97"
        data-type="iframe"
      />
      <Script src="https://app.termly.io/embed-policy.min.js" strategy="afterInteractive" />
    </div>
  );
}
