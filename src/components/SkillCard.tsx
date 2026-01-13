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
    className="group p-8 backdrop-blur-xl rounded-[2.5rem] ring-1 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
    style={{
      backgroundColor: "var(--card-bg)",
      borderColor: "var(--border-color)",
      color: "var(--text-color)",
    }}
  >
    {/* Contenedor del Icono */}
    <div
      className={`w-14 h-14 ${
        skill.color || "bg-gray-100"
      } text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}
    >
      <FontAwesomeIcon icon={skill.icon} className="text-2xl" />
    </div>

    <h3 className="text-2xl font-black mb-3">{skill.title}</h3>

    <p className="mb-6 leading-relaxed font-medium">{skill.description}</p>

    {/* Tecnologías */}
    <div className="flex flex-wrap gap-2">
      {skill.technologies.map((tech, index) => (
        <span
          key={index}
          className="text-[11px] font-bold px-4 py-1.5 rounded-xl transition-colors duration-300 group-hover:ring-[#2DD4BF]/40 group-hover:text-[#2DD4BF]"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
            color: "var(--text-color)",
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export default SkillCard;
