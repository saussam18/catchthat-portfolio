import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://catchthat.io"),
  title: "CatchThat",
  description:
    "CatchThat is building focused software products across internal tools, task management, sports data, and fan experiences.",
  openGraph: {
    title: "CatchThat",
    description:
      "Explore the CatchThat portfolio: VocabHQ, Unpile, CapStack, and Playbook.",
    url: "https://catchthat.io",
    siteName: "CatchThat",
    type: "website",
    images: [
      {
        url: "/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CatchThat",
    description:
      "CatchThat is building focused software products across internal tools, task management, sports data, and fan experiences.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (function() {
      try {
        var storedTheme = localStorage.getItem("theme");
        var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;
        document.documentElement.classList.toggle("dark", shouldUseDark);
      } catch (error) {}
    })();
  `;

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-[var(--font-body)] antialiased">
        <div className="relative min-h-screen">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
