const quickLinks = [
  { label: "Categories", href: "#categories" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
{ label: "Pinterest", href: "https://www.pinterest.com/codeanddesignhub/" },
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/in/muhammad-hamza-315hz02" },
  { label: "TikTok", href: "https://www.tiktok.com/@codewithhamza02" },
];

export default function Footer() {
  const blogUrl = "https://webdesignhub02.blogspot.com/";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-[color:var(--surface)]">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <span className="font-[family-name:var(--font-display)] text-lg font-bold">
  CodeDesignHub<span className="text-[color:var(--accent)]">.</span>
</span>
          <p className="text-sm text-[color:var(--muted)] mt-3">
            Custom website designs that turn visitors into clients.
          </p>
        </div>

        <div>
          <h4 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[color:var(--muted)]">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm hover:text-[color:var(--accent)] transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[color:var(--muted)]">
            Connect
          </h4>
          <ul className="mt-3 space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" className="text-sm hover:text-[color:var(--accent)] transition">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={blogUrl} target="_blank" className="text-sm hover:text-[color:var(--accent)] transition">
                Read My Blog
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10 py-4 text-center text-xs text-[color:var(--muted)]">
        © {year} CodeDesignHub. All rights reserved.
      </div>
    </footer>
  );
}