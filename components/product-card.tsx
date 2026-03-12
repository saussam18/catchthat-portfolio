import { ArrowUpRight } from "lucide-react";

type ProductCardProps = {
  category: string;
  name: string;
  description: string;
  highlight: string;
};

export function ProductCard({
  category,
  name,
  description,
  highlight,
}: ProductCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_20px_60px_-36px_rgba(24,24,27,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-glow">
      <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-accent/15 blur-3xl transition-transform duration-500 group-hover:scale-125" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              {category}
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950">
              {name}
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-800">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            In Development
          </div>
        </div>

        <p className="mt-5 text-base leading-7 text-zinc-600">{description}</p>

        <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
          <p className="text-sm font-medium text-zinc-500">What it unlocks</p>
          <p className="mt-2 text-sm leading-6 text-zinc-700">{highlight}</p>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950">
          More details coming soon
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  );
}
