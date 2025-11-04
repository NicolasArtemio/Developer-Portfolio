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
  {
    icon: faCode,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    icon: faDatabase,
    technologies: [
      "Node.js",
      "NestJs",
      "Express",
      "MongoDB",
      "MYSQL",
      "REST APIs",
    ],
  },
  {
    icon: faPuzzlePiece,
    technologies: [
      "Git",
      "GitHub",
      "Jira",
      "Figma",
      "Docker",
      "Scrum",
      "Postman",
    ],
  },
];

const SkillsSection = () => {
  const { t } = useTranslation();

  // Traducción de las tarjetas desde i18n
  const translatedCards = t("skills.cards", {
    returnObjects: true,
  }) as SkillCardData[];

  // Combina datos fijos con traducciones
  const skillsData = SkillsData.map((fixedSkill, index) => ({
    ...fixedSkill,
    title: translatedCards[index]?.title || "Error Title",
    description: translatedCards[index]?.description || "Error Description",
  }));

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-400 mb-2 flex items-center">
          <FontAwesomeIcon icon={faToolbox} className="mr-4" />
          {t("skills.main_title")}
        </h2>

        <p className="text-xl text-gray-500 mb-12">
          {t("skills.main_description")}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
