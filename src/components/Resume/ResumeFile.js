import React from "react";
import mcResume from "../../images/MC_Tech_Resume_2022-1.png";

export default function File() {
  return (
    <div>
      <h3 className="name breathing-room">You can view Matt's resume here</h3>
      <img className="resume" src={mcResume} alt="Matt's Resume"></img>
      <h3 className="name breathing-room">Technologies Worked With:</h3>
      <p className="name">HTML, CSS, Java, C#, JavaScript, Handlebars, MySQL, Node.JS, React.JS, Express, MongoDB</p>
    </div>
  );
}
