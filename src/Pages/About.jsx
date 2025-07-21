import React from 'react';
import '../CSS/About.css';
import { FaBullseye, FaHeart, FaUsers, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>
          About <span className="highlight">FitChallenge</span>
        </h1>
        <p>
          We're on a mission to revolutionize fitness by making it social,
          engaging, and accessible to everyone, everywhere.
        </p>
      </div>

      {/* History Section */}
      <div className="about-history">
        <h2>Our History</h2>
        <p>
          Founded in 2020 during the global pandemic, FitChallenge was born from the need to keep people active and
          connected when traditional gyms were closed. Our founders, Sarah Mitchell and Dr. James Wilson, recognized
          that fitness is more than just physical exercise—it's about community, motivation, and shared goals.
        </p>
        <p>
          What started as a simple app for tracking workout challenges has evolved into a comprehensive platform
          serving over 500,000 users worldwide. We've helped people complete more than 2 million challenges, lose over
          1 million pounds collectively, and build lasting friendships through fitness.
        </p>
        <p>
          Today, we continue to innovate with cutting-edge features like AI-powered personalization, real-time
          competition modes, and integration with popular fitness wearables. Our commitment remains the same: making
          fitness fun, social, and achievable for everyone.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="mission-vision-container">
        <div className="card mission">
          <FaBullseye className="icon orange" />
          <h3>Our Mission</h3>
          <p>
            To democratize fitness by creating engaging, community-driven challenges that make healthy living accessible,
            enjoyable, and sustainable for people of all fitness levels and backgrounds.
          </p>
        </div>

        <div className="card vision">
          <FaHeart className="icon green" />
          <h3>Our Vision</h3>
          <p>
            To become the world's leading platform for social fitness, where millions of people connect, compete, and
            celebrate together while building healthier, happier lives through the power of community.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="core-values">
        <h2>Our Core Values</h2>
        <p className="subtitle">The principles that guide everything we do</p>
        <div className="core-values-grid">
          <div className="core-value">
            <FaUsers className="icon orange" />
            <h4>Community First</h4>
            <p>
              We believe fitness is better together. Our community-centric approach ensures everyone feels supported and motivated.
            </p>
          </div>
          <div className="core-value">
            <FaAward className="icon green" />
            <h4>Excellence</h4>
            <p>
              We strive for excellence in everything we do, from product design to customer service and community building.
            </p>
          </div>
          <div className="core-value">
            <FaHeart className="icon blue" />
            <h4>Inclusivity</h4>
            <p>
              Fitness is for everyone. We create inclusive experiences that welcome people of all abilities, backgrounds, and fitness levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

