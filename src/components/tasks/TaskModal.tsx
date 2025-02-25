import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Task } from '../../types';
import { useTaskStore } from '../../store/useTaskStore';

const taskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  priority: z.enum(['low', 'medium', 'high']),
  deadline: z.string().optional(),
  timeBlock: z.object({
    start: z.string(),
    end: z.string(),
  }).optional(),
  description: z.string().optional(),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface TaskModalProps {
  task?: Task;
  onClose: () => void;
}

function TaskModal({ task, onClose }: TaskModalProps) {
  const { addTask, updateTask } = useTaskStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: task ? {
      title: task.title,
      priority: task.priority,
      deadline: task.deadline?.toISOString().split('T')[0],
      timeBlock: task.timeBlock ? {
        start: new Date(task.timeBlock.start).toISOString().slice(0, 16),
        end: new Date(task.timeBlock.end).toISOString().slice(0, 16),
      } : undefined,
      description: task.description,
    } : {
      priority: 'medium',
    },
  });

  const onSubmit = (data: TaskFormData) => {
    const taskData = {
      ...data,
      deadline: data.deadline ? new Date(data.deadline) : undefined,
      timeBlock: data.timeBlock ? {
        start: new Date(data.timeBlock.start),
        end: new Date(data.timeBlock.end),
      } : undefined,
    };

    if (task) {
      updateTask(task.id, taskData);
    } else {
      addTask(taskData);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          {task ? 'Edit Task' : 'New Task'}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              {...register('title')}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Task title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Priority</label>
            <select
              {...register('priority')}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
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
            <label className="block text-sm font-medium mb-1">Time Block</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="datetime-local"
                {...register('timeBlock.start')}
                className="w-full px-3 py-2 border rounded-md"
              />
              <input
                type="datetime-local"
                {...register('timeBlock.end')}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
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
              {task ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal; 