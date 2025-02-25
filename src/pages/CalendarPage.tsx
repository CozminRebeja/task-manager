import Calendar from '../components/calendar/Calendar';

function CalendarPage() {
  return (
    <div className="h-[calc(100vh-4rem)] p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Calendar</h2>
        <Calendar fullscreen />
      </div>
    </div>
  );
}

export default CalendarPage; 