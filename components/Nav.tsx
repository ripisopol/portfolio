"use client";

import { useEffect, useState } from "react";
import { config } from "@/lib/config";

const links = ["about", "skills", "experience", "projects", "contact"];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-white/[0.07] bg-[#0d0d0d]/88 backdrop-blur-md">
      <div className="max-w-[1060px] mx-auto px-8 lg:px-12 h-full flex items-center justify-between">
        {/* logo */}
        <span className="font-mono text-[0.7rem] tracking-[0.06em] text-amber">
          {config.nameShort}{" "}
          <span className="text-[#484540]">// {config.domain}</span>
        </span>

        {/* links */}
        <ul className="hidden md:flex gap-9 list-none">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`font-mono text-[0.65rem] tracking-[0.1em] uppercase transition-colors duration-200 ${
                  active === id ? "text-amber" : "text-[#484540] hover:text-amber"
                }`}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>

        {/* status badge */}
        <div className="flex items-center gap-2 font-mono text-[0.62rem] text-green">
          <span className="w-[5px] h-[5px] rounded-full bg-green animate-breathe" />
          {config.status}
        </div>
      </div>
    </nav>
  );
}
