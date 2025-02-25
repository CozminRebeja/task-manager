import axios from 'axios';
import { Task, Project } from '../types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const taskApi = {
  getTasks: () => api.get<Task[]>('/tasks'),
  createTask: (task: Omit<Task, 'id'>) => api.post<Task>('/tasks', task),
  updateTask: (id: string, updates: Partial<Task>) => api.patch<Task>(`/tasks/${id}`, updates),
  deleteTask: (id: string) => api.delete(`/tasks/${id}`),
};

export const projectApi = {
  getProjects: () => api.get<Project[]>('/projects'),
  createProject: (project: Omit<Project, 'id'>) => api.post<Project>('/projects', project),
  updateProject: (id: string, updates: Partial<Project>) => api.patch<Project>(`/projects/${id}`, updates),
  deleteProject: (id: string) => api.delete(`/projects/${id}`),
};

export const authApi = {
  login: (email: string, password: string) => 
    api.post('/auth/login', { email, password }),
  register: (email: string, password: string, name: string) =>
    api.post('/auth/register', { email, password, name }),
  logout: () => api.post('/auth/logout'),
};

export default api; 