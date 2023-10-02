import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
  
export default function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading, error, success } = loginState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = {
      email,
      password,
    };

    dispatch(loginUser(user));
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        {loading && <Loading />}
        {error && <Error error="Invalid Credentials" />}
        <div>
          <input
            className="form-control"
            required
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="form-control"
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={login} className="login-button">
            LOGIN
          </button>
          <br />
          <a href="/register" className="register-link">
            Click Here To Register
          </a>
        </div>
      </div>
    </div>
  );
}
