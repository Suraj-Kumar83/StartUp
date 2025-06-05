import React from "react";
import "./About.css"; // Import your CSS file for styling

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Empowering Startups in the Ayush Sector</h1>
        <p>
          Your gateway to innovation, growth, and success in the Ayush industry.
        </p>
        <button className="cta-btn">Join Us Today</button>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <h2>Our Mission and Vision</h2>
        <div className="content">
          <div className="mission">
            <h3>Mission</h3>
            <p>
              To empower startups in the Ayush sector by providing them with the
              tools, resources, and connections they need to thrive in a
              competitive market.
            </p>
          </div>
          <div className="vision">
            <h3>Vision</h3>
            <p>
              To create a vibrant ecosystem where Ayush startups can innovate,
              collaborate, and grow, contributing to the global wellness
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Ayush Startup Portal?</h2>
        <p>Discover what makes us the preferred choice for Ayush startups.</p>
        <div className="features-grid">
          <div className="feature-card">
            <span role="img" aria-label="guidance">
              👥
            </span>
            <h3>Expert Guidance</h3>
            <p>
              Access mentorship from industry experts and successful
              entrepreneurs.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="funding">
              💰
            </span>
            <h3>Funding Opportunities</h3>
            <p>
              Connect with investors and explore exclusive funding programs.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="networking">
              🌐
            </span>
            <h3>Networking Platform</h3>
            <p>
              Join a community of like-minded entrepreneurs and industry
              leaders.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="resources">
              📚
            </span>
            <h3>Resource Library</h3>
            <p>
              Access a comprehensive library of resources tailored for Ayush
              startups.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="analytics">
              📊
            </span>
            <h3>Analytics Dashboard</h3>
            <p>
              Track your startup’s progress with real-time insights and reports.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="global">
              🌍
            </span>
            <h3>Global Reach</h3>
            <p>Expand your reach and connect with stakeholders worldwide.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Ayush Startup Portal was founded in [Year] with a vision to
          revolutionize the Ayush industry by supporting innovative startups.
          Our platform was born out of a passion for holistic wellness and a
          belief in the potential of Ayush to transform lives. Over the years,
          we have helped hundreds of startups launch, grow, and succeed,
          creating a thriving ecosystem for the Ayush sector.
        </p>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <p>Behind every great platform is a team of passionate individuals.</p>
        <div className="team-grid">
          <div className="team-member">
            <h3>John Doe</h3>
            <p>CEO & Co-Founder</p>
            <p>
              John is a visionary leader with over 10 years of experience in the
              wellness industry.
            </p>
          </div>
          <div className="team-member">
            <h3>Jane Smith</h3>
            <p>CTO</p>
            <p>
              Jane is a tech enthusiast with a passion for building scalable and
              innovative platforms.
            </p>
          </div>
          <div className="team-member">
            <h3>Alex Johnson</h3>
            <p>Head of Partnerships</p>
            <p>
              Alex specializes in building strategic partnerships and fostering
              collaborations.
            </p>
          </div>
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
        <h2>Ready to Join the Ayush Revolution?</h2>
        <p>Register your startup today and unlock a world of opportunities.</p>
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
          © 2023 Ayush Startup Portal. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
