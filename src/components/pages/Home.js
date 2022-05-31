import React from 'react';
import Headshot from "../../images/headshot.jpg"

export default function Home() {
  return (
    <div>
      <h4 className="name">Last of the lost, first of the fashionably late</h4>
      <p className='name'>
        Currently a software engineering student at UCSD's Full Stack Web Development Bootcamp.
      </p>
      <img className = "picture" alt="A headshot of Mr. Carlson" src={Headshot}></img>
    </div>
  );
}
