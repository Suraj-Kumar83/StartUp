import React, { useState } from "react";
import "./Contact.css"; // Import your CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      alert("Message sent successfully!");
      // Submit form data to backend or API here
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = "Full Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!data.message.trim()) {
      errors.message = "Message is required";
    } else if (data.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
    return errors;
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>We’re Here to Help!</h1>
        <p>
          Have questions or need assistance? Reach out to us—we’d love to hear
          from you.
        </p>
        <button className="cta-btn">Contact Us</button>
      </section>

      {/* Contact Options Section */}
      <section className="contact-options">
        <h2>Get in Touch</h2>
        <p>Choose the most convenient way to contact us.</p>
        <div className="options-grid">
          <div className="option-card">
            <span role="img" aria-label="email">
              ✉️
            </span>
            <h3>Email</h3>
            <p>Send us an email, and we’ll get back to you within 24 hours.</p>
            <a href="mailto:support@ayushstartupportal.com">
              support@ayushstartupportal.com
            </a>
          </div>
          <div className="option-card">
            <span role="img" aria-label="phone">
              📞
            </span>
            <h3>Phone</h3>
            <p>Call us during business hours for immediate assistance.</p>
            <a href="tel:+911234567890">+91 123 456 7890</a>
          </div>
          <div className="option-card">
            <span role="img" aria-label="location">
              📍
            </span>
            <h3>Visit Us</h3>
            <p>Visit our office for a face-to-face conversation.</p>
            <p>123 Ayush Street, Wellness City, India</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <p>
          Fill out the form below, and we’ll get back to you as soon as
          possible.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject of your message"
            />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              rows="5"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="map">
        <h2>Find Us on the Map</h2>
        <p>Visit our office or drop by for a chat.</p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.869036319788!2d77.2098643150816!3d28.57208298244093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99b6f9fa7%3A0x83a25e55f0af1c82!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1622549401237!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>
      <hr></hr>

      {/* Footer */}
      <footer className="footer border-top">
        <div className="quick-links">
          <a href="/about">About Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="social-media">
          <a href="/linkedin">LinkedIn</a>
          <a href="/twitter">Twitter</a>
          <a href="/facebook">Facebook</a>
          <a href="/instagram">Instagram</a>
        </div>
        <div className="newsletter">
          <p>
            Subscribe to our newsletter for the latest updates and resources.
          </p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <p className="copyright">
          © 2023 Ayush Startup Portal. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
