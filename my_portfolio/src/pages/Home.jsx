import React from "react";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Hobbies from "../components/Hobbies";
import Skills from "../components/Skills";
import Footer from "../components/footer/Footer";
import Contact from "../components/Contact";
import SEO from "../components/SEO";
import { useState, useEffect } from "react";
import Quote from "../components/Quote";

const Home = () => {
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
  }, [activeSection]);

  return (
    <div className="App">
      <SEO />
      <Navbar activeSection={activeSection} />
      <Hero />
      <Projects />
      <Quote />
      <Skills />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
