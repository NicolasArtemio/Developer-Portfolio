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
    variants={skillVariants} // Hereda el estado del padre (SkillsSection)
    className="group p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
  >
    
    {/* Contenedor del Icono */}
    <div className={`w-14 h-14 ${skill.color || 'bg-gray-100'} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
      <FontAwesomeIcon
        icon={skill.icon}
        className="text-2xl"
      />
    </div>

    {/* Título */}
    <h3 className="text-2xl font-black text-[#1F1D2B] mb-3">{skill.title}</h3>
    
    {/* Descripción */}
    <p className="text-gray-500 mb-6 leading-relaxed font-medium">
      {skill.description}
    </p>

    {/* Tecnologías */}
    <div className="flex flex-wrap gap-2">
      {skill.technologies.map((tech, index) => (
        <span
          key={index}
          className="text-[11px] font-bold bg-[#F8FAFC] text-gray-500 border border-gray-100 px-4 py-1.5 rounded-xl transition-colors duration-300 group-hover:border-[#2DD4BF]/40 group-hover:text-[#2DD4BF]"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export default SkillCard;