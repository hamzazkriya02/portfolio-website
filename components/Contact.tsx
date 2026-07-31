export default function Contact() {
  const whatsappNumber = "923094552361";
  const fiverrUrl = "https://fiverr.com/hamzawebdesign0";
  const blogUrl = "https://webdesignhub02.blogspot.com/";
  const email = "hamzahoon02@gmail.com";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[color:var(--accent)]">
        Let's Work Together
      </span>

      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mt-3">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div>
          <div className="flex flex-wrap gap-3">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="bg-[color:var(--whatsapp)] text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition">
              Chat on WhatsApp
            </a>
            <a href={fiverrUrl} target="_blank" className="border border-black/15 font-medium px-6 py-3 rounded-lg hover:bg-black/5 transition">
              View on Fiverr
            </a>
          </div>

          <p className="text-[color:var(--muted)] text-sm mt-6">
            Email: <a href={`mailto:${email}`} className="text-[color:var(--accent)]">{email}</a>
          </p>

          <a href={blogUrl} target="_blank" className="inline-block mt-4 text-sm text-[color:var(--accent)] underline">
            Read My Blog →
          </a>
        </div>

        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border border-black/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--accent)]" />
          <input type="email" placeholder="Your Email" className="border border-black/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--accent)]" />
          <textarea placeholder="Tell me about your project" rows={4} className="border border-black/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--accent)]" />
          <button type="submit" className="bg-[color:var(--ink)] text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}