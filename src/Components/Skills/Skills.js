import React from "react";
import "./Skills.css";
import  ProgressBar  from "../ProgressBar/ProgressBar";
import "react-circular-progressbar/dist/styles.css";
import colorSharp from "../../Assets/img/color-sharp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {/* &ensp; */}
                <div className="item">
                  <ProgressBar
                    progress={95}
                    size={150}
                    strokeWidth={10}
                    circleOneStroke='transparent'
                    circleTwoStroke='#1305ff'
                  />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <div className="item-div">
                  <ProgressBar
                    progress={80}
                    size={150}
                    strokeWidth={10}
                    circleOneStroke='transparent'
                    circleTwoStroke='#1305ff'
                  />
                  </div>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <div className="item-div">
                  <ProgressBar
                    progress={85}
                    size={150}
                    strokeWidth={10}
                    circleOneStroke='transparent'
                    circleTwoStroke='#1305ff'
                  />
                  </div>
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <div className="item-div">
                  <ProgressBar
                    progress={95}
                    size={150}
                    strokeWidth={10}
                    circleOneStroke='transparent'
                    circleTwoStroke='#1305ff'
                  />
                  </div>
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <div className="item-div">
                  <ProgressBar
                    progress={80}
                    size={150}
                    strokeWidth={10}
                    circleOneStroke='transparent'
                    circleTwoStroke='#1305ff'
                  />
                  </div>
                  <h5>MERN Stack</h5>
                </div>
                <div className="item">
                  <div className="item-div">
                  <ProgressBar
                    progress={95}
                    size={150}
                    strokeWidth={10}
                    circleOneStroke='transparent'
                    circleTwoStroke='#1305ff'
                  />
                  </div>
                  <h5>Java</h5>
                </div>
                <div className="item">
                <ProgressBar
                    progress={90}
                    size={150}
                    strokeWidth={10}
                    circleOneStroke='transparent'
                    circleTwoStroke='#1305ff'
                  />
                  <h5>Data structures <pre></pre>and algorithms</h5>
                </div>
                <div className="item">
                <ProgressBar
                    progress={80}
                    size={150}
                    strokeWidth={10}
                    circleOneStroke='transparent'
                    circleTwoStroke='#1305ff'
                  />
                  <h5>Android</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  );
};

export default Skills;
