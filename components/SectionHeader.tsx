interface Props {
  tag: string;
  title: string;
  sub?: string;
}

export default function SectionHeader({ tag, title, sub }: Props) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 font-mono text-[0.63rem] tracking-[0.18em] uppercase text-amber mb-2">
        <span className="inline-block w-5 h-px bg-amber" />
        {tag}
      </div>
      <h2 className="font-serif italic text-[clamp(2rem,3.8vw,3rem)] leading-[1.1] tracking-[-0.01em] text-[#f0ece4] mb-3">
        {title}
      </h2>
      {sub && (
        <p className="text-[0.9rem] text-muted leading-[1.75] max-w-[500px]">{sub}</p>
      )}
    </div>
  );
}
