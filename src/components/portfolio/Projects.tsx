import { ArrowUpRight, Github } from "lucide-react";
import { content } from "@/content/portfolio";
import { useReveal } from "@/hooks/useReveals";
import { cn } from "@/lib/utils";

const accentMap: Record<string, string> = {
    coral: "from-accent/30 to-transparent",
    sun: "from-sun/40 to-transparent",
    violet: "from-violet/40 to-transparent",
};

export function Projects() {
    const { projects } = content;
    return (
        <section id="work" className="relative py-28 md:py-40 bg-paper-soft">
            <div className="container">
                <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
                    <div>
                        <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Selected work / 02</p>
                        <h2 className="editorial-heading mt-6 text-5xl md:text-6xl lg:text-7xl">
                            Things I've <em className="italic text-accent">built</em>.
                        </h2>
                    </div>
                    <p className="max-w-sm text-muted-foreground">
                        A rotating shelf of the projects I'm proud of. Each one taught me something new about shipping.
                    </p>
                </div>

                <div className="grid gap-6 md:gap-8">
                    {projects.map((p, i) => (
                        <ProjectRow key={p.title} p={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectRow({ p, index }: { p: (typeof content)["projects"][number]; index: number }) {
    const { ref, shown } = useReveal<HTMLAnchorElement>();
    const transitionDelayClass = ["[transition-delay:0ms]", "[transition-delay:100ms]", "[transition-delay:200ms]"];

    return (
        <a
            ref={ref}
            href={p.github}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
                "group relative block rounded-3xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-700 ease-editorial",
                shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                transitionDelayClass[index] ?? "[transition-delay:300ms]",
            )}
        >
            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700", accentMap[p.accent] ?? accentMap.coral)} />
            <div className="relative grid md:grid-cols-12 gap-8 p-8 md:p-12">
                <div className="md:col-span-1 mono text-xs text-muted-foreground">0{index + 1}</div>
                <div className="md:col-span-6">
                    <h3 className="editorial-heading text-4xl md:text-5xl lg:text-6xl">{p.title}</h3>
                    <p className="mt-4 text-lg text-foreground/80 max-w-lg">{p.subtitle}</p>
                </div>
                <div className="md:col-span-4 md:col-start-8 flex flex-col justify-between gap-6">
                    <p className="text-muted-foreground text-pretty">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                            <span key={t} className="mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-border bg-background/50">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-1 flex md:justify-end items-start">
                    <span className="grid place-items-center h-12 w-12 rounded-full border border-foreground/20 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-500">
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                    </span>
                </div>
            </div>
            <div className="relative flex items-center justify-between px-8 md:px-12 py-4 border-t border-border/60 text-sm">
                <span className="flex items-center gap-2 text-muted-foreground">
                    <Github className="h-4 w-4" /> View on GitHub
                </span>
                <span className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Case study →</span>
            </div>
        </a>
    );
}
