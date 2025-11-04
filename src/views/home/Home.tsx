import MyCanvas from "@/components/3d-canvas";
import Blog from "./blog";
import Hero from "./hero";
import HomeScene from "./scene/Scene";
import WorkSummary from "./work";

export default function Home() {
  return (
    <main id="home">
      <MyCanvas />
      <div id="scroll_scene">
        <Hero />
        <WorkSummary />
      </div>

      <Blog />
      <div className="fixed w-screen top-0 left-0 overflow-x-hidden">
        <HomeScene />
      </div>
    </main>
  );
}
