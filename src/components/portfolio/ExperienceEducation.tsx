import { content } from "@/content/portfolio";
import { useReveal } from "@/hooks/useReveals";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap } from "lucide-react";

export function ExperienceEducation() {
    return (
        <section id="experience" className="relative py-28 md:py-40">
            <div className="container">
                <div className="grid md:grid-cols-12 gap-16">
                    <div className="md:col-span-5">
                        <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Experience / 03</p>
                        <h2 className="editorial-heading mt-6 text-5xl md:text-6xl">Where I've worked.</h2>
                        <div className="mt-10 space-y-8">
                            {content.experience.map((e, i) => (
                                <Item key={i} icon={<Briefcase className="h-4 w-4" />} title={e.role} org={e.org} period={e.period} location={e.location} bullets={e.bullets} tags={e.tags} />
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-6 md:col-start-7">
                        <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Education / 04</p>
                        <h2 className="editorial-heading mt-6 text-5xl md:text-6xl">Where I've studied.</h2>
                        <div className="mt-10 relative pl-6 border-l border-border">
                            {content.education.map((e, i) => (
                                <TimelineItem key={i} title={e.title} org={e.org} period={e.period} detail={e.detail} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Item({ icon, title, org, period, location, bullets, tags }: any) {
    const { ref, shown } = useReveal<HTMLDivElement>();
    return (
        <div ref={ref} className={cn("rounded-2xl border border-border p-6 bg-card transition-all duration-700", shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
            <div className="flex items-center gap-2 mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {icon}
                {period} · {location}
            </div>
            <h3 className="mt-3 font-serif text-2xl">{title}</h3>
            <div className="text-accent font-medium">{org}</div>
            <ul className="mt-4 space-y-2 text-foreground/80">
                {bullets.map((b: string, i: number) => (
                    <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                        <span>{b}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t: string) => (
                    <span key={t} className="mono text-[11px] px-2 py-0.5 rounded-full bg-secondary">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}

function TimelineItem({ title, org, period, detail, index }: any) {
    const { ref, shown } = useReveal<HTMLDivElement>();
    const transitionDelayClass = ["[transition-delay:0ms]", "[transition-delay:120ms]", "[transition-delay:240ms]", "[transition-delay:360ms]"];

    return (
        <div ref={ref} className={cn("relative pb-10 last:pb-0 transition-all duration-700", shown ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4", transitionDelayClass[index] ?? "[transition-delay:480ms]")}>
            <span className="absolute -left-[29px] top-1 grid place-items-center h-5 w-5 rounded-full bg-background border-2 border-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <div className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                <GraduationCap className="h-3.5 w-3.5" /> {period}
            </div>
            <h3 className="mt-2 font-serif text-2xl">{title}</h3>
            <div className="text-foreground/70">{org}</div>
            <p className="mt-2 text-muted-foreground">{detail}</p>
        </div>
    );
}
