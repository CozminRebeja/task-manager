import { useSortable } from '@dnd-kit/sortable';
import { Project } from '../../types';

interface KanbanColumnProps {
  status: 'todo' | 'in-progress' | 'done';
}

function KanbanColumn({ status }: KanbanColumnProps) {
  // This would normally come from a project store
  const projects: Project[] = [];

  return (
    <div className="space-y-3">
      {projects
        .filter((project) => project.status === status)
        .map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-lg shadow"
          >
            <h4 className="font-medium">{project.title}</h4>
            {project.client && (
              <p className="text-sm text-gray-500">Client: {project.client}</p>
            )}
            {project.deadline && (
              <p className="text-sm text-gray-500">
                Due: {new Date(project.deadline).toLocaleDateString()}
              </p>
            )}
          </div>
        ))}
    </div>
  );
}

export default KanbanColumn; 