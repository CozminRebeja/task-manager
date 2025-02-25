export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  deadline?: Date;
  timeBlock?: {
    start: Date;
    end: Date;
  };
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  client?: string;
  price?: number;
  deadline?: Date;
  deliverables?: string[];
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TimeBlock {
  id: string;
  taskId: string;
  start: Date;
  end: Date;
  title: string;
  description?: string;
} 