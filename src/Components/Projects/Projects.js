import React, { useState } from "react";
import "./Projects.css";
import { ProjectData } from "../../ProjectData";
import colorSharp from "../../Assets/img/color-sharp2.png";
import Card from "./Card";
const Projects = () => {
  const [data, setdata] = useState(ProjectData);
  console.log(data);
  return (
    <div className="projects" id="projects">
        <h1>Projects</h1>
      <div className="cardFlex">
        {data.map((item) => (
          <Card key={item.link} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
