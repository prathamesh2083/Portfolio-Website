import React, { useContext, useState } from "react";
import { ReactDOM } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Resume from "./Resume";
import { BrowserRouter as Router , Switch, Route, Link ,Routes } from "react-router-dom";
import Profile_page from "./Profile_page";
import Project_page from "./Project_page";
import { ThemeContext } from "../context/ThemeContext";
import "./Theme.css"

function App() {

 const {theme}=useContext(ThemeContext);
 
  return (
    
      <div className={theme==="dark"?`dark`:`light`}>
        <Router>
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Profiles" element={<Profile_page />} />
            <Route path="/Projects" element={<Project_page />} />
            <Route path="/Resume" element={<Resume />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
        </Router>
      </div>
   
  );
}
export default App;
