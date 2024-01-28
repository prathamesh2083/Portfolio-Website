import React, { useContext } from "react";
import { ReactDOM } from "react";
import Logo from "./Logo";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "./Theme.css"
function Header() {
  const {theme,changeTheme}=useContext(ThemeContext);

  return (
    <div id="navbar">
      <nav class="navbar navbar-expand-lg px-5 ">
        <div class="navbar-brand" href="#">
          <Logo />
        </div>

        <div class="Mode">
          {theme === "light" ? (
            <div className="themebtn" onClick={() => changeTheme("dark")}>
              <FaMoon size={"3x"} />
            </div>
          ) : (
            <div className="themebtn" onClick={() => changeTheme("light")}>
              <BsFillSunFill color="white" size={"4x"} />
            </div>
          )}
        </div>
        <div class="container-fluid">
          <button
            style={{ margin: "5px" }}
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="nav-item mx-4">
                <Link class="hover-underline-animation nav-link" to="/Home">
                  Home
                </Link>
              </li>

              {/* <li class="nav-item mx-4">
                <Link
                  class=" hover-underline-animation nav-link "
                  to="/Education"
                >
                  Education
                </Link>
              </li> */}
              <li class="nav-item mx-4">
                <Link
                  class=" hover-underline-animation nav-link "
                  to="/Projects"
                >
                  Projects
                </Link>
              </li>

              <li class="nav-item mx-4">
                <Link
                  class=" hover-underline-animation nav-link "
                  to="/Profiles"
                >
                  Profiles
                </Link>
              </li>
              <li class="nav-item mx-4">
                <Link class=" hover-underline-animation nav-link " to="/Resume">
                  Resume
                </Link>
              </li>
              <li class="nav-item mx-4">
                <Link
                  class=" hover-underline-animation nav-link "
                  to="/Contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
