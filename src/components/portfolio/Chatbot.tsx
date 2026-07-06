import { askChatbot, type ChatMessage } from "@/lib/chatbot";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";

const suggestedQuestions = [
    "What kind of projects do you build?",
    "What skills do you use most?",
    "Are you open to internships or collaborations?",
    "How can I contact you?",
];

export function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: "assistant",
            text: "Hi! I can answer questions about Ashish's projects, experience, and how to get in touch.",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const quickPrompts = useMemo(() => suggestedQuestions, []);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmed = input.trim();
        if (!trimmed) return;

        setMessages((current) => [...current, { role: "user", text: trimmed }]);
        setInput("");
        setLoading(true);

        const reply = await askChatbot(trimmed);
        setMessages((current) => [...current, { role: "assistant", text: reply }]);
        setLoading(false);
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {open ? (
                <div className="w-[min(92vw,380px)] rounded-3xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Portfolio assistant</p>
                            <h3 className="font-serif text-xl">Ask about the site</h3>
                        </div>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition hover:text-foreground"
                        >
                            Close
                        </button>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {quickPrompts.map((prompt) => (
                            <button
                                key={prompt}
                                type="button"
                                onClick={() => setInput(prompt)}
                                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground transition hover:border-foreground hover:text-foreground"
                            >
                                {prompt}
                            </button>
                        ))}
                    </div>

                    <div className="mt-4 max-h-72 space-y-3 overflow-y-auto pr-1">
                        {messages.map((message, index) => (
                            <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${message.role === "user" ? "bg-foreground text-background" : "bg-secondary text-foreground"}`}>
                                    {message.text}
                                </div>
                            </div>
                        ))}
                        {loading ? (
                            <div className="flex justify-start">
                                <div className="rounded-2xl bg-secondary px-3 py-2 text-sm text-foreground">Thinking...</div>
                            </div>
                        ) : null}
                    </div>

                    <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
                        <input
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder="Ask something..."
                            className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-foreground"
                        />
                        <button
                            type="submit"
                            className="rounded-full bg-foreground p-2.5 text-background transition hover:bg-accent hover:text-accent-foreground"
                            aria-label="Send message"
                        >
                            <Send className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            ) : (
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="flex items-center gap-3 rounded-full border border-border bg-background/95 px-4 py-3 shadow-lg transition hover:shadow-xl"
                >
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground">
                        <MessageCircle className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">Need help?</span>
                    <Sparkles className="h-4 w-4 text-accent" />
                </button>
            )}
        </div>
    );
}
