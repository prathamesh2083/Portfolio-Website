import React from "react";
import { ReactDOM } from "react";

function Profile(props){
      
    return (
      <div className="profile-card">
        <div className="card-logo-div">
          
          <img src={props.image} className="card-logo"></img>
          <hr />
        </div>

        <div className="card-name">{props.name}</div>
        <p className="card-info">{props.info}</p>
        <div className="card-link">
          {" "}
          <a href={props.link} target="_blank">
            @prathamesh_45
          </a>
        </div>
      </div>
    );
}
export default Profile;