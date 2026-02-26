import { config } from "@/lib/config";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#141416]">
      <div className="max-w-[1060px] mx-auto px-8">
        <Reveal>
          <SectionHeader
            tag="experience"
            title="Where I've been."
            sub="IT by accident. DevOps by choice. Industrial engineer by degree — yes, really."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-px bg-white/[0.07] border border-white/[0.07]">
            {config.experience.map((e, i) => (
              <div
                key={i}
                className="group bg-[#141416] px-8 py-9 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start border-l-2 border-transparent hover:border-amber hover:bg-[#1c1c1f] transition-all duration-200"
              >
                <div>
                  <div className="font-mono text-[0.58rem] tracking-[0.1em] text-dim mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-serif italic text-[1.35rem] text-[#e6e2da] mb-1 group-hover:text-amber transition-colors duration-200">
                    {e.title}
                  </div>
                  <div className="font-mono text-[0.68rem] text-dim mb-3">
                    {e.company}
                    <span className="text-muted ml-2">· {e.period}</span>
                  </div>
                  <p className="text-[0.86rem] text-muted leading-[1.7] max-w-[600px] mb-4">{e.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <span key={t} className="font-mono text-[0.58rem] text-dim bg-[#0d0d0d] border border-white/[0.07] px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className={`font-mono text-[0.58rem] tracking-[0.08em] uppercase px-2.5 py-1 rounded-sm border whitespace-nowrap ${
                    e.type === "current"
                      ? "bg-green/10 text-green border-green/25"
                      : "bg-white/[0.04] text-dim border-white/[0.07]"
                  }`}>
                    {e.type === "current" ? "current" : "past"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
