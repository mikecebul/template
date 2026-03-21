# Docker and CI Testing

This project ships with a production `Dockerfile` and a GitHub Actions deploy workflow. This guide covers how to test both safely before relying on Dokploy.

## Local Docker build

Build the production image:

```bash
docker build -t template-dokploy-test .
```

This should succeed without passing application secrets into `docker build`.

## Local migration test

Start the local Postgres service:

```bash
docker compose up -d db
```

Create a fresh test database on the same Postgres instance:

```bash
docker compose exec db psql -U postgres -c 'CREATE DATABASE mikecebul_website_test;'
```

Run migrations from the built image:

```bash
docker run --rm \
  -e DATABASE_URL=postgresql://postgres:password@host.docker.internal:5432/mikecebul_website_test \
  template-dokploy-test \
  pnpm db:migrate:prod
```

Run the same command a second time. The second run should also succeed, which confirms the migration journal is being tracked correctly for that database.

If you want to inspect the migration state directly:

```bash
docker compose exec db psql -U postgres -d mikecebul_website_test \
  -c 'select * from drizzle.__drizzle_migrations;'
```

## Local app smoke test

Start the app container against the test database:

```bash
docker run --rm -p 3000:3000 \
  -e APP_BASE_URL=http://localhost:3000 \
  -e DATABASE_URL=postgresql://postgres:password@host.docker.internal:5432/mikecebul_website_test \
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

If you point the migration command at an older database that already has the auth tables but does not have Drizzle migration records, Postgres will error with messages like `relation "account" already exists`.

That means the schema was created before committed Drizzle migrations were introduced. For testing, prefer a fresh database such as `mikecebul_website_test`.

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
4. Optionally run the migration smoke test against a disposable database.
5. Keep the existing deploy workflow limited to `main` or protected releases.

## GitHub Secrets used by deploy

The deploy workflow expects:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `DOKPLOY_DEPLOY_HOOK`

Application secrets such as `DATABASE_URL`, `BETTER_AUTH_SECRET`, and provider credentials should stay in Dokploy runtime configuration, not in GitHub Actions build steps.
