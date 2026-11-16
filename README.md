# e2e with Vercel

A Next.js App Router greeting app, ready to deploy on Vercel, with e2e tests
that run against your local dev server or any deployment URL. It has three
locator tests and two agent tests.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fe2e-inc%2Fe2e-vercel)

![Next.js example app with the greeting "hello, Ada!"](screenshot.png)

## The tests

- [tests/deterministic.e2e.ts](tests/deterministic.e2e.ts) uses locators to
  check the form, the empty-name error, and the greeting. It needs no model.
- [tests/agentic.e2e.ts](tests/agentic.e2e.ts) asks the agent to get a
  greeting and to find the empty-name error. Each agent step is paired with a
  locator check that doesn't depend on the model.

## Agent tests and the AI Gateway

The agent uses `openai/gpt-6-luna-fast` through the
[Vercel AI Gateway](https://vercel.com/docs/ai-gateway). It reads
`AI_GATEWAY_API_KEY`. In a linked Vercel project, a `VERCEL_OIDC_TOKEN` from
`vercel env pull` works too. e2e doesn't load `.env` files, so export the
variable in your shell.

Without a key or a token, the agent tests skip and the locator tests still run.

## Run locally

Use Node 22.22.3+, 24.8+, or 26+. From this folder:

```bash
npm install
AI_GATEWAY_API_KEY="your-key" npm run test:e2e
```

The runner starts the app at `http://localhost:3100` and downloads Chromium on
the first run if needed. Leave out the key to run only the locator tests. Add
`-- --no-cache` to use fresh model calls. Results are in `.e2e/report.json`.

## Test a deployment

Set `APP_URL` to test a deployed app, such as a Vercel preview URL, instead
of the local dev server:

```bash
APP_URL="https://your-app.vercel.app" npm run test:e2e
```

See [e2e.config.ts](e2e.config.ts) and [tests/](tests/) for the setup.

## License

[MIT](LICENSE)

Last checked with e2e 0.23.1, @e2e-dev/web 0.16.0, Next.js 16.4, and Node 24.

<a href="https://e2e.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="e2e-logo-white.png">
    <img src="e2e-logo-black.png" alt="e2e" width="160">
  </picture>
</a>
