import React, { useContext } from "react";
import { ReactDOM } from "react";
import { FaGithub } from "react-icons/fa6";
import { ThemeContext } from "../context/ThemeContext";
function Project(props) {
  const {theme}=useContext(ThemeContext);
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={props.image} className="card-logo"></img>
      </div>

      <div className="card-name">{props.name}</div>
      <p className="card-info">{props.info}</p>
      <div className="project-foot">
        <div className="project-tech">Technology : {props.tech}</div>
        <div className="project-github-link">
          {" "}
          <a href={props.link} target="_blank">
            {theme === "dark" ? (
              <FaGithub color="white" size={"30px"} />
            ) : (
              <FaGithub color="black" size={"30px"} />
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;
