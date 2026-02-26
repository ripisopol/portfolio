import { config } from "@/lib/config";
import Reveal from "./Reveal";

export default function References() {
  const { references } = config;

  return (
    <section id="references" className="py-16 bg-[#1f1f23] border-t border-white/[0.07]">
      <div className="max-w-[1060px] mx-auto px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[0.63rem] tracking-[0.18em] uppercase text-amber mb-6">
            <span className="inline-block w-5 h-px bg-amber" />
            references
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">

            {/* note */}
            <p className="font-serif italic text-[1.1rem] text-[#f0ece4]">
              {references.note}
            </p>

            {/* placeholder cards — shown only if items have names */}
            {references.items.some(r => r.name !== "Your Reference Name") && (
              <div className="flex flex-col gap-3">
                {references.items
                  .filter(r => r.name !== "Your Reference Name")
                  .map((ref, i) => (
                    <div key={i} className="border border-white/[0.09] bg-[#27272a] px-5 py-4 min-w-[260px]">
                      <div className="text-[0.88rem] text-[#f0ece4] font-medium mb-0.5">{ref.name}</div>
                      <div className="font-mono text-[0.65rem] text-amber mb-1">{ref.title}</div>
                      <div className="font-mono text-[0.62rem] text-dim">{ref.company}</div>
                      {ref.relation && (
                        <div className="font-mono text-[0.6rem] text-dim mt-1 opacity-60">{ref.relation}</div>
                      )}
                      {ref.contact && (
                        <a
                          href={`mailto:${ref.contact}`}
                          className="font-mono text-[0.62rem] text-muted hover:text-amber transition-colors mt-1 block"
                        >
                          {ref.contact}
                        </a>
                      )}
                    </div>
                  ))}
              </div>
            )}

          </div>
        </Reveal>
      </div>
    </section>
  );
}
