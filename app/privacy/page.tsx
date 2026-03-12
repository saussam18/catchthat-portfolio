import Script from "next/script";
import type { HTMLAttributes } from "react";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div
        {...({ name: "termly-embed" } as HTMLAttributes<HTMLDivElement>)}
        data-id="e50d255a-aac0-4f13-9e1c-579ac89029a2"
        data-type="iframe"
      />
      <Script src="https://app.termly.io/embed-policy.min.js" strategy="afterInteractive" />
    </div>
  );
}
