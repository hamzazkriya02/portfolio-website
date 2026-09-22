import Image from "next/image";
import Link from "next/link";
import type { Design } from "@/data/designs";

export default function DesignCard({ design }: { design: Design }) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.055]">
      <Link href={`/designs/${design.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
          <Image
            src={design.src}
            alt={design.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08111f]/90 to-transparent" />
          <span className="absolute bottom-4 left-4 inline-flex items-center rounded-full border border-white/10 bg-[#07111f]/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-cyan-200 backdrop-blur">
            {design.category}
          </span>
        </div>
        <div className="flex items-start justify-between gap-4 p-5">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.025em] text-white">
              {design.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">{design.summary}</p>
          </div>
          <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-slate-300 transition group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10 group-hover:text-cyan-200">
            <span className="material-symbols-rounded text-[18px]" aria-hidden>
              arrow_outward
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
