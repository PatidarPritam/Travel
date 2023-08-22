import "./ContactFormStyles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fp9etlt",
        "template_mnady1e",
        form.current,
        "vcrIoLjvs0E-9m2aE"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div>
        <h2>For more Info Contact Us</h2>
        <h3>PritamPatidar-917770954109</h3>
      </div>
      <div className="form-container">
        <h1>send a message to us </h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="send" type="submit" value="Send" />
        </form>
      </div>
    </>
  );
}

export default ContactForm;
