import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Contact from "./Contact";
import ContactSuccess from "./ContactSuccess";
import ContactError from "./ContactError";
import { verifyEmail } from "../services/EmailVerificationService";

const ContactContainer = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [verificationLoading, setVerificationLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    // reCAPTCHA ref
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Step 1: Check if reCAPTCHA is completed
        const recaptchaValue = recaptchaRef.current?.getValue();
        if (!recaptchaValue) {
            alert("Por favor, completa el reCAPTCHA.");
            return;
        }

        // Start "Loading" state for the whole process
        setVerificationLoading(true);

        try {
            // Step 2: Verify Email via Abstract API
            const isDeliverable = await verifyEmail(form.email);

            if (!isDeliverable) {
                setError(true);
                setVerificationLoading(false);
                return;
            }

            // Step 3: Send Email via EmailJS
            setLoading(true);
            setVerificationLoading(false); // Switch to sending state

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    "g-recaptcha-response": recaptchaValue, // Optional: pass to EmailJS if configured
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setForm({ name: "", email: "", message: "" });
            setSuccess(true);
            recaptchaRef.current?.reset();
        } catch (error) {
            console.error("Error en el proceso de envío:", error);
            setError(true);
        } finally {
            setLoading(false);
            setVerificationLoading(false);
        }
    };

    return (
        <>
            <Contact
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                loading={loading}
                verificationLoading={verificationLoading}
                recaptchaRef={recaptchaRef}
            />

            <ContactSuccess
                open={success}
                onClose={() => setSuccess(false)}
            />

            <ContactError
                open={error}
                onClose={() => setError(false)}
            />
        </>
    );
};

export default ContactContainer;
