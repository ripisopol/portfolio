import { config } from "@/lib/config";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const { contact } = config;

  return (
    <section id="contact" className="py-24 bg-[#141416]">
      <div className="max-w-[1060px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          <Reveal>
            <SectionHeader tag="contact" title={contact.headline} sub={contact.subtext} />
            <div className="flex flex-col gap-3">
              {contact.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 px-4 py-3.5 border border-white/[0.07] font-mono text-[0.7rem] tracking-[0.04em] text-muted hover:border-amber hover:text-amber hover:bg-amber/[0.06] transition-all duration-200"
                >
                  <span className="text-dim group-hover:text-amber transition-colors duration-200">{l.icon}</span>
                  {l.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-[#1c1c1f] border border-white/[0.13] p-7 mt-[3.75rem]">
              <div className="font-mono text-[0.58rem] tracking-[0.14em] uppercase text-dim mb-3">
                availability
              </div>
              <div className="font-serif italic text-[1.4rem] text-green mb-3">
                {contact.availability}
              </div>
              <p className="text-[0.83rem] text-muted leading-[1.7]">{contact.availDesc}</p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
