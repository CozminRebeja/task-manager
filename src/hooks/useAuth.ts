import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../services/api';
import { useSettingsStore } from '../store/useSettingsStore';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setUser, clearUser } = useSettingsStore();

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authApi.login(email, password);
      localStorage.setItem('auth_token', response.data.token);
      setUser(response.data.user.email, response.data.user.name);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authApi.register(email, password, name);
      localStorage.setItem('auth_token', response.data.token);
      setUser(response.data.user.email, response.data.user.name);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } finally {
      localStorage.removeItem('auth_token');
      clearUser();
      navigate('/login');
    }
  };

  return {
    login,
    register,
    logout,
    loading,
    error,
  };
} 