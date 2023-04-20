import React from "react";
import linkedin from "../Screen/img/linkedin.png";
import github from "../Screen/img/github.png";
import instagram from "../Screen/img/instagram.png";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";

const Contacts = () => {
  function sendEmail(e) {
    e.preventDefault();
    if (
      e.target.email.value === "" ||
      e.target.name.value === "" ||
      e.target.message.value === ""
    ) {
      alert("All fields must be filled");
    } else {
      emailjs
        .sendForm(
          "service_esy72ws",
          "template_s88qqxn",
          e.target,
          "user_blbTIGlEgypuj6Kpk6iED"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert(result.text + ": Message Sent!");
          },
          (error) => {
            console.log(error.text);
            alert(error.text + ": Error");
          }
        );
    }
    e.target.reset();
  }
  return (
    <div className="contacts_info" id="Contacts">
      <Fade duration={2000}>
        <div className="container">
          <div className="row ">
            <form className="col s12" onSubmit={sendEmail}>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="first_name"
                    type="text"
                    name="name"
                    className="validate"
                  />
                  <label for="first_name">Name</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="validate"
                    style={{ fontSize: "2.5vh", color: "rgb(218, 218, 218)" }}
                  />
                  <label for="last_name">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="Subject"
                    name="subject"
                    type="text"
                    className="validate"
                  />
                  <label for="Subject">Subject</label>
                </div>
              </div>
              <div className="row">
                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="textarea1"
                      className="materialize-textarea"
                      name="message"
                      style={{ fontSize: "2vh", color: "white" }}
                    ></textarea>
                    <label for="textarea1">Textarea</label>
                  </div>
                  <input
                    style={{ cursor: "pointer" }}
                    class="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                    value="Send Message"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fade>
      <div className="contacts_logo">
        <a
          href="https://www.linkedin.com/in/alex-yoon-0793641a5/"
          target="_blank"
        >
          <img alt="linkedin" src={linkedin} />
        </a>
        <a href="https://github.com/alexyoon97" target="_blank">
          <img alt="github" src={github} />
        </a>
        <a href="https://www.instagram.com/wonsang_portfo/" target="_blank">
          <img alt="instagram" src={instagram} />
        </a>

        <a
          href="https://drive.google.com/file/d/1kt0UUMeDjw52NxYTAwBeOa6AcDcRo90M/view?usp=sharing"
          target="_blank"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Contacts;
