# TimeBlock - Task & Time Management App

A modern React application for managing tasks, time blocks, and projects with a focus on productivity and user experience.

## Features

### Task Management
- **Todo List**
  - Create, edit, and delete tasks
  - Set priority levels (low, medium, high)
  - Add deadlines and descriptions
  - Mark tasks as complete
  - Sort by priority and completion status

### Time Blocking
- **Interactive Calendar**
  - Daily and weekly views
  - Create time blocks for tasks
  - Drag and drop to adjust time blocks
  - Color-coded based on task status
  - Fullscreen calendar view available

### Project Management
- **Kanban Board**
  - Drag and drop project cards
  - Organize projects by status (todo, in-progress, done)
  - Customizable project properties:
    - Client information
    - Price tracking
    - Deadlines
    - Deliverables
    - Descriptions

### User Interface
- **Responsive Design**
  - Mobile-first approach
  - Desktop optimization
  - Bottom navigation for mobile
  - Top navigation for desktop
- **Theme Support**
  - Light/Dark mode toggle
  - Persistent theme preference
- **Accessibility**
  - ARIA labels
  - Keyboard navigation
  - Screen reader support

### Data Management
- **State Management**
  - Zustand for global state
  - Persistent storage
  - Offline support
- **Form Handling**
  - React Hook Form integration
  - Zod validation
  - Error handling

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- FullCalendar.js
- DnD Kit
- React Router DOM
- React Query
- Zustand
- React Hook Form + Zod

### Development Tools
- Vite
- ESLint
- Prettier
- Vitest
- React Testing Library
- PWA Support

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format code
- `npm run typecheck` - Check TypeScript
- `npm run validate` - Run all checks

## Project Structure

```
src/
  ├── components/
  │   ├── calendar/
  │   ├── tasks/
  │   ├── projects/
  │   ├── layout/
  │   └── common/
  ├── pages/
  │   ├── HomePage
  │   ├── ProjectsPage
  │   ├── CalendarPage
  │   └── SettingsPage
  ├── store/
  │   ├── useTaskStore
  │   ├── useProjectStore
  │   └── useSettingsStore
  ├── hooks/
  ├── types/
  └── utils/
```

## Testing

The application includes unit tests for components and integration tests for key features. Run tests with:

```bash
npm run test
```

## Deployment

The app is configured for deployment to various platforms:
- Vercel
- Netlify
- Firebase Hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details