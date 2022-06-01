import React from "react";
import mcResume from "../../images/MC_Resume.png"

export default function Resume() {
  return (
    <div className="resume-page">
      <h3 className="name">You can view Matt's resume here</h3>
      <div>
        <img className="resume" src={mcResume} alt="Matt's Resume"></img>
        </div>
    </div>
  );
}
