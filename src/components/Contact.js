import React, { useState } from "react";
import data from "../data.json";
import "../styles/Contact.css";

const Contact = () => {
  const contact = data.contact;
  const social = contact.socials;
  const [show, setShow] = useState(false);

  const showNumber = () => {
    setShow(!show);
  };

  return (
    <div id="contact">
      <hr className="section-divider" />
      <div className="title">
        <h2>
          Contact
          <hr className="title-line" />
        </h2>
      </div>
      <div className="contact-container">
        <div className="socials">
          <a className="social" href={social.GitHub[0]}>
            <i className={social.GitHub[1]}></i> GitHub
          </a>
          <a className="social" href={social.LinkedIn[0]}>
            <i className={social.LinkedIn[1]}></i> LinkedIn
          </a>
          <a className="social" href={social.Twitter[0]}>
            <i className={social.Twitter[1]}></i> Twitter
          </a>
          <a className="social" href={social.Portfolio[0]}>
            <i className={social.Portfolio[1]}></i> Portfolio
          </a>
        </div>
        <div className="contacts">
          <h2 className="contact">{contact.name}</h2>
          <a className="email contact" href={`mailto:${contact.email}`}>
            <i className="fas fa-envelope"></i> {contact.email}
          </a>
          <p
            className="phone contact"
            style={{ cursor: "pointer" }}
            onClick={showNumber}
          >
            <i className="fas fa-phone"></i>{" "}
            {show ? `(915) 256-1185` : `Click to show`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
