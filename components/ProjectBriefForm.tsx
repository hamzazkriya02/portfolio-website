"use client";

import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/data/site";

export default function ProjectBriefForm() {
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [budget, setBudget] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hi Code & Design Hub, I want to discuss a website project.",
      name ? `Name: ${name}` : "",
      project ? `Project: ${project}` : "",
      budget ? `Budget / range: ${budget}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          Your name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-12 rounded-xl border border-white/10 bg-[#07111f] px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/40"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          Budget / range
          <input
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            className="h-12 rounded-xl border border-white/10 bg-[#07111f] px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/40"
            placeholder="e.g. $250–$500"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-300">
        What do you need?
        <textarea
          value={project}
          onChange={(event) => setProject(event.target.value)}
          rows={5}
          required
          className="rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/40"
          placeholder="Tell me about the website, pages, references, and deadline."
        />
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-slate-950 transition hover:bg-cyan-100"
      >
        Continue on WhatsApp
        <span className="material-symbols-rounded text-[19px]" aria-hidden>
          arrow_outward
        </span>
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-slate-500">
        This form opens WhatsApp with your brief. Nothing is stored on this website.
      </p>
    </form>
  );
}
