# Arkvoid World

A persistent, AI-driven 3D world prototype. The first world is a cultivation-inspired place with a private Home World, a shared Commons, and characters that remember events.

## Run locally

1. Install Node.js 20 or 22.
2. Run npm install.
3. Copy .env.example to .env. Leave Supabase values blank to use Local mode.
4. Run npm run dev.

## Quality checks

Run npm run typecheck, npm run lint, npm run test, and npm run build.

This is an early implementation, not the complete 30-prompt product. Routes explicitly labelled not built yet are not represented as finished capabilities. The migrations are provided for review and should be applied to a fresh project only after review; do not run them blindly against an existing database.

Read docs/CONSTITUTION.md before changing architecture. Home World is private and persistent. Commons activity must never write Home World story data.
