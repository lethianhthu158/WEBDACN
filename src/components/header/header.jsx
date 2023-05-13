import "./header.css";
import logoImage from '../../assets/logo.png';
import logoName from '../../assets/name.png'
import React, { useState } from "react";
// import {Dialog} from '@material-ui/core';
import Popup from "../popup/popup";
import Login from "../login/loginform";
import Register from "../register/registerform";




function Header  (props) {
    const [openPopupLogin,setOpenPopupLogin]=useState(false);
    const [openPopupRegister,setOpenPopupRegister]=useState(false);
    
    
    return (
        <div className={props.className}>
        <div className="wrapHead">
            <div className="headerPart1">
                <img className="logoImage" src={logoImage} alt="Logo store" />
                <img className="logoName"  src={logoName} alt="Logo name"></img>
                <div className="wrapButtons">
                    <button className="IconButton heartButton"><i class="icon fas fa-heart"></i></button>
                    <button className="IconButton cartButton"><i class="icon fas fa-shopping-cart"></i></button>
                    <button className="RegisterButton" onClick={()=> setOpenPopupRegister(true)} >Register</button>
                    <button className="LoginButton" onClick={()=> setOpenPopupLogin(true)}>Login</button>
                </div>
            </div>
            <div className="headerPart2">
                <div className="control left"><button className="Tab Home">HOME</button><hr className="tap-control"></hr></div>
                <div className="control"><button  className="Tab Product">PRODUCTS</button></div>
                <div className="control"><button  className="Tab DisChannel">DISTRIBUTION CHANNEL</button></div>
                <div className="control"><button  className="Tab About">ABOUT US</button></div>
                <div className="control right">
                    <input className="input-search"></input>
                    <button className="searchButton"><i class="fas fa-search"></i></button>
                </div>
            </div>
              <Popup
             openPopup={openPopupLogin}
             setOpenPopup={setOpenPopupLogin}>
                <Login/>
                
            </Popup>  
            <Popup
             openPopup={openPopupRegister}
             setOpenPopup={setOpenPopupRegister}>
               <Register/>
                
            </Popup> 
        </div>
        </div>
    );
}
export default Header;