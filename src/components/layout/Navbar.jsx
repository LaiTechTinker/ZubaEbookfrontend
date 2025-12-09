import {React,useContext,useEffect, useState} from 'react';
import './Navbar.css'
import {useAuth} from '../../context/AuthContext'
import ProfileDropDown from './ProfileDropDown';
import {Menu,X,BookOpen,LogOut} from "lucide-react"
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigator=useNavigate()
    const {user,Logout,isAuthenticated}=useAuth()
    const [isOpen,setIsOpen]=useState(false)
    const [ProfileDropDownOpen,setProfileDropDownOpen]=useState(false)
    useEffect(()=>{
const handleClickOutside=()=>{
    if(ProfileDropDown){
        setProfileDropDownOpen(false)
    }
}
document.addEventListener("click",handleClickOutside)
return ()=>document.removeEventListener("click",handleClickOutside)
    },[setProfileDropDownOpen])
  return (
    <header>
 <nav className="navbar">
        <input type="checkbox" id="check" />
        <label for="check" className="check-btn" >
         <i class="fa-solid fa-bars"></i>
        </label>
        <div className="logo">
            <i class="fa-solid fa-robot"></i>
          ZubaAI
        </div>
        <ul className="nav-links">
          <li><a href="#About">About</a></li>
          <li><a href="#Feature">Features</a></li>
        </ul>
         <button className="Login-btn"  onClick={()=>navigator("/Login")}>Login</button>
        <button className="download-btn" onClick={()=>navigator("/SignUp")}>Register</button>
      </nav>
      {/* auth button & profile */}
    
  </header>
    
  );
}

export default Navbar;
