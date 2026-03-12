import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "GSC LSP for VS Code | Fast GSC Language Support";
  const description =
    "GSC LSP delivers 980+ engine built-ins, 18,000+ indexed symbols, and fast project-aware navigation for GSC scripting in VS Code.";

  return [
    { title },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content:
        "GSC, GSC LSP, VS Code extension, language server, game scripting, IntelliSense",
    },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export default function Home() {
  return (
    <main className="mx-auto grid w-[92vw] max-w-270 gap-9 px-0 pb-20 pt-8 md:pt-18">
      <section className="animate-[reveal-up_0.65s_ease-out_both] rounded-3xl border border-[#8db1ff30] bg-linear-to-br from-[#0a1222] via-[#0f1c30] to-[#102128] p-6 shadow-[0_20px_48px_#020712cc] md:p-12">
        <p className="mb-3 text-[0.73rem] font-bold uppercase tracking-[0.16em] text-[#67b6ff]">
          BBE Tools
        </p>
        <h1 className="m-0 text-balance text-[clamp(2rem,5.5vw,4rem)] leading-[1.05] text-[#eaf1ff]">
          GSC LSP
        </h1>
        <p className="mt-4 max-w-[68ch] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-[#b7c4de]">
          A high-performance Language Server for GSC scripting, featuring deep
          engine integration and lightning-fast symbol indexing.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-br from-[#177dd7] to-[#3aa09f] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_#177dd738] transition-transform duration-200 hover:-translate-y-0.5"
            href="https://marketplace.visualstudio.com/items?itemName=bbe-tools.gsclsp"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 shrink-0 opacity-85"
            >
              <path
                d="M12 4v10m0 0 4-4m-4 4-4-4M5 18h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Install Extension
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-[#9ec4ff33] bg-[#0a1730c7] px-5 py-3 text-sm font-semibold text-[#d7e7ff] transition-transform duration-200 hover:-translate-y-0.5"
            href="https://github.com/Lierrmm/GSCLSP/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 shrink-0 opacity-80"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.8-1.6 6.8-7.3A5.7 5.7 0 0 0 20.2 4a5.3 5.3 0 0 0-.1-4S18.9-.4 16 1.6a13.5 13.5 0 0 0-7 0C6.1-.4 4.9 0 4.9 0a5.3 5.3 0 0 0-.1 4A5.7 5.7 0 0 0 3.2 8c0 5.7 3.5 6.9 6.8 7.3a3.5 3.5 0 0 0-1 2.7v4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            View Source
          </a>
        </div>
      </section>

      <section id="features" className="grid gap-4 md:grid-cols-3">
        <article className="animate-[reveal-up_0.7s_ease-out_both] rounded-2xl border border-[#84aefb2b] bg-[#0d1727cc] p-4 shadow-[0_10px_30px_#020812ab]">
          <h2 className="m-0 text-lg text-[#eaf1ff]">980+ Engine Built-ins</h2>
          <p className="mt-2 text-[#b7c4de] leading-relaxed">
            Full support for engine functions with context-aware auto-completion
            directly inside your scripts.
          </p>
        </article>

        <article className="animate-[reveal-up_0.7s_ease-out_110ms_both] rounded-2xl border border-[#84aefb2b] bg-[#0d1727cc] p-4 shadow-[0_10px_30px_#020812ab]">
          <h2 className="m-0 text-lg text-[#eaf1ff]">
            18,000+ Symbols Indexed
          </h2>
          <p className="mt-2 text-[#b7c4de] leading-relaxed">
            Instantly browse game symbols and function definitions for faster
            coding and reduced lookup time, all with custom dump support.
          </p>
        </article>

        <article className="animate-[reveal-up_0.7s_ease-out_210ms_both] rounded-2xl border border-[#84aefb2b] bg-[#0d1727cc] p-4 shadow-[0_10px_30px_#020812ab]">
          <h2 className="m-0 text-lg text-[#eaf1ff]">Workspace Intelligence</h2>
          <p className="mt-2 text-[#b7c4de] leading-relaxed">
            Understands your project layout for smooth go-to-definition,
            references, and navigation flows.
          </p>
        </article>
      </section>

      <section
        id="why-it-matters"
        className="grid gap-4 rounded-3xl border border-[#8db1ff30] bg-linear-to-br from-[#0a1324] to-[#0e1a2f] p-6 shadow-[0_16px_40px_#020712cc]"
      >
        <div>
          <h2 className="m-0 text-[clamp(1.4rem,3vw,2rem)] text-[#eaf1ff]">
            Engine-aware tooling without the lag
          </h2>
          <p className="mt-3 text-[#b7c4de] leading-relaxed">
            GSC Language Support is built to keep pace with large game script
            workspaces. You get the confidence of deep engine understanding plus
            the speed to stay in flow while editing.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-[#9cbfff2e] bg-[#111d31] p-4 text-center">
            <strong className="block text-[1.55rem] leading-tight text-[#eaf1ff]">
              Zero-Setup
            </strong>
            <span className="mt-1 block text-sm text-[#b7c4de]">
              Works out of the box
            </span>
          </div>
          <div className="rounded-xl border border-[#9cbfff2e] bg-[#111d31] p-4 text-center">
            <strong className="block text-[1.55rem] leading-tight text-[#eaf1ff]">
              Engine-Aware
            </strong>
            <span className="mt-1 block text-sm text-[#b7c4de]">
              Smart completions in context
            </span>
          </div>
          <div className="rounded-xl border border-[#9cbfff2e] bg-[#111d31] p-4 text-center">
            <strong className="block text-[1.55rem] leading-tight text-[#eaf1ff]">
              Navigation
            </strong>
            <span className="mt-1 block text-sm text-[#b7c4de]">
              Definition and references flow
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
