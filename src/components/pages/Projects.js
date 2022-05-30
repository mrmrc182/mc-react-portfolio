import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Projects() {
  return (
    <div>
      <h1 class="title">Recent Projects</h1>
      <Card>
      <CardContent>
        <a href="https://augur-app.herokuapp.com/">
          <img
            src="./images/augurPredictScreenshot.png"
            alt="a screenshot of the Augur app prediction page"
          ></img>
        </a>
        <div>
          <h4 class="project-name">Augur</h4>
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
      </Card>
      <Card>
      <CardContent>
        <a href="https://clean-progressive-text-editor.herokuapp.com/">
          <img
            src="#"
            alt="a screenshot of the Text Editor app"
          ></img>
        </a>
        <div>
          <h4 class="project-name">Text Editor</h4>
          <p>
            A progressive web application where a user can write and save text.  It can also be used offline.
          </p>
          <p>
            <a href="https://github.com/mrmrc182/progressive-text-editor">
              Link to code
            </a>
          </p>
        </div>
      </CardContent>
      </Card>
    </div>
  );
}
