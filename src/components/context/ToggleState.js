import React, { useState } from "react";
import ToggleContext from "../context/toggleContext";

const ToggleState= (props) => {
  const [hidden, setHidden] = useState(true);

  function toggleHidden() {
    setHidden(hidden => !hidden);
    // hidden ? document.body.style.overflowY = 'hidden' :document.body.style.overflowY = 'scroll'
  }
  return (
    <ToggleContext.Provider value={{ hidden, toggleHidden }}>
      {props.children}
    </ToggleContext.Provider>
  );
};
export default ToggleState