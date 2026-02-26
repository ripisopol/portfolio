import { notFound }   from "next/navigation";
import Link            from "next/link";
import Nav             from "@/components/Nav";
import Footer          from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { remark }      from "remark";
import remarkHtml      from "remark-html";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml, { sanitize: false }).process(markdown);
  return result.toString();
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.content);

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-[720px] mx-auto px-8 lg:px-12">

          {/* back */}
          <Link
            href="/blog"
            className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-dim hover:text-amber transition-colors mb-10 inline-block"
          >
            ← notes
          </Link>

          {/* header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 font-mono text-[0.63rem] tracking-[0.18em] uppercase text-amber mb-4">
              <span className="inline-block w-5 h-px bg-amber" />
              {post.date}
            </div>
            <h1 className="font-serif italic text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.08] text-[#f0ece4] mb-4">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-[0.92rem] text-muted leading-[1.8] border-l-2 border-amber pl-4">
                {post.excerpt}
              </p>
            )}
            {post.tags.length > 0 && (
              <div className="flex gap-2 flex-wrap mt-4">
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
          </div>

          <hr className="border-white/[0.07] mb-10" />

          {/* post body */}
          <div
            className="prose-post"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <hr className="border-white/[0.07] mt-14 mb-8" />

          {/* footer nav */}
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-dim hover:text-amber transition-colors"
            >
              ← all notes
            </Link>
            <Link
              href="/"
              className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-dim hover:text-amber transition-colors"
            >
              portfolio →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
