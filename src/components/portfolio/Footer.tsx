import { content } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background">
      <div className="container py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <div className="editorial-heading text-6xl md:text-8xl leading-none">{content.meta.name}.</div>
          <p className="mt-6 max-w-md text-background/70">{content.meta.tagline}</p>
        </div>
        <div className="md:col-span-3">
          <div className="mono text-[11px] uppercase tracking-[0.2em] text-background/50">Sitemap</div>
          <ul className="mt-4 space-y-2">
            {content.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-accent transition-colors">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <div className="mono text-[11px] uppercase tracking-[0.2em] text-background/50">Elsewhere</div>
          <ul className="mt-4 space-y-2">
            {content.contact.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer noopener" className="hover:text-accent transition-colors">{s.label} ↗</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${content.contact.email}`} className="hover:text-accent transition-colors">Email</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container py-6 flex items-center justify-between flex-wrap gap-3 mono text-xs text-background/50">
          <span>© {new Date().getFullYear()} {content.meta.name}. All rights reserved.</span>
          <span>{content.footer.note}</span>
        </div>
      </div>
    </footer>
  );
}
