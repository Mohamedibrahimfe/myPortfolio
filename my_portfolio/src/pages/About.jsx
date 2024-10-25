import aboutData from "../data/about.json";
import "../style/About.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  // useEffect(() => {
  //   gsap.fromTo(
  //     "#about",
  //     {
  //       opacity: 0,
  //       x: -100,
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: "#about",
  //         start: "top 80%",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     ".right",
  //     { opacity: 0, x: 100 },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: "#about",
  //         start: "top 80%",
  //         end: "top 80%",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     ".left",
  //     { x: -100, opacity: 0 },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: "#about",
  //         start: "top 80%",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );
  // })
  return (
    <section className="about" id="about">
      <h2 className="aboutTitle ">{aboutData.data.about.greeting}</h2>
      <p className="left">{aboutData.data.about.description}</p>

      <br />
      <p
        className="right "
        dangerouslySetInnerHTML={{ __html: aboutData.data.about.education }}
      />

      <br />
      <p
        className="left"
        dangerouslySetInnerHTML={{
          __html: aboutData.data.about.beliefAndGoal,
        }}
      />

      <br />
      <p
        className="right"
        dangerouslySetInnerHTML={{
          __html: aboutData.data.about.aboutAi,
        }}
      />
    </section>
  );
};

export default About;
