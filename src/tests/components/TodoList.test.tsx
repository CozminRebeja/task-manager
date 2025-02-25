import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TodoList from '../../components/tasks/TodoList';
import { useTaskStore } from '../../store/useTaskStore';

// Mock the store
vi.mock('../../store/useTaskStore', () => ({
  useTaskStore: vi.fn(() => ({
    tasks: [],
    toggleTask: vi.fn(),
    removeTask: vi.fn(),
  })),
}));

describe('TodoList', () => {
  it('renders the todo list', () => {
    render(<TodoList />);
    expect(screen.getByText(/Tasks \(0\)/i)).toBeInTheDocument();
  });

  it('shows add task button', () => {
    render(<TodoList />);
    expect(screen.getByText(/Add Task/i)).toBeInTheDocument();
  });

  it('opens add task form when button is clicked', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText(/Add Task/i));
    expect(screen.getByPlaceholderText(/Task title/i)).toBeInTheDocument();
  });
}); 