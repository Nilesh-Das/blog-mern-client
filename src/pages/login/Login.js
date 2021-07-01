import { useRef, useContext } from 'react';
import { Context } from '../../context/Context'
import { LoginStart, LoginSuccess, LoginFailure } from '../../context/Actions'
import { Link } from "react-router-dom";
import axios from 'axios'
import "./Login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching, error } = useContext(Context);

  const handleSubmit = async(e)=> {
    e.preventDefault();
    dispatch(LoginStart());
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch(LoginSuccess(res.data));
    } catch(err) {
      dispatch(LoginFailure());
    }
  }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          className="loginInput" 
          type="text" 
          placeholder="Enter your Username..."
          ref={userRef}
         />
        <label>Password</label>
        <input 
          className="loginInput" 
          type="password" 
          placeholder="Enter your password..." 
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">REGISTER</Link>
      </button>
      {error && <span className="error">Something went wrong!</span>}
    </div>
  );
}
