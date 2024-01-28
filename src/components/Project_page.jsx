import React from "react";
import { ReactDOM } from "react";
import Profile from "./Profile";
// import { fastar } from "@fortawesome/free-brands-svg-icons";
import { data } from "./projectsData";
import Project from "./Project.jsx";
import "./starAnimation.css";
function display(project) {
  return (
    <Project
      key={project.id}
      image={project.image}
      name={project.name}
      info={project.info}
      link={project.link}
      tech={project.tech}
    />
  );
}
function Project_page() {
  
  return (
    <div>
      <div project_page_background className="project_page_background">
        <div className="stars1" style={{ height: "0" }}></div>
        <div className="stars2" style={{ height: "0" }}></div>
        <div className="stars3" style={{ height: "0" }}></div>
        <div className="stars11" style={{ height: "0" }}></div>
        <div className="stars22" style={{ height: "0" }}></div>
        <div className="stars33" style={{ height: "0" }}></div>
        <div className="Profile-page"> {data.map(display)}</div>
      </div>
    </div>
  );
}
export default Project_page;
