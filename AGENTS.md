# Agent Guidelines

## Essentials

- Stack: TypeScript + React (TanStack Start), with Drizzle ORM, shadcn/ui, and Better Auth.
- Only use `pnpm` for package management in this repo. Do not use `npm`, `yarn`, manual tarball extraction, or any workaround that bypasses blocked permission or install issues; stop and ask the user for help instead.
- Use shadcn CLI (`pnpm ui add <component>`) for adding new UI components & primitives.
- For TanStack libraries, consult latest docs via `pnpm tanstack <command>` (see [Workflow](.agents/workflow.md#tanstack-cli)).
- Don't build after every little change. If `pnpm lint` passes; assume changes work.

## Topic-specific Guidelines

- [TanStack patterns](.agents/tanstack-patterns.md) - Routing, data fetching, loaders, server functions, environment shaking
- [Auth patterns](.agents/auth.md) - Route guards, middleware, auth utilities
- [TypeScript conventions](.agents/typescript.md) - Casting rules, prefer type inference
- [Workflow](.agents/workflow.md) - Workflow commands, validation approach
