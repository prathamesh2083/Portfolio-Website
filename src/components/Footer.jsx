import React from "react";
import { ReactDOM } from "react";
import { FaInstagram } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa6";
import { Link} from "react-router-dom";

import background from "../pictures/footer_background.jpg";
function Footer() {
  
  
  return (
    <div>
      <footer style={{ backgroundImage: `url(${background})` }}>
        <div className="footer-container row">
          <div className="footer-div footer-contact col-lg-4 col-sm-12 ">
            <p className="footer-heading">About Me</p>
            <div>
              I am student at Pimpri Chinchwad College of Engineering,Pune
            </div>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/prathamesh-pandit-4585b1243/">
                <FaLinkedin size={"22px"}/>
              </a>

              <a href="https://github.com/prathamesh2083">
                <FaGithub size={"22px"}/>
              </a>
              <a href="https://discord.com/channels/@prathameshpandit_" >
                <FaDiscord size={"22px"}/>
              </a>
              <a href="https://www.instagram.com/prathamesh.pandit45/">
                <FaInstagram size={"22px"} />
              </a>
            </div>
          </div>

          <div className="footer-div footer-contact col-lg-4 col-sm-12">
            <p className="footer-heading">Quick Links</p>

            <Link to="/">
              <p> Home</p>
            </Link>
            <Link to="/Projects">
              <p> Projects</p>
            </Link>
            <Link to="/Profiles">
              <p> Profiles</p>
            </Link>
            <Link to="/Resume">
              <p> Resume</p>
            </Link>
            <Link to="/contact">
              <p> Contact</p>
            </Link>
          </div>

          <div className="footer-div footer-contact col-lg-4 col-sm-12">
            <p className="footer-heading ">Contact</p>
            <div>
              Phone:<br></br> +91 9834670973
            </div>
            <div>
              E-mail:<br></br> prathameshpandit2083@gmail.com
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
