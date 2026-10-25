# ADR 0001: Stack and world boundaries

Status: accepted for the initial implementation. React, TypeScript and Vite provide the browser shell; Three.js and React Three Fiber provide WebGL rendering; TanStack Query is available for server state. Repository interfaces keep Local mode and Supabase aligned.

Home World data is private and authoritative. Commons shards are presence and chat instances and must never contain Home World story state. This split reduces accidental data sharing and protects personal story continuity.