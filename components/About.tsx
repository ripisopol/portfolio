import { config } from "@/lib/config";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  const { about, name, initials, currentFocus, location, degree, domain, status } = config;

  return (
    <section id="about" className="py-24 bg-[#141416]">
      <div className="max-w-[1060px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-16 md:gap-20 items-start">

          {/* sticky card */}
          <Reveal>
            <div className="md:sticky md:top-20 bg-[#1c1c1f] border border-white/[0.13] p-6">
              <div className="w-14 h-14 border border-amber flex items-center justify-center font-serif italic text-[1.4rem] text-amber mb-4">
                {initials}
              </div>
              <div className="font-serif italic text-[1.1rem] text-[#e6e2da] mb-0.5">{name}</div>
              <div className="font-mono text-[0.62rem] tracking-[0.08em] uppercase text-amber mb-5">{currentFocus}</div>
              <table className="w-full border-collapse text-[0.62rem] font-mono">
                {[
                  ["degree",   degree],
                  ["location", location],
                  ["focus",    "DevOps / Infra"],
                  ["status",   `● ${status}`],
                  ["server",   domain],
                ].map(([k, v]) => (
                  <tr key={k} className="border-t border-white/[0.07]">
                    <td className="py-2 pr-3 text-dim w-[46%]">{k}</td>
                    <td className={`py-2 ${k === "status" ? "text-green" : "text-muted"}`}>{v}</td>
                  </tr>
                ))}
              </table>
            </div>
          </Reveal>

          {/* content */}
          <Reveal delay={0.1}>
            <SectionHeader tag="about" title={about.headlineLines.join("\n").replace("\n", " ")} />

            {/* override title to be multiline */}
            <div className="-mt-8 mb-8">
              <h2 className="font-serif italic text-[clamp(2rem,3.8vw,3rem)] leading-[1.1] tracking-[-0.01em] text-[#e6e2da]">
                {about.headlineLines.map((l, i) => (
                  <span key={i} className="block">{l}</span>
                ))}
              </h2>
            </div>

            <div className="space-y-4">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-[0.92rem] text-muted leading-[1.85]">{p}</p>
              ))}
            </div>

            <div className="border-l-2 border-amber pl-5 py-3 bg-amber/[0.08] my-7">
              <p className="font-mono text-[0.74rem] text-muted leading-[1.7] before:content-['//\00a0'] before:text-amber">
                {about.honestQuote}
              </p>
            </div>

            <p className="text-[0.92rem] text-muted leading-[1.85]">{about.closing}</p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
