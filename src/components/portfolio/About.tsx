import { content } from "@/content/portfolio";
import { useReveal } from "@/hooks/useReveals";

export function About() {
    const { about } = content;
    const { ref, shown } = useReveal<HTMLDivElement>();
    return (
        <section id="about" className="relative py-28 md:py-40">
            <div className="container">
                <div ref={ref} className={`grid md:grid-cols-12 gap-12 md:gap-16 ${shown ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
                    <div className="md:col-span-4">
                        <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{about.kicker} / 01</p>
                        <h2 className="editorial-heading mt-6 text-5xl md:text-6xl lg:text-7xl">{about.title}</h2>
                    </div>
                    <div className="md:col-span-7 md:col-start-6">
                        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/80 text-pretty">
                            {about.body.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>

                        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                            {about.stats.map((s, i) => (
                                <div key={i} className="border-t border-border pt-4">
                                    <div className="font-serif text-3xl md:text-4xl">{s.value}</div>
                                    <div className="mt-1 mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
