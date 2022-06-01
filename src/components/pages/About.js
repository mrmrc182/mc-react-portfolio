import React from 'react';
import Headshot from "../../images/headshot.jpg";

export default function About() {
  return (
    <div>
      <h4 className="name">Last of the lost, first of the fashionably late</h4>
      <img className = "picture" alt="A headshot of Mr. Carlson" src={Headshot}></img>
      <h1 class="name">About Matt</h1>
      <p class="name">
        Matt is a San Diego native born and raised.  <br></br>Graduate of the UC Irvine Class of 2018 with a BA in Political Science, he is now learning software engineering at UCSD's Full Stack Web Development Bootcamp.

        <br></br>
        In his spare time you can find him hiking, being too competitive at trivia, or playing guitar.
      </p>
    </div>
  );
}
