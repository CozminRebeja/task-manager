import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Project } from '../../types';
import { useProjectStore } from '../../store/useProjectStore';

const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  client: z.string().optional(),
  price: z.string().transform(Number).optional(),
  deadline: z.string().optional(),
  deliverables: z.array(z.string()).optional(),
  status: z.enum(['todo', 'in-progress', 'done']),
  description: z.string().optional(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface ProjectModalProps {
  project?: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { addProject, updateProject } = useProjectStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: project ? {
      title: project.title,
      client: project.client,
      price: project.price?.toString(),
      deadline: project.deadline?.toISOString().split('T')[0],
      deliverables: project.deliverables || [],
      status: project.status,
      description: project.description,
    } : {
      status: 'todo',
      deliverables: [],
    },
  });

  const onSubmit = (data: ProjectFormData) => {
    const projectData = {
      ...data,
      deadline: data.deadline ? new Date(data.deadline) : undefined,
      price: data.price ? Number(data.price) : undefined,
    };

    if (project) {
      updateProject(project.id, projectData);
    } else {
      addProject(projectData);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          {project ? 'Edit Project' : 'New Project'}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              {...register('title')}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Project title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Client</label>
            <input
              {...register('client')}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Client name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              {...register('price')}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Project price"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Deadline</label>
            <input
              type="date"
              {...register('deadline')}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              {...register('status')}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              {...register('description')}
              className="w-full px-3 py-2 border rounded-md"
              rows={3}
              placeholder="Add description..."
            />
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {project ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectModal; 