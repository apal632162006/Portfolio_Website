import { content } from "@/content/portfolio";
import { sendContactEmail } from "@/lib/email";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

type FormState = {
    name: string;
    email: string;
    message: string;
};

const emptyForm: FormState = {
    name: "",
    email: "",
    message: "",
};

export function Contact() {
    const { contact } = content;
    const [form, setForm] = useState<FormState>(emptyForm);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSending, setIsSending] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
        if (submitted) setSubmitted(false);
        if (error) setError(null);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            return;
        }

        setIsSending(true);
        setError(null);

        try {
            await sendContactEmail(form);
            setSubmitted(true);
            setForm(emptyForm);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Unable to send the message right now.";
            const subject = `New message from ${form.name} via your portfolio`;
            const body = [
                `Name: ${form.name}`,
                `Email: ${form.email}`,
                "",
                form.message,
            ].join("\n");

            window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            if (message.includes("not configured")) {
                setSubmitted(true);
                setForm(emptyForm);
            } else {
                setError("EmailJS failed. Your email app opened with a draft. Please send it to complete submission.");
            }
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="relative py-28 md:py-40 bg-paper-soft overflow-hidden">
            <div className="pointer-events-none absolute -top-40 -right-20 h-[500px] w-[500px] bg-gradient-editorial opacity-30 blur-3xl animate-blob" />
            <div className="container relative">
                <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{contact.kicker} / 09</p>
                <h2 className="editorial-heading mt-6 text-[14vw] sm:text-[10vw] md:text-[8rem] lg:text-[10rem] leading-[0.9] text-balance">
                    Let's build <em className="italic text-accent">something</em>.
                </h2>

                <div className="mt-16 grid gap-10 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <p className="text-xl leading-relaxed text-foreground/80 text-pretty">{contact.body}</p>
                        <a
                            href={`mailto:${contact.email}`}
                            className="mt-8 group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-4 font-medium hover:bg-accent hover:text-accent-foreground transition-all shadow-soft hover:shadow-glow"
                        >
                            <Mail className="h-4 w-4" />
                            Email me
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <ContactIconLink href={`mailto:${contact.email}`} label="Email" icon={<Mail className="h-5 w-5" />} />
                            <ContactIconLink href={`tel:${contact.phone.replace(/\s/g, "")}`} label="Phone" icon={<Phone className="h-5 w-5" />} />
                            {contact.socials.map((s) => (
                                <ContactIconLink
                                    key={s.label}
                                    href={s.href}
                                    label={s.label}
                                    external
                                    icon={s.label.toLowerCase().includes("linkedin") ? <Linkedin className="h-5 w-5" /> : <Github className="h-5 w-5" />}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-6 md:col-start-7">
                        <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-background/80 p-6 shadow-soft backdrop-blur-sm md:p-8">
                            <div className="mb-6">
                                <h3 className="font-serif text-3xl">Start a conversation</h3>
                                <p className="mt-2 text-sm text-muted-foreground">Share a few details and I’ll reply by email as soon as I can.</p>
                            </div>

                            <div className="grid gap-4">
                                <label className="grid gap-2 text-sm font-medium">
                                    <span>Name</span>
                                    <input
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="rounded-2xl border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                                        placeholder="Your name"
                                    />
                                </label>

                                <label className="grid gap-2 text-sm font-medium">
                                    <span>Email</span>
                                    <input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="rounded-2xl border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                                        placeholder="you@example.com"
                                    />
                                </label>

                                <label className="grid gap-2 text-sm font-medium">
                                    <span>Message</span>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="rounded-2xl border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                                        placeholder="Tell me about your project or idea..."
                                    />
                                </label>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {isSending ? "Sending..." : "Send message"}
                                </button>
                                <span className="text-sm text-muted-foreground">EmailJS is used when configured; otherwise your mail app opens with a draft.</span>
                            </div>

                            {submitted ? <p className="mt-4 text-sm text-accent">Thank you — your message has been sent.</p> : null}
                            {error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactIconLink({ href, label, icon, external }: { href: string; label: string; icon: React.ReactNode; external?: boolean }) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer noopener" : undefined}
            aria-label={label}
            title={label}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-foreground hover:bg-accent hover:text-accent-foreground"
        >
            {icon}
        </a>
    );
}
