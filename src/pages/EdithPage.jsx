import React, { useState } from "react";
import "./Edith.css";

export default function EditChapterPage() {
  const [showExportMenu, setShowExportMenu] = useState(false);

  const chapters = [
    "Chapter 1: Foundations of the Minimalist Home Method",
    "Chapter 2: Implementing the Room-by-Room Approach",
    "Chapter 3: Maintaining a Clutter-Free Lifestyle",
  ];

  return (
    <div className="edit-container">

      {/* Sidebar */}
      <div className="sidebar">
        <a href="#home" className="back-link">
          <i className="fa-solid fa-angle-left"></i> Back to Dashboard
        </a>

        <h3 className="book-title">The Minimalist Home Method</h3>

        <div className="chapter-list">
          {chapters.map((chapter, index) => (
            <div key={index} className="chapter-item">
              <i className="fa-solid fa-bars"></i> {chapter}
            </div>
          ))}
        </div>

        <button className="new-chapter-btn">
          <i className="fa-solid fa-plus"></i> New Chapter
        </button>
      </div>

      {/* Main Editor */}
      <div className="editor-area">

        {/* Top Controls */}
        <div className="top-controls">
          <div></div>

          <div className="top-actions">
            
            {/* Export Button */}
            <div className="export-wrapper">
              <button
                className="export-btn"
                onClick={() => setShowExportMenu(!showExportMenu)}
              >
                <i className="fa-regular fa-file"></i> Export
                <i className="fa-solid fa-chevron-down small-icon"></i>
              </button>

              {showExportMenu && (
                <div className="export-dropdown-menu">
                  <div className="export-item">
                    <i className="fa-solid fa-file-pdf"></i> Export as PDF
                  </div>
                  <div className="export-item">
                    <i className="fa-solid fa-file-word"></i> Export as DOCX
                  </div>
                </div>
              )}
            </div>

            {/* Save Button */}
            <button className="save-btn">
              <i className="fa-solid fa-floppy-disk"></i> Save Changes
            </button>

          </div>
        </div>

        {/* Editor Heading */}
        <h2 className="editor-title">Chapter Editor</h2>
        <p className="editing-subtext">
          Editing: Chapter 1: Foundations of the Minimalist Home Method
        </p>

        {/* Title Input */}
        <label className="label">Chapter Title</label>
        <input
          className="chapter-input"
          defaultValue="Chapter 1: Foundations of the Minimalist Home Method"
        />

        {/* Toolbar */}
        <div className="toolbar">
          <span>T Markdown Editor</span>

          <div className="tools">
            <i className="fa-solid fa-bold"></i>
            <i className="fa-solid fa-italic"></i>
            <i className="fa-solid fa-strikethrough"></i>
            <i className="fa-solid fa-link"></i>
            <i className="fa-regular fa-image"></i>
            <i className="fa-solid fa-list"></i>
            <i className="fa-solid fa-list-ol"></i>
          </div>

          <div className="tools-right">
            <i className="fa-solid fa-maximize"></i>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        {/* Split Editor */}
        <div className="edit-split">
          <textarea
            className="editor-input"
            placeholder="Start editing your chapter..."
          ></textarea>

          <div className="preview-area">
            <p className="preview-placeholder">Preview will appear here...</p>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="bottom-actions">
          <button className="edit-btn active">Edit</button>
          <button className="preview-btn">Preview</button>
          <button className="generate-ai-btn">
            <i className="fa-solid fa-wand-magic-sparkles"></i> Generate with AI
          </button>
        </div>

      </div>
    </div>
  );
}
