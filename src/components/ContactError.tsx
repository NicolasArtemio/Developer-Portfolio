import { motion, AnimatePresence } from "framer-motion";
import { XCircle } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ContactError = ({ open, onClose }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-10 max-w-sm w-full text-center shadow-2xl"
          >
            <XCircle size={64} className="text-red-500 mx-auto mb-4" />

            <h3 className="text-2xl font-bold text-[#1F1D2B] mb-2">
              Error al enviar
            </h3>

            <p className="text-gray-500 mb-6">
              Ocurrió un problema al enviar el mensaje.  
              Por favor, intentá nuevamente.
            </p>

            <button
              onClick={onClose}
              className="bg-[#EF4444] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#DC2626] transition"
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactError;
