import { useState } from 'react';

function SettingsPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="h-[calc(100vh-4rem)] p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Theme</h3>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Account</h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-300">
                Logged in as: user@example.com
              </p>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage; 