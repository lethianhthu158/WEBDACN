import "./loginform.css";
import Register from "../register/registerform";
import { Dialog } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";


function Login({ onClose }) {
  const [openPopupRegister, setOpenPopupRegister] = useState(false);
  const [openPopupLogin, setOpenPopupLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]=useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      });

      // Handle response here
      console.log(response.data);
      setName(response.data.fullname);
    } catch (error) {
      // Handle error here
      console.error(error);
    }
  };
  

  return (
    <div className="wrap-loginform">
      <div className="wrap-close">
        <button onClick={onClose} className="close-button">
          <i className="far fa-times-circle"></i>
        </button>
      </div>

      <p className="title">Login</p>
      <div className="container-input">
        <p className="title-input"> Email</p>
        <input className="input" value={email} onChange={e => setEmail(e.target.value)}></input>
        <p className="title-input"> Password</p>
        <input className="input" value={password} onChange={e => setPassword(e.target.value)}></input>
        <div className="wrap-fotgot">
          <a
            className="forgot-pass"
            href="https://www.facebook.com/profile.php?id=100077535672034"
          >
            Forgot Password?
          </a>
        </div>
      </div>
      <div className="wrap-icon">
        <button className="accout-button">
          <i className="Icon fab fa-facebook-f"></i>
        </button>
        <button className="accout-button">
          <i className="Icon fab fa-google"></i>
        </button>
      </div>

      <div className="wrap-login">
        <div className="text-Resgiter">
          New Here?{" "}
          <a
            className="forgot-pass"
            onClick={() => setOpenPopupRegister(true)}
          >
            Register
          </a>
        </div>
        <button className="login-button" onClick={handleSubmit}>Login</button>
      </div>
      <Dialog
        open={openPopupRegister}
        onClose={() => {
          setOpenPopupRegister(false);
          setOpenPopupLogin(false);
        }}
      >
        <Register
          onClose={() => {
            setOpenPopupRegister(false);
            setOpenPopupLogin(false);
          }}
        />
      </Dialog>
    </div>
  );
}

export default Login;
