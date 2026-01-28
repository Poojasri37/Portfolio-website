# Poojasri M - Portfolio Website

## Overview

A modern, responsive portfolio website for Poojasri M, an AI & Data Science enthusiast. The application showcases professional experience, technical skills, and key projects in Generative AI, MLOps, and Multi-Agent Systems. Built as a pure frontend React application, deployable on GitHub Pages or any static hosting.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom dark theme (deep navy with purple/blue accents)
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll reveals and interactions
- **Form Handling**: React Hook Form with Zod validation
- **Contact Form**: Uses mailto links (no backend required)

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # UI components (Navigation, ProjectCard, etc.)
│   │   ├── pages/        # Page components (Home, not-found)
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
└── attached_assets/  # Profile image
```

### Key Design Patterns
- **Static Site**: Pure frontend, no backend or database required
- **Type Safety**: TypeScript with Zod validation for forms
- **Path Aliases**: `@/` for client source, `@assets/` for attached assets
- **Component-First**: Reusable UI components from shadcn/ui library

## Frontend Libraries

- **@tanstack/react-query**: State management
- **framer-motion**: Animation library for smooth transitions
- **Radix UI**: Accessible, unstyled component primitives
- **react-hook-form**: Form state management with Zod validation
- **react-scroll**: Smooth scrolling navigation

## Development

### Commands
- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production (outputs to dist/)
- `npm run preview` - Preview production build

### Deployment
This is a static frontend project that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static file hosting

Build output is in the `dist/` directory after running `npm run build`.

## Recent Changes

- **Jan 2026**: Converted from fullstack to frontend-only for GitHub Pages deployment
- Removed PostgreSQL, Express backend, and Drizzle ORM
- Contact form now uses mailto links instead of API calls
- Added flip-card animation for project details
- Added specific GitHub repository links for all projects
