"use client";

import { useState } from "react";
import { config } from "@/lib/config";
import Reveal from "./Reveal";

const statusStyle: Record<string, { label: string; classes: string }> = {
  done:       { label: "completed",   classes: "text-green border-green/40 bg-green/10" },
  inprogress: { label: "in progress", classes: "text-amber border-amber/40 bg-amber/10" },
  expired:    { label: "expired",     classes: "text-dim border-white/10 bg-white/[0.03]" },
};

function getLinkType(url: string): "external" | "pdf" | "image" | "none" {
  if (!url) return "none";
  if (url.startsWith("http")) return "external";
  if (url.match(/\.pdf$/i)) return "pdf";
  if (url.match(/\.(png|jpg|jpeg|webp)$/i)) return "image";
  return "external";
}

function CertModal({
  cert,
  onClose,
}: {
  cert: { name: string; credUrl: string; fileUrl?: string };
  onClose: () => void;
}) {
  // prefer fileUrl for modal, credUrl as fallback
  const url = cert.fileUrl || cert.credUrl;
  const type = getLinkType(url);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#27272a] border border-white/[0.13] w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* modal header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.07] shrink-0">
          <span className="font-mono text-[0.7rem] text-muted truncate pr-4">{cert.name}</span>
          <button
            onClick={onClose}
            className="font-mono text-[0.7rem] text-dim hover:text-amber transition-colors shrink-0"
          >
            ✕ close
          </button>
        </div>

        {/* modal content */}
        <div className="flex-1 overflow-auto min-h-0">
          {type === "image" && (
            <img
              src={url}
              alt={cert.name}
              className="w-full h-auto object-contain"
            />
          )}
          {type === "pdf" && (
            <iframe
              src={url}
              className="w-full h-full min-h-[70vh]"
              title={cert.name}
            />
          )}
        </div>

        {/* open in new tab */}
        <div className="px-5 py-2.5 border-t border-white/[0.07] shrink-0">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.65rem] text-muted hover:text-amber transition-colors"
          >
            open in new tab ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const { certifications, learning, languages, openTo } = config;
  const [modalCert, setModalCert] = useState<typeof certifications[0] | null>(null);

  function handleCertClick(cert: typeof certifications[0]) {
    const url = (cert as any).fileUrl || cert.credUrl;
    const type = getLinkType(url);
    if (type === "external") {
      window.open(url, "_blank", "noopener noreferrer");
    } else if (type === "pdf" || type === "image") {
      setModalCert(cert);
    }
    // type === "none" → do nothing
  }

  return (
    <>
      {/* ── Lightbox Modal ── */}
      {modalCert && (
        <CertModal
          cert={modalCert as any}
          onClose={() => setModalCert(null)}
        />
      )}

      <section id="certifications" className="py-24 bg-[#18181b]">
        <div className="max-w-[1060px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20">

            {/* LEFT — certifications */}
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-[0.63rem] tracking-[0.18em] uppercase text-amber mb-4">
                <span className="inline-block w-5 h-px bg-amber" />
                certifications
              </div>
              <h2 className="font-serif italic text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] text-[#f0ece4] mb-8">
                Credentials &amp;<br />what&apos;s in the pipeline.
              </h2>

              <div className="flex flex-col gap-3">
                {certifications.map((cert, i) => {
                  const s = statusStyle[cert.status];
                  const url = (cert as any).fileUrl || cert.credUrl;
                  const linkType = getLinkType(url);
                  const isClickable = linkType !== "none";

                  return (
                    <div
                      key={i}
                      onClick={() => isClickable && handleCertClick(cert)}
                      className={`border border-white/[0.09] bg-[#1f1f23] p-4 flex items-start justify-between gap-4 transition-all duration-200 ${
                        isClickable
                          ? "cursor-pointer hover:border-amber/40 hover:bg-[#27272a] group"
                          : "opacity-70"
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-[0.88rem] text-[#f0ece4] font-medium mb-0.5 leading-snug flex items-center gap-2">
                          <span className={isClickable ? "group-hover:text-amber transition-colors" : ""}>
                            {cert.name}
                          </span>
                          {isClickable && (
                            <span className="font-mono text-[0.6rem] text-dim group-hover:text-amber transition-colors">
                              {linkType === "external" ? "↗" : "⊞ view"}
                            </span>
                          )}
                        </div>
                        <div className="font-mono text-[0.65rem] text-dim">
                          {cert.issuer}{cert.year ? ` · ${cert.year}` : ""}
                        </div>
                      </div>
                      <span className={`font-mono text-[0.58rem] tracking-[0.06em] uppercase px-2 py-0.5 border rounded-sm shrink-0 mt-0.5 ${s.classes}`}>
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* RIGHT — currently learning + languages + open to */}
            <div className="flex flex-col gap-10">

              {/* currently learning */}
              <Reveal delay={0.1}>
                <div className="flex items-center gap-3 font-mono text-[0.63rem] tracking-[0.18em] uppercase text-amber mb-4">
                  <span className="inline-block w-5 h-px bg-amber" />
                  currently learning
                </div>
                <p className="font-serif italic text-[1.1rem] text-[#f0ece4] mb-5">
                  {learning.headline}
                </p>
                <div className="flex flex-col">
                  {learning.items.map((item, i) => (
                    <div key={i} className="grid grid-cols-[140px_1fr] gap-3 py-2.5 border-t border-white/[0.07] first:border-t-0">
                      <span className="font-mono text-[0.7rem] text-amber">{item.topic}</span>
                      <span className="text-[0.8rem] text-muted leading-snug">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* languages + open to */}
              <Reveal delay={0.15}>
                <div className="grid grid-cols-2 gap-8">

                  <div>
                    <div className="flex items-center gap-2 font-mono text-[0.63rem] tracking-[0.18em] uppercase text-amber mb-4">
                      <span className="inline-block w-4 h-px bg-amber" />
                      languages
                    </div>
                    <div className="flex flex-col">
                      {languages.map((l, i) => (
                        <div key={i} className="py-2 border-t border-white/[0.07] first:border-t-0">
                          <div className="text-[0.82rem] text-[#f0ece4]">{l.lang}</div>
                          <div className="font-mono text-[0.62rem] text-dim">{l.level}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-mono text-[0.63rem] tracking-[0.18em] uppercase text-amber mb-4">
                      <span className="inline-block w-4 h-px bg-amber" />
                      open to
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {openTo.map((role, i) => (
                        <div key={i} className="font-mono text-[0.68rem] text-muted leading-snug py-0.5">
                          <span className="text-amber mr-1.5">→</span>{role}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
