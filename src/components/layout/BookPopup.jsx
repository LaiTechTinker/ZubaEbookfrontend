import React from "react";
import "./BookPopup.css";

export default function CreateBookModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <h2 className="modal-title">Create New eBook</h2>

        <form className="modal-form">
          
          <label>Book Title</label>
          <input
            type="text"
            placeholder="Enter your book title..."
          />

          <label>Number of Chapters</label>
          <input
            type="number"
            placeholder="5"
            defaultValue={5}
          />

          <label>Topic (Optional)</label>
          <input
            type="text"
            placeholder="Specific topic for AI generation..."
          />

          <label>Writing Style</label>
          <select defaultValue="Informative">
            <option>Informative</option>
            <option>Storytelling</option>
            <option>Formal</option>
            <option>Casual</option>
          </select>

          <button className="generate-btn">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            Generate Outline with AI
          </button>
        </form>
      </div>
    </div>
  );
}
