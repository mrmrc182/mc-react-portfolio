import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AugurIMG from "../images/augurPredictScreenshot.png";
import JateIMG from "../images/jate.png";
import TeamsiteIMG from "../images/profileSiteScreenshot.png";
import MarketIMG from "../images/appfarmmarketscreenshot.png";
import ReadmeIMG from "../images/properreadmescreenshot.png";
import PasswordIMG from "../images/passwordgeneratorscreenshot.png";

export default function Projects() {
  return (
    <div className="card-display">
      <Card className="card-width">
        <CardContent>
          <a href="https://augur-app.herokuapp.com/">
            <div>
              <img
                className="screenshot"
                src={AugurIMG}
                alt="a screenshot of the Augur app prediction page"
              ></img>
            </div>
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
      <Card className="card-width">
        <CardContent>
          <a href="https://mrmrc182.github.io/farm-market-finder/">
            <img
              className="screenshot"
              src={MarketIMG}
              alt="a screenshot of the Off to the Market app"
            ></img>
          </a>
          <div>
            <h4 class="project-name">Off to the Market</h4>
            <p>
              An app to find local farmers markets in your area. Made with HTML,
              CSS, and JavaScript.
            </p>
            <p>
              <a href="https://github.com/mrmrc182/farm-market-finder">
                Link to code
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="card-width">
        <CardContent>
          <a href="https://clean-progressive-text-editor.herokuapp.com/">
            <img
              className="screenshot"
              src={JateIMG}
              alt="a screenshot of the Text Editor app"
            ></img>
          </a>
          <div>
            <h4 class="project-name">Text Editor</h4>
            <p>
              A progressive web application where a user can write and save
              text. It can also be used offline.
            </p>
            <p>
              <a href="https://github.com/mrmrc182/progressive-text-editor">
                Link to code
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="card-width">
        <CardContent>
          <a href="https://github.com/mrmrc182/dynamic-teamsite-maker">
            <img
              className="screenshot"
              src={TeamsiteIMG}
              alt="a screenshot of the Teamsite app"
            ></img>
          </a>
          <div>
            <h4 class="project-name">Dynamic Teamsite Maker</h4>
            <p>
              A full stack application that dynamically creates a site with team
              profiles. Made with JavaScript.
            </p>
            <p>
              <a href="https://github.com/mrmrc182/dynamic-teamsite-maker">
                Link to code
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="card-width">
        <CardContent>
          <a href="https://github.com/mrmrc182/good-readme-generator">
            <img
              className="screenshot"
              src={ReadmeIMG}
              alt="a screenshot of the README app"
            ></img>
          </a>
          <div>
            <h4 class="project-name">README Generator</h4>
            <p>
              A back end application that helps teams create READMEs for their
              projects. Made with JavaScript.
            </p>
            <p>
              <a href="https://github.com/mrmrc182/good-readme-generator">
                Link to code
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="card-width">
        <CardContent>
          <a href="https://mrmrc182.github.io/password-creator-secure/">
            <img
              className="screenshot"
              src={PasswordIMG}
              alt="a screenshot of the password generator app"
            ></img>
          </a>
          <div>
            <h4 class="project-name">Secure Password Generator</h4>
            <p>
              An app to create secure passwords. Made with HTML, CSS, and
              JavaScript.
            </p>
            <p>
              <a href="https://github.com/mrmrc182/password-creator-secure">
                Link to code
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
