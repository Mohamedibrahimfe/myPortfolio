import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";


import Navbar from './components/navbar/Navbar'
import Hero from './pages/hero/Hero'
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Hobbies from "./pages/hobbies/Hobbies";
import Skills from './pages/skills/Skills'
import Footer from './components/footer/Footer'
import Contact from './pages/contact/Contact'

import { useState, useEffect, useRef } from "react";
function App() {
  const [activeSection, setActiveSection] = useState("hero");
  // Function to update active section based on scroll position
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <Hero theme={localStorage.getItem("theme")} />
      <About />
      <Projects />
      <Hobbies />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
