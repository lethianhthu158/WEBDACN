import "./loginform.css";
import Register from "../register/registerform";
import { Dialog } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { atom, useAtom } from 'jotai';
import { GoogleLogin } from 'react-google-login';
const textAtom = atom([])
const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}


function Login({ onClose }) {
  const [openPopupRegister, setOpenPopupRegister] = useState(false);
  const [openPopupLogin, setOpenPopupLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [name, setName]=useAtom(textAtom);
  const [emailError, setEmailError] = useState("");
  useEffect(() => {
    if (email !== "") {
      if (!validateEmail(email)) {
        setEmailError("Invalid email address!");
      } else {
        setEmailError("");
      }
    }
  }, [email]);

  
  
  const responseGoogle = async (response) => {
    // try {
    //   const { tokenId } = response;
    //   const result = await axios.post('http://localhost:8080/api/v1/auth/google', { tokenId });
      
    //   // Handle response here
    //   console.log(result.data);
    //   localStorage.setItem("fullname", result.data.fullname);
    //   setName(result.data);
    // } catch (error) {
    //   // Handle error here
    //   console.error(error);
    // }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      });

      // Handle response here
      console.log(response.data);
      localStorage.setItem('user-info', JSON.stringify(response.data));
      setName(response.data);
      onClose(); 
    } catch (error) {
      // Handle error here
      console.error(error);
    }
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    if(userInfo.role === "ADMIN")
    {
      window.location.href = "/admin";
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
        {emailError && <p className="error-message">{emailError}</p>} {/* Hiển thị lỗi nếu có */}
        <p className="title-input"> Password</p>
        <div className="wrapper-input">
        <input className="input" type={passwordShown ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)}></input>
        <button className="passwordShow" onClick={()=>setPasswordShown(!passwordShown)}>{passwordShown? <i class="fa-sharp fa-solid fa-eye"></i>:<i class="fa-sharp fa-solid fa-eye-slash"></i>}</button>
        </div>
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
