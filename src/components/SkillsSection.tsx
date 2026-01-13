import { motion, type Variants } from "framer-motion"; // Importamos motion
import {
  faCode,
  faDatabase,
  faPuzzlePiece,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillCard from "./SkillCard";
import { useTranslation } from "react-i18next";

type SkillCardData = { title: string; description: string };

const SkillsData = [
  // ... tu configuración de SkillsData se mantiene igual
  {
    icon: faCode,
    color: "bg-[var(--accent-primary)]",
    technologies: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
  },
  {
    icon: faDatabase,
    color: "bg-[var(--accent-secondary)]",
    technologies: ["Node.js", "NestJs", "Express", "MongoDB", "MYSQL", "REST APIs"],
  },
  {
    icon: faPuzzlePiece,
    color: "bg-[var(--text-primary)]/60",
    technologies: ["Git", "GitHub", "Jira", "Figma", "Docker", "Scrum", "Postman"],
  },
];

// 1. Definimos las variantes para el contenedor de las tarjetas
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Las habilidades aparecen un poco más rápido entre sí
    },
  },
};

// 2. Variantes para que el título aparezca desde la derecha
const titleVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const SkillsSection = () => {
  const { t } = useTranslation();

  const translatedCards = t("skills.cards", {
    returnObjects: true,
  }) as SkillCardData[];

  const skillsData = SkillsData.map((fixedSkill, index) => ({
    ...fixedSkill,
    title: translatedCards[index]?.title || "Error Title",
    description: translatedCards[index]?.description || "Error Description",
  }));

  return (
    <section
      id="skills"
      className="section-decor py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative bg-[var(--surface-0)] dark:bg-[var(--surface-1-dark)] text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabecera Animada */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
          className="flex flex-col mb-16"
        >
          <h2
            id="skills-heading"
            className="text-4xl md:text-5xl font-black mb-4 flex items-center"
          >
            <motion.div
              whileHover={{ rotate: -10, scale: 1.1 }}
              className="p-3 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white rounded-2xl mr-5 shadow-lg shadow-[var(--accent-primary)]/20"
            >
              <FontAwesomeIcon icon={faToolbox} />
            </motion.div>
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--text-color), var(--text-color))",
              }}
            >
              {t("skills.main_title")}
            </span>
          </h2>
          <p className="text-xl max-w-2xl font-medium italic">
            {t("skills.main_description")}
          </p>
        </motion.div>

        {/* Grid de Habilidades con Stagger */}
        <motion.div 
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Empieza cuando se ve el 20%
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
