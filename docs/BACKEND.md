# Backend setup

The connected Supabase project already has tables from an earlier prototype. These migrations use an arkvoid_ prefix to avoid direct name collisions, but review and test on a separate project before applying.

1. Create a Supabase project for Arkvoid.
2. Copy Project URL and anon key to Vercel environment variables and a local .env. Never place a service-role key in browser code.
3. Enable email magic links/OTP and anonymous sign-in in Auth. For Google, create an OAuth client, add the callback URL displayed by Supabase Auth, and add local and production app URLs to the redirect allow-list.
4. Run supabase link --project-ref YOUR_PROJECT_REF, then supabase db push. Or apply the migrations in numeric order in the SQL editor on a fresh test project.
5. Test with a normal user, not an administrator. The full pgTAP suite remains to be completed.
6. Deploy the health function with supabase functions deploy health.
7. Store model credentials only with supabase secrets set LLM_PROVIDER=... LLM_API_KEY=... LLM_MODEL=....
8. Storage policies and buckets are not in this first migration; do not make private world blobs public.
9. Run npm run db:types after setting SUPABASE_PROJECT_ID.
10. Review current backup and restore options in the Supabase dashboard because limits vary by plan.
11. Admin promotion is a one-time controlled operation: update public.arkvoid_profiles set role='admin' where id='YOUR_AUTH_USER_UUID'; never expose it to the browser.

This is a first backend slice, not the full final schema. Social moderation, guest upgrade, embeddings, AI budgets, storage, scheduled maintenance and the full pgTAP suite remain unfinished.
