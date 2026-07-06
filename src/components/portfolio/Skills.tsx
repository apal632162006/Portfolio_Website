import { content } from "@/content/portfolio";
import { useReveal } from "@/hooks/useReveals";
import { cn } from "@/lib/utils";

export function Skills() {
    const { skills } = content;
    return (
        <section id="skills" className="relative py-28 md:py-40 bg-paper-soft">
            <div className="container">
                <div className="max-w-3xl">
                    <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Toolkit / 05</p>
                    <h2 className="editorial-heading mt-6 text-5xl md:text-6xl lg:text-7xl">
                        A working <em className="italic text-accent">toolkit</em>, always evolving.
                    </h2>
                </div>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {skills.map((s, i) => (
                        <Card key={s.group} group={s.group} items={s.items} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Card({ group, items, index }: { group: string; items: readonly string[]; index: number }) {
    const { ref, shown } = useReveal<HTMLDivElement>();
    const transitionDelayClass = ["[transition-delay:0ms]", "[transition-delay:100ms]", "[transition-delay:200ms]", "[transition-delay:300ms]"];

    return (
        <div
            ref={ref}
            className={cn(
                "group relative rounded-2xl border border-border bg-card p-6 overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-elevated",
                shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                transitionDelayClass[index] ?? "[transition-delay:400ms]",
            )}
        >
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-editorial opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700" />
            <div className="relative">
                <div className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">0{index + 1}</div>
                <h3 className="mt-3 font-serif text-2xl">{group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                    {items.map((it) => (
                        <span key={it} className="text-sm px-3 py-1.5 rounded-full border border-border bg-background/60 hover:border-foreground hover:bg-foreground hover:text-background transition-all cursor-default">
                            {it}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
