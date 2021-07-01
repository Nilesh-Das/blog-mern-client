import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const API_URL = "https://seaborg-blog.herokuapp.com/api";

  const handleSubmit = async (e)=> {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${API_URL}/auth/register`, {
        username, email, password,
      });
      res.data && window.location.replace('/login');
    } catch(err) {
      setError(err);
    }
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          className="registerInput" 
          type="text" 
          placeholder="Enter your username..." 
          onChange={e=>setUsername(e.target.value)}
        />
        <label>Email</label>
        <input 
          className="registerInput" 
          type="text" 
          placeholder="Enter your email..." 
          onChange={e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input 
          className="registerInput" 
          type="password" 
          placeholder="Enter your password..." 
          onChange={e=>setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">LOGIN</Link>
      </button>
      {error && <span className="error">Something went wrong!</span>}
    </div>
  );
}
