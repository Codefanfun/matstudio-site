import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Studio } from "./components/Studio";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Studio />
      </main>
      <Footer />
    </>
  );
}

export default App;
