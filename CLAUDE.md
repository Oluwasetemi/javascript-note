# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start development server
bun run dev        # Starts Slidev at http://localhost:3030

# Build for production
bun run build      # Full build (high memory; uses --openssl-legacy-provider)
bun run build:netlify  # Memory-optimized build for Netlify CI

# Export slides
bun run export:pdf    # Export to PDF with TOC
bun run export:pptx   # Export to PPTX (no click animations)

# Format code
bun run format        # Prettier on all files including .md slides
```

No test command exists in this project.

## Architecture

This is a **Slidev** presentation — a Vue-powered slideshow framework. Slides are written in Markdown and rendered as interactive HTML.

### Content structure

- `slides.md` — presentation entry point and global frontmatter (theme, transitions, highlighter, title)
- `pages/*.md` — individual topic sections imported into `slides.md` via `src:` directives; each file is a self-contained topic (e.g., `fundamentals.md`, `promises-async.md`, `regular-expressions.md`)

### Custom components (`components/`)

Vue components here are **auto-imported** by Slidev into any slide — no explicit import needed. They provide interactive demos (e.g., `Counter.vue`, `InputRange.vue`, `drag-drop.vue`). The `CounterReact.jsx` component demonstrates embedding React inside Slidev/Vue.

### Code runners (`setup/code-runners.ts`)

Defines custom live-execution environments for code blocks in slides:
- **`html`** — renders HTML in a sandboxed iframe with an intercepted console output panel
- **`vue`** — compiles and mounts Vue SFCs in-browser using `@vue/compiler-sfc`
- **`jsx`** — transpiles JSX via `@babel/standalone` and mounts with React 19

Code blocks tagged with these languages become runnable in the slide viewer.

### Syntax highlighting (`setup/shiki.ts`)

Uses Shiki with `github-light` / `github-dark` themes. Supported languages: `jsx`, `js`, `sh`, `vue`, `html`, `css`, `markdown`.

### Global footer (`global-bottom.vue`)

Rendered on every slide. Connects to a live WebSocket at `wss://api.oluwasetemi.dev/ws/visitors` via `@vueuse/core`'s `useWebSocket` to show a real-time visitor count.

### Styling (`unocss.config.ts`)

Extends Slidev's default UnoCSS config with custom shortcuts (`text-gradient`, `btn`, `card`, `input`, `form-basic`) and web fonts (Rubik Iso, Ubuntu, Caveat, Operator Mono).

### Snippets (`snippets/external.ts`)

TypeScript code that can be referenced inside slide code blocks using `#region`/`#endregion` markers (Slidev's snippet import feature).

## Deployment

- **Netlify** — uses `bun run build:netlify` with `NODE_OPTIONS=--max_old_space_size=4096`; SPA redirects configured in `netlify.toml`
- **Vercel** — uses `npm run build`; `vercel.json` rewrites all routes to `index.html`

## Formatting

Prettier is configured with `singleQuote: true`, `semi: false`. Slide `.md` files use `prettier-plugin-slidev` as the parser — run `bun run format` to format them correctly.
