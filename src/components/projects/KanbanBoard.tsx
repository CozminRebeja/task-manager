import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import KanbanColumn from './KanbanColumn';
import { Project } from '../../types';

function KanbanBoard() {
  const columns = ['todo', 'in-progress', 'done'] as const;

  const handleDragEnd = (event: any) => {
    // Handle drag end - update project status
    console.log('Drag ended:', event);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((status) => (
          <div key={status} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium capitalize mb-4">
              {status.replace('-', ' ')}
            </h3>
            <SortableContext items={[]} strategy={verticalListSortingStrategy}>
              <KanbanColumn status={status} />
            </SortableContext>
          </div>
        ))}
      </div>
    </DndContext>
  );
}

export default KanbanBoard; 