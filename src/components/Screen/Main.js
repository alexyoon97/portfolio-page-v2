import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import profile_pic from "../../components/Screen/img/profile_pic.jpg";
import post_pic from "../../components/Screen/img/post_pic.jpg";


const Main_screen = () => {
  return (
    <div className="main-container">
      <div className="profile_background"></div>
      <div className="profile">
        <div style={{ display: "flex" }}>
          <img src={profile_pic} alt="profile" className="profile_pic"></img>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 className="profile_name" style={{ marginTop: "-2vh" }}>
              @alexyoon
            </h2>
          </div>
        </div>

        <div className="profile_desc">
          <span>Desire to create helpful app to make 🌎 better</span>
          <span>
            Proficient in developing web application and analysing algorithms.
            Sensitive on the Trends to keep up my skills ✨
          </span>
          <span className="icon">
            <span>💻Tech</span>
            <span>🎮Gaming</span>
            <span>🚀Science</span>
            <span> 👟Sports</span>
          </span>
        </div>
      </div>
      <div className="post">
        <div className="welcome_post">
          <img
            style={{ maxWidth: "60px", height: "auto", borderRadius: "50%" }}
            src={profile_pic}
            alt="pic"
          ></img>
          <div style={{ color: "#f1f3f59a" }}>📌Pinned</div>
          <div>@alexyoon</div>
          <div>14 April 2023</div>
        </div>
        <div className="post_info">
          <h2>Hello World~! Welcome to the page</h2>
          <h3 style={{fontSize:'2vh'}}>
            Hi! Alex is here to introduce, I am a Software and Web Engineer from Korea and am currently based in Vancouver, Canada!
            <br/><br/>

            This is a page about me and my projects that I would like to
            introduce to world! I'd like to share how I code and am happy to hear
            your feedback about anything on this site, you can submit email through email sending service on the bottom.
            <br/><br/> I will disspear at this moment, have fun and enjoy 😊<br/>
            <img style={{width:'550px', height:'auto', margin:'auto'}} src={post_pic} alt='post_pic'></img>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Main_screen;

{
  /* <div
        className="Short_desc fontColor_Orange"
        style={{
          margin: "5vh 12vh",
          position: "relative",
          textAlign: "right",
          top: "31vh",
          fontSize: "6vh",
        }}
      >
        <h1 style={{ marginTop: "4vh" }}>
          <TypeWriterEffect
            textStyle={{
              textAlign: "right",
            }}
            startDelay={1000}
            multiText={[
              "Creative",
              "Unique Ideas",
              "Fast Learner",
              "a developer",
            ]}
            cursorColor="#e7b630"
            nextTextDelay={100}
            typeSpeed={50}
          />
        </h1>
      </div> */
}
