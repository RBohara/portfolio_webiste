import React, { useState, useEffect } from "react";
import Link from "react-router-dom";
import sanityClient from "../client";
import { ContainerStyle } from "../components/Navbar";
import { motion } from "framer-motion";
import styled from "styled-components";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
              title,
              date,
              description,
              projectType,
              websiteLink,
              githubLink,
              tags
          }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <ProjectSectionStyle className="project-section">
      <div style={{ width: "30%" }}>
        <h1>Projects</h1>
      </div>
      <ProjectContainerStyle>
        {projects &&
          projects.map((project) => (
            <div className="project">
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <p>
                  <a target="_blank" href={`${project.githubLink}`}>
                    Github
                  </a>
                </p>
                <p>
                  <a target="_blank" href={`${project.websiteLink}`}>
                    Live
                  </a>
                </p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <p>{tag}</p>
                  ))}
                </div>
              </div>
              <div class="project-img">
                <img src="" alt={project.title} />
              </div>
            </div>
          ))}
      </ProjectContainerStyle>
    </ProjectSectionStyle>
  );
};

const ProjectSectionStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  h1 {
    background-color: orangered;
    color: white;
    transform: rotate(-2deg);
    padding: 5px;
    font-family: "Merienda", cursive;
  }
`;

const ProjectContainerStyle = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  .project {
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    background-color: #222;
    color: white;
    padding: 20px;
  }
  .tags {
    display: inline-block;
  }
`;

export default Projects;
