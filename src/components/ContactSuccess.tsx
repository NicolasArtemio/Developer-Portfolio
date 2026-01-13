import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ContactSuccess = ({ open, onClose }: Props) => {
  if (!open) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-success-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-[var(--bg-primary)] rounded-3xl p-10 max-w-sm w-full text-center shadow-xl"
      >
        <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />

        <h3 id="contact-success-title" className="text-2xl font-bold text-[var(--text-primary)] mb-2">
          ¡Mensaje enviado!
        </h3>

        <p className="text-gray-500 mb-6">
          Gracias por contactarme. Te responderé a la brevedad 😊
        </p>

        <button
          onClick={onClose}
          className="bg-[#A855F7] hover:bg-[#9333EA] text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          Cerrar
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ContactSuccess;
