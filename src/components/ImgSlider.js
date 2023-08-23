import React, { useState, useContext, useRef } from "react";
import { useTransition, animated } from "react-spring";
import "../components/ImgSlider.css";
import PopupScreen from "../components/PopupScreen";
import ToggleContext from "../components/context/toggleContext";

function ImgSlider({ Portfolio_list }) {
  //initialization
  const [index, setIndex] = useState(0);
  const popup_ref = useRef(null);
  //index control function
  function nextClick() {
    setIndex((prevstate) => (prevstate + 1) % Portfolio_list.length);
  }
  function prevClick() {
    setIndex((prevstate) =>
      prevstate - 1 < 0 ? prevstate += Portfolio_list.length -1 : prevstate - 1
    );
  }
  function onClick_img() {
    toggleHidden();
    popup_ref.current.scrollIntoView();
  }
  //spring style options
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(-10%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 1, transform: "translate3d(0%,0,0)" },
  });
  const { hidden, toggleHidden } = useContext(ToggleContext);

  return (
    //page instructor line 20 to 25
    <div className="portfo_container" id="ImgSlider">
      <div ref={popup_ref} style={{ position: "absolute", top: "510vh" }}></div>
      <PopupScreen portfolio={Portfolio_list[index]} />
      {/* image slider for portfolio list */}
      <div className="index_display">
        {[...Array(Portfolio_list.length)].map((e, i) => {
          if (index === i) {
            return (
              <button key={i} className="current_portfolio">
                ●
              </button>
            );
          } else {
            return (
              <button key={i} className="">
                ●
              </button>
            );
          }
        })}
      </div>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div key={key} style={{ ...props }}>
            <div className="imgSlider">
              <i className="material-icons" onClick={prevClick}>
                navigate_before
              </i>
              <img
                onClick={onClick_img}
                className="portfo_img"
                src={Portfolio_list[index].logo}
                alt={Portfolio_list[index].name}
              ></img>

              <i className="material-icons" onClick={nextClick}>
                navigate_next
              </i>
            </div>
          </animated.div>
        );
      })}
    </div>
  );
}

export default ImgSlider;
