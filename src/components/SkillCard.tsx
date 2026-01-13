import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, type Variants } from "framer-motion"; // Importamos motion

interface Props {
  icon: IconDefinition;
  title: string;
  description: string;
  technologies: string[];
  color?: string;
}

interface SkillCardProps {
  skill: Props;
}

// Variantes de animación con efecto "Spring" (Rebote)
const skillVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      type: "spring", // Crea un movimiento más orgánico que un simple linear
      stiffness: 100, 
      damping: 15 
    }
  }
};

const SkillCard = ({ skill }: SkillCardProps) => (
  <motion.div
    variants={skillVariants}
    className="group p-8 bg-[var(--surface-1)] backdrop-blur-xl rounded-[2.5rem] ring-1 ring-[var(--border-color)] shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--accent-secondary)]/10 hover:-translate-y-1 text-[var(--text-primary)]"
  >
    {/* Contenedor del Icono */}
    <div
      className={`w-14 h-14 ${skill.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}
    >
      <FontAwesomeIcon icon={skill.icon} className="text-2xl" />
    </div>

    <h3 className="text-2xl font-black mb-3 text-[var(--text-primary)]">{skill.title}</h3>

    <p className="mb-6 leading-relaxed font-medium text-[var(--text-primary)] opacity-80">{skill.description}</p>

    {/* Tecnologías */}
    <div className="flex flex-wrap gap-2">
      {skill.technologies.map((tech, index) => (
        <span
          key={index}
          className="text-[11px] font-bold px-4 py-1.5 bg-[var(--surface-2)] text-[var(--text-primary)] rounded-xl ring-1 ring-[var(--accent-primary)]/30 transition-colors duration-300 group-hover:bg-[var(--accent-primary)]/10 group-hover:text-[var(--accent-primary)]"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export default SkillCard;
