import { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useTaskStore } from '../../store/useTaskStore';
import { Task } from '../../types';

interface CalendarProps {
  fullscreen?: boolean;
}

function Calendar({ fullscreen = false }: CalendarProps) {
  const tasks = useTaskStore((state) => state.tasks);

  const events = tasks
    .filter((task: Task) => task.timeBlock)
    .map((task: Task) => ({
      id: task.id,
      title: task.title,
      start: task.timeBlock?.start,
      end: task.timeBlock?.end,
      backgroundColor: task.completed ? '#10B981' : '#3B82F6',
    }));

  const handleEventClick = (info: any) => {
    const taskId = info.event.id;
    // Handle event click - could open a modal to edit the task
    console.log('Clicked task:', taskId);
  };

  const handleDateSelect = (selectInfo: any) => {
    // Handle date selection - could open a modal to create a new task
    console.log('Selected time:', selectInfo);
  };

  return (
    <div className={`calendar-container ${fullscreen ? 'h-[calc(100vh-12rem)]' : 'h-[500px]'}`}>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: fullscreen ? 'timeGridDay,timeGridWeek' : '',
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        events={events}
        eventClick={handleEventClick}
        select={handleDateSelect}
        height="100%"
        slotMinTime="06:00:00"
        slotMaxTime="22:00:00"
      />
    </div>
  );
}

export default Calendar; 