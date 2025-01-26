import MyCanvas from "@/components/3d-canvas";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import HeroSection from "@/components/sections/Hero";
import SkillsAndProjects from "@/components/sections/SkillsAndProjects";

export default function Home() {
  return (
    <main>
      <MyCanvas />
      <HeroSection />
      <Experience />
      <SkillsAndProjects />
      <Contact />
      Hello world
    </main>
  );
}
