import Image from "next/image";
import Link from "next/link";
import { featuredDesigns } from "@/data/designs";
import { siteConfig, whatsappUrl } from "@/data/site";

export default function Hero() {
  const visualOne = featuredDesigns[0];
  const visualTwo = featuredDesigns[2];
  const visualThree = featuredDesigns[5];

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(108,99,255,0.22),transparent_28%),radial-gradient(circle_at_88%_20%,rgba(34,211,238,0.14),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

      <div className="relative mx-auto grid min-h-[calc(100dvh-74px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
            <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,.9)]" />
            Web design + full-stack development
          </div>

          <h1 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(3.1rem,8vw,6.9rem)] font-bold leading-[0.9] tracking-[-0.065em] text-white">
            Websites that
            <span className="block bg-gradient-to-r from-[#b9b7ff] via-white to-cyan-300 bg-clip-text text-transparent">
              look premium
            </span>
            and work hard.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg lg:text-xl lg:leading-8">
            I design and build fast, responsive websites for startups and businesses—combining strong visuals with clear user journeys and real conversion paths.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl("Hi, I found Code & Design Hub and want to discuss a custom website.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              Start a project
              <span className="material-symbols-rounded text-[19px]" aria-hidden>
                arrow_outward
              </span>
            </a>
            <Link
              href="/designs"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-6 text-sm font-bold text-white transition hover:border-white/25 hover:bg-white/[0.08]"
            >
              Explore design library
              <span className="material-symbols-rounded text-[19px]" aria-hidden>
                grid_view
              </span>
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <span className="material-symbols-rounded text-[18px] text-emerald-300" aria-hidden>
                verified
              </span>
              Mobile-first builds
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="material-symbols-rounded text-[18px] text-emerald-300" aria-hidden>
                speed
              </span>
              Performance focused
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="material-symbols-rounded text-[18px] text-emerald-300" aria-hidden>
                code
              </span>
              Design + development
            </span>
          </div>
        </div>

        <div className="relative min-h-[500px] sm:min-h-[610px]">
          <div className="absolute left-[2%] top-[3%] w-[79%] overflow-hidden rounded-[28px] border border-white/12 bg-[#0b1728] p-2 shadow-[0_35px_90px_rgba(0,0,0,.45)] sm:left-[4%] sm:w-[74%]">
            <div className="mb-2 flex h-7 items-center gap-1.5 rounded-xl bg-black/20 px-3">
              <span className="size-1.5 rounded-full bg-red-300/70" />
              <span className="size-1.5 rounded-full bg-amber-300/70" />
              <span className="size-1.5 rounded-full bg-emerald-300/70" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900">
              <Image src={visualOne.src} alt={visualOne.title} fill priority sizes="(max-width: 1024px) 75vw, 34vw" className="object-cover object-top" />
            </div>
          </div>

          <div className="absolute right-0 top-[27%] w-[63%] overflow-hidden rounded-[24px] border border-white/12 bg-[#101b2d] p-2 shadow-[0_30px_80px_rgba(0,0,0,.5)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900">
              <Image src={visualTwo.src} alt={visualTwo.title} fill sizes="(max-width: 1024px) 62vw, 27vw" className="object-cover object-top" />
            </div>
          </div>

          <div className="absolute bottom-[1%] left-[8%] w-[56%] overflow-hidden rounded-[22px] border border-white/12 bg-[#0d192a] p-2 shadow-[0_25px_75px_rgba(0,0,0,.5)] sm:left-[2%]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900">
              <Image src={visualThree.src} alt={visualThree.title} fill sizes="(max-width: 1024px) 55vw, 24vw" className="object-cover object-top" />
            </div>
          </div>

          <a
            href={siteConfig.socials.pinterest}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-[9%] right-[2%] max-w-[220px] rounded-2xl border border-white/10 bg-[#0b1728]/95 p-4 shadow-[0_25px_65px_rgba(0,0,0,.4)] backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-red-500/10 text-red-300">
                <span className="material-symbols-rounded" aria-hidden>
                  interests
                </span>
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Design feed</span>
                <span className="mt-1 block text-sm font-bold text-white">Follow on Pinterest</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
