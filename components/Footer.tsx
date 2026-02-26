import { config } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-8 py-6 flex items-center justify-between flex-wrap gap-4 max-w-[1060px] mx-auto">
      <div className="font-mono text-[0.6rem] text-dim">
        <span className="text-amber">{config.nameShort}</span>
        {" "}— Next.js 15 · Docker · GitHub Actions
      </div>
      <div className="font-mono text-[0.58rem] text-dim">
        © {new Date().getFullYear()} {config.name}
      </div>
    </footer>
  );
}
