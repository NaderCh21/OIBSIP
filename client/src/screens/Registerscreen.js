import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Success from '../components/Success'
import Error from "../components/Error";

export default function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const registerState = useSelector(state=>state.registerUserReducer)
  const {loading ,success , error} = registerState

  const dispatch = useDispatch();
  function register() {
    if (password != Cpassword) {
      alert("password not matched");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {success && <Success success='User Registered Successfully' />}
          {error && <Error  error='Email Already Registered'/>}
          <h2 className="text-center mt-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <input
              style={{ marginBottom: "10px" }}
              required
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              style={{ marginBottom: "10px" }}
              required
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              style={{ marginBottom: "10px" }}
              required
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              style={{ marginBottom: "10px" }}
              required
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={Cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <button onClick={register} className="btn mt-3 mb-3">
              REGISTER
            </button>
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="/login">
              Click Here To Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
