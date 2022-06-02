import React from "react";

export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
 
    const email = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    // Preventing the default behavior of the form submit (which is to refresh the page)
    if (!email.test(e.target.email.value)) {
      alert("Please provide a valid email address");
    } 
  };

  return (
    <div>
      <h1 className="name">Contact Me</h1>
      <form className="name" onSubmit={handleFormSubmit}>
        <label for="name" tabIndex={1}>
          Name:
        </label>
        <br></br>
        <input type="text" placeholder="Your name" tabIndex={2}></input>
        <br></br>
        <br></br>
        <label for="email">Email:</label>
        <br></br>
        <input
          name="email"
          placeholder="example@email.com"
          tabIndex={3}
        ></input>
        <br></br>
        <br></br>
        <label for="message">Message: </label>
        <br></br>
        <input
          name="message"
          placeholder="Your message here"
          tabIndex={4}
        ></input>
        <br></br>
        <br></br>
        <button type="button" name="submit" value="Submit">
          Submit
        </button>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3 className="name">Telephone: (No Solicitors)</h3>
      <h4 className="name">760 402 9439</h4>
    </div>
  );
}
