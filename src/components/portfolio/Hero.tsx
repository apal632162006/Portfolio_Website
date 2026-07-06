import { ArrowDown, Download, Mail } from "lucide-react";
import { content } from "@/content/portfolio";

export function Hero() {
    const { hero, meta } = content;
    const lineDelayClasses = ["[animation-delay:0s]", "[animation-delay:0.15s]", "[animation-delay:0.3s]"];

    return (
        <section id="top" className="relative overflow-hidden pt-36 md:pt-44 pb-24 md:pb-32 grain bg-gradient-soft">
            {/* ambient blobs */}
            <div className="pointer-events-none absolute -top-20 -right-24 h-[520px] w-[520px] rounded-full bg-gradient-editorial opacity-40 blur-3xl animate-blob" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:-6s]" />

            <div className="container relative">
                <div className="flex items-center gap-3 mono text-xs uppercase tracking-[0.2em] text-muted-foreground animate-fade-in">
                    <span className="h-px w-8 bg-foreground/40" />
                    {hero.eyebrow}
                </div>

                <h1 className="editorial-heading mt-8 text-[14vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[8rem] text-balance">
                    {hero.headline.map((line, i) => (
                        <span
                            key={i}
                            className={`block overflow-hidden ${lineDelayClasses[i] ?? "[animation-delay:0.3s]"}`}
                        >
                            <span className={`inline-block ${lineDelayClasses[i] ?? "[animation-delay:0.3s]"}`}>
                                {i === 2 ? (
                                    <>
                                        loud{" "}
                                        <em className="italic font-serif text-accent">shipper</em>.
                                    </>
                                ) : (
                                    line
                                )}
                            </span>
                        </span>
                    ))}
                </h1>

                <div className="mt-14 grid md:grid-cols-12 gap-10 items-end">
                    <div className="md:col-span-7 lg:col-span-6">
                        <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed animate-reveal-up [animation-delay:0.6s]">
                            {hero.intro}
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-3 animate-reveal-up [animation-delay:0.8s]">
                            <a
                                href={hero.primaryCta.href}
                                download
                                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-500 ease-editorial shadow-soft hover:shadow-glow"
                            >
                                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                                {hero.primaryCta.label}
                            </a>
                            <a
                                href={hero.secondaryCta.href}
                                className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 hover:border-foreground px-6 py-3.5 font-medium transition-all"
                            >
                                <Mail className="h-4 w-4" />
                                {hero.secondaryCta.label}
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-5 lg:col-span-6 md:justify-self-end animate-reveal-up [animation-delay:1s]">
                        <div className="max-w-sm border-l border-foreground/20 pl-6">
                            <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Currently</p>
                            <p className="mt-3 font-serif text-2xl leading-snug">{meta.availability}.</p>
                            <p className="mt-3 mono text-xs text-muted-foreground">
                                Based in {meta.location} · replies within 24h
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex items-center gap-4 text-muted-foreground animate-fade-in [animation-delay:1.2s]">
                    <ArrowDown className="h-4 w-4 animate-float-y" />
                    <span className="mono text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
                </div>
            </div>

            {/* marquee */}
            <div className="relative mt-24 border-y border-border/60 bg-background/40 backdrop-blur-sm overflow-hidden">
                <div className="marquee-track py-5">
                    {[...hero.marquee, ...hero.marquee].map((m, i) => (
                        <span key={i} className="mx-8 font-serif text-2xl md:text-3xl text-foreground/70 flex items-center gap-8 whitespace-nowrap">
                            {m}
                            <span className="text-accent">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
