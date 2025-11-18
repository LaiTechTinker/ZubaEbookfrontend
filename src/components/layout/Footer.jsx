import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-content">
        {/* LEFT BRAND AREA */}
        <div className="footer-brand">
          <h2 className="footer-logo"> <i class="fa-solid fa-robot"></i> ZubaAI</h2>
          <p>
            Create, design and publish beautiful ebooks with the power of AI.
            Simple. Fast. Professional.
          </p>

          <div className="footer-socials">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* LINK COLUMNS */}
        <div className="footer-links">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Templates</a>
            <a href="#">AI Tools</a>
            <a href="#">Pricing</a>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <a href="#">Tutorials</a>
            <a href="#">Blog</a>
            <a href="#">Case Studies</a>
            <a href="#">Help Center</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Zuba AI. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
