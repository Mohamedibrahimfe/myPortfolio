import React from "react";
import "../style/Projects.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import data from "../data/about.json";
const Projects = () => {
  return (
    <div className="projects">
      <h1 className="title">Projects</h1>
      <Tabs>
        <TabList>
          <Tab>Pure Projects</Tab>
          <Tab>React Projects</Tab>
        </TabList>
        <TabPanel>
          {data.projects.map((project) => (
            <div className="project">
              <h3 className="project-title">{project.title}</h3>

              <img src={project.image} />
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
    </div>
  );
};

export default Projects;
