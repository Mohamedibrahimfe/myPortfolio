import React from "react";
import aboutData from "../data/about.json";
import "../style/About.css";

const About = () => (
  <section className="about" id="about">
    <h2>{aboutData.data.about.greeting}</h2>
    <p>{aboutData.data.about.description}</p>

    <br />
    <p dangerouslySetInnerHTML={{ __html: aboutData.data.about.education }} />

    <br />
    <p
      dangerouslySetInnerHTML={{
        __html: aboutData.data.about.beliefAndGoal,
      }}
    />

    <br />
    <p
      dangerouslySetInnerHTML={{
        __html: aboutData.data.about.aboutAi,
      }}
    />
  </section>
);

export default About;