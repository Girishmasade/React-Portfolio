import React, { useState } from "react";
import "./pages-Css/Contact.css";
import contact from "../../assets/contact.svg";

function Contact() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;

  const handlechange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Let's Connect</h2>
        <p>
          I'm always open to new opportunities, collaborations, and challenges.
          Feel free to reach out if you'd like to discuss a project, share
          ideas, or just say hello!
        </p>
      </div>

      <div className="form-details">
        <div className="form-Image">
          <img src={contact} alt="" />
        </div>

        <div className="form-container">
          <p>Form-Details</p>
          <form action="/http://localhost:5173" className="forms">
            <label htmlFor="name">First name:</label>

            <input
              type="text"
              id="fname"
              name="name"
              value={user.name}
              autoComplete="off"
              onChange={handlechange}
              placeholder="Enter your name"
            />

            <label htmlFor="email">Email:</label>

            <input
              type="email"
              name="email"
              value={user.email}
              autoComplete="off"
              onChange={handlechange}
              placeholder="Enter your email"
            />

            <label  htmlFor="message">Message</label>
            <textarea
              name="message"
              value={user.message}
              autoComplete="off"
              onChange={handlechange}
              id=""
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
