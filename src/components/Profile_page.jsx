import React from "react";
import { ReactDOM } from "react";
import Profile from "./Profile";
// import { fastar } from "@fortawesome/free-brands-svg-icons";
import { data} from "./ProfileData";
import "./starAnimation.css";
function display(profile){
    return (
        <Profile key={profile.id} image={profile.image} name={profile.name} info={profile.info} link={profile.link}  />
    );
}
function Profile_page() {
  return (
    <div >
      <div className="profile_page_background">
       
        <div className="stars11" style={{ height: "0" }}></div>
        <div className="stars22" style={{ height: "0" }}></div>
        <div className="stars33" style={{ height: "0" }}></div>
        <div className="Profile-page">{data.map(display)}</div>
      </div>
    </div>
  );
}
export default Profile_page;
