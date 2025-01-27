import MyCanvas from "@/components/3d-canvas";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <MyCanvas />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      Hello world
    </main>
  );
}
