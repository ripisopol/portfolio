import Link from "next/link";
import Nav  from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import { config } from "@/lib/config";

export const metadata = {
  title: `Notes — ${config.name}`,
  description: "Rough notes on NOC life, infrastructure, and learning in public.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-[720px] mx-auto px-8 lg:px-12">

          {/* header */}
          <div className="mb-14">
            <div className="flex items-center gap-3 font-mono text-[0.63rem] tracking-[0.18em] uppercase text-amber mb-4">
              <span className="inline-block w-5 h-px bg-amber" />
              notes
            </div>
            <h1 className="font-serif italic text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-[#f0ece4] mb-4">
              Writing when<br />something&apos;s worth writing.
            </h1>
            <p className="text-[0.88rem] text-muted leading-[1.8]">
              Not a proper blog. Just notes — on NOC life, things I&apos;ve built,
              infrastructure rabbit holes, and learning in public. Honest about
              what I know and what I&apos;m still figuring out.
            </p>
          </div>

          {/* post list */}
          {posts.length === 0 ? (
            <div className="border border-white/[0.07] p-8 text-center">
              <p className="font-mono text-[0.72rem] text-dim">
                // first post incoming. probably.
              </p>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-white/[0.07]">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group py-7 flex flex-col gap-2 hover:bg-white/[0.02] -mx-4 px-4 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-serif italic text-[1.15rem] text-[#f0ece4] leading-snug group-hover:text-amber transition-colors duration-200">
                      {post.title}
                    </h2>
                    <span className="font-mono text-[0.62rem] text-dim shrink-0 mt-1">
                      {post.date}
                    </span>
                  </div>
                  {post.excerpt && (
                    <p className="text-[0.83rem] text-muted leading-[1.7]">
                      {post.excerpt}
                    </p>
                  )}
                  {post.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap mt-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[0.58rem] tracking-[0.06em] px-2 py-0.5 border border-white/[0.09] text-dim"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}

          {/* back */}
          <div className="mt-14 pt-8 border-t border-white/[0.07]">
            <Link
              href="/"
              className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-dim hover:text-amber transition-colors"
            >
              ← back to portfolio
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
