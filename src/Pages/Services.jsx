import React, { useState } from 'react';
import '../CSS/Services.css';

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I join a fitness challenge?",
      answer:
        "You can join by clicking the 'Join Now' button on the challenge card or from the Get Started section. Follow the prompts to register and participate.",
    },
    {
      question: "What equipment do I need for the challenges?",
      answer:
        "Most challenges are designed to be equipment-free or require minimal gear like a yoga mat or dumbbells. Specific requirements are listed in each challenge description.",
    },
    {
      question: "Can beginners participate in the challenges?",
      answer:
        "Absolutely! Our challenges are suitable for all fitness levels, and modifications are available for beginners.",
    },
    {
      question: "How do I track my progress?",
      answer:
        "Progress tracking is integrated into our platform. You can log your workouts, view stats, and monitor your improvements in your profile dashboard.",
    },
    {
      question: "Can I switch between challenges?",
      answer:
        "Yes, you can join or leave challenges at any time through your account settings.",
    },
  ];

  return (
    <>
      {/* 👇 Our Services Section */}
      <div className="services-container">
        <h1 className="services-title">
          Our <span className="highlight">Services</span>
        </h1>
        <p className="services-description">
          Comprehensive fitness solutions designed to help you achieve your goals with expert guidance and community support.
        </p>
      </div>

      {/* 👇 Featured Challenges Section */}
      <div className="featured-challenges-section">
        <h2>Featured Challenges</h2>
        <p>Take part in trending challenges and push your limits!</p>

        <div className="challenge-cards">
          {/* Card 1 */}
          <div className="challenge-card orange-bg">
            <img
              src="https://img.freepik.com/premium-vector/30-minutes-stopwatch-icon-flat-style-clock-face-timer-vector-illustration-isolated-background-countdown-sign-business-concept_157943-47756.jpg"
              alt="Pushup Challenge"
              className="challenge-image"
            />
            <div className="challenge-content">
              <h3>Fitness Challenges</h3>
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
              src="https://m.media-amazon.com/images/I/318MrJZvmcL.jpg"
              alt="Morning Yoga"
              className="challenge-image"
            />
            <div className="challenge-content">
              <h3>Community Competitions</h3>
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
              src="https://t3.ftcdn.net/jpg/15/22/65/58/360_F_1522655871_OdeEzwWOqkRX0VUujD9iu1wJVd6yZNFP.jpg"
              alt="Step Challenge"
              className="challenge-image"
            />
            <div className="challenge-content">
              <h3>Progress Tracking</h3>
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

      {/* 👇 Fitness Challenges Info Section */}
      <div className="fitness-challenges-info">
        <h2>Fitness Challenges</h2>
        <p>
          Our fitness challenges are scientifically designed programs that help you achieve specific goals. Each challenge includes:
        </p>
        <ul>
          <li>• Progressive workout plans tailored to your fitness level</li>
          <li>• Daily exercise routines with video demonstrations</li>
          <li>• Nutrition guidance and meal planning suggestions</li>
          <li>• Weekly progress assessments and adjustments</li>
          <li>• Community support and motivation from fellow participants</li>
          <li>• Expert guidance from certified personal trainers</li>
        </ul>
        <p>
          Whether you're looking to lose weight, build muscle, improve endurance, or enhance flexibility, our challenges provide the structure and support you need to succeed.
        </p>

        <h3>Key Features:</h3>
        <ul>
          <li>4–12 week programs</li>
          <li>24/7 community support</li>
          <li>Progress tracking</li>
          <li>Expert guidance</li>
        </ul>

        <p><strong>Starting from:</strong> Free – $29/month</p>
        <button className="join-btn">Get Started</button>
      </div>

      {/* 👇 Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>500K+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-item">
            <h3>2M+</h3>
            <p>Challenges Completed</p>
          </div>
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Workout Volunteers</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </div>

      {/* 👇 FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="question">
              {faq.question}
              <span className="toggle-icon">{openIndex === index ? '▲' : '▼'}</span>
            </h3>
            {openIndex === index && <p className="answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
