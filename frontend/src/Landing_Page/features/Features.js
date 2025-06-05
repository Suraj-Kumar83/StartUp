import React from "react";
import "./Features.css"; // Import your CSS file for styling

const Features = () => {
  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Everything You Need to Launch and Grow Your Startup</h1>
        <p>
          From registration to scaling, we provide the tools and resources to
          help your startup succeed.
        </p>
        <button className="cta-btn">Explore Features</button>
      </section>

      {/* Key Features Section */}
      <section className="key-features">
        <h2>Key Features</h2>
        <p>
          Discover the tools and resources designed to empower your startup
          journey.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <span role="img" aria-label="registration">
              📝
            </span>
            <h3>Easy Startup Registration</h3>
            <p>
              Quick and hassle-free registration process tailored for startups.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="funding">
              💰
            </span>
            <h3>Access to Funding</h3>
            <p>
              Connect with investors and access exclusive funding opportunities.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="mentorship">
              👥
            </span>
            <h3>Mentorship Programs</h3>
            <p>Learn from experienced mentors and industry leaders.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="networking">
              🌐
            </span>
            <h3>Networking Opportunities</h3>
            <p>
              Join exclusive events and connect with like-minded entrepreneurs.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="resources">
              📚
            </span>
            <h3>Resource Library</h3>
            <p>Access templates, guides, and tools to grow your startup.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="analytics">
              📊
            </span>
            <h3>Analytics Dashboard</h3>
            <p>Track your startup’s progress with our intuitive dashboard.</p>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="detailed-features">
        <h2>Detailed Features</h2>
        <p>
          Explore how our platform can help you at every stage of your startup
          journey.
        </p>
        <div className="feature-accordion">
          {/* Add accordion or tabs here */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <p>
          Join thousands of startups who have successfully launched with us.
        </p>
        <div className="testimonial-carousel">{/* Add carousel here */}</div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Take Your Startup to the Next Level?</h2>
        <p>Join our platform today and unlock a world of opportunities.</p>
        <button className="cta-btn">Get Started Now</button>
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
          © 2023 [Your Startup Portal Name]. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Features;
