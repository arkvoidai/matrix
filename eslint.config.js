import js from "@eslint/js";
import tseslint from "typescript-eslint";
export default tseslint.config({ ignores: ["dist/**", "node_modules/**", "supabase/functions/**"] }, js.configs.recommended, ...tseslint.configs.recommended, { files: ["src/**/*.{ts,tsx}"], rules: { "no-console": ["error", { allow: ["warn", "error"] }], "no-debugger": "error" } });