import React, { useState } from "react";
import "./DashNav.css";

export default function DashNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT SIDE */}
      <div className="nav-left">
        <div className="logo-box">
            <i class="fa-solid fa-robot"></i>
        </div>
        <span className="app-name">ZubaAI</span>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <div className="profile" onClick={() => setOpen(!open)}>
          <div className="avatar">A</div>

          <div className="user-info">
            <span className="name">Ibrahim Lai</span>
            <span className="email">ibrahim.lai@example.com</span>
          </div>

          <i className="fa-solid fa-chevron-down dropdown-icon"></i>
        </div>

        {/* DROPDOWN */}
        {open && (
          <div className="dropdown">
            <button className="dropdown-item">
              <i className="fa-regular fa-user"></i> View Profile
            </button>
            <button className="dropdown-item logout">
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
