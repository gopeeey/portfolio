import MyCanvas from "@/components/3d-canvas";
import Experience from "./Experience";
import ExperienceScene from "./Scene";
import Skills from "./Skills";

export default function Work() {
  return (
    <main id="work">
      <MyCanvas />

      <Experience />

      <div className="absolute w-full top-0 left-0 overflow-x-hidden">
        <ExperienceScene />
      </div>

      <Skills />
    </main>
  );
}
