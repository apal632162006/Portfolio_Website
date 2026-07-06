import { content } from "@/content/portfolio";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <section className="relative py-28 md:py-40 bg-gradient-ink text-background overflow-hidden">
            <div className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[500px] bg-gradient-glow blur-3xl animate-blob" />
            <div className="container relative">
                <p className="mono text-xs uppercase tracking-[0.25em] text-background/60">Kind words / 07</p>
                <h2 className="editorial-heading mt-6 text-5xl md:text-6xl lg:text-7xl max-w-3xl">
                    What people <em className="italic text-accent">say</em>.
                </h2>
                <div className="mt-16 grid md:grid-cols-2 gap-6">
                    {content.testimonials.map((t, i) => (
                        <figure key={i} className="rounded-3xl border border-background/15 bg-background/5 backdrop-blur-sm p-8 md:p-10 relative">
                            <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/60" />
                            <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-balance">
                                "{t.quote}"
                            </blockquote>
                            <figcaption className="mt-6 mono text-xs uppercase tracking-[0.2em] text-background/60">
                                {t.author} · {t.role}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
