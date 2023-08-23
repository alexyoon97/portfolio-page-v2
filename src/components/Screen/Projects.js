import React from "react";
import ImgSlider from "../ImgSlider";
import Capstone_logo from "../Projects_img/Capstone_project_image.png";
import musicpicker from "../Projects_img/musicpicker.png";
import word_typing from "../Projects_img/word_typing.png";
import Instagram_logo from "../Projects_img/instagram_image.png";
import Foodwebsite_logo from "../Projects_img/Food_website.png";
import ToggleState from "../context/ToggleState";
import Instagram_image from "../Projects_img/real_img/instagram_image.JPG";
import Foodwebsite_image from "../Projects_img/real_img/Foodwebsite_image.png";
import Capstone_image from "../Projects_img/real_img/Capstone_project_image.jpg";
import Cap_1 from "../Projects_img/Capstone/capstone_project1.gif";
import Cap_2 from "../Projects_img/Capstone/capstone_project2.gif";
import Ins_dia from "../Projects_img/diagrams/instagram_dia.png";
import musicpicker_logo from "../Projects_img/music_logo.png";
import word_logo from "../Projects_img/word_logo.png";

const Portfolio_list = [
  {
    name: "Open AI MusicList Generator",
    logo: musicpicker_logo,
    desc: `Utilized Next.js for handling REST API and React frontend work, while also incorporating Framer Motion and Shad UI to elevate the UI/UX, in order to generate a music playlist from the OpenAI API based on the user's input. The user simply inputs their surrounding environment and requests the OpenAI API to identify the appropriate mood and genre. 
    
    The resulting genres and moods are presented as a list for the user to select their desired options. Once selected, a request is made to the OpenAI API to generate ten songs.Complete with details such as song name, artist, and description, and potentially accompanied by a YouTube video.`,
    link:'https://master.d1rarurac5vubg.amplifyapp.com/',
    used_skills: ['Next JS', 'Open AI API', 'shadcn UI', 'Framer Motion' ],
    img: musicpicker,
    pic: [],
    github: 'https://github.com/alexyoon97/music-picker-AI'

  },
  {
    name: "MERN stack Instagram",
    logo: Instagram_logo,
    desc: `I developed a Social Networking Service (SNS) platform application that allows users to sign in or sign up. Users can upload photos, comment on other user's posts, like posts, and explore other user's feeds. To ensure secure access and authorization, I implemented JSON Web Token (JWT) authentication and encrypted passwords to protect user information. 

    For the backend structure, I used Node.js and Express.js, while React.js was used for the frontend. To store and retrieve data, I integrated MongoDB into the application. Overall, this platform provides a seamless and secure user experience for social networking.`,
    link: "",
    used_skills: ["React", "MongoDB", "NodeJS", "ExpressJS"],
    img: Instagram_image,
    pic: [Ins_dia],
    github: 'https://github.com/alexyoon97/mern_sns_application'

  },
  {
    name: "Online Food ordering system - Frontend",
    logo: Foodwebsite_logo,
    desc: `This web application is designed with a strong emphasis on user experience and ease of use. The design has been carefully crafted to simplify the context and create a user-friendly interface. 
    
    The goal is to make it easy for users to navigate the application and find the information they need quickly and efficiently. Additionally, the design aspects have been given careful consideration to ensure that the application looks visually appealing and engaging to users. Overall, the focus is on providing a seamless and enjoyable user experience.`,
    link: "https://main.d3ac2wayp558ko.amplifyapp.com/",
    used_skills: ["React"],
    img: Foodwebsite_image,
    pic: [],
    github: 'https://github.com/alexyoon97/react_shopping_app'
  },
  {
    name: "Capstone Project : Robotic Vacuum Cleaner",
    logo: Capstone_logo,
    desc: `We created a robot vacuum that runs on Microbard supplied from NAIT (Northern Alberta Institute of Technology). The machine has two main motors for the wheels, one fan to pick up target objects, and one ultrasound chip to measure the distance between the machine and obstacles to avoid collisions.

    To operate the motors, fan, and ultrasound, we designed the machine with assembly language. We also implemented a simple user interface with four buttons that allow users to have more control over the machine's movements. The system will wait for a button press, and it will display distance information on the screen.
    
    Our robot vacuum works successfully, as shown in Figure 1. It moves forward with no errors, picks up objects, and collects them in the bag.
    
    The ultrasound chip shoots a pulse, and the machine receives a returned pulse value to calculate the distance between the machine and objects. With this data, the system can calculate the distance, and we programmed it so that if the distance is less than a certain number, the motors will automatically stop operating to avoid collisions. The system will display the calculated distance data on the screen, as shown in Figure 2.
    
    We are proud of our capstone project and hope that it will be useful for people who want to keep their homes clean. If you would like to read more about it, you can visit the link.`,
    link:
      "https://drive.google.com/file/d/1wrqfTpZOJJPCCQ0Tt5nZ3v1rLzP2rjVg/view?usp=sharing",
    used_skills: ["Assembly(C++)", "Hardware Interfacing"],
    img: Capstone_image,
    pic: [Cap_1, Cap_2],
  },
  {
    name: "Word scrambled Typing Game",
    logo: word_logo,
    desc: `Our Word Typing game is a fun and challenging application that mixes up the positions of words in a sentence. 
    
    As a player, your goal is to correctly type the words in their right positions to earn points. The number of squares in the game depends on the length of the sentence, including spaces. 
    
    Our game also detects input from the user, making it easy to play and enjoy. Give it a try and see how well you can do!`,
    
    link: "https://master.d1v5x32ekbmwxz.amplifyapp.com/",
    used_skills: ["Javascript"],
    img: word_typing,
    pic: [],
    github: 'https://github.com/alexyoon97/Typing-Attack-Game-React'

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
