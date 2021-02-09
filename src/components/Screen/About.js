import React from "react";
import c_sharp from "../Screen/img/c_sharp.png";
import js from "../Screen/img/js.png";
import mongoDb from "../Screen/img/mongoDb.png";
import mysql from "../Screen/img/mysql.png";
import nodejs from "../Screen/img/nodejs.png";
import react from "../Screen/img/react.png";
import Rotate from "react-reveal/Rotate";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="about_container" id="About">
      <div className="paragraph">
        <div>
          <Rotate top left >
            I studied Computer Engineering at NAIT, my course focused learning
            Object-Oriented Programming C#, C and C++, Web development and
            Hardware Interfacing. I am a person that likes to interact with new
            challenges and enjoy learning and pick up new skills to break my
            potential.
          </Rotate>
        </div>
        <br></br>
        <div>
          <Rotate top left delay={100}>
            I achieved a Computer Engineering Degree in 2019 and I still likes
            to continue learn coding and design UI/UX because I feel comfortable
            when I work with computers and I would like to challenge more stuff.
          </Rotate>
        </div>
        <br></br>
        <div>
          <Rotate top left delay={200}>
            I look forward to discuss about any open positions or if you have
            any questiosn about my projects you can contact me in contact form
            down below.
          </Rotate>
        </div>
      </div>

      <div className="skills">
        <div className="first_row">
          <Flip right cascade delay={50}>
            <img alt="react" src={react} />
          </Flip>
          <Flip right cascade delay={450}>
            <img alt="js" src={js} />
          </Flip>
          <Flip right cascade delay={750}>
            <img alt="nodejs" src={nodejs} />
          </Flip>
        </div>
        <div className="second_row">
          <Flip right cascade  delay={250}>
            <img alt="mysql" src={mysql} />
          </Flip>
          <Flip right cascade delay={350}>
            <img alt="c_sharp" src={c_sharp} />
          </Flip>
        </div>
        <div className="thrid_row">
          <Flip right cascade delay={450}>
            <img alt="mongoDb" src={mongoDb} />
          </Flip>
        </div>
      </div>
    </div>
  );
};

export default About;
