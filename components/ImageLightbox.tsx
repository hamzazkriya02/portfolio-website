"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageLightbox({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative h-64 bg-[color:var(--surface)] cursor-pointer" onClick={() => setIsOpen(true)}>
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} className="object-cover" />
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6" onClick={() => setIsOpen(false)}>
          <button className="absolute top-6 right-6 text-white text-3xl leading-none" onClick={() => setIsOpen(false)}>
            ×
          </button>
          <div className="relative w-full h-full max-w-4xl">
            <Image src={src} alt={alt} fill sizes="100vw" quality={90} className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}