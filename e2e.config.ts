import type { E2EConfig } from 'e2e';
import { web } from '@e2e-dev/web';
import { github } from '@e2e-dev/github';
import { gateway } from 'ai';

// Set APP_URL to test a deployed app, such as a Vercel preview URL.
// Without it, the runner tests the local dev server.
const appUrl = process.env.APP_URL;
// Lets the browser past Vercel Deployment Protection on preview and unreleased deployments.
const bypassSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

export default {
  // The Vercel AI Gateway serves the model and reads AI_GATEWAY_API_KEY, or the OIDC token of a linked Vercel project.
  // Only tests that use `agent` need it; tests/deterministic.e2e.ts runs without one.
  agents: {
    default: {
      model: gateway('openai/gpt-6-luna-fast'),
      system: 'You are a thorough QA agent. Verify every outcome.',
    },
  },
  // On GitHub Actions, posts the results as a pull request comment and writes them to the job summary.
  reporters: ['list', github()],
  targets: [
    {
      engine: web(bypassSecret ? { headers: { 'x-vercel-protection-bypass': bypassSecret } } : {}),
      app: {
        // The replay cache in .e2e/cache is keyed by the app's identity and environment, which
        // default to its URL. Every Vercel deployment has a new URL, so a fixed identity lets
        // local runs and deployment runs share one cache.
        identity: 'e2e-vercel',
        environment: 'test',
        ...(appUrl
          ? { url: appUrl }
          : {
              url: 'http://localhost:3100',
              // The runner starts the Next.js dev server and waits for the URL to answer.
              // A server you already started on that port is reused.
              command: { executable: 'npm', args: ['run', 'dev'], reuseExisting: true },
            }),
      },
    },
  ],
} satisfies E2EConfig;
