import React from "react";
import "./About.css";
import navIcon1 from "../../Assets/img/coding.png";
import navIcon2 from "../../Assets/img/leetcode.png";
import navIcon3 from "../../Assets/img/hackerrank.png";
import Bhanu from "../../Assets/img/bhanu.jpg";
const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <img className="about-image" src={Bhanu} alt="" />
      <h1>About Me</h1>
      <p className="text-about">
        Having learned from the past, I live in the present with an eye on the
        future. I try my best to foresee what the future is going to be, and
        what I need to do to succeed in that future. I am an honest,
        self-motivated & hardworking person with a positive attitude towards my
        career & life. Being punctual & sincere, I can finish the work given to
        me on time & try to fulfill all the needs of the company from me.
      </p>
      <div className="social-icon">
        <a
          href="https://auth.geeksforgeeks.org/user/hs123online/"
          target="_blank"
        >
          <img className="icon-code" src={navIcon1} alt="" />
        </a>
        <a href="https://leetcode.com/jaskaran5109/" target="_blank">
          <img className="icon-code" src={navIcon2} alt="" />
        </a>
        <a href="https://www.hackerrank.com/hs123online?hr_r=1" target="_blank">
          <img className="icon-code" src={navIcon3} alt="" />
        </a>
      </div>
      <a href="https://github.com/jaskaran5109" target="_blank">
        <button className="github-button">Github</button>
      </a>
      <a href="Resume.pdf" download target="_blank">
        <button className="github-button">Resume</button>
      </a>
    </div>
  );
};

export default About;
