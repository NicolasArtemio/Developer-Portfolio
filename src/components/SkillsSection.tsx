import { motion, type Variants } from "framer-motion";
import {
  faCode,
  faDatabase,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import SkillCard from "./SkillCard";
import { useTranslation } from "react-i18next";

type SkillCardData = { title: string; description: string };

const SkillsData = [
  {
    icon: faCode,
    color: "bg-[var(--accent-primary)]",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Zustand"],
  },
  {
    icon: faDatabase,
    color: "bg-[var(--accent-primary)]",
    technologies: [
      "Node.js",
      "NestJs",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Socket.io",
    ],
  },
  {
    icon: faPuzzlePiece,
    color: "bg-[var(--accent-primary)]",
    technologies: [
      "Git",
      "GitHub",
      "Jira",
      "Figma",
      "Docker",
      "Scrum",
      "Postman",
      "Gemini API",
      "Notion",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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
      className="py-24 px-4 sm:px-6 lg:px-8 relative bg-transparent text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabecera */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
          className="flex flex-col mb-16"
        >
          <div className="space-y-2">
            <h2 id="skills-heading" className="text-4xl md:text-5xl font-black">
              {t("skills.main_title")}
            </h2>
            <div className="h-2 w-16 bg-[var(--accent-primary)] rounded-full" />
          </div>
          <p className="text-xl max-w-2xl font-medium italic mt-4 opacity-70">
            {t("skills.main_description")}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
