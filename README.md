# template

This project was scaffolded with [`create-mugnavo`](https://github.com/mugnavo/create-mugnavo).

```bash
pnpm create mugnavo
```

- [React 19](https://react.dev) + [React Compiler](https://react.dev/learn/react-compiler)
- TanStack [Start](https://tanstack.com/start/latest) + [Router](https://tanstack.com/router/latest) + [Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) + [Base UI](https://base-ui.com/) (base-maia) + [Remix Icon](https://remixicon.com/)
- [Vite 8](https://vite.dev) + [Nitro v3](https://nitro.build/)
- [Drizzle ORM](https://orm.drizzle.team/) + SQLite
- [Better Auth](https://www.better-auth.com/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) + [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)

> [!TIP]
> This template is also available as a monorepo, powered by [Vite+](https://viteplus.dev/) and pnpm. See [mugnavo/tanstarter-plus](https://github.com/mugnavo/tanstarter-plus).

## Getting Started

1. [Use this template](https://github.com/new?template_name=tanstarter&template_owner=mugnavo) or create a project using our CLI:

   ```bash
   pnpm create mugnavo
   ```

2. Create a `.env` file based on [`.env.example`](./.env.example).

3. Apply the committed database migration:

   ```bash
   pnpm db:migrate
   ```

   https://orm.drizzle.team/docs/migrations

4. Run the development server:

   ```bash
   pnpm dev
   ```

   The development server should now be running at [http://localhost:3000](http://localhost:3000).

## Local email with Mailpit

Start Mailpit with Docker Compose:

```bash
docker compose up -d
```

In development, the contact form delivers email to Mailpit over SMTP on port `1025`.
Open [http://localhost:8025](http://localhost:8025) to review captured messages.
For non-development environments, set `CONTACT_FROM_EMAIL` and `RESEND_API_KEY` in your environment.

## Deploying to production

This repo now includes a production `Dockerfile` and a GitHub Actions workflow at [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) that:

- builds the app image without injecting app secrets at build time
- pushes the image to Docker Hub as `latest` and a commit SHA tag
- triggers a Dokploy redeploy through `DOKPLOY_DEPLOY_HOOK`

Set these GitHub Secrets before enabling the workflow:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `DOKPLOY_DEPLOY_HOOK`

Set these runtime environment variables in Dokploy:

- `APP_BASE_URL`
- `DATABASE_URL`
- `BETTER_AUTH_SECRET`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `RESEND_API_KEY`
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `HOST=0.0.0.0`
- `PORT=3000`

Set `DATABASE_URL` to a volume-backed SQLite path such as `file:/data/app.db` and mount `/data` in Dokploy so the database survives redeploys and can be backed up.

For database changes, run migrations as a separate Dokploy task using the same image:

```bash
pnpm db:migrate:prod
```

That command uses the committed SQL files in [`drizzle`](./drizzle) and reads `DATABASE_URL` only at runtime.

For local development, a common default is `DATABASE_URL=file:./local.db`.

## Local Docker testing

The fastest local smoke test is:

```bash
docker build -t template-dokploy-test .
mkdir -p .docker-data
docker run --rm \
  -v "$(pwd)/.docker-data:/data" \
  -e DATABASE_URL=file:/data/app.db \
  template-dokploy-test \
  pnpm db:migrate:prod
docker run --rm -p 3000:3000 \
  -v "$(pwd)/.docker-data:/data" \
  -e APP_BASE_URL=http://localhost:3000 \
  -e DATABASE_URL=file:/data/app.db \
  -e BETTER_AUTH_SECRET=test-secret \
  -e CONTACT_TO_EMAIL=test@example.com \
  template-dokploy-test
```

Then open [http://localhost:3000](http://localhost:3000) or run:

```bash
curl -I http://localhost:3000
```

For the full Docker, migration, and CI testing workflow, see [`docs/docker.md`](./docs/docker.md).

## Issue watchlist

- [Router/Start issues](https://github.com/TanStack/router/issues) - TanStack Start is in RC.
- [Devtools releases](https://github.com/TanStack/devtools/releases) - TanStack Devtools is in alpha and may still have breaking changes.
- [Nitro v3 beta](https://nitro.build/blog/v3-beta) - The template is configured with Nitro v3 beta by default.

## Goodies

#### Git hooks

We use [Husky](https://typicode.github.io/husky/) to run git hooks with the following tools:

- [lint-staged](https://github.com/lint-staged/lint-staged) - Run Oxfmt to format staged files on commit (`pre-commit`).

#### Scripts

This repo is configured for **pnpm**.

- **`auth:generate`** - Regenerate the [auth db schema](./src/lib/db/schema/auth.schema.ts) if you've made changes to your Better Auth [config](./src/lib/auth/auth.ts).
- **`db`** - Run [drizzle-kit](https://orm.drizzle.team/docs/kit-overview) commands. (e.g. `pnpm db generate`, `pnpm db studio`)
- **`ui`** - The shadcn/ui CLI. (e.g. `pnpm ui add button`)
- **`format`**, **`lint`** - Run Oxfmt and Oxlint, or both via `pnpm check`.
- **`deps`** - Selectively upgrade dependencies via taze.

#### Utilities

- [`auth/middleware.ts`](./src/lib/auth/middleware.ts) - Sample middleware for forcing authentication on server functions. (see [#5](https://github.com/mugnavo/tanstarter/issues/5#issuecomment-2615905686) and [#17](https://github.com/mugnavo/tanstarter/issues/17#issuecomment-2853482062))
- [`theme-toggle.tsx`](./src/components/theme-toggle.tsx), [`theme-provider.tsx`](./src/components/theme-provider.tsx) - A theme toggle and provider for toggling between light and dark mode. ([#7](https://github.com/mugnavo/tanstarter/issues/7#issuecomment-3141530412))

## License

Code in this template is public domain via [Unlicense](./LICENSE). Feel free to remove or replace for your own project.

## Also check out

- [@tanstack/intent](https://tanstack.com/intent/latest/docs/getting-started/quick-start-consumers) - Up-to-date skills for your AI agents, auto-synchronized from your installed dependencies.
- [awesome-tanstack-start](https://github.com/Balastrong/awesome-tanstack-start) - A curated list of awesome resources for TanStack Start.
- [shadcn/ui Directory](https://ui.shadcn.com/docs/directory), [MCP](https://ui.shadcn.com/docs/mcp), [shoogle.dev](https://shoogle.dev/) - Component directories & registries for shadcn/ui.
