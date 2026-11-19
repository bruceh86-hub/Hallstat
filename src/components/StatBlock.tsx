import type { Stat } from "@/content/home";

export function StatBlock({ stat, index }: { stat: Stat; index: number }) {
  return (
    <div className="px-2">
      <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">{stat.value}</p>
      <p className="mt-2 text-sm text-white/80 md:text-base">
        {stat.label}
        <sup className="ml-0.5">
          <a
            href={stat.source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
            aria-label={`Source ${index + 1}: ${stat.source.name} (opens in a new tab)`}
          >
            [{index + 1}]
          </a>
        </sup>
      </p>
      <p className="mt-1 text-xs text-white/60">
        Source:{" "}
        <a href={stat.source.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
          {stat.source.name}
        </a>
      </p>
    </div>
  );
}
