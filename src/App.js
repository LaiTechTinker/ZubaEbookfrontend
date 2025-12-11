import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import LoginPage from './pages/LoginPage';
import Protected from './components/auth/Protected';
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';
import DashBoard from './pages/DashBoard';
import EdithPage from './pages/EdithPage';
import ViewBookPage from './pages/ViewBookPage';
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<Protected><DashBoard /></Protected>} />
        <Route path="/editor/:bookId" element={<Protected><EdithPage /></Protected>} />
        <Route path="/viewbook/:bookId" element={<Protected><ViewBookPage /></Protected>} />
        <Route path="/profile" element={<Protected><Profile /></Protected>} />
      </Routes>
    </div>
  );
}

export default App;
