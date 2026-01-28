# Poojasri M - Portfolio Website

## Overview

A modern, responsive portfolio website for Poojasri M, an AI & Data Science enthusiast. The application showcases professional experience, technical skills, and key projects in Generative AI, MLOps, and Multi-Agent Systems. Built as a full-stack TypeScript application with a React frontend and Express backend, featuring a contact form that stores messages in PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom dark theme (deep navy with purple/blue accents)
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll reveals and interactions
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful endpoints defined in `shared/routes.ts`
- **Build Tool**: Vite for frontend, esbuild for server bundling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Schema Location**: `shared/schema.ts` - contains messages table for contact form
- **Migrations**: Managed via `drizzle-kit push`

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # UI components (Navigation, ProjectCard, etc.)
│   │   ├── pages/        # Page components (Home, not-found)
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared types and schemas
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod validation
└── attached_assets/  # Profile image and requirements docs
```

### Key Design Patterns
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Type Safety**: End-to-end TypeScript with Zod schemas shared between frontend and backend
- **Path Aliases**: `@/` for client source, `@shared/` for shared modules
- **Component-First**: Reusable UI components from shadcn/ui library

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage for Express (available but not currently used)

### Frontend Libraries
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth transitions
- **Radix UI**: Accessible, unstyled component primitives (full suite installed)
- **react-hook-form**: Form state management with `@hookform/resolvers` for Zod

### Development Tools
- **Vite**: Frontend build tool with HMR
- **Drizzle Kit**: Database schema management and migrations
- **tsx**: TypeScript execution for development server

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator