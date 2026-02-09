import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";

import Contact from "./Contact";
import { verifyEmail } from "../services/EmailVerificationService";
import { contactSchema } from "../lib/validations/contact";
import type { ContactFormData } from "../lib/validations/contact";

const ContactContainer = () => {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const {
        handleSubmit,
        reset,
        formState: { isSubmitting, errors },
    } = form;

    // reCAPTCHA ref
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    // Track verification state separately
    const onSubmit = async (data: ContactFormData) => {
        // Step 1: Check if reCAPTCHA is completed
        const recaptchaValue = recaptchaRef.current?.getValue();
        if (!recaptchaValue) {
            toast.error("reCAPTCHA requerido", {
                description: "Por favor, completa el reCAPTCHA.",
            });
            return;
        }

        try {
            // Step 2: Verify Email via Abstract API
            toast.loading("Verificando email...", { id: "contact-form" });
            const isDeliverable = await verifyEmail(data.email);

            if (!isDeliverable) {
                toast.error("Email no válido", {
                    id: "contact-form",
                    description: "El email ingresado no parece ser válido o entregable.",
                });
                return;
            }

            // Step 3: Send Email via EmailJS
            toast.loading("Enviando mensaje...", { id: "contact-form" });

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    "g-recaptcha-response": recaptchaValue,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            reset();
            recaptchaRef.current?.reset();

            toast.success("¡Mensaje enviado!", {
                id: "contact-form",
                description: "Gracias por contactarme. Te responderé pronto.",
            });
        } catch (error) {
            console.error("Error en el proceso de envío:", error);
            toast.error("Error al enviar", {
                id: "contact-form",
                description: "Hubo un problema al enviar tu mensaje. Intenta de nuevo.",
            });
        }
    };

    return (
        <Contact
            form={form}
            onSubmit={handleSubmit(onSubmit)}
            loading={isSubmitting}
            verificationLoading={false}
            recaptchaRef={recaptchaRef}
            errors={errors}
        />
    );
};

export default ContactContainer;
