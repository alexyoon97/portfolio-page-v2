import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Main_screen = () => {
  return (
    <div className="main-container">
      <h2
        className="fontColor_Orange"
        style={{
          padding: "2vh 0vh",
          margin: "5vh 12vh",
          position: "relative",
          textAlign: "right",
        }}
      >
        Alex Yoon
      </h2>
      <div
        className="Short_desc fontColor_Orange"
        style={{
          margin: "5vh 12vh",
          position: "relative",
          textAlign: "right",
          top: "31vh",
          fontSize: "6vh",
        }}
      >
        <p>
          Great Potential Full-Stack developer, Passionate about developing web
          application and designing UI/UX to enhance a user's experience
          <br></br>
        </p>
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
      </div>
    </div>
  );
};

export default Main_screen;
