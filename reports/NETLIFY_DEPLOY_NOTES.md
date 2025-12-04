# Netlify Deploy Notes

## Original Issue
- Netlify build failed with `Module not found: Can't resolve '@radix-ui/react-slot'` originating from `components/ui/Button.tsx`.

## Fixes Applied
- Inlined a lightweight Slot implementation inside `components/ui/Button.tsx`, removing the external dependency that caused the missing module error.
- Updated `netlify.toml` to publish the standard `.next` build output for the Netlify Next.js plugin.

## Local Build Verification
1. `npm install`
2. `npm run build`

The project now builds successfully.
