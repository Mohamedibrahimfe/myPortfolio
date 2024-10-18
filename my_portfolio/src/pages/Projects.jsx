import React from "react";
import "../style/Projects.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import data from "../data/about.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  // useEffect(() => {
  //   const elements = document.querySelectorAll(".project");
  //   elements.forEach((element) => {
  //   gsap.fromTo(
  //     element,
  //     {
  //       opacity: 0,
  //       x: 300,
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       duration: 0.5,
  //       stegger: 1,
  //       scrollTrigger: {
  //         trigger: element,
  //         start: "top 80%",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );
  // });
  //   })
  return (
    <section className="projects" id="projects">
      <h1 className="title protittle">Projects</h1>
      <Tabs>
        <TabList
          style={{
            color: "black",
            borderRadius: "6px",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            flexWrap: "wrap",
            cursor: "pointer",
            fontSize: "1.1rem",
            fontWeight: "bold",
            border: "1px solid rgb(180 185 189 / 31%)",
            transition: "all .15s ease-in-out",
            width: "fit-content",
            margin: "auto",
            marginBottom: "30px",
          }}
        >
          <Tab>Pure Projects</Tab>
          <Tab>React Projects</Tab>
        </TabList>
        <TabPanel>
          {data.projects.map((project) => (
            <div className="project">
              <h3 className="project-title">{project.title}</h3>

              <img src={project.image} alt={project.title} />
              <div className="project-technologies">
                <p>{project.tech}</p>
              </div>
              <p>{project.description}</p>

              <div className="links">
                <a href={project.link} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  live demo
                </a>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          {data.react.map((project) => (
            <div className="project">
              <h3 className="project-title">{project.title}</h3>
              <img src={project.image} alt={project.title} />
              <div className="project-technologies">
                <p>{project.tech}</p>
              </div>
              <p>{project.description}</p>
              <div className="links">
                <a href={project.link} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  live demo
                </a>
              </div>
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Projects;
