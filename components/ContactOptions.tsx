"use client";

import { useState } from "react";

export default function ContactOptions({ title }: { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "923094552361";
  const email = "hamzahoon02@gmail.com";

  const message = `Hi, I'm interested in the ${title}`;

  return (
    <div className="relative mt-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-sm bg-[color:var(--surface)] hover:bg-[color:var(--accent)] hover:text-white py-2 rounded-lg transition">
        Get This Design
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-black/10 rounded-lg shadow-lg z-20 overflow-hidden">
            <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank" className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-[color:var(--surface)] transition">
              WhatsApp
            </a>
           <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(title)}&body=${encodeURIComponent(message)}`} target="_blank" className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-[color:var(--surface)] transition border-t border-black/10">
              Email
            </a>
          </div>
        </>
      )}
    </div>
  );
}