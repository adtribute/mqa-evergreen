# CLAUDE.md

Internal fork of [evergreen-ui](https://github.com/segmentio/evergreen) by Segment. The upstream project is abandoned — we maintain this for our own use. Consumed as an npm dependency by the `analytics` app.

## Setup

```bash
nvm use          # Node 14.18 (.nvmrc)
yarn install     # Errors are expected but harmless
```

## Key Commands

- `yarn dev` — Storybook on http://localhost:6006
- `yarn build` — Build commonjs, esm, and type declarations
- `yarn test` — Lint + type check + Jest
- `yarn jest` — Jest only
- `yarn jest --watch` — Jest in watch mode
- `yarn lint` — ESLint only
- `yarn typecheck` — TypeScript type check only (`tsc --noEmit`)

## Project Structure

Components live in `src/`, each in its own directory:

```
src/buttons/
├── index.js              # Re-exports from src/
├── src/
│   ├── Button.js         # Component implementation
│   └── IconButton.js
├── stories/
│   └── index.stories.js  # Storybook stories
└── __tests__/
    └── Button.test.js    # Jest + React Testing Library
```

Main entry point is `src/index.ts` which re-exports all public components.

Build outputs:

- `commonjs/` — CJS build (package.json `main`) — **committed to git** (analytics references this package directly from GitHub, not an npm registry, so built files must be checked in)
- `esm/` — ES modules build (package.json `module`) — gitignored for now, will need to be committed when analytics moves to ESM-only
- `types/` — TypeScript declarations — **committed to git**

## Code Conventions

- TypeScript with `strict: true`, but many components are still `.js` files
- ESLint enforces sorted destructure keys and import ordering (builtins > external > internal, alphabetized)
- Prettier: no semicolons, single quotes, 120 char width, trailing commas off
- Components use `@maestroqa/ui-box` (our fork of `ui-box`) as the base layout primitive
- Tests use `@testing-library/react` and wrap components in `<ThemeProvider value={theme}>`
- No `console.log` — use `console.warn` or `console.error` if needed

## Releasing

See the [README](./README.md#releasing-a-new-version) for the full release process. In short:

```bash
yarn build
git add -A && git commit -m "Build"
npm version [major | minor | patch]
git push --tags
```

Dependabot in `analytics` will pick up the new version automatically.

## Version Bumping Guide

- **patch** — Bug fix, no API changes
- **minor** — New features, new props, behavioral changes (even with narrow breaking edge cases)
- **major** — Removed/renamed public API, changed prop signatures, dropped compatibility
