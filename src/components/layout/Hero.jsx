import React from "react";
import "./Hero.css";
import CoverBook from '../../assets/images/Mlbook.jpg'

const Hero = () => {
  return (
    <section className="hero" id="About">
      <div className="hero-bg-orb orb1"></div>
      <div className="hero-bg-orb orb2"></div>

      <div className="hero-content">
        {/* LEFT SIDE */}
        <div className="hero-left">
          <div className="hero-tag"><i class="fa-solid fa-robot"></i> ZubaAI Book Creator</div>

          <h1 className="hero-title">
            Design Beautiful <span>Ebooks Effortlessly</span>
          </h1>

          <p className="hero-sub">
            Turn your ideas into polished ebooks in a matter of minutes using
            our smart, creativity-boosting tools.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Start Free</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>

          <div className="hero-stats">
            <div><strong>60K+</strong> Created</div>
            <div><strong>4.9/5</strong> Rating</div>
            <div><strong>8min</strong> Avg Time</div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="preview-card">
            <div className="preview-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>

            <div className="preview-grid">
              {[
                CoverBook,
               CoverBook,
               CoverBook,
               CoverBook,
               CoverBook,
               CoverBook
              ].map((cover, i) => (
                <div key={i} className="preview-item">
                  <div className="placeholder">
                    <img src={cover} alt=""/>
                  </div>
                </div>
              ))}
            </div>

            <div className="floating-badge">
              Start <span className="spark">writting..</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
