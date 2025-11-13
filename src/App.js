import React from 'react';
import {Routes,Route} from "react-router-dom"

import './App.css';
import LoginPage from './pages/LoginPage';
import Protected from './components/auth/Protected';
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';
import DashBoard from './pages/DashBoard';
import EditorPage from './pages/EditorPage';
import ViewBookPage from './pages/ViewBookPage';
import Profile from './pages/Profile';

function App() {
  return (
    <div >
<Routes>
  {/* public Routes */}
  <Route path="/" element={<LandingPage/>}/>
  <Route path="/SignUp" element={<SignupPage/>}/>
  <Route path="/Login" element={<LoginPage/>}/> 
</Routes>
{/* Protected Routes */}
<Routes>
  <Route path="/dashboard" element={<Protected><DashBoard/></Protected>}/>
  <Route path="/editor/:bookId" element={<Protected><EditorPage/></Protected>}/>
  <Route path="/view-book/:bookId" element={<Protected><ViewBookPage/></Protected>}/>
  <Route path="/profile" element={<Protected><Profile/></Protected>}/>
</Routes>
    </div>
  );
}

export default App;
