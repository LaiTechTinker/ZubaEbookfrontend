import { useState } from "react";
import {useNavigate} from "react-router-dom"
import {useAuth}  from "../context/AuthContext.jsx"
import {API_PATH} from "../utils/apipath.js"
import api from "../utils/axiosinstance.js"
import toast from "react-hot-toast"
import "./SignUp.css";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
    const {login}=useAuth()
  const navigator=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    setLoading(true);

    try {
      const response = await api.post(API_PATH.AUTH.REGISTER, { name, email, password });
      const token= response.data.token
      const profileResponse=await api.get(API_PATH.AUTH.GET_PROFILE,{
        headers:{Authorization:`Bearer ${token}`},
      })
      login(profileResponse.data.message,token)

      toast.success("Account created successfully")
      navigator("/dashboard")
    } catch (error) {
     localStorage.clear()
      toast.error("sigup failed try again")
      console.log(error.message)
      console.error("signup failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="app-logo">Create Account</div>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {!name && <p className="error-text">Name is required</p>}

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {!email && <p className="error-text">Email is required</p>}

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>}
            </span>
          </div>
          {!password && <p className="error-text">Password is required</p>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading && <div className="spinner"></div>}
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="signup-link">
          Already have an account? <a href="/Login">Login</a>
        </p>
      </div>
    </div>
  );
}
