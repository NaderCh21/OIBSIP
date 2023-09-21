import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions"; // Assuming you have a loginUser action
import Error from "../components/Error";
import Loading from "../components/Loading";
export default function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading, error ,success} = loginState;
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

    dispatch(loginUser(user)); // Use the loginUser action to handle login
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center mt-2" style={{ fontSize: "35px" }}>
            Login
          </h2>
          {loading && <Loading />}
          {error && <Error error='Invalid Credentials' />}
          <div>
            <input
              style={{ marginBottom: "10px" }}
              required
              type="text"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              style={{ marginBottom: "10px" }}
              required
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button onClick={login} className="btn mt-3 mb-3">
              LOGIN
            </button>
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/register"
              className="m-2"
            >
              Cick Here To Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
