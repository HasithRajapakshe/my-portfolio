import { lazy, Suspense } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";

const About = lazy(() => import("./components/sections/About"));
const Experience = lazy(() => import("./components/sections/Experience"));
const FeaturedProjects = lazy(() => import("./components/sections/FeaturedProjects"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Research = lazy(() => import("./components/sections/Research"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Achievements = lazy(() => import("./components/sections/Achievements"));
const Certifications = lazy(() => import("./components/sections/Certifications"));
const Education = lazy(() => import("./components/sections/Education"));
const Contact = lazy(() => import("./components/sections/Contact"));

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Experience />
          <FeaturedProjects />
          <Projects />
          <Research />
          <Skills />
          <Achievements />
          <Certifications />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
