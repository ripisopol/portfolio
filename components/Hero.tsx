"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/config";

const up = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

const dotColor: Record<string, string> = {
  green: "bg-green",
  amber: "bg-amber",
  red:   "bg-red-500",
};

export default function Hero() {
  const { hero, careerPath, currentFocus } = config;

  return (
    <section id="hero" className="min-h-screen pt-14 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

      {/* ── Left ── */}
      <div className="relative flex flex-col justify-center overflow-hidden border-r border-white/[0.07]">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

        <div className="relative z-10 px-8 lg:px-12 py-20">

          {/* eyebrow */}
          <motion.p {...up(0.15)}
            className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-amber mb-5 before:content-['$_'] before:text-[#484540]"
          >
            {hero.eyebrow}
          </motion.p>

          {/* title — sized to fit within the column */}
          <h1 className="font-serif italic leading-[1.05] tracking-[-0.015em] text-[clamp(1.9rem,3.2vw,3rem)] mb-3">
            {hero.titleLines.map((line, i) => (
              <motion.span key={i} {...up(0.28 + i * 0.11)}
                className={`block ${i > 0 ? "text-amber" : "text-[#e6e2da]"}`}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          {/* focus line */}
          <motion.p {...up(0.52)} className="font-mono text-[0.75rem] text-amber mb-6">
            {currentFocus}
          </motion.p>

          {/* bio */}
          <motion.p {...up(0.62)} className="text-[0.875rem] text-muted leading-[1.8] mb-8 max-w-[480px]">
            {hero.bio.split(hero.boldInBio).map((part, i) =>
              i === 0
                ? <span key={i}>{part}</span>
                : <span key={i}><strong className="text-[#e6e2da] font-medium">{hero.boldInBio}</strong>{part}</span>
            )}
          </motion.p>

          {/* CTAs */}
          <motion.div {...up(0.74)} className="flex gap-3 flex-wrap">
            <a href={hero.cta1.href}
              className="font-mono text-[0.68rem] tracking-[0.1em] uppercase px-5 py-2.5 bg-amber text-[#0d0d0d] border border-amber transition-all duration-200 hover:bg-transparent hover:text-amber hover:shadow-[0_0_20px_rgba(232,160,48,0.25)]"
            >
              {hero.cta1.label} →
            </a>
            <a href={hero.cta2.href}
              className="font-mono text-[0.68rem] tracking-[0.1em] uppercase px-5 py-2.5 border border-white/[0.15] text-muted transition-all duration-200 hover:border-amber hover:text-amber"
            >
              {hero.cta2.label}
            </a>
          </motion.div>

        </div>
      </div>

      {/* ── Right ── */}
      <div className="hidden lg:flex flex-col justify-center px-10 xl:px-14 gap-5">

        {/* career card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="bg-[#1c1c1f] border border-white/[0.13] rounded-sm overflow-hidden font-mono"
        >
          {/* bar */}
          <div className="bg-[#141416] border-b border-white/[0.07] px-4 py-2.5 flex items-center justify-between">
            <span className="text-[0.6rem] tracking-[0.05em] text-muted">{careerPath.label}</span>
            <span className="text-[0.58rem] text-green flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green animate-breathe" />
              live
            </span>
          </div>

          {/* steps */}
          <div className="px-5 py-3 flex flex-col divide-y divide-white/[0.06]">
            {careerPath.steps.map((step, i) => (
              <div key={i} className="grid grid-cols-[20px_1fr] gap-3 py-3">
                <span className="text-[0.88rem] leading-tight mt-0.5">{step.icon}</span>
                <div>
                  <div className="text-[0.69rem] text-[#e6e2da] mb-0.5 leading-snug">
                    <span className="text-amber text-[0.62rem]">{step.company} </span>
                    {step.role}
                  </div>
                  <div className="text-[0.6rem] text-[#484540] leading-snug">
                    {step.note}
                    {step.tag && <span className="text-green ml-1.5">#{step.tag}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* footer */}
          <div className="border-t border-white/[0.07] px-5 py-2.5 flex items-center gap-2 text-[0.62rem] text-muted">
            <span className="text-amber">→</span>
            {careerPath.nextLine}
          </div>
        </motion.div>

        {/* stat chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          {hero.stats.map((s) => (
            <div key={s.label}
              className="flex items-center gap-1.5 font-mono text-[0.58rem] tracking-[0.05em] px-2.5 py-1 border border-white/[0.1] text-[#484540] rounded-sm"
            >
              <span className={`w-[5px] h-[5px] rounded-full ${dotColor[s.color]}`} />
              {s.label}: {s.value}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
