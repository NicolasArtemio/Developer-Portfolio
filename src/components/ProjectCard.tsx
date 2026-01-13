import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, type Variants } from "framer-motion";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
  liveUrl: string;
  technologies: string[];
  linkText: string;
}

interface ProjectCardProps {
  project: Props;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.a
      variants={cardVariants}
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 bg-[var(--surface-1)] backdrop-blur-xl ring-1 ring-[var(--border-color)] rounded-[2rem] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 transform hover:-translate-y-2 hover:ring-[#A855F7]/30"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="w-full sm:w-28 sm:h-28 h-40 bg-[var(--surface-2)] rounded-2xl overflow-hidden flex-shrink-0 ring-1 ring-[var(--border-color)]">
          <img
            src={project.imageSrc}
            alt={`Captura de ${project.title}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-black text-[var(--text-primary)] mb-1 group-hover:text-[#A855F7] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--text-primary)] opacity-80">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-[10px] font-black uppercase tracking-wider bg-[var(--surface-2)] text-[var(--text-primary)] px-3 py-1 rounded-lg ring-1 ring-[#2DD4BF]/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="text-[#A855F7] text-sm font-bold flex items-center justify-center sm:justify-start">
            <span className="relative">
              {project.linkText}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A855F7] transition-all duration-300 group-hover:w-full"></span>
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 text-xs transition-transform duration-300 group-hover:translate-x-2"
            />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
