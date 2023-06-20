import "./registerform.css";
import Login from "../login/loginform";
import { Dialog } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from 'react-google-login';

function Register({ onClose }) {
  const [openPopupRegister, setOpenPopupRegister] = useState(false);
  const [openPopupLogin, setOpenPopupLogin] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const responseGoogle = async (response) => {
    try {
      const res = await axios.post('http://localhost:8080/api/v1/auth/register/google', {
        token: response.tokenId,
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  function handleOpenLogin() {
    setOpenPopupLogin(true);
    setOpenPopupRegister(false);
  }

  function handleClick(e) {
    e.preventDefault();

    onClose();
    setOpenPopupLogin(false);
    setOpenPopupRegister(false);
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        fullname,
        email,
        password,
      });

      // Handle response here
      console.log(response.data);
    } catch (error) {
      // Handle error here
      console.error(error);
    }
  };


  return (
    <div className="wrap-loginform">
      <div className="wrap-close">
        <button onClick={onClose} className="close-button">
          <i class="far fa-times-circle"></i>
        </button>
      </div>
      <p className="title">Register</p>
      <div className="container-input">
        <p className="title-input"> Full name</p>
        <input className="input" value={fullname} onChange={e => setFullname(e.target.value)} />
        <p className="title-input"> Email</p>
        <input className="input" value={email} onChange={e => setEmail(e.target.value)} />
        <p className="title-input"> Password</p>
        <input className="input" value={password} onChange={e => setPassword(e.target.value)} />
        <p className="title-input"> Confirm Password</p>
        <input className="input"></input>
      </div>
      <div className="wrap-icon">
        <button className="accout-button">
          <i class="Icon fab fa-facebook-f"></i>
        </button>
        <GoogleLogin
          clientId="325424392497-cbrjevbvt8t3jrrpm74gfp9lt2p8uvr1.apps.googleusercontent.com"
          render={renderProps => (
            <button className="accout-button" onClick={renderProps.onClick}>
              <i className="Icon fab fa-google"></i>
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      <div className="wrap-login">
        <div className="text-Resgiter">
          Already member?{" "}
          <a
            className="forgot-pass"
            onClick={handleOpenLogin}
          >
            Login
          </a>
        </div>
        <button className="register-button" onClick={handleSubmit}>Register</button>
      </div>
      <Dialog
        open={openPopupLogin}
        onClose={() => setOpenPopupLogin(false)}
      >
        <Login onClose={() => { setOpenPopupLogin(false); setOpenPopupRegister(false); }} />
      </Dialog>
    </div>
  );
};

export default Register;
