import React from "react";
import { ReactDOM } from "react";
import path from "../pictures/profile-photoroom.png";
function ProfilePic(){
    return (
      
      <div className="profile-photo">
        <img
          src={path}
          alt="profile image"
        />
      </div>
    );
}

export default ProfilePic;