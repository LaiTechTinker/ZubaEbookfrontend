import React, { useState } from "react";
import "./ViewBookPage.css";

export default function ViewBookPage() {
  const chapters = [
    { title: "Chapter 1: Redefining Networking for Introverts", subtitle: "Chapter 1" },
    { title: "Chapter 2: Strategic Networking Approaches", subtitle: "Chapter 2" },
    { title: "Chapter 3: Cultivating and Sustaining Your Network", subtitle: "Chapter 3" }
  ];

  const [active, setActive] = useState(0);
  const [fontSize, setFontSize] = useState(18);

  const content = `
The word “networking” often conjures images of boisterous cocktail parties, aggressive self-promotion, and superficial exchanges – scenarios that can feel utterly draining to many, particularly introverts. For years, the prevailing narrative surrounding networking has been built upon extroverted ideals: the more people you meet, the more successful you’ll be; the louder you speak, the more you’ll be heard.

This chapter is dedicated to dismantling those misconceptions and redefining networking as a powerful tool for introverts—one that leverages their inherent strengths and helps them build authentic, meaningful relationships.

### The Introvert’s Dilemma: Why Traditional Networking Feels Wrong
Before we can reimagine networking, we must first understand the specific challenges introverts face...
  `;

  return (
    <div className="read-container">

      {/* SIDEBAR */}
      <div className="read-sidebar">
          <a href="#home" className="back-link">
          <i className="fa-solid fa-angle-left"></i> Back to Dashboard
        </a>
        <h3 className="side-heading">

          <i className="fa-regular fa-bookmark"></i> Chapters
        </h3>

        <div className="chapter-list">
          {chapters.map((ch, index) => (
            <div
              key={index}
              className={`chapter-item ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              <div className="chapter-title">{ch.title}</div>
              <div className="chapter-sub">{ch.subtitle}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN READER */}
      <div className="read-main">

        {/* Book Top Title */}
        <h1 className="book-main-title">The Introvert’s Guide to Networking</h1>
        <p className="book-author">by Alex Doe</p>

        {/* Font Size Controls */}
        <div className="font-controls">
          <button onClick={() => setFontSize(fontSize - 1)} className="font-btn">
            A-
          </button>

          <span className="font-size-display">{fontSize}px</span>

          <button onClick={() => setFontSize(fontSize + 1)} className="font-btn">
            A+
          </button>
        </div>

        {/* Chapter Title */}
        <h2 className="chapter-heading">
          {chapters[active].title}
        </h2>

        {/* Content */}
        <div
          className="chapter-content"
          style={{ fontSize: `${fontSize}px` }}
        >
          {content.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
