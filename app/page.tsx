import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

type Product = {
  badge: string;
  statusTone: "building" | "idea" | "pending";
  logo: string | null;
  logoAlt: string | null;
  logoText?: string;
  accent: string;
  accentSoft: string;
  name: string;
  description: string;
  meta: string[];
  note: string | null;
};

const products: Product[] = [
  {
    badge: "Building",
    statusTone: "building",
    logo: "/VocabHQ-Logo.png",
    logoAlt: "VocabHQ logo",
    accent: "#f4a300",
    accentSoft: "rgba(244, 163, 0, 0.14)",
    name: "VocabHQ",
    description:
      "Your company's language, defined. A shared dictionary for the acronyms, terms, and definitions your team needs to know.",
    meta: ["Company glossary", "Shared definitions", "Team onboarding"],
    note: null,
  },
  {
    badge: "Idea Phase",
    statusTone: "idea",
    logo: "/Unpile-Logo.png",
    logoAlt: "Unpile logo",
    accent: "#8e5bdb",
    accentSoft: "rgba(142, 91, 219, 0.16)",
    name: "Unpile",
    description:
      "Task management that does not bury you. A clean tool for teams who want to get things done without drowning in process.",
    meta: ["Task management", "Lightweight workflow", "Small teams"],
    note: null,
  },
  {
    badge: "Idea Phase",
    statusTone: "idea",
    logo: null,
    logoAlt: null,
    logoText: "CS",
    accent: "#6e7383",
    accentSoft: "rgba(110, 115, 131, 0.12)",
    name: "CapStack",
    description:
      "A sports contract and salary cap API concept for developers and sports products that need clean cap math underneath.",
    meta: ["API concept", "Sports data", "Idea stage"],
    note: null,
  },
  {
    badge: "Pending",
    statusTone: "pending",
    logo: "/logo.png",
    logoAlt: "OffseasonHQ logo",
    accent: "#d89b1d",
    accentSoft: "rgba(216, 155, 29, 0.12)",
    name: "OffseasonHQ",
    description:
      "Roster management tools and games for sports fans, from mock free agency and simulations to deeper front-office play.",
    meta: ["Sports fans", "Games", "Roster tools"],
    note: "Waiting on CapStack",
  },
  {
    badge: "Idea Phase",
    statusTone: "idea",
    logo: null,
    logoAlt: null,
    logoText: "OOTP",
    accent: "#6e7383",
    accentSoft: "rgba(110, 115, 131, 0.12)",
    name: "OOTP League Tool",
    description:
      "An online league management tool for OOTP communities, built to make running leagues, tracking activity, and organizing decisions easier.",
    meta: ["OOTP leagues", "Commissioner workflow", "Idea stage"],
    note: null,
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden pt-28">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16">
          <div className="relative z-10 max-w-3xl">
            <h1 className="font-[var(--font-display)] text-5xl font-extrabold leading-none tracking-[-0.04em] text-[var(--text)] sm:text-7xl lg:text-[5.5rem]">
              Software for the front office.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              CatchThat builds focused products across work and sports, one tool
              at a time.
            </p>
            <Link
              href="mailto:sause@catchthat.io"
              className="mt-8 inline-flex items-center text-base font-semibold text-[var(--text)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[var(--accent)]"
            >
              sause@catchthat.io
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      <section id="roster" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-[var(--font-display)] text-4xl font-extrabold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
              The Roster
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-[var(--muted)]">
            Every product on the team solves one problem well. No feature creep.
            No bloat.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.name}
              className="group rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] p-9 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:bg-[var(--surface-2)]"
              style={{
                boxShadow:
                  product.statusTone === "idea"
                    ? undefined
                    : `0 0 0 1px ${product.accentSoft} inset`,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-2)]"
                  style={{
                    backgroundColor: product.accentSoft,
                  }}
                >
                  {product.logo ? (
                    <Image
                      src={product.logo}
                      alt={product.logoAlt ?? `${product.name} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  ) : (
                    <span className="font-[var(--font-display)] text-lg font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
                      {product.logoText ?? product.name.slice(0, 1)}
                    </span>
                  )}
                </div>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{
                    backgroundColor:
                      product.statusTone === "pending"
                        ? "rgba(59, 130, 246, 0.12)"
                        : product.accentSoft,
                    color:
                      product.statusTone === "pending" ? "#3b82f6" : product.accent,
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor:
                        product.statusTone === "pending" ? "#3b82f6" : product.accent,
                    }}
                  />
                  {product.badge}
                </span>
              </div>

              <h3 className="mt-6 font-[var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--text)]">
                {product.name}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                {product.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
                {product.meta.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              {product.note ? (
                <div
                  className="mt-5 inline-flex rounded-lg px-3 py-2 text-sm"
                  style={{
                    backgroundColor: product.accentSoft,
                    color: product.accent,
                  }}
                >
                  {product.note}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)]">
              <Image
                src="/sam-headshot.png"
                alt="Sam Sausville"
                width={963}
                height={916}
                className="aspect-[0.95] w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              About
            </p>
            <h2 className="mt-4 font-[var(--font-display)] text-4xl font-extrabold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
              Sam Sausville
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-[var(--muted)]">
              <p>
                CatchThat is a solo software studio run by Sam Sausville in
                Washington. Sam works as a Senior Software Engineer at
                Microsoft and is building CatchThat as a focused long-term
                product company.
              </p>
              <p>
                The work sits at the intersection of SaaS, developer tools, and
                sports software, with an emphasis on products that stay simple,
                clear, and useful.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://www.linkedin.com/in/sam-sausville/"
                aria-label="Sam Sausville on LinkedIn"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition-colors duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-2)]"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/saussam18"
                aria-label="Sam Sausville on GitHub"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition-colors duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-2)]"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="border-t border-[var(--border)] pt-10">
          <p className="text-base font-medium leading-8 text-[var(--text)] sm:text-lg">
            Feedback, ideas, or support:
            {" "}
            <Link
              href="mailto:sause@catchthat.io"
              className="font-semibold underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[var(--accent)]"
            >
              sause@catchthat.io
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
