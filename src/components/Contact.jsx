import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="contact-title">Let's Work Together</h2>
            <p className="contact-description">
              I'm currently open to new opportunities and interesting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>
          </div>

          <div className="contact-info">
            <a href="mailto:priyasingh20102020@gmail.com" className="contact-card">
              <div className="contact-icon">
                <FiMail size={22} />
              </div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">priyasingh20102020@gmail.com</div>
              </div>
            </a>

            <a href="tel:+918546013925" className="contact-card">
              <div className="contact-icon">
                <FiPhone size={22} />
              </div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">+91 8546013925</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
