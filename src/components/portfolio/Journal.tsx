import { content } from "@/content/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Journal() {
    return (
        <section id="journal" className="relative py-28 md:py-40">
            <div className="container">
                <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
                    <div>
                        <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Journal / 08</p>
                        <h2 className="editorial-heading mt-6 text-5xl md:text-6xl">Notes & essays.</h2>
                    </div>
                    <p className="mono text-xs text-muted-foreground">Coming soon — writing in progress</p>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {content.journal.map((j, i) => (
                        <article key={i} className="group relative p-6 rounded-2xl border border-border bg-card hover:border-foreground transition-all cursor-pointer overflow-hidden">
                            <div className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground flex items-center justify-between">
                                <span>{j.tag}</span>
                                <span>{j.date}</span>
                            </div>
                            <h3 className="mt-6 font-serif text-2xl leading-snug text-balance">{j.title}</h3>
                            <div className="mt-8 flex items-center gap-2 text-accent">
                                <span className="text-sm mono uppercase tracking-wider">Read</span>
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
