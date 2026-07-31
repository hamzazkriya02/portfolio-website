"use client";

import { useState } from "react";

const faqs = [
  { question: "What is the delivery time?", answer: "A landing page is delivered in 3-5 days, and a full website takes 5-10 days depending on project size." },
  { question: "Do you offer revisions?", answer: "Yes, the Standard and Premium packages include unlimited revisions until you're fully satisfied." },
  { question: "How does payment work?", answer: "Secure payment through Fiverr, or bank transfer / other online payment methods can be discussed on WhatsApp." },
  { question: "Do you provide ongoing support?", answer: "Yes, you can reach out on WhatsApp for any small changes or support even after delivery." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[color:var(--accent)]">
        Common Questions
      </span>

      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mt-3">
        FAQ
      </h2>

      <div className="mt-8 divide-y divide-black/10 border-t border-b border-black/10">
        {faqs.map((faq, index) => (
          <div key={faq.question}>
            <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between py-5 text-left">
              <span className="font-medium">{faq.question}</span>
              <span className="text-[color:var(--accent)] text-xl flex-shrink-0 ml-4">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-[color:var(--muted)] text-sm pb-5">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}