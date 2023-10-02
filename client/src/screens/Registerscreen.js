import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [secretKey, setSecretKey] = useState("");
  const registerState = useSelector((state) => state.registerUserReducer);
  const { loading, error } = registerState;

  const dispatch = useDispatch();

  const register = () => {
    if (password !== Cpassword) {
      alert("Password does not match");
    } else {
      const user = {
        name,
        email,
        password,
        isAdmin,
        secretKey: isAdmin ? secretKey : null, // Send null if not admin
      };
      dispatch(registerUser(user));
    }
  };

  return (
    <div className="register-container">
      <div className="pizza-background">
        <div className="overlay"></div>
        <div className="registration-form">
          {loading && <Loading />}
          {error && <Error error={error.message} />}
          <h2 className="registration-title">Register</h2>
          <div>
            <input
              className="form-control"
              required
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className="form-control"
              required
              type="email"
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
            <input
              className="form-control"
              required
              type="password"
              placeholder="Confirm Password"
              value={Cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <div className="checkbox-container">
              <label htmlFor="isAdmin" className="checkbox-label">
                Register as Admin
              </label>
              <input
                type="checkbox"
                id="isAdmin"
                checked={isAdmin}
                onChange={(e) => {
                  setIsAdmin(e.target.checked);
                }}
              />
            </div>
            {isAdmin && (
              <div>
                <label htmlFor="secretKey">Secret Key:</label>
                <input
                  className="form-control"
                  type="password"
                  id="secretKey"
                  value={secretKey}
                  onChange={(e) => {
                    setSecretKey(e.target.value);
                  }}
                />
              </div>
            )}
            <button onClick={register} className="register-button">
              REGISTER
            </button>
            <br />
            <a href="/login" className="login-link">
              Click Here To Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
