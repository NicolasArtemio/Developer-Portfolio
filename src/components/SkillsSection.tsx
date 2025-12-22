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
    color: "bg-[#2DD4BF]", // Turquesa para Frontend
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
    color: "bg-[#A855F7]", // Morado para Backend
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
    color: "bg-gray-400", // Gris para Herramientas
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

  const translatedCards = t("skills.cards", {
    returnObjects: true,
  }) as SkillCardData[];

  const skillsData = SkillsData.map((fixedSkill, index) => ({
    ...fixedSkill,
    title: translatedCards[index]?.title || "Error Title",
    description: translatedCards[index]?.description || "Error Description",
  }));

  return (
    /* Cambié bg-gray-900 por un gris muy suave (F3F4F6) */
    <section className="bg-[#F3F4F6] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera con el nuevo color Turquesa y texto oscuro */}
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1F1D2B] mb-4 flex items-center">
            <div className="p-3 bg-[#2DD4BF] text-white rounded-2xl mr-5 shadow-lg shadow-cyan-500/20">
              <FontAwesomeIcon icon={faToolbox} />
            </div>
            {t("skills.main_title")}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl">
            {t("skills.main_description")}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            /* Asegúrate de que SkillCard acepte el nuevo 'color' si quieres usarlo para bordes o fondos */
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;