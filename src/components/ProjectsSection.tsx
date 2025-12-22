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
    imageSrc: "/barber.png", // Nota: En React/Vite lo normal es usar la ruta relativa a public
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "App de Tareas Diarias",
    description: "Organiza tu día con facilidad y eficiencia.",
    technologies: ["React", "SwiftUI", "Firebase"],
    imageSrc: "/sp.png",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Dashboard de Analíticas",
    description: "Visualización de datos clave para la toma de decisiones.",
    technologies: ["Python", "Pandas", "D3.js"],
    imageSrc: "/analytics.png",
    liveUrl: "#",
    repoUrl: "#",
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    /* Cambiado a fondo blanco para alternar con el gris de Skills */
    <section id="proyectos" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado con el nuevo color Púrpura y Turquesa */}
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1F1D2B] mb-4 flex items-center">
            <div className="p-3 bg-[#A855F7] text-white rounded-2xl mr-5 shadow-lg shadow-purple-500/20">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            {t("projects.title")}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl font-medium italic">
            {t("projects.tagline")}
          </p>
        </div>

        {/* Tab / Filtro estilizado */}
        <div className="flex space-x-6 mb-12 border-b border-gray-100">
          <button className="text-lg font-bold border-b-4 border-[#2DD4BF] text-[#1F1D2B] pb-3 transition duration-300">
            {t("projects.tab")}
          </button>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;