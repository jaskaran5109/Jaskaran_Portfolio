import React, { useEffect, useState } from "react";
import "./ContactMe.css";
import emailjs from "emailjs-com";
import {  Github, Instagram, Linkedin } from "react-bootstrap-icons";

const ContactMe = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");
    useEffect(() => {
        if(name==="" || email==="" || subject==="" || message==="")
            return;
    }, [])
    
  function sendEmail(e) {
    e.preventDefault();
    if(name==="" || email==="" || subject==="" || message==="")
        alert("Fields Cannot Be Empty");
    emailjs
      .sendForm("gmail", "template_niveb1x", e.target, "ztzqG5KqmDp35pLdM")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setname("");
      setemail("");
      setsubject("");
      setmessage("");
      alert("Message sent successfully")
  }
  return (
    <section id="contactMe">
      <h1 className="section-header">Contact Me</h1>

      <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal"  onSubmit={sendEmail}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value={name}
                onChange={(e)=>setname(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="subject"
                className="form-control"
                id="subject"
                placeholder="SUBJECT"
                name="subject"
                value={subject}
                onChange={(e)=>setsubject(e.target.value)}
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            rows="10"
            id="message_form"
            placeholder="MESSAGE"
            name="message"
            value={message}
            onChange={(e)=>setmessage(e.target.value)}
            required
          ></textarea>

          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            SEND
          </button>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">
                  Modinagar, Uttar-Pradesh
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="+91 7500224998" title="Give me a call">
                    +91 7500224998
                  </a>
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">
                    hs123online@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <hr />
          <div className="icon-list">
            <a href="https://github.com/jaskaran5109" target="_blank" className="icon-one"><Github/></a>
            <a href="https://www.instagram.com/i_am._jas_/" target="_blank" className="icon-two"><Instagram/></a>
            <a href="https://www.linkedin.com/in/jaskaran-singh-04a7671b5" target="_blank" className="icon-four"><Linkedin/></a>
            
          </div>
          <hr />

          <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
