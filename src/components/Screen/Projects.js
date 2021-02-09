import React from "react";
import ImgSlider from "../ImgSlider";
import JS_weather_logo from "../Projects_img/JS_weather_image.png";
import Capstone_logo from "../Projects_img/Capstone_project_image.png";
import JS_minigame_logo from "../Projects_img/JS_minigame_image.png";
import Instagram_logo from "../Projects_img/instagram_image.png";
import ToggleState from "../context/ToggleState";
import Instagram_image from "../Projects_img/real_img/instagram_image.JPG";
import JS_weather_image from "../Projects_img/real_img/JS_weather_image.png";
import Capstone_image from "../Projects_img/real_img/Capstone_project_image.jpg";
import JS_minigame_image from "../Projects_img/real_img/JS_minigame_image.JPG";
import Cap_1 from "../Projects_img/Capstone/capstone_project1.gif";
import Cap_2 from "../Projects_img/Capstone/capstone_project2.gif";
import Ins_dia from "../Projects_img/diagrams/instagram_dia.png";
import Weather_dia from "../Projects_img/diagrams/weather_dia.png";
import Minigame_dia from "../Projects_img/diagrams/minigame_dia.png";

const Portfolio_list = [
  {
    name: "MERN stack Instagram",
    logo: Instagram_logo,
    desc: `This Web serice is designed based on instagram, I developed this 
    application to learn communications between client, server, and 
    database. I chose MERN stack to make development process 
    smoother and also they have bigger community and open sources`,
    link: "https://instagram-clone-alexyoon.herokuapp.com/",
    used_skills: ["React", "MongoDB", "NodeJS", "ExpressJS"],
    img: Instagram_image,
    pic: [Ins_dia],
  },
  {
    name: "Capstone Project : Robotic Vacuum Cleaner",
    logo: Capstone_logo,
    desc: `In my capstone project, I choose to make a programmed robot 
        vacuum because I was always interested in inventing and turn
         idea into a product, so I and my partner Sam both agreed to build a robot vacuum.

      The robot vacuum is running on Microbard supplied from NAIT(Northern Alberta Institute of Technology) and it has two 
      main motors for the wheels, one fan to pick up target objects, and one Ultrasound chip in order to measure the distance in between the machine and the obstacle to avoid collision.\n
      We designed the machine with assembly language to operate the motors, fan, and an ultrasound. We implement a simple User interface to give more access to user. 
      There are four buttons and the system will wait for button press, also the system will inform distance information on the display.

      In Figure 1, it's showing a programmed robot vacuum is working sucessfully moving forward with no errors, and pick up an object and collect it to the bag.
      
      The Ultrasound chip will shoot a pulse and the machine will 
      receive a returned pulse value to calculate the distance 
      in between the machine and the objects, with this data the 
      system is able to caculate the distance and we programmed 
      if the distance is less than certain number, the motors 
      will automatically stop operating to avoid collision. \n
      The system will display calculated distance data on the screen as shown in the Figure 2 above.
            
      Thank you for reading my quick review of my Capstone project, if you are like to continue read more about my Capstone project you can also visit the link.`,
    link:
      "https://drive.google.com/file/d/1wrqfTpZOJJPCCQ0Tt5nZ3v1rLzP2rjVg/view?usp=sharing",
    used_skills: ["Assembly(C++)", "Hardware Interfacing"],
    img: Capstone_image,
    pic: [Cap_1, Cap_2],
  },
  {
    name: "Weather App + outfit suggestions",
    logo: JS_weather_logo,
    desc: `This is my very first web serivce for clients, it will locate the user 
    and tell weather informations and outfit reccomendation, and more location's weather can be found by searching cities`,
    link: "https://future-bedecked-gastonia.glitch.me/",
    used_skills: ["Javascript", "NodeJS"],
    img: JS_weather_image,
    pic: [Weather_dia],
  },

  {
    name: "Vannila JS minigame",
    logo: JS_minigame_logo,
    desc: `I developed this mini game in college by me, while developing 
    this game I learned game design and planning skills. The game 
    will start after user press start button and then player will get a 
    point when line up the ball on the same row or colum and the 
    game will  end when game board is fully-filled by balls.`,
    link: "https://alexyoon97.github.io/Vanila_JS_minigame/",
    used_skills: ["Javascript"],
    img: JS_minigame_image,
    pic: [Minigame_dia],
  },
];

const Projects = () => {
  return (
    <ToggleState>
      <ImgSlider Portfolio_list={Portfolio_list} />
    </ToggleState>
  );
};

export default Projects;
