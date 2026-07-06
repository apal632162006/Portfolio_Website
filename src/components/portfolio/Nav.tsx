import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { content } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function Nav() {
    const { theme, toggle } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const imageCandidates = ["/profile.jpg", "/profile.png", "/profile.jpeg", "/profile.svg"];
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-editorial",
                scrolled ? "py-3" : "py-6",
            )}
        >
            <div
                className={cn(
                    "container flex items-center justify-between transition-all duration-500 ease-editorial",
                    scrolled &&
                    "rounded-full border border-border/60 bg-background/70 backdrop-blur-xl px-6 py-2 shadow-soft max-w-5xl",
                )}
            >
                <a href="#top" className="flex items-center gap-2 group" aria-label="Home">
                    <span className="relative h-9 w-9 overflow-hidden rounded-full bg-foreground">
                        {imageIndex >= imageCandidates.length ? (
                            <span className="grid place-items-center h-full w-full text-background font-serif text-sm">
                                {content.meta.initials}
                            </span>
                        ) : (
                            <img
                                src={imageCandidates[imageIndex]}
                                alt={content.meta.name}
                                onError={() => setImageIndex((current) => current + 1)}
                                className="h-full w-full object-cover"
                            />
                        )}
                    </span>
                    <span className="hidden sm:inline font-serif text-lg tracking-tight">{content.meta.name}</span>
                </a>

                <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
                    {content.nav.map((n) => (
                        <a
                            key={n.href}
                            href={n.href}
                            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                        >
                            {n.label}
                            <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-foreground scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        onClick={toggle}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        className="grid place-items-center h-10 w-10 rounded-full border border-border hover:border-foreground hover:bg-secondary transition-all"
                    >
                        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                    <a
                        href="#contact"
                        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                        Say hello
                        <span aria-hidden>→</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
