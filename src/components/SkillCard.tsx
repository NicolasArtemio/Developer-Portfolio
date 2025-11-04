import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconDefinition;
  title: string;
  description: string;
  technologies: string[];
}

interface SkillCardProps {
  skill: Props;
}

const SkillCard = ({ skill }: SkillCardProps) => (
  <div className="p-6 bg-gray-800 border border-green-700 rounded-xl transition duration-300 ease-in-out hover:border-green-500 hover:shadow-xl hover:shadow-green-500/10">
    <FontAwesomeIcon
      icon={skill.icon}
      className="text-3xl text-green-400 mb-4"
    />
    <h3 className="text-2xl font-bold text-white mb-3">{skill.title}</h3>
    <p className="text-gray-400 mb-4">{skill.description}</p>

    <div className="flex flex-wrap gap-2">
      {skill.technologies.map((tech, index) => (
        <span
          key={index}
          className="text-xs font-medium bg-green-900/50 text-green-300 px-3 py-1 rounded-full whitespace-nowrap"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;
