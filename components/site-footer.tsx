import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "#roster", label: "The Roster" },
  { href: "#about", label: "About" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "mailto:sause@catchthat.io", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="CatchThat home" className="flex items-center gap-3">
            <Image src="/logo.png" alt="CatchThat logo" width={28} height={28} />
            <span className="font-[var(--font-display)] text-lg font-semibold text-[var(--text)]">
              CatchThat
            </span>
          </Link>
          <span className="text-sm text-[var(--muted)]">Greater Seattle Area</span>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-[var(--muted)]">
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors duration-200 hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
