import React from "react";
// import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      {/* <div className="img-container">
        <img alt={props.title} src={props.thumbnail} />
      </div> */}
      <div className="content">
        <img src={props.thumbnail} width="550" height="350" />
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>GitHub Link:</strong> {props.repoLink}
          </li>
          <li>
            <strong>Deployed Link:</strong> {props.deployedLink}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
