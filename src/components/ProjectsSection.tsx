import { motion, type Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

// Definimos los datos (los mismos que ya tienes)
const projectsData = [
  {
    id: 1,
    title: "E-commerce de Zapatos",
    description: "Plataforma de venta en línea moderna y responsiva.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageSrc: "/barber.png",
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

// 1. Variantes para el contenedor (Stagger)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Cada hijo aparece 0.2s después del anterior
    },
  },
};

// 2. Variantes para el encabezado
const headerVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="proyectos" className="bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado animado individualmente */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="flex flex-col mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1F1D2B] mb-4 flex items-center">
            {/* Animación de pulso en el cohete */}
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="p-3 bg-[#A855F7] text-white rounded-2xl mr-5 shadow-lg shadow-purple-500/20"
            >
              <FontAwesomeIcon icon={faRocket} />
            </motion.div>
            {t("projects.title")}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl font-medium italic">
            {t("projects.tagline")}
          </p>
        </motion.div>

        {/* Tab / Filtro estilizado */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex space-x-6 mb-12 border-b border-gray-100"
        >
          <button className="text-lg font-bold border-b-4 border-[#2DD4BF] text-[#1F1D2B] pb-3 transition duration-300">
            {t("projects.tab")}
          </button>
        </motion.div>

        {/* Grid de Proyectos con STAGGER */}
        <motion.div 
          className="grid gap-10 lg:grid-cols-3 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;