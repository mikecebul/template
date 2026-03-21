# Docker and CI Testing

This project ships with a production `Dockerfile` and a GitHub Actions deploy workflow. This guide covers how to test both safely before relying on Dokploy.

## Local Docker build

Build the production image:

```bash
docker build -t template-dokploy-test .
```

This should succeed without passing application secrets into `docker build`.

## Local migration test

Create a local directory to hold the SQLite file:

```bash
mkdir -p .docker-data
```

Run migrations from the built image:

```bash
docker run --rm \
  -v "$(pwd)/.docker-data:/data" \
  -e DATABASE_URL=file:/data/app.db \
  template-dokploy-test \
  pnpm db:migrate:prod
```

Run the same command a second time. The second run should also succeed, which confirms the migration journal is being tracked correctly for that database file.

If you want to inspect the migration state directly:

```bash
ls -la .docker-data
```

## Local app smoke test

Start the app container against the test database:

```bash
docker run --rm -p 3000:3000 \
  -v "$(pwd)/.docker-data:/data" \
  -e APP_BASE_URL=http://localhost:3000 \
  -e DATABASE_URL=file:/data/app.db \
  -e BETTER_AUTH_SECRET=test-secret \
  -e CONTACT_TO_EMAIL=test@example.com \
  template-dokploy-test
```

Then verify the server responds:

```bash
curl -I http://localhost:3000
```

If you need to test login or OAuth flows, also pass:

```bash
-e GITHUB_CLIENT_ID=...
-e GITHUB_CLIENT_SECRET=...
-e GOOGLE_CLIENT_ID=...
-e GOOGLE_CLIENT_SECRET=...
```

## Expected failure case

This command should fail:

```bash
docker run --rm template-dokploy-test pnpm db:migrate:prod
```

That is expected because the migration command is runtime-only and requires `DATABASE_URL`.

## Existing database caveat

If you point the migration command at an older SQLite file that already has the auth tables but does not have Drizzle migration records, SQLite will error with messages like `table "account" already exists`.

That means the schema was created outside the committed Drizzle migrations. For testing, prefer a fresh file by removing `.docker-data/app.db*` and rerunning the migration command.

## CI workflow testing

The current workflow at [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) is a real deploy workflow:

- it logs into Docker Hub
- it pushes the image
- it triggers Dokploy

So a manual run is not a dry run.

The safest way to validate CI is:

1. Add a separate build-only workflow for pull requests and manual testing.
2. In that workflow, run `pnpm lint`.
3. Build the Docker image with `docker build -t template-dokploy-test .`.
4. Optionally run the migration smoke test against a disposable SQLite file.
5. Keep the existing deploy workflow limited to `main` or protected releases.

## GitHub Secrets used by deploy

The deploy workflow expects:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `DOKPLOY_DEPLOY_HOOK`

Application secrets such as `DATABASE_URL`, `BETTER_AUTH_SECRET`, and provider credentials should stay in Dokploy runtime configuration, not in GitHub Actions build steps.

In Dokploy, mount a persistent volume at `/data` and set `DATABASE_URL=file:/data/app.db` so the SQLite file survives redeploys and can be backed up by Dokploy volume backups.
