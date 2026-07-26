import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { FeatureProject } from "./components/FeatureProject";
import { Projects } from "./components/Projects";
import { Studio } from "./components/Studio";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    const reportHeight = () => {
      const height = document.documentElement.scrollHeight;
      try {
        window.parent.postMessage(
          { type: "matstudio-resize", height },
          "*"
        );
      } catch {
        // ignore
      }
    };

    reportHeight();
    window.addEventListener("load", reportHeight);
    window.addEventListener("resize", reportHeight);
    // Re-report after Framer Motion / images settle
    const ids = [100, 500, 1000, 2000].map((t) => setTimeout(reportHeight, t));

    return () => {
      window.removeEventListener("load", reportHeight);
      window.removeEventListener("resize", reportHeight);
      ids.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeatureProject />
        <Projects />
        <Studio />
      </main>
      <Footer />
    </>
  );
}

export default App;
