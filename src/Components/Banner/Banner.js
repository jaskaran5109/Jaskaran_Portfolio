import React, { useEffect, useState } from "react";
import "./Banner.css";
import Logo from "../../Assets/img/header-img.svg";
import colorSharp from "../../Assets/img/color-sharp.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import {Nav } from "react-bootstrap";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, index, index]);
  return (
    <section id="home">
      <div className="home-text">
        <h5>Welcome to my Profile</h5>
        <h1>
          {`Hi! I'm Jaskaran Singh\n`}{" "}
          <span
            className="txt-rotate"
            dataPeriod="1000"
            data-rotate='[ "Web Developer", "Web Designer", "Programmer" ]'
          >
            <span className="wrap">{text}</span>
          </span>
        </h1>
        <p>
        I live in Modinagar. I am currently pursuing B.Tech in Computer Science Engineering from SRM University NCR Campus.

I have been living here for the past 4 years and I love it here because of the quality of life and the friendly people around me.

The college is also very close by, and it is a great place to study as well as to hang out with friends.
        </p>
        <button onClick={() => console.log("connect")}>
          <h5 >
            <Nav.Link href="#contactMe">Let’s Connect <ArrowRightCircle size={25} /></Nav.Link>
          </h5>
        </button>
      </div>
      <div className="home-image">
        <img src={Logo} alt="Banner" />
      </div>
    </section>
  );
};

export default Banner;
