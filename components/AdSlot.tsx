"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type Props = {
  slot?: string;
  label?: string;
};

export default function AdSlot({ slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT, label = "Advertisement" }: Props) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!client || !slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense may retry after its script is ready.
    }
  }, [client, slot]);

  if (!client || !slot) return null;

  return (
    <aside className="my-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-3" aria-label={label}>
      <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">{label}</p>
      <ins
        className="adsbygoogle block min-h-[90px]"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
