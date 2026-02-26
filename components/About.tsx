import { config } from "@/lib/config";
import Reveal from "./Reveal";

export default function About() {
  const { about, name, initials, currentFocus, location, degree, domain, status } = config;

  return (
    <section id="about" className="py-24 bg-[#1f1f23]">
      <div className="max-w-[1060px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-16 md:gap-20 items-start">

          {/* sticky identity card */}
          <Reveal>
            <div className="md:sticky md:top-20 bg-[#27272a] border border-white/[0.13] p-6">
              <div className="w-14 h-14 border border-amber flex items-center justify-center font-serif italic text-[1.4rem] text-amber mb-4">
                {initials}
              </div>
              <div className="font-serif italic text-[1.1rem] text-[#f0ece4] mb-0.5">{name}</div>
              <div className="font-mono text-[0.62rem] tracking-[0.08em] uppercase text-amber mb-5">{currentFocus}</div>
              <table className="w-full border-collapse text-[0.62rem] font-mono">
                <tbody>
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
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* content */}
          <Reveal delay={0.1}>

            {/* section tag — just the small label, no duplicate title */}
            <div className="flex items-center gap-3 font-mono text-[0.63rem] tracking-[0.18em] uppercase text-amber mb-4">
              <span className="inline-block w-5 h-px bg-amber" />
              about
            </div>

            {/* headline — rendered ONCE */}
            <h2 className="font-serif italic text-[clamp(2rem,3.8vw,3rem)] leading-[1.1] tracking-[-0.01em] text-[#f0ece4] mb-8">
              {about.headlineLines.map((l, i) => (
                <span key={i} className="block">{l}</span>
              ))}
            </h2>

            <div className="space-y-4 mb-7">
              {about.paragraphs.map((para, i) => (
                <p key={i} className="text-[0.92rem] text-muted leading-[1.85]">{para}</p>
              ))}
            </div>

            <div className="border-l-2 border-amber pl-5 py-3 bg-amber/[0.08] mb-7">
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
