import { useNavigate, useLocation } from 'react-router-dom';
import { HomeIcon, ProjectIcon, CalendarIcon, SettingsIcon } from './icons';

function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/projects', label: 'Projects', icon: ProjectIcon },
    { path: '/calendar', label: 'Calendar', icon: CalendarIcon },
    { path: '/settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                TimeBlock
              </h1>
            </div>
            <nav className="hidden md:ml-6 md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 
                    ${location.pathname === item.path
                      ? 'border-blue-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300'
                    }`}
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar; 