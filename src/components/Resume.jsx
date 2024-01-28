import React from "react";
import ReactDOM from "react";
import { MdFileDownload } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import background from "../pictures/resume_back.jpg";
const Theme1 = React.lazy(() => import("./starAnimation.css"));
const download_resume = async () => {
  const pdfurl = "http://localhost:3000/Resume.pdf";
  const atag = document.createElement("a");
  atag.href = pdfurl;
  atag.setAttribute("download", "Resume");
  document.body.appendChild(atag);
  atag.click();
  atag.remove();

  toast.success("Resume Downloaded", {
    position: toast.POSITION.BOTTOM_LEFT,
  });
};
 function showtoast(){
  toast.success("Resume Downloaded", {
    position: toast.POSITION.BOTTOM_LEFT,
  });
}

function Resume() {
  return (
    <div
      className="resume-background"
      style={{
        backgroundImage: `url(${background})`,
        border: "1px solid grey",
      }}
    >
      <div className="resume-container">
        <ToastContainer />
        <div className="resume-download">
          <div>
            <a
              href="https://drive.google.com/drive/folders/1_BZmJaXnKyHjh4t5bDL90O7RAkrgzUnQ"
              style={{ color: "black", textDecoration: "none" }}
              onClick={showtoast}
            >
              Download Resume :{"   "}
            </a>
            <MdFileDownload size={"25px"}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resume;
