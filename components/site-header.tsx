import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { href: "#roster", label: "The Roster" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--surface-glass)] backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="CatchThat home"
          className="group flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="CatchThat logo"
            width={36}
            height={36}
            priority
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="font-[var(--font-display)] text-xl font-bold tracking-tight text-[var(--text)]">
            CatchThat
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--muted)] md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="mailto:sause@catchthat.io"
            className="inline-flex items-center rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-contrast)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_28px_var(--accent-shadow)]"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
