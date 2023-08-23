import React, { useContext } from "react";
import "./PopupScreen.css";
import ToggleContext from "../components/context/toggleContext";

const PopupScreen = (portfolio) => {
  const { hidden, toggleHidden } = useContext(ToggleContext);
  return (
    <div>
      {hidden ? (
        <div></div>
      ) : (
        <div className="popup_container">
          <button onClick={toggleHidden} className="close_btn">
            <a className="btn-floating waves-effect waves-light red">
              <i className="material-icons">close</i>
            </a>
          </button>
          <div className="project_container ">
            <div className="project_introduction ">
              {console.log(portfolio.portfolio.name)}
              <img alt="portfo_img" src={portfolio.portfolio.img}></img>
              <h1 style={{ fontSize: "3vh" }} className="full-opacity">
                {portfolio.portfolio.name}
              </h1>
              <div>
                {portfolio.portfolio.used_skills.map((skill) => {
                  return <span className="full-opacity">{skill}</span>;
                })}
              </div>
              <a className="full-opacity" href={portfolio.portfolio.github}>
                  {portfolio.portfolio.github}
                </a>
              {portfolio.portfolio.link === "" ? (
                <div></div>
              ) : (
                <a className="full-opacity" href={portfolio.portfolio.link}>
                  {portfolio.portfolio.link}
                </a>
              )}

            </div>
            {portfolio.portfolio.pic.length > 0 ? (
              <div className="project_desc full-opacity scrollbar" id="style-2">
                {portfolio.portfolio.pic.map((pic, index) => {
                  return (
                    <div className="project_pics">
                      <img alt={pic} src={pic} />
                      Figure {index + 1}
                    </div>
                  );
                })}
                <div className="project_p">{portfolio.portfolio.desc}</div>
              </div>
            ) : (
              <div className="project_desc full-opacity">
                <div className="project_p">{portfolio.portfolio.desc}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupScreen;
