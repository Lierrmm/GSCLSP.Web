# GSCLSP.Web

Marketing site for the GSC LSP VS Code extension.

- Marketplace: https://marketplace.visualstudio.com/items?itemName=bbe-tools.gsclsp
- Source: https://github.com/Lierrmm/GSCLSP/

## Tech Stack

- React Router v7 (framework mode)
- React 19
- Tailwind CSS v4
- TypeScript
- Bun

## App Mode

This project is configured as a static SPA:

- `ssr: false` in `react-router.config.ts`
- Production output is deployed from `build/client`

## Local Development

Install dependencies:

```bash
bun install
```

Start dev server:

```bash
bun run dev
```

Typecheck:

```bash
bun run typecheck
```

Build production assets:

```bash
bun run build
```

### SPA Routing Fallback

Cloudflare Pages needs a redirect fallback so client-side routes resolve correctly.

Create `public/_redirects` with:

```txt
/* / 200
```

If Cloudflare reports an infinite loop for `/* /index.html 200`, switch to the rule above.

## Notes

- You may still see `@react-router/node` and `isbot` in dependencies. They are required by the React Router build pipeline even when SSR is disabled.
- Route type files in `.react-router/types` are generated automatically when running dev/typecheck.
