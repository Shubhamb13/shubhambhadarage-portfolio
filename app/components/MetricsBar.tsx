export default function MetricsBar() {
  const items = [
    { value: "30+", label: "Interfaces shipped & optimized" },
    { value: "25+", label: "UI issues resolved" },
    { value: "15+", label: "Client features delivered" },
    { value: "20+", label: "API integrations managed" },
  ];

  return (
    <section className="relative border-y border-white/5 bg-white/[0.02]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-10 sm:px-8 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center gap-1 py-4 text-center"
          >
            <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              {item.value}
            </span>
            <span className="max-w-[180px] text-xs font-medium text-zinc-500 sm:text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}