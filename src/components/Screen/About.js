import React from "react";
import c_sharp from "../Screen/img/c_sharp.png";
import js from "../Screen/img/dango-inner-2.png";
import mongoDb from "../Screen/img/mongoDb.png";
import mysql from "../Screen/img/mysql.png";
import nodejs from "../Screen/img/nodejs.png";
import react from "../Screen/img/react.png";
import Rotate from "react-reveal/Rotate";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="about_container" id="About">
      <div className="paragraph_container">
        <div className="paragraph">
          <Rotate top left>
            <h1>EDUCATION</h1>
            <>
            At NAIT, I had the opportunity to expeirence computer systems and
             study Computer Engineering for the first time, where
            I delved into fascinating topics such as 
            <br/><br/>
            Object-Oriented / Web Development / Data Algorithms / Hardware Interfacing. 
            <br/><br/>
            I have studied this course with a lot of fun and deeply thought about starting
            Software Developer as a career. Creating my idea on to internet and solving
            problems and finding bugs was fascinating.
            </>
          </Rotate>
        </div>
        <div className="paragraph">
          <Rotate top left delay={100}>
            <h1>SKILLS</h1>
            <>
            When it comes to web development, I'm skilled in using tech stacks
            such as Next JS, React JS, Typescript, and Node JS and when studying
            Data Structures and Algorithms, I use C++/C# to hone my skills.
            <br/><br/>
            Personally, I'm very passionate about programming because I enjoy
            the challenge of finding issues and improving programs. 
            <br/><br/>
            I take pleasure in thinking through the problem-solving process, and
            there's nothing quite like the sense of satisfaction that comes with
            finally cracking the code!
            </>
          </Rotate>
          <div className="skills">
            <Flip right cascade delay={50}>
              <img alt="react" src={react} />
            </Flip>
            <Flip right cascade delay={450}>
              <img alt="js" src={js} />
            </Flip>
            <Flip right cascade delay={750}>
              <img alt="nodejs" src={nodejs} />
            </Flip>
            <Flip right cascade delay={250}>
              <img alt="mysql" src={mysql} />
            </Flip>
            <Flip right cascade delay={350}>
              <img alt="c_sharp" src={c_sharp} />
            </Flip>
            <Flip right cascade delay={450}>
              <img alt="mongoDb" src={mongoDb} />
            </Flip>
          </div>
        </div>
        <div className="paragraph">
          <Rotate top left delay={200}>
            <h1>NON-TECH SIDE</h1>
            <>
            It's great to take a break from programming sometimes! 
            <br/><br/>
            When I am off computer, I love to engage in outdoor activities such as snowboarding,
            tennis, rock climbing, and camping. 
            <br/><br/>
            These hobbies allow me to clear my mind and create some space to recharge, 
            which ultimately helps me to refocus on development with a fresh perspective. 
            <br/><br/>
            I've found that taking time away from the computer can even help me spot issues in
            my code that I might have missed before!
            </>
          </Rotate>
        </div>
      </div>
    </div>
  );
};

export default About;
