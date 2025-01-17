import MyCanvas from "@/components/3d-canvas";
import Experience from "@/components/sections/Experience";
import HeroSection from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <MyCanvas />
      <HeroSection />
      <Experience />
      <Skills />
      Hello world
    </main>
  );
}
