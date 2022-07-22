import React from "react";
import "./Projects.css";
import { Nav } from "react-bootstrap";
const Card = ({ item }) => {
  console.log(item.link)

  return (
    <Nav.Link href={item.link} target="_blank"><div className="card">
        <img src={item.image} className="card-img-top" alt={item.heading} />
        <div className="card-body">
          <p className="card-text">{item.heading}</p>
          
        </div>
      </div>
    </Nav.Link>
  );
};

export default Card;
