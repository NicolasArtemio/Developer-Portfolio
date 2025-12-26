import { useState } from "react";
import emailjs from "@emailjs/browser";
import Contact from "./Contact";
import ContactSuccess from "./ContactSuccess";
import ContactError from "./ContactError";

const ContactContainer = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setForm({ name: "", email: "", message: "" });
                setSuccess(true);
            })
            .catch((error) => {
                console.error("Error enviando email:", error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <Contact
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                loading={loading}
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
