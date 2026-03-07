"use client";

import { useEffect, useState } from "react";
import { config } from "@/lib/config";

const links = ["about", "skills", "experience", "projects", "certifications", "contact"];

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07] bg-[#18181b]/90 backdrop-blur-md">
      <nav className="max-w-[1060px] mx-auto px-4 sm:px-8 lg:px-12 h-14 flex items-center justify-between">
        {/* logo */}
        <span className="font-mono text-[0.7rem] tracking-[0.06em] text-amber">
          {config.nameShort}{" "}
          <span className="text-[#52524e]">// {config.domain}</span>
        </span>

        {/* desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`font-mono text-[0.62rem] tracking-[0.1em] uppercase transition-colors duration-200 ${
                  active === id ? "text-amber" : "text-[#52524e] hover:text-amber"
                }`}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>

        {/* notes link + status badge / mobile toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-5">
            <a
              href="/blog"
              className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-[#52524e] hover:text-amber transition-colors duration-200"
            >
              notes
            </a>
            <div className="hidden md:flex items-center gap-2 font-mono text-[0.62rem] text-green">
              <span className="w-[5px] h-[5px] rounded-full bg-green animate-breathe" />
              {config.status}
            </div>
          </div>

          {/* mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-8 h-8 border border-white/[0.12] text-dim hover:text-amber hover:border-amber transition-colors"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="flex flex-col gap-[3px]">
              <span
                className={`block w-3.5 h-[1px] bg-current transition-transform ${
                  open ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-3.5 h-[1px] bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-3.5 h-[1px] bg-current transition-transform ${
                  open ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.07] bg-[#18181b]/95 backdrop-blur-md">
          <div className="max-w-[1060px] mx-auto px-4 sm:px-8 pb-3 pt-2 flex flex-col gap-1.5">
            {links.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block font-mono text-[0.7rem] tracking-[0.14em] uppercase py-1.5 ${
                  active === id ? "text-amber" : "text-[#d4d4d8]"
                }`}
              >
                {id}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between">
              <a
                href="/blog"
                className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-[#52524e] hover:text-amber transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                notes
              </a>
              <div className="flex items-center gap-2 font-mono text-[0.62rem] text-green">
                <span className="w-[5px] h-[5px] rounded-full bg-green animate-breathe" />
                {config.status}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
