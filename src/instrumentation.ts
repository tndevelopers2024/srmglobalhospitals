import type { Instrumentation } from "next";

/**
 * Server-side observability hook.
 *
 * `onRequestError` fires whenever the Next.js server captures an error during
 * rendering or in a route handler. Right now it writes a structured line to
 * stdout, which is what most hosts (Vercel, Cloud Run, a plain Node process
 * behind pm2) collect by default — so production errors are greppable from day
 * one rather than being swallowed.
 *
 * When an error tracker is chosen (Sentry, Datadog, Better Stack…), forward
 * from here: it is the single server-side entry point for all of them.
 */
export const onRequestError: Instrumentation.onRequestError = (
  err,
  request,
  context,
) => {
  const error = err instanceof Error ? err : new Error(String(err));
  const digest =
    typeof err === "object" && err !== null && "digest" in err
      ? String((err as { digest?: unknown }).digest)
      : undefined;

  console.error(
    JSON.stringify({
      level: "error",
      source: "onRequestError",
      message: error.message,
      digest,
      stack: error.stack,
      path: request.path,
      method: request.method,
      routerKind: context.routerKind,
      routePath: context.routePath,
      routeType: context.routeType,
      renderSource: context.renderSource,
      timestamp: new Date().toISOString(),
    }),
  );
};
