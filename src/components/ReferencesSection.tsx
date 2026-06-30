import { motion, type Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ReferencesSection = () => {
  const { t } = useTranslation();

  const referencesData = t("references.reference", {
    returnObjects: true,
  }) as Array<{
    name: string;
    position: string;
    quote: string;
  }>;

  const extraInfo = [
    {
      id: 1,
      linkedin: "https://www.linkedin.com/in/jonathan-padin-5a31a0177/",
    },
    {
      id: 2,
      linkedin: "https://www.linkedin.com/in/marina-brice%C3%B1o-baa9b5336/",
    },
    { id: 3, linkedin: "https://www.linkedin.com/in/andrea-guinder/" },
    {
      id: 4,
      linkedin: "https://www.linkedin.com/in/celeste-ruspil-2b8941230/",
    },
  ];

  return (
    <section
      id="refer"
      className="bg-transparent py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="flex flex-col mb-16"
        >
          <div className="space-y-2">
            <h2
              id="references-heading"
              className="text-4xl md:text-5xl font-black text-[var(--text-primary)]"
            >
              {t("references.title")}
            </h2>
            <div className="h-2 w-16 bg-[var(--accent-primary)] rounded-full" />
          </div>
          <p className="text-xl text-[var(--text-primary)]/60 max-w-2xl font-medium italic mt-4">
            {t("references.tagline")}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {Array.isArray(referencesData) &&
            referencesData.map((ref, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="flex flex-col relative p-8 bg-[var(--surface-1)] rounded-2xl border border-[var(--border-color)] hover:border-[var(--accent-primary)]/30 transition-all duration-300"
              >
                {/* Comilla decorativa */}
                <span className="text-5xl text-[var(--accent-primary)] opacity-40 font-black leading-none mb-4">
                  "
                </span>

                {/* Cita */}
                <p className="text-base text-[var(--text-primary)]/70 italic mb-6 leading-relaxed line-clamp-5">
                  {ref.quote}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto border-t border-[var(--border-color)] pt-5">
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] text-base">
                      {ref.name}
                    </h4>
                    <p className="text-[var(--accent-primary)] font-semibold text-sm">
                      {ref.position}
                    </p>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={extraInfo[index]?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${ref.name}'s LinkedIn profile`}
                    className="text-[var(--text-primary)]/40 hover:text-[#0077B5] text-2xl focus-ring rounded-md p-1 transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReferencesSection;
