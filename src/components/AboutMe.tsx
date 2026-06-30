import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 relative bg-transparent text-[var(--text-primary)]"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2
              id="about-heading"
              className="text-5xl font-black text-[var(--text-primary)] tracking-tight"
            >
              {t("about.title")}
            </h2>
            <div className="h-2 w-16 bg-[var(--accent-primary)] rounded-full" />
          </div>
          <p className="text-[var(--text-primary)] text-lg leading-relaxed font-medium opacity-80">
            {t("about.description")}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
