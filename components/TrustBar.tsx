const stats = [
  { value: "200+", label: "Designs Created" },
  { value: "24h", label: "Response Time" },
  { value: "Fast", label: "Delivery" },
  { value: "Lvl 2", label: "Fiverr Seller" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-black/10 bg-[color:var(--surface)]">
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center py-4 px-3 text-center"
          >
            <span className="font-[family-name:var(--font-mono)] text-lg font-medium text-[color:var(--accent)]">
              {stat.value}
            </span>
            <span className="text-xs text-[color:var(--muted)] mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
