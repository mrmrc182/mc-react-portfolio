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
    } else {
      alert("Thanks for sending a message!")
    }
  };

  return (
    <div>
      <br></br>
      <h1 className="name">Contact Me</h1>
      <form id="contact-form">
        <input type="hidden" name="contact_number"/>
        <label>Name</label>
        <input type="text" name="user_email"/>
        <label>Email</label>
        <input type="email" name="user_message"/>
        <label>Message</label>
        <textarea name="message"></textarea>
        <button type="submit" value="Send" onClick={handleFormSubmit}>Send</button>
    </form>
    </div>
  );
}
     
