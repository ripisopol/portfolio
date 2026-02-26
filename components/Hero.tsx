"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/config";

const up = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

const statusColor: Record<string, string> = {
  green: "bg-green",
  amber: "bg-amber",
  red:   "bg-red-500",
};

export default function Hero() {
  const { hero, careerPath, currentFocus } = config;

  return (
    <section id="hero" className="min-h-screen pt-14 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
      {/* ── Left ── */}
      <div className="relative flex flex-col justify-center px-0 py-20 lg:pr-12 border-r border-white/[0.07]">
        {/* animated grid bg */}
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-[480px]">
          <motion.p
            {...up(0.15)}
            className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-amber mb-6 before:content-['$_'] before:text-[#484540]"
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="font-serif italic leading-[1.0] tracking-[-0.01em] text-[clamp(3rem,5.5vw,5rem)] mb-2">
            {hero.titleLines.map((line, i) => (
              <motion.span
                key={i}
                {...up(0.3 + i * 0.14)}
                className={`block ${i > 0 ? "text-amber" : "text-[#e6e2da]"}`}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            {...up(0.45)}
            className="font-mono text-[0.85rem] text-muted mb-9"
          >
            <span className="text-amber">{currentFocus}</span>
          </motion.p>

          <motion.p {...up(0.58)} className="text-[0.95rem] text-muted leading-[1.8] mb-10">
            {hero.bio.split(hero.boldInBio).map((part, i) =>
              i === 0 ? part : (
                <>
                  <strong className="text-[#e6e2da] font-medium" key="bold">{hero.boldInBio}</strong>
                  {part}
                </>
              )
            )}
          </motion.p>

          <motion.div {...up(0.7)} className="flex gap-3 flex-wrap">
            <a
              href={hero.cta1.href}
              className="font-mono text-[0.7rem] tracking-[0.1em] uppercase px-6 py-3 bg-amber text-[#0d0d0d] border border-amber transition-all duration-200 hover:bg-transparent hover:text-amber hover:shadow-[0_0_18px_rgba(232,160,48,0.22)]"
            >
              {hero.cta1.label} →
            </a>
            <a
              href={hero.cta2.href}
              className="font-mono text-[0.7rem] tracking-[0.1em] uppercase px-6 py-3 border border-white/[0.13] text-muted transition-all duration-200 hover:border-amber hover:text-amber"
            >
              {hero.cta2.label}
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Right ── */}
      <div className="hidden lg:flex flex-col justify-center pl-12 gap-6">
        {/* career card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="bg-[#1c1c1f] border border-white/[0.13] rounded-sm overflow-hidden font-mono text-[0.72rem]"
        >
          {/* card header */}
          <div className="bg-[#141416] border-b border-white/[0.07] px-4 py-2.5 flex items-center justify-between">
            <span className="text-[0.62rem] tracking-[0.05em] text-muted">{careerPath.label}</span>
            <span className="text-[0.58rem] text-green">● live</span>
          </div>

          {/* steps */}
          <div className="px-5 py-4 flex flex-col">
            {careerPath.steps.map((step, i) => (
              <div
                key={i}
                className={`grid grid-cols-[22px_1fr] gap-2.5 py-2.5 ${
                  i < careerPath.steps.length - 1 ? "border-b border-white/[0.07]" : ""
                }`}
              >
                <span className="text-[0.95rem] leading-snug">{step.icon}</span>
                <div>
                  <div className="text-[#e6e2da] text-[0.72rem] mb-0.5">
                    <em className="not-italic text-amber text-[0.65rem]">{step.company} </em>
                    {step.role}
                  </div>
                  <div className="text-[#484540] text-[0.62rem] leading-snug">
                    {step.note}
                    {step.tag && (
                      <span className="text-green ml-1.5">#{step.tag}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* footer */}
          <div className="border-t border-white/[0.07] px-5 py-2.5 flex items-center gap-2 text-[0.65rem] text-muted">
            <span className="text-amber">→</span>
            {careerPath.nextLine}
          </div>
        </motion.div>

        {/* stat chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          {hero.stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-1.5 font-mono text-[0.6rem] tracking-[0.05em] px-2.5 py-1 border border-white/[0.13] text-dim rounded-sm"
            >
              <span className={`w-[5px] h-[5px] rounded-full ${statusColor[s.color]}`} />
              {s.label}: {s.value}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
