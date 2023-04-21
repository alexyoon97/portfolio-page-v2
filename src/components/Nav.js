import React from "react";
import "../components/Nav.css";
import Draggable from "react-draggable";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <Draggable handle=".material-icons">
      <div className="Nav_Container noselect">
        <div className="Nav_contents">
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-200}
            duration={0}
          >
            ABOUT
          </Link>
          <Link
            activeClass="active"
            to="ImgSlider"
            spy={true}
            smooth={true}
            offset={250}
            duration={0}
          >
            PROJECTS
          </Link>
          <Link
            activeClass="active"
            to="Contacts"
            spy={true}
            smooth={true}
            offset={0}
            duration={0}
          >
            CONTACTS
          </Link>
        </div>
        <i class="material-icons">menu</i>
      </div>
    </Draggable>
  );
};
export default Nav;
