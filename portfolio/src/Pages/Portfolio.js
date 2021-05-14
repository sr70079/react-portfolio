import React, {Component} from "react";
import portfolio from "../utils/portfolio.json"
import ProjectCard from "../components/ProjectCard"
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";

class Projects extends Component {
    // Setting this.state.portfolios to the portfolios json array
    state = {
      portfolio
    };
  
render() {

    return (
        <Wrapper>
          <Title>portfolio List</Title>
          {this.state.portfolio.map(portfolio => (
          <ProjectCard
            title={portfolio.title}
            thumbnail={portfolio.thumbnail}
            description={portfolio.description}
            repoLink={portfolio.repoLink}
            deployedLink={portfolio.deployedLink}
          />
        ))}
        </Wrapper>
  );
}
}
  

export default Projects;