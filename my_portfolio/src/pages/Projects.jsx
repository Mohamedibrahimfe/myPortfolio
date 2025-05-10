import React, { useState } from "react";
import "../assets/css/Projects.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import data from "../data/about.json";
import { Link } from "react-router-dom";

const Projects = () => {
  const reactProjects = data.react || [];
  const pureProjects = data.projects || [];
  const wordpressProjects = data.wordpress || []; // Add this line to get the WordPress projects from the data.jso
  console.log(reactProjects.length - 6);

  return (
    <section id="projects" className="section-container">
      <h1 className="title">Projects</h1>

      <Tabs>
        <TabList className="tabs-container">
          <Tab className="tab-item">React Projects</Tab>
          <Tab className="tab-item">Pure JavaScript</Tab>
          <Tab className="tab-item">Wordpress</Tab>
        </TabList>

        <TabPanel>
          <div className="projects-grid">
            {reactProjects.slice(reactProjects.length - 7, reactProjects.length - 1).map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <ul className="project-technologies">
                    {project.tech.split(" ").map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                  <p className="project-description">{project.description}</p>
                  <div className="links">
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                      <i className="bi bi-github"></i> GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                      <i className="bi bi-globe"></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="more-container">
            <Link className="more" to="Projects">
              Show More Projects <i className="bi bi-arrow-up-right-circle"></i>
            </Link>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="projects-grid">
            {pureProjects.slice(pureProjects.length - 7, pureProjects.length - 1).map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <ul className="project-technologies">
                    {project.tech.split(" ").map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                  <p className="project-description">{project.description}</p>
                  <div className="links">
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                      <i className="bi bi-github"></i> GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                      <i className="bi bi-globe"></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="more-container">
            <Link className="more" to="/projects">
              Show More Projects <i className="bi bi-arrow-up-right-circle"></i>
            </Link>
          </div>
        </TabPanel>

        <TabPanel>
          {wordpressProjects.length === 0 ? <h1 className="wordpress-title">No Wordpress projects Yet</h1> : <>
            <div className="projects-grid">
              {wordpressProjects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <ul className="project-technologies">
                      {project.tech.split(" ").map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                    <p className="project-description">{project.description}</p>
                    <div className="links">
                      <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                        <i className="bi bi-github"></i> GitHub
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                        <i className="bi bi-globe"></i> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="more-container">
              <Link className="more" to="/projects">
                Show More Projects <i className="bi bi-arrow-up-right-circle"></i>
              </Link>
            </div>
          </>}
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Projects;
