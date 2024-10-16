import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Hobbies from "./pages/Hobbies";

import { useState, useEffect, useRef } from "react";
function App() {
  // State to track active section
  const [activeSection, setActiveSection] = useState("hero");

  // Function to update active section based on scroll position
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check if the section is currently in view (middle of the viewport)
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
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // state to track active section end
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
