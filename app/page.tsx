import Nav             from "@/components/Nav";
import Hero            from "@/components/Hero";
import About           from "@/components/About";
import Skills          from "@/components/Skills";
import Experience      from "@/components/Experience";
import Projects        from "@/components/Projects";
import Certifications  from "@/components/Certifications";
import Contact         from "@/components/Contact";
// import References      from "@/components/References";  // ← uncomment when ready
import Footer          from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <hr className="border-none border-t border-white/[0.07] m-0" />
        <About />
        <hr className="border-none border-t border-white/[0.07] m-0" />
        <Skills />
        <hr className="border-none border-t border-white/[0.07] m-0" />
        <Experience />
        <hr className="border-none border-t border-white/[0.07] m-0" />
        <Projects />
        <hr className="border-none border-t border-white/[0.07] m-0" />
        <Certifications />
        <hr className="border-none border-t border-white/[0.07] m-0" />
        <Contact />
        {/* <References /> */}
      </main>
      <Footer />
    </>
  );
}
