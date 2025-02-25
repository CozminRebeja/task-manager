import create from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  user: {
    email: string | null;
    name: string | null;
  };
  setUser: (email: string, name: string) => void;
  clearUser: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          document.documentElement.classList.toggle('dark');
          return { theme: newTheme };
        }),
      user: {
        email: null,
        name: null,
      },
      setUser: (email, name) =>
        set({ user: { email, name } }),
      clearUser: () =>
        set({ user: { email: null, name: null } }),
    }),
    {
      name: 'settings-storage',
    }
  )
); 