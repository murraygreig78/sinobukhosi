# Quick Start Guide - Astro Migration

## Installation

First, install the new Astro dependencies:

```bash
npm install
# or
pnpm install
```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321` (Astro's default port).

## Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## What Changed

### File Structure
- **Old**: `src/pages/*.tsx` (React Router pages)
- **New**: `src/pages/*.astro` (Astro file-based routing)

### Routing
- **Old**: Client-side routing with `HashRouter` (`#/about`)
- **New**: File-based routing (`/about`)

### Components
- Most components remain React components
- Components needing interactivity use `client:load` directive
- Navigation converted to Astro (no React Router needed)

## Troubleshooting

### Port Already in Use
If port 4321 is in use, Astro will automatically use the next available port.

### Missing Dependencies
If you see import errors, make sure all dependencies are installed:
```bash
npm install
```

### Build Errors
Check that all React components used in Astro files have proper `client:*` directives where needed.

## Next Steps

1. Test all pages in development mode
2. Verify all forms and interactive components work
3. Build and test the production build
4. Deploy to your hosting service

