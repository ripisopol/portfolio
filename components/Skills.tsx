import { config } from "@/lib/config";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const tagStyle: Record<string, string> = {
  s: "bg-green/10 text-green border-green/20",
  l: "bg-amber/10 text-amber border-amber/20",
  f: "bg-white/[0.04] text-dim border-white/[0.07]",
};

const legendItems = [
  { dot: "bg-green", label: "solid — use in prod" },
  { dot: "bg-amber", label: "learning — actively working with" },
  { dot: "bg-dim",   label: "familiar — read the docs at least" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-[1060px] mx-auto px-8">
        <Reveal>
          <SectionHeader
            tag="skills"
            title="What I actually know."
            sub="Honest color coding. No skill bars, no percentages, no lying."
          />
          <div className="flex flex-wrap gap-5 mb-8">
            {legendItems.map((li) => (
              <div key={li.label} className="flex items-center gap-1.5 font-mono text-[0.62rem] text-dim">
                <span className={`w-1.5 h-1.5 rounded-full ${li.dot}`} />
                {li.label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07] border border-white/[0.07]">
            {config.skills.map((cat) => (
              <div
                key={cat.name}
                className="bg-[#18181b] p-7 hover:bg-[#1f1f23] transition-colors duration-200"
              >
                <div className="text-[1.3rem] mb-3">{cat.icon}</div>
                <div className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-amber mb-4">
                  {cat.name}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.tags.map((t) => (
                    <span
                      key={t.name}
                      title={{ s: "solid", l: "learning", f: "familiar" }[t.level]}
                      className={`font-mono text-[0.6rem] px-2 py-0.5 rounded-sm border ${tagStyle[t.level]}`}
                    >
                      {t.name}
                    </span>
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
