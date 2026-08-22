import type { Route } from "./+types/home";
import {
  ConfigExample,
  EditorShowcase,
  ExternalLinkButton,
  FeatureCard,
} from "../components/home-sections";

// oxlint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  const title = "GSC LSP for VS Code | Language Support for GSC Scripts";
  const description =
    "GSC LSP is an open-source .NET language server and VS Code client for GSC and GSH scripts, with project indexing and configurable game data.";

  return [
    { title },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content: "GSC, GSC LSP, VS Code extension, language server, game scripting, IntelliSense",
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
    <main className="mx-auto grid w-[92vw] max-w-300 gap-9 px-0 pb-20 pt-8 md:pt-18">
      <section className="animate-[reveal-up_0.65s_ease-out_both] rounded border border-[#d6a18a38] bg-linear-to-br from-[#26201e] via-[#252625] to-[#1d2926] p-6 shadow-[0_20px_48px_#080908aa] md:p-12">
        <p className="mb-3 text-[0.73rem] font-bold uppercase tracking-[0.16em] text-[#67b6ff]">
          VS Code Extension
        </p>
        <h1 className="m-0 text-balance text-[clamp(2rem,5.5vw,4rem)] leading-[1.05] text-[#f2eee5]">
          GSC LSP
        </h1>
        <p className="mt-4 max-w-[68ch] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-[#c4bdb2]">
          GSC Language Server Protocol brings language tooling to GSC and GSH scripts through a .NET
          language server and a TypeScript VS Code client.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ExternalLinkButton
            href="https://marketplace.visualstudio.com/items?itemName=bbe-tools.gsclsp"
            variant="primary"
          >
            Install from Marketplace
          </ExternalLinkButton>
          <ExternalLinkButton href="https://github.com/Lierrmm/GSCLSP/">
            Explore on GitHub
          </ExternalLinkButton>
          <ExternalLinkButton href="https://discord.gg/r7QRHcpuPs" variant="community">
            Join Discord
          </ExternalLinkButton>
        </div>
      </section>

      <EditorShowcase />

      <section id="features" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard title="GSC and GSH support" delay="">
          Work with the script file types provided by the VS Code extension, including syntax
          highlighting and snippets.
        </FeatureCard>
        <FeatureCard title="Project-aware indexing" delay="110ms">
          The core libraries handle GSC parsing and indexing so language features can understand
          your project as it grows.
        </FeatureCard>
        <FeatureCard title="Configurable game data" delay="210ms">
          Select a target game and point the extension at a dump folder when your project needs
          custom engine data.
        </FeatureCard>
        <FeatureCard title="Hover documentation">
          Hover functions, macros, variables, and file paths to see signatures, source lines, and
          comments from the definition.
        </FeatureCard>
        <FeatureCard title="Actionable diagnostics">
          Catch unresolved calls, missing semicolons, invalid built-in arguments, recursive
          functions, and other script issues while you work.
        </FeatureCard>
        <FeatureCard title="Code actions">
          Resolve an unknown function with an include suggestion or fix a variable that shadows a
          namespace directly from the editor.
        </FeatureCard>
      </section>

      <ConfigExample />
    </main>
  );
}
