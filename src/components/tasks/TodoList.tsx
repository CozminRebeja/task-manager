import { useState } from 'react';
import { useTaskStore } from '../../store/useTaskStore';
import { Task } from '../../types';
import AddTaskForm from './AddTaskForm';

function TodoList() {
  const { tasks, toggleTask, removeTask } = useTaskStore();
  const [showAddForm, setShowAddForm] = useState(false);

  const sortedTasks = [...tasks].sort((a, b) => {
    // Sort by completion status first
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    // Then by priority
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Tasks ({tasks.length})</h3>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      {showAddForm && <AddTaskForm onClose={() => setShowAddForm(false)} />}

      <div className="space-y-2">
        {sortedTasks.map((task: Task) => (
          <div
            key={task.id}
            className={`flex items-center gap-3 p-3 rounded-lg border
              ${task.completed 
                ? 'bg-gray-50 border-gray-200' 
                : 'bg-white border-gray-200'}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="h-5 w-5 rounded border-gray-300"
            />
            <div className="flex-1">
              <p className={`text-sm ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.title}
              </p>
              <div className="flex gap-2 mt-1">
                <span className={`text-xs px-2 py-1 rounded
                  ${task.priority === 'high' ? 'bg-red-100 text-red-800' :
                    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'}`}
                >
                  {task.priority}
                </span>
                {task.deadline && (
                  <span className="text-xs text-gray-500">
                    Due: {new Date(task.deadline).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => removeTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList; 