import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/png", href: "/favicon.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;
  let statusCode: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    statusCode = String(error.status);
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto flex min-h-screen w-[92vw] max-w-5xl items-center justify-center py-10">
      <section className="w-full rounded-3xl border border-[#8db1ff30] bg-linear-to-br from-[#0a1222] via-[#0f1c30] to-[#102128] p-6 text-[#eaf1ff] shadow-[0_20px_48px_#020712cc] md:p-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#67b6ff]">
          Something went wrong
        </p>
        <h1 className="m-0 text-[clamp(2rem,6vw,3.4rem)] leading-tight">
          {message}
          {statusCode ? (
            <span className="ml-3 align-middle text-base font-semibold text-[#b7c4de]">
              HTTP {statusCode}
            </span>
          ) : null}
        </h1>
        <p className="mt-4 max-w-[65ch] text-[#b7c4de] leading-relaxed">
          {details}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="/"
            className="inline-flex items-center rounded-full bg-linear-to-br from-[#177dd7] to-[#3aa09f] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_#177dd738] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Back to Home
          </a>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center rounded-full border border-[#9ec4ff33] bg-[#0a1730c7] px-5 py-3 text-sm font-semibold text-[#d7e7ff] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Retry
          </button>
        </div>

        {stack ? (
          <details className="mt-8 rounded-2xl border border-[#9cbfff2e] bg-[#111d31] p-4">
            <summary className="cursor-pointer text-sm font-semibold text-[#d7e7ff]">
              Developer stack trace
            </summary>
            <pre className="mt-3 w-full overflow-x-auto text-xs leading-relaxed text-[#b7c4de]">
              <code>{stack}</code>
            </pre>
          </details>
        ) : null}
      </section>
    </main>
  );
}
