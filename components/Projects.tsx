import { config } from "@/lib/config";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const statusStyle: Record<string, string> = {
  live: "bg-green/10 text-green border-green/25",
  wip:  "bg-amber/10 text-amber border-amber/25",
  idea: "bg-white/[0.04] text-dim border-white/[0.07]",
};
const statusLabel: Record<string, string> = {
  live: "live", wip: "in progress", idea: "idea",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-[1060px] mx-auto px-8">
        <Reveal>
          <SectionHeader
            tag="projects"
            title="Things I've actually built."
            sub="Real servers. Real pipelines. No todo apps. (I mean it.)"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-px bg-white/[0.07] border border-white/[0.07]">
            {config.projects.map((p, i) => (
              <div
                key={i}
                className="group bg-[#0d0d0d] px-8 py-9 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start border-l-2 border-transparent hover:border-amber hover:bg-[#141416] transition-all duration-200"
              >
                <div>
                  <div className="font-mono text-[0.58rem] tracking-[0.1em] text-dim mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-serif italic text-[1.35rem] text-[#e6e2da] mb-2 group-hover:text-amber transition-colors duration-200">
                    {p.name}
                  </div>
                  <p className="text-[0.86rem] text-muted leading-[1.7] max-w-[600px] mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="font-mono text-[0.58rem] text-dim bg-[#1c1c1f] border border-white/[0.07] px-2 py-0.5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`font-mono text-[0.58rem] tracking-[0.08em] uppercase px-2.5 py-1 rounded-sm border whitespace-nowrap ${statusStyle[p.status]}`}>
                    {statusLabel[p.status]}
                  </span>
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[0.68rem] text-dim border border-white/[0.07] w-8 h-8 flex items-center justify-center hover:text-amber hover:border-amber transition-all duration-200"
                    >
                      {l.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
