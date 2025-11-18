import React from "react";
import "./Features.css";
import { TESTIMONIALS } from "../../utils/data";

// const testimonials = [
//   {
//     text: `"This platform made writing and publishing my ebook incredibly easy. The AI assistant felt like a creative partner."`,
//     name: "Jane Doe",
//     role: "Author & Creator",
//     avatar: "/avatars/avatar1.png",
//   },
//   {
//     text: `"The templates are beautiful and customizable. I finally created an ebook design that matched my brand exactly."`,
//     name: "John Smith",
//     role: "Marketing Designer",
//     avatar: "/avatars/avatar2.png",
//   },
//   {
//     text: `"The export tools saved me hours. I was able to publish across multiple platforms in minutes — a huge time saver!"`,
//     name: "Peter Jones",
//     role: "Indie Publisher",
//     avatar: "/avatars/avatar3.png",
//   },
// ];

const Features = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-bg"></div>

      <h2 className="testimonials-title">
        Loved by Creators <span>Everywhere</span>
      </h2>
      <p className="testimonials-sub">
        Hear what our amazing users have to say about their experience.
      </p>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="testimonial-card">
            <div className="quote-badge">❞</div>

            <div className="stars">
              {Array.from({ length: 5 }).map((_, star) => (
                <span key={star}>★</span>
              ))}
            </div>

            <p className="testimonial-text">{t.quote}</p>

            <div className="testimonial-user">
              <img src={t.avatar} alt="User avatar" />
              <div>
                <strong>{t.author}</strong>
                <div className="role">{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
