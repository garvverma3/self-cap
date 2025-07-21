import React from 'react';
import '../CSS/Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      tag: 'Beginner Tips',
      tagColor: 'orange',
      date: 'January 15, 2025',
      time: '5 min read',
      title: '10 Essential Tips for Starting Your Fitness Journey',
      description: 'Beginning a fitness routine can be overwhelming. Here are our top tips to help you start strong and stay consistent with your new healthy lifestyle.',
      author: 'Sarah Mitchell',
      likes: 234,
      comments: 18,
      emoji: '🏃‍♀️',
    },
    {
      tag: 'Exercise Science',
      tagColor: 'green',
      date: 'January 12, 2025',
      time: '8 min read',
      title: 'The Science Behind High-Intensity Interval Training',
      description: 'Discover why HIIT workouts are so effective for fat loss and cardiovascular health. Learn the optimal work-to-rest ratios and exercise selections.',
      author: 'Dr. James Wilson',
      likes: 189,
      comments: 25,
      emoji: '⚡',
    },
    {
      tag: 'Nutrition',
      tagColor: 'blue',
      date: 'January 10, 2025',
      time: '6 min read',
      title: 'Meal Planning for Busy People',
      description: 'Struggling to eat healthy with a busy schedule? Learn how to prep simple, balanced meals that fuel your fitness without taking hours.',
      author: 'Emily Stone',
      likes: 154,
      comments: 12,
      emoji: '🥗',
    },
    {
      tag: 'Mental Wellness',
      tagColor: 'purple',
      date: 'January 8, 2025',
      time: '7 min read',
      title: 'How Mindfulness Enhances Your Workouts',
      description: 'Improve your focus, reduce stress, and get better results by practicing mindfulness during your training sessions.',
      author: 'Jake Reynolds',
      likes: 201,
      comments: 17,
      emoji: '🧘‍♂️',
    },
  ];

  return (
    <>
      <div className="services-container">
        <h1 className="services-title">
          Our <span className="highlight">Blog</span>
        </h1>
        <p className="services-description">
          Explore the latest insights, tips, and stories from our fitness experts. Your journey to better health starts with better knowledge.
        </p>
      </div>

      <div className="blog-cards-section">
        {blogPosts.map((post, idx) => (
          <div className="blog-card" key={idx}>
            <div className="blog-content">
              <div className={`tag ${post.tagColor}`}>{post.tag}</div>
              <div className="meta">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.time}</span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-description">{post.description}</p>
              <div className="author">👤 {post.author}</div>
              <div className="interaction">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
                <button className="read-more-btn">Read More →</button>
              </div>
            </div>
            <div className="blog-emoji">{post.emoji}</div>
          </div>
        ))}
        <div className="newsletter-section">
        <h2 className="newsletter-title">Stay Updated</h2>
        <p className="newsletter-subtext">
          Subscribe to our newsletter and never miss the latest fitness tips, challenge updates, and inspiring success stories.
        </p>

        <div className="newsletter-box">
          <input
            type="email"
            placeholder="Enter your email address"
            className="newsletter-input"
          />
          <button className="newsletter-button">Subscribe</button>
        </div>
        <p className="newsletter-privacy">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
      </div>
    </>
  );
};

export default Blog;
