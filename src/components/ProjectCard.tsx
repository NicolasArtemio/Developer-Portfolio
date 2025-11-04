import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
  liveUrl: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Props;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-gray-800 border border-green-500 rounded-xl transition duration-300 ease-in-out hover:shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1"
    >
      <div className="flex items-start space-x-4">
        <div className="w-20 h-20 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={project.imageSrc}
            alt={`Captura de ${project.title}`}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-xl font-bold text-green-400 mb-1">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-3">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs font-medium bg-green-900/50 text-green-300 px-2 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="text-green-400 text-sm font-semibold flex items-center group-hover:underline">
            Ver Proyecto
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 text-xs transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
