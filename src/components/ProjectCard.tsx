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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.a
      variants={cardVariants}
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] hover:border-[var(--accent-primary)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--accent-primary)]/10 focus-ring"
    >
      {/* Screenshot */}
      <div className="overflow-hidden h-48">
        <img
          src={project.imageSrc}
          alt={`Preview de ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5 bg-[var(--surface-1)]">
        <h3 className="text-[var(--text-primary)] font-black text-lg leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-[var(--text-primary)]/60 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-1.5 text-[var(--accent-primary)] font-bold text-sm">
          <span>{project.linkText}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>

    </motion.a>
  );
};

export default ProjectCard;
