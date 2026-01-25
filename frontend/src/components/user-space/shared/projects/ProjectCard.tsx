import { ProjectEntity } from "@/utils/types/ProjectEntity";

interface ProjectCardProps {
  project: ProjectEntity;
  onEdit: (p: ProjectEntity) => void;
  onDelete: (id: number) => void;
}

export const ProjectCard = ({ project, onEdit, onDelete }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
      <div className="h-48 overflow-hidden bg-gray-100 relative">
        {project.photo ? (
          <img
            src={project.photo}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/400x300?text=No+Image";
            }}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No Image
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        <div className="mb-2">
          <div className="flex flex-wrap gap-1 mb-1">
            {project.category.map((cat, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center pt-4 border-t border-gray-100">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            View Project
          </a>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(project)}
              className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(project.id)}
              className="px-3 py-1 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
