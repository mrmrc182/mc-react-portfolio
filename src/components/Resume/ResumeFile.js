import React from "react";
import mcResume from "../../images/MC_Resume.png";

export default function File() {
  return (
    <div>
      <h3 className="name breathing-room">You can view Matt's resume here</h3>
      <img className="resume" src={mcResume} alt="Matt's Resume"></img>
      <h3 className="name breathing-room">Technologies Worked With:</h3>
      <p className="name">HTML, CSS, JavaScript, Handlebars, MySQL, Node.JS, React.JS, Express, MongoDB</p>
    </div>
  );
}
