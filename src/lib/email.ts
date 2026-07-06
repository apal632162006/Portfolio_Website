import emailjs from "emailjs-com";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (publicKey) {
    emailjs.init(publicKey);
}

export async function sendContactEmail(payload: { name: string; email: string; message: string }) {
    if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS is not configured yet. Please add your EmailJS credentials to the environment.");
    }

    return emailjs.send(serviceId, templateId, {
        from_name: payload.name,
        reply_to: payload.email,
        message: payload.message,
    });
}
