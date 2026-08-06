import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { lazy, Suspense } from "react";
import Nav from"./Components/Nav/Nav.jsx";
import HeroSection from "./Sections/HeroSection";


const About = lazy(() => import("./Sections/About"));
const Experience = lazy(() => import("./Sections/Experience"));
const Projects = lazy(() => import("./Sections/Projects"));
const Education = lazy(() => import("./Sections/Education"));
const Skills = lazy(() => import("./Sections/Skills"));
const Contact = lazy(() => import("./Sections/Contact"));
const Footer = lazy(() => import("./Sections/Footer"));
const LoadingPage = lazy(() => import("./Sections/LoadingPage"));

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    window.scrollTo(0, 0);

  }, []);

 
  return (
    <> 
    <Suspense fallback={<LoadingPage />}>
    <Nav/>
  <HeroSection />
   
  
  <About />
  <Experience />
  <Projects />
  <Education />
  <Skills />
  <Contact />
  <Footer />
</Suspense>
    </>
  )
}

export default App
