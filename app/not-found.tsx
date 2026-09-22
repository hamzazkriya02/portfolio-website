import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[65vh] place-items-center px-5 py-16 text-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">404</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold tracking-[-0.05em] text-white sm:text-7xl">
          This page moved.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-400">
          The link may be old or the page may no longer exist. You can return to the design library or homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/designs" className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950">
            Browse designs
          </Link>
          <Link href="/" className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
