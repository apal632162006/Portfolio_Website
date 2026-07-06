import { content } from "@/content/portfolio";

export type ChatMessage = {
    role: "assistant" | "user";
    text: string;
};

const apiKey = import.meta.env.VITE_CHATBOT_API_KEY || "rsk_01KWVJ60N5Z733S1NWJPRMS7CW";
const endpoint = import.meta.env.VITE_CHATBOT_URL || "https://api.rsk.ai/v1/chat/completions";
const model = import.meta.env.VITE_CHATBOT_MODEL || "gpt-4.1-mini";
const provider = import.meta.env.VITE_CHATBOT_PROVIDER || "rsk";

const siteContext = `You are a helpful assistant for Ashish Pal's portfolio website.
Answer questions about his work, skills, projects, experience, availability, and contact details.
Keep answers concise, friendly, and professional.
Use this information if relevant:
- Name: ${content.meta.name}
- Role: ${content.meta.role}
- Location: ${content.meta.location}
- Availability: ${content.meta.availability}
- Email: ${content.contact.email}
- Phone: ${content.contact.phone}
- Projects: ${content.projects.map((project) => project.title).join(", ")}
- Skills: ${content.skills.map((group) => group.items.join(", ")).join(" | ")}`;

export async function askChatbot(message: string): Promise<string> {
    try {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

        if (provider === "openai") {
            headers.Authorization = `Bearer ${apiKey}`;
        } else {
            headers.Authorization = `Bearer ${apiKey}`;
            headers["x-api-key"] = apiKey;
        }

        const response = await fetch(endpoint, {
            method: "POST",
            headers,
            body: JSON.stringify({
                model,
                messages: [
                    { role: "system", content: siteContext },
                    { role: "user", content: message },
                ],
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        const reply = data?.choices?.[0]?.message?.content ?? data?.message?.content ?? data?.reply;

        if (typeof reply === "string" && reply.trim()) {
            return reply.trim();
        }

        throw new Error("The assistant returned an empty response.");
    } catch {
        return getFallbackReply(message);
    }
}

function getFallbackReply(message: string): string {
    const normalized = message.toLowerCase();

    if (normalized.includes("project") || normalized.includes("work")) {
        return `${content.meta.name} has built projects like ${content.projects.map((project) => project.title).join(", ")}. He enjoys creating thoughtful products that combine usability and strong engineering.`;
    }

    if (normalized.includes("skill") || normalized.includes("technology") || normalized.includes("stack")) {
        return `His toolkit includes ${content.skills.flatMap((group) => group.items).slice(0, 8).join(", ")}, with a strong focus on full-stack development and AI-driven products.`;
    }

    if (normalized.includes("contact") || normalized.includes("reach") || normalized.includes("email")) {
        return `You can reach ${content.meta.name} at ${content.contact.email} or through the contact form on this website.`;
    }

    if (normalized.includes("availability") || normalized.includes("hire") || normalized.includes("intern")) {
        return `${content.meta.availability}`;
    }

    return `I can help with questions about ${content.meta.name}'s projects, experience, skills, and how to get in touch.`;
}
