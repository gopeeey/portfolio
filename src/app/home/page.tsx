import MyCanvas from "@/components/3d-canvas";
import Loader from "@/components/Loader";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import SectionIndicators from "@/components/ui/SectionIndicators";

export default function Home() {
  return (
    <main>
      <MyCanvas />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <SectionIndicators />
      <Loader />
    </main>
  );
}
