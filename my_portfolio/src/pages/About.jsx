import { useEffect, useRef } from "react";
import aboutData from "../data/about.json";
import "../assets/css/About.css";

const About = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-view");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <h2 className="aboutTitle">
        {aboutData.data.about.greeting}
        <span className="wave">👋</span>
      </h2>
      
      <p 
        className="left content-section"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        {aboutData.data.about.description}
      </p>

      <p
        className="right content-section"
        ref={(el) => (sectionRefs.current[1] = el)}
        dangerouslySetInnerHTML={{ __html: aboutData.data.about.education }}
      />

      <p
        className="left content-section"
        ref={(el) => (sectionRefs.current[2] = el)}
        dangerouslySetInnerHTML={{
          __html: aboutData.data.about.beliefAndGoal,
        }}
      />

      <p
        className="right content-section"
        ref={(el) => (sectionRefs.current[3] = el)}
        dangerouslySetInnerHTML={{
          __html: aboutData.data.about.aboutAi,
        }}
      />
    </section>
  );
};

export default About;
