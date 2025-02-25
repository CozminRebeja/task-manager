import React from 'react';
import Calendar from '../components/calendar/Calendar';
import TodoList from '../components/tasks/TodoList';

function HomePage() {
  return (
    <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
      {/* Calendar Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
            Today's Schedule
          </h2>
          <div className="mt-4">
            <Calendar />
          </div>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
            Tasks
          </h2>
          <div className="mt-4">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 