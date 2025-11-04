import ProjectCard from "./ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const projectsData = [
  {
    id: 1,
    title: "E-commerce de Zapatos",
    description: "Plataforma de venta en línea moderna y responsiva.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageSrc: "[URL_IMAGEN_1]", // Reemplaza con una URL real o import de tu imagen
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "App de Tareas Diarias",
    description: "Organiza tu día con facilidad y eficiencia.",
    technologies: ["React", "SwiftUI", "Firebase"],
    imageSrc: "[URL_IMAGEN_2]",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Dashboard de Analíticas",
    description: "Visualización de datos clave para la toma de decisiones.",
    technologies: ["Python", "Pandas", "D3.js"],
    imageSrc: "[URL_IMAGEN_3]",
    liveUrl: "#",
    repoUrl: "#",
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <section id="proyectos" className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-400 mb-2 flex items-center">
          <FontAwesomeIcon icon={faRocket} className="mr-3" />
          {t("projects.title")}
        </h2>
        <p className="text-xl text-gray-500 mb-10">{t("projects.tagline")}</p>

        <div className="flex space-x-4 mb-12">
          <button className="text-lg font-medium border-b-2 border-green-500 text-green-500 pb-1 transition duration-200">
            {t("projects.tab")}
          </button>
        </div>

        {/* --- Grid de Proyectos --- */}
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
