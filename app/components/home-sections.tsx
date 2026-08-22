type ExternalLinkButtonProps = {
  href: string;
  children: string;
  variant?: "primary" | "source" | "community";
};

export function ExternalLinkButton({
  href,
  children,
  variant = "source",
}: ExternalLinkButtonProps) {
  const styles = {
    primary: "bg-[#ff8066] text-[#211714] shadow-[0_12px_24px_#08090866]",
    source: "border border-[#d6a18a55] bg-[#171817cc] text-[#f2eee5]",
    community: "border border-[#9ed4c466] bg-[#17201dcc] text-[#d9eee7]",
  };

  return (
    <a
      className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${styles[variant]}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

type FeatureCardProps = {
  title: string;
  children: string;
  delay?: string;
};

export function FeatureCard({ title, children, delay }: FeatureCardProps) {
  const animation = delay ? `animate-[reveal-up_0.7s_ease-out_${delay}_both]` : "";

  return (
    <article
      className={`${animation} rounded-2xl border border-[#84aefb2b] bg-[#0d1727cc] p-4 shadow-[0_10px_30px_#020812ab]`}
    >
      <h2 className="m-0 text-lg text-[#eaf1ff]">{title}</h2>
      <p className="mt-2 text-[#b7c4de] leading-relaxed">{children}</p>
    </article>
  );
}

export function EditorShowcase() {
  return (
    <section className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="order-2 lg:order-1">
        <p className="mb-3 text-[0.73rem] font-bold uppercase tracking-[0.16em] text-[#67b6ff]">
          Inside VS Code
        </p>
        <h2 className="m-0 max-w-[18ch] text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] text-[#eaf1ff]">
          Less hunting. More scripting.
        </h2>
        <p className="mt-4 max-w-[55ch] text-[#b7c4de] leading-relaxed">
          GSCLSP understands workspace symbols and engine data together. Complete functions and
          variables as you type, inspect definitions on hover, and jump through the code that powers
          your script.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="border-l-2 border-[#47c6b0] pl-3">
            <strong className="block text-[#eaf1ff]">Context-aware completion</strong>
            <span className="text-sm text-[#8fa2c4]">
              Built-ins, locals, globals, and preprocessors
            </span>
          </div>
          <div className="border-l-2 border-[#67b6ff] pl-3">
            <strong className="block text-[#eaf1ff]">Definition and references</strong>
            <span className="text-sm text-[#8fa2c4]">
              Functions, variables, includes, and using paths
            </span>
          </div>
        </div>
      </div>
      <figure className="order-1 m-0 overflow-hidden rounded-2xl border border-[#8db1ff30] bg-[#0d1727] p-2 shadow-[0_18px_40px_#020812ab] lg:order-2">
        <img
          src="https://raw.githubusercontent.com/Lierrmm/GSCLSP/main/GSCLSP.Extension/images/completion1.png"
          alt="GSC code completion suggestions in Visual Studio Code"
          className="block h-auto w-full rounded-xl"
          loading="lazy"
        />
        <figcaption className="px-2 pb-1 pt-3 text-xs text-[#8fa2c4]">
          Completion suggestions from the GSCLSP extension
        </figcaption>
      </figure>
    </section>
  );
}

export function ConfigExample() {
  return (
    <section className="grid gap-6 rounded-3xl border border-[#8db1ff30] bg-[#0a1324cc] p-6 shadow-[0_16px_40px_#020712cc] md:p-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="mb-3 text-[0.73rem] font-bold uppercase tracking-[0.16em] text-[#47c6b0]">
          Project configuration
        </p>
        <h2 className="m-0 text-[clamp(1.5rem,3vw,2.2rem)] text-[#eaf1ff]">
          Bring the right game data to the workspace
        </h2>
        <p className="mt-3 text-[#b7c4de] leading-relaxed">
          Opening a workspace creates <code className="text-[#d7e7ff]">gsclsp.config.json</code>.
          Choose the active target game, map dump folders per game, and extend built-ins for your
          own engine patches.
        </p>
        <p className="mt-4 text-sm text-[#8fa2c4]">
          The active game controls which built-ins and dump symbols are indexed. Switching games
          swaps the configured dump automatically.
        </p>
      </div>
      <pre className="m-0 overflow-x-auto rounded-xl border border-[#9cbfff2e] bg-[#070c16] p-5 text-sm leading-relaxed text-[#b7c4de]">
        <code>
          <span className="block text-[#8fa2c4]">{"{"}</span>
          <span className="block pl-4">
            <span className="text-[#67b6ff]">&quot;game&quot;</span>:{" "}
            <span className="text-[#47c6b0]">&quot;s4&quot;</span>,
          </span>
          <span className="block pl-4">
            <span className="text-[#67b6ff]">&quot;dumpPaths&quot;</span>:{" "}
            <span className="text-[#8fa2c4]">{"{"}</span>
          </span>
          <span className="block pl-8">
            <span className="text-[#67b6ff]">&quot;iw5&quot;</span>:{" "}
            <span className="text-[#47c6b0]">&quot;D:\dumps\iw5&quot;</span>,
          </span>
          <span className="block pl-8">
            <span className="text-[#67b6ff]">&quot;s4&quot;</span>:{" "}
            <span className="text-[#47c6b0]">&quot;D:\dumps\s4&quot;</span>
          </span>
          <span className="block pl-4 text-[#8fa2c4]">{"}"},</span>
          <span className="block pl-4">
            <span className="text-[#67b6ff]">&quot;builtins&quot;</span>:{" "}
            <span className="text-[#8fa2c4]">{"{"}</span>
          </span>
          <span className="block pl-8">
            <span className="text-[#67b6ff]">&quot;s4&quot;</span>:{" "}
            <span className="text-[#8fa2c4]">{"{"}</span>
          </span>
          <span className="block pl-12">
            <span className="text-[#67b6ff]">&quot;functions&quot;</span>: [
          </span>
          <span className="block pl-16 text-[#d7e7ff]">
            {"{"} <span className="text-[#67b6ff]">&quot;name&quot;</span>:{" "}
            <span className="text-[#47c6b0]">&quot;mycustomfunc&quot;</span>,{" "}
            <span className="text-[#67b6ff]">&quot;minArgs&quot;</span>:{" "}
            <span className="text-[#f3c969]">1</span> {"}"}
          </span>
          <span className="block pl-12">]</span>
          <span className="block pl-8 text-[#8fa2c4]">{"}"}</span>
          <span className="block pl-4 text-[#8fa2c4]">{"}"}</span>
          <span className="block text-[#8fa2c4]">{"}"}</span>
        </code>
      </pre>
    </section>
  );
}
