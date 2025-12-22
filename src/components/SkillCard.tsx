import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconDefinition;
  title: string;
  description: string;
  technologies: string[];
  color?: string; // Nuevo: Para pasar el color de fondo del icono (ej: bg-[#2DD4BF])
}

interface SkillCardProps {
  skill: Props;
}

const SkillCard = ({ skill }: SkillCardProps) => (
  <div className="group p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
    
    {/* Contenedor del Icono con el color dinámico */}
    <div className={`w-14 h-14 ${skill.color || 'bg-gray-100'} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-inherit/20 transition-transform duration-500 group-hover:scale-110`}>
      <FontAwesomeIcon
        icon={skill.icon}
        className="text-2xl"
      />
    </div>

    {/* Título en color oscuro profesional */}
    <h3 className="text-2xl font-black text-[#1F1D2B] mb-3">{skill.title}</h3>
    
    {/* Descripción en gris suave */}
    <p className="text-gray-500 mb-6 leading-relaxed font-medium">
      {skill.description}
    </p>

    {/* Tecnologías como etiquetas (Pills) modernas */}
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
  </div>
);

export default SkillCard;