import { useEffect } from 'react';
import { useTaskStore } from '../store/useTaskStore';
import { useProjectStore } from '../store/useProjectStore';
import { taskApi, projectApi } from '../services/api';

export function useSync() {
  const { tasks, addTask } = useTaskStore();
  const { projects, addProject } = useProjectStore();

  // Sync tasks with backend
  useEffect(() => {
    const syncTasks = async () => {
      try {
        const response = await taskApi.getTasks();
        response.data.forEach(task => {
          if (!tasks.find(t => t.id === task.id)) {
            addTask(task);
          }
        });
      } catch (error) {
        console.error('Failed to sync tasks:', error);
      }
    };

    syncTasks();
  }, []);

  // Sync projects with backend
  useEffect(() => {
    const syncProjects = async () => {
      try {
        const response = await projectApi.getProjects();
        response.data.forEach(project => {
          if (!projects.find(p => p.id === project.id)) {
            addProject(project);
          }
        });
      } catch (error) {
        console.error('Failed to sync projects:', error);
      }
    };

    syncProjects();
  }, []);
} 