import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { motion, type Variants } from "framer-motion";
import LazyImage from "./LazyImage";

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
  hidden: { opacity: 0, y: 30 },
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
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-[var(--surface-1)] border border-[var(--border-color)] transition-all duration-500 hover:border-[var(--accent-primary)]/50 hover:shadow-[0_20px_50px_-12px] hover:shadow-[var(--accent-secondary)]/20 focus-ring"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-primary)] opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-30" />

      {/* Card content wrapper */}
      <div className="relative flex flex-col h-full bg-[var(--surface-1)] rounded-3xl overflow-hidden">
        {/* Image container with overlay */}
        <div className="relative aspect-video overflow-hidden">
          <LazyImage
            src={project.imageSrc}
            alt={`Preview de ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-1)] via-transparent to-transparent opacity-60" />

          {/* External link icon */}
          <div className="absolute top-4 right-4 p-2 rounded-full bg-[var(--surface-0)]/80 backdrop-blur-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[var(--accent-primary)] text-sm" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Technology badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 text-[var(--text-primary)] border border-[var(--accent-primary)]/20 transition-all duration-300 group-hover:border-[var(--accent-primary)]/40 group-hover:from-[var(--accent-primary)]/20 group-hover:to-[var(--accent-secondary)]/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-black text-[var(--text-primary)] mb-2 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--accent-primary)] group-hover:to-[var(--accent-secondary)]">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[var(--text-primary)]/70 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* CTA - pushed to bottom */}
          <div className="mt-auto flex items-center text-[var(--accent-secondary)] font-bold text-sm">
            <span className="relative">
              {project.linkText}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] transition-all duration-300 group-hover:w-full" />
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
