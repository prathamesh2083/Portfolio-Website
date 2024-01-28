import React from "react";
import { ReactDOM } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePic from "./ProfilePic";
function Home(){
     return (
       <div className="homecontainer">
         <div className="home-info ">
          <div> 
          {/* <FontAwesomeIcon icon="fa-thin fa-download" /> */}
          </div>
           <p className="home-name">𝐏𝐫𝐚𝐭𝐡𝐚𝐦𝐞𝐬𝐡 𝐏𝐚𝐧𝐝𝐢𝐭</p>
           <p className="home-role">Web Developer , Competitive Programmer </p>
         </div>

         <div className="home-pic">
           {" "}
           <ProfilePic />{" "}
         </div>
       </div>
     );
}

export default Home;
