import React, { useState } from "react";
import { ReactDOM } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope } from "react-icons/fa6";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import "./starContactAnimation.css";
function Contact() {
  const [message,setMessage]=useState({
       name:"",
       email:"",
       msg: ""
  });

  function changehandle(event){
    const changedterm=event.target.name;
    var value = event.target.value;
   
      setMessage((prev)=>{
        return {
           ...prev, 
      [changedterm]:value
        };
     
    });
    
    
  }
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_om9sx39",
        "template_fya3aor",
        form.current,
        "M-GFS6bXK49RAmeaY"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully");
          
        },
        (error) => {
          console.log(error.text);
        }
        
      );
      e.target.reset();
      setMessage("");
  };

  return (
    <div>
      <div className="starc"></div>

      <div className="contact-page">
        <div className="contact-head">
          <div
            style={{
              fontSize: "4rem",
              fontWeight: "900px",
              fontFamily: "Italic",
              margin: "20px",
              padding: "20px",
            }}
          >
            Let's chat <br /> tell me about <br /> yourself
          </div>
          <div
            style={{ marginBottom: "30px", padding: "20px", fontSize: "large" }}
          >
            {" "}
            <FaEnvelope size={"20px"} /> {"  "}
            Email me : prathameshpandit2083@gmail.com
          </div>
        </div>

        <div className="contact-form">
          <ToastContainer />
          <h2>
            Send me a message{"  "}
            <BsFillRocketTakeoffFill />
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={message.name}
              onChange={changehandle}
              required="true"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your E-mail"
              value={message.email}
              onChange={changehandle}
              required="true"
            />
            <input
              type="textarea"
              name="msg"
              placeholder="Enter your message"
              className="message"
              value={message.msg}
              onChange={changehandle}
              required="true"
            />
            <button
              type="submit"
              className="btn btn-primary btn-dark "
              style={{ backgroundColor: "darkviolet", width: "100px" }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
