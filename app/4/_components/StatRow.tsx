interface Stat {
  value: string;
  label: string;
}

export default function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl bg-[#f4efe6] p-5 text-ink-primary"
        >
          <p className="text-[26px] font-bold leading-tight tracking-[-0.01em]">
            {s.value}
          </p>
          <p className="mt-1 text-[13px] text-ink-secondary">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
