import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jr1n15r",      // ✅ Replace with your actual service ID
        "template_6dvdnwk",     // ✅ Replace with your actual template ID
        form.current,
        "m_aasan0nOHYWrgnM"       // ✅ Replace with your actual public key
      )
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((error) => console.log(error.text));
  };

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className="contact-container">
        <h2 className="section-title glitch-text" data-text="Let's Connect">Let's Connect</h2>
        <p className="contact-subtitle">
          I'm always open to discussing new opportunities, projects, or just tech chats!
        </p>

        <div className="contact-cards">
          <div className="contact-card"><FaEnvelope className="contact-icon" /><p>Email</p><a href="mailto:nikshepcv@gmail.com">nikshepcv@gmail.com</a></div>
          <div className="contact-card"><FaPhoneAlt className="contact-icon" /><p>Phone</p><a href="tel:+919845944179">+91 98459 44179</a></div>
          <div className="contact-card"><FaGithub className="contact-icon" /><p>GitHub</p><a href="https://github.com/nikshepcv" target="_blank" rel="noreferrer">github.com/nikshepcv</a></div>
          <div className="contact-card"><FaLinkedin className="contact-icon" /><p>LinkedIn</p><a href="https://linkedin.com/in/nikshep-c-v-580793191/" target="_blank" rel="noreferrer">linkedin.com/in/nikshep-c-v</a></div>
        </div>

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

        {sent && <p className="sent-confirmation">✅ Message sent successfully!</p>}
      </div>
    </section>
  );
}

export default Contact;
