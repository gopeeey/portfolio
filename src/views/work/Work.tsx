import MyCanvas from "@/components/3d-canvas";
import Experience from "./Experience";
import Projects from "./Projects";
import ExperienceScene from "./Scene";

export default function Work() {
  return (
    <main id="work">
      <MyCanvas />

      <Experience />

      <Projects />

      <div className="absolute w-full top-0 left-0 overflow-x-hidden">
        <ExperienceScene />
      </div>
    </main>
  );
}
