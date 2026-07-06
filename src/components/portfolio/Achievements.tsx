import { content } from "@/content/portfolio";
import { Trophy } from "lucide-react";
import { useReveal } from "@/hooks/useReveals";
import { cn } from "@/lib/utils";

export function Achievements() {
    return (
        <section className="relative py-28 md:py-40">
            <div className="container">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Milestones / 06</p>
                        <h2 className="editorial-heading mt-6 text-5xl md:text-6xl">Wins worth <em className="italic text-accent">noting</em>.</h2>
                    </div>
                    <div className="md:col-span-8 grid gap-5">
                        {content.achievements.map((a, i) => (
                            <Row key={i} title={a.title} detail={a.detail} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Row({ title, detail, index }: { title: string; detail: string; index: number }) {
    const { ref, shown } = useReveal<HTMLDivElement>();
    const transitionDelayClass = ["[transition-delay:0ms]", "[transition-delay:100ms]", "[transition-delay:200ms]"];

    return (
        <div ref={ref} className={cn("group flex items-start gap-6 p-6 rounded-2xl border border-border bg-card hover:border-foreground transition-all duration-700", shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6", transitionDelayClass[index] ?? "[transition-delay:300ms]")}>
            <span className="grid place-items-center h-12 w-12 rounded-full bg-accent/15 text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Trophy className="h-5 w-5" />
            </span>
            <div>
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-1 text-muted-foreground">{detail}</p>
            </div>
        </div>
    );
}
