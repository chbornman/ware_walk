# Agent Instructions for ware_walk

## Build & Development Commands
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally
- No test runner configured - consider adding Vitest for React component testing

## Code Style Guidelines
- **Framework**: React 19 with Vite, TailwindCSS for styling
- **Components**: Functional components with hooks, export as default
- **Imports**: Named imports for icons/utilities, default imports for components
- **File naming**: PascalCase for components (e.g., `PathMap.jsx`), camelCase for utilities
- **Styling**: Use Tailwind utility classes, custom colors defined in tailwind.config.js
- **Icons**: Use @heroicons/react library (e.g., `import { SparklesIcon } from '@heroicons/react/24/outline'`)
- **State**: Use React hooks (useState, useEffect, etc.)
- **Props**: Destructure in function parameters, use arrow functions for components
- **No TypeScript**: Project uses plain JavaScript/JSX
- **ESLint**: Configured with React hooks and refresh plugins
- **Formatting**: 2-space indentation, single quotes for imports, no semicolons except after export statements