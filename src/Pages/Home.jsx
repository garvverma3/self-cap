import React from 'react';
import '../CSS/Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Main Container */}
      <div className="home-container">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for challenges, workouts, or blog posts..."
          />
          <button>🔍</button>
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="left-content">
            <h1>
              Transform Your <br />
              <span>Fitness Journey</span>
            </h1>
            <p>
              Join thousands of fitness enthusiasts in our engaging challenges.
              Track progress, compete with friends, and achieve your goals together.
            </p>
            <button className="start-btn">Start Your Challenge</button>
          </div>

          <div className="right-form">
            <h2>Get Started Today</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows={4}></textarea>
            <button className="send-btn">Send Message</button>
          </div>
        </div>
      </div>

      {/* Featured Challenges Section */}
      <div className="featured-challenges-section">
        <h2>Featured Challenges</h2>
        <p>Take part in trending challenges and push your limits!</p>

        <div className="challenge-cards">
          {/* Card 1 */}
          <div className="challenge-card orange-bg">
            <img
              src="https://blog.nasm.org/hubfs/power-pushups.jpg"
              alt="Pushup Challenge"
              className="challenge-image"
            />
            <div className="challenge-content">
              <h3>30-Day Pushup Challenge</h3>
              <p>Build strength and consistency with daily pushups.</p>
              <div className="meta">
                <span className="tag">Strength</span>
                <span className="users">1.2k joined</span>
              </div>
              <button className="join-btn">Join Now</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="challenge-card teal-bg">
            <img
              src="https://www.doyou.com/wp-content/uploads/2021/01/Yoga-in-the-Morning.jpg"
              alt="Morning Yoga"
              className="challenge-image"
            />
            <div className="challenge-content">
              <h3>Morning Yoga Series</h3>
              <p>Start your day fresh with guided yoga sessions.</p>
              <div className="meta">
                <span className="tag">Flexibility</span>
                <span className="users">980 joined</span>
              </div>
              <button className="join-btn">Join Now</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="challenge-card peach-bg">
            <img
              src="https://play-lh.googleusercontent.com/Jm8PW6wNjCZBgpNdZbiJtFgotqQdtSnsrGKO-n7TJ8zQkOrg0HvY77qQiOTTjP1RwTQ=w480-h960-rw"
              alt="Step Challenge"
              className="challenge-image"
            />
            <div className="challenge-content">
              <h3>Step Up Challenge</h3>
              <p>Walk 10,000 steps a day and earn rewards!</p>
              <div className="meta">
                <span className="tag">Cardio</span>
                <span className="users">2.5k joined</span>
              </div>
              <button className="join-btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Features Section */}
      <div className="extra-features-section">
        <h2>Why Choose FitChallenge?</h2>
        <div className="features-grid">
          {/* Goal-Oriented Challenges */}
          <div className="feature-card">
            <h3>🎯 Goal-Oriented Challenges</h3>
            <p>
              Our challenges are designed with specific goals in mind. Whether you want to
              lose weight, build muscle, improve endurance, or enhance flexibility, we guide
              you step-by-step toward success.
            </p>
            <ul>
              <li>✅ Personalized fitness plans</li>
              <li>📈 Progress tracking and analytics</li>
              <li>🎉 Milestone celebrations</li>
            </ul>
          </div>

          {/* Achievement System */}
          <div className="feature-card blue-bg">
            <h3>🏆 Achievement System</h3>
            <p>
              Earn badges and rewards as you complete challenges and reach milestones.
              Stay motivated and proud of your accomplishments!
            </p>
          </div>

          {/* Community Support */}
          <div className="feature-card orange-bg">
            <h3>🤝 Community Support</h3>
            <p>
              Join a vibrant community of fitness enthusiasts who support, motivate, and celebrate each other.
            </p>
            <ul>
              <li>👥 Connect with like-minded individuals</li>
              <li>📣 Share progress and get motivation</li>
              <li>🧠 Expert guidance and tips</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 style={{textAlign: 'center'}}>What Our Users Say</h2>
        <p style={{textAlign: 'center'}} className="subheading">
          Real stories from real people who transformed their lives
        </p>
      </div>

        <div className="testimonial-cards">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "The progress tracking keeps me motivated. Best fitness app I've used!"
            </p>
            <div className="user-info">
              <span className="avatar">👩‍💻</span>
              <div>
                <strong>Emily Rodriguez</strong>
                <p className="user-role">Verified User</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p  className="testimonial-text">
              "Amazing community and well-structured challenges. Exceeded my expectations!"
            </p>
            <div className="user-info">
              <span className="avatar">👨‍🏫</span>
              <div>
                <strong>David Park</strong>
                <p className="user-role">Verified User</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Home;

