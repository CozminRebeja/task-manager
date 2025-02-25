import { ReactNode } from 'react';
import BottomNavigation from './BottomNavigation';
import TopBar from './TopBar';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* TopBar only shows on desktop */}
      <div className="hidden md:block">
        <TopBar />
      </div>
      
      {/* Main content area with proper padding for navigation */}
      <main className="pb-16 md:pb-0 md:pl-0 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {children}
        </div>
      </main>

      {/* Bottom navigation only shows on mobile */}
      <div className="md:hidden">
        <BottomNavigation />
      </div>
    </div>
  );
}

export default Layout; 