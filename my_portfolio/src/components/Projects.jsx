import React, { useState } from "react";
import "../assets/css/Projects.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import data from "../data/about.json";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const reactProjects = data.react || [];
  const pureProjects = data.projects || [];

  const handleMoreButton = () => {
    setVisibleProjects(prev => prev + 4);
  };

  const handleTabSelect = (index) => {
    setActiveTab(index);
    setVisibleProjects(4); // Reset visible projects when changing tabs
  };

  return (
    <section id="projects" className="section-container">
      <h1 className="section-title">Projects</h1>
      <p className="section-subtitle">Check out some of my recent work</p>
      
      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <TabList className="tabs-container">
          <Tab className="tab-item">React Projects</Tab>
          <Tab className="tab-item">Pure JavaScript</Tab>
        </TabList>
        
        <TabPanel>
          <div className="projects-grid">
            {reactProjects.slice(0, visibleProjects).map((project, index) => (
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
          
          {visibleProjects < reactProjects.length && (
            <div className="more-container">
              <button className="more" onClick={handleMoreButton}>
                Load More Projects <i className="bi bi-arrow-down-circle"></i>
              </button>
            </div>
          )}
        </TabPanel>
        
        <TabPanel>
          <div className="projects-grid">
            {pureProjects.slice(0, visibleProjects).map((project, index) => (
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
          
          {visibleProjects < pureProjects.length && (
            <div className="more-container">
              <button className="more" onClick={handleMoreButton}>
                Load More Projects <i className="bi bi-arrow-down-circle"></i>
              </button>
            </div>
          )}
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Projects;
