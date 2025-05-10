import aboutData from "../data/about.json";
import "../assets/css/About.css";
const About = () => {
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
