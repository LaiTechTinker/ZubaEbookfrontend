import { useState } from "react";
import {useNavigate} from "react-router-dom"
// import axios from "axios";
import {useAuth}  from "../context/AuthContext.jsx"
import {API_PATH} from "../utils/apipath.js"
import api from "../utils/axiosinstance.js"
import toast from "react-hot-toast"
import "./Login.css";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {login}=useAuth()
  const navigator=useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);

    try {
      const response = await api.post(API_PATH.AUTH.LOGIN, { email, password });
      // console.log(response)
      const token=response.data.token
      // console.log(token)
      // featch profile information
      const profileResponse=await api.get(API_PATH.AUTH.GET_PROFILE,{
        headers:{Authorization:`Bearer ${token}`},
      })
      // console.log(profileResponse.data.message)
      login(profileResponse.data.message,token)

      toast.success("Login successfull")
      navigator("/dashboard")
      // console.log("Login success", response.data);
    } catch (error) {
      localStorage.clear()
      toast.error("Login failed try again")
      console.log(error.message)
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="app-logo"> <i class="fa-solid fa-robot"></i>ZubaAi</div>

        <form onSubmit={handleSubmit}>
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="signup-link">
          Don't have an account? <a href="/SignUp">Sign up</a>
        </p>
      </div>
    </div>
  );
}
