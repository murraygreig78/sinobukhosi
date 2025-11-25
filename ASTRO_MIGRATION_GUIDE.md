# Astro Migration Guide

## Overview
This guide outlines the migration from React + Vite + React Router to Astro.

## Key Changes

### 1. Routing
- **Before**: React Router with HashRouter (`/`, `/about`, `/leadership`, etc.)
- **After**: Astro's file-based routing (`src/pages/index.astro`, `src/pages/about.astro`, etc.)
- **Benefit**: No client-side routing needed - each page is a separate HTML file

### 2. Components
- **React Components**: Can still be used via `@astrojs/react` integration
- **Client-side interactivity**: Use `client:*` directives (e.g., `client:load`, `client:visible`)
- **Static components**: No directive needed - rendered at build time

### 3. Layout
- **Before**: `<Layout>` wrapper component
- **After**: Astro Layout components in `src/layouts/`
- **Benefit**: Shared HTML structure without React overhead

### 4. Navigation
- **Before**: React Router's `Link` and `useLocation` hook
- **After**: Astro's `<a>` tags or `<Link>` component (no client-side routing)
- **Active state**: Can use Astro's `Astro.url` to check current path

### 5. React Query & State Management
- **Before**: QueryClientProvider wrapping entire app
- **After**: Only hydrate components that need it with `client:*` directives
- **Benefit**: Most components render as static HTML

## Migration Steps

1. ✅ Install Astro and React integration
2. ✅ Create Astro config
3. ✅ Convert pages to `.astro` files
4. ✅ Migrate Layout to Astro layout
5. ✅ Update Navigation component
6. ✅ Convert React components (add `client:*` where needed)
7. ✅ Update Tailwind config for Astro
8. ✅ Migrate styles

## File Structure Changes

```
Before (React):
src/
  pages/
    Index.tsx
    About.tsx
    ...
  components/
    Layout.tsx
    Navigation.tsx
    ...

After (Astro):
src/
  pages/
    index.astro      (was Index.tsx)
    about.astro      (was About.tsx)
    ...
  layouts/
    Layout.astro     (was Layout.tsx)
  components/
    Navigation.astro (or keep as React with client:load)
    ContactForm.tsx  (React component with client:load)
    ...
```

## Component Hydration Strategy

- **ContactForm**: Needs `client:load` (form state, validation)
- **Navigation**: Can be static Astro component (no React Router needed)
- **UI Components**: Keep as React, hydrate only when needed
- **Pages**: Mostly static Astro files with React components embedded

