# Architecture

React shell → feature routes → repository interface → Supabase or IndexedDB Local mode. Features also use pure engine rules and the lazy 3D entry point. Supabase Edge Functions validate proposals, call deterministic rules, and commit allowed events to the append-only ledger. Vercel hosts the browser shell.

Conversation turn: player text → authenticated Edge Function → memory retrieval → model proposal → deterministic rules → ledger commit → refreshed snapshot → UI. If live AI is disabled, use an offline response and never pretend a persistent NPC response was generated.

Return after being away: request a snapshot and elapsed time; calculate bounded catch-up lazily; apply deterministic rules; append permitted events.

Module rules: engine imports engine and lib only; world imports engine and lib, never features or UI; features use UI, data, engine, lib and world/index; UI imports lib and styles only.
