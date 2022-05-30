import React from "react";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Projects() {
  return (
    <div>
      <h1>Recent Projects</h1>
      <CardContent>
        <h2>Augur</h2>
        <a href="https://augur-app.herokuapp.com/">
          <img
            src="./images/augurPredictScreenshot.png"
            alt="a screenshot of the Augur app prediction page"
          ></img>
        </a>
        <div>
          <h4>Augur</h4>
          <p>
            An app to make and log stock market predictions. Made with
            JavaScript, Handlebars, and MySQL
          </p>
          <p>
            <a href="https://github.com/sammymayhem/the-coin-flips">
              Link to code
            </a>
          </p>
        </div>
      </CardContent>
    </div>
  );
}
