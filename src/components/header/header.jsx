import "./header.css";
import logoImage from "../../assets/logo.png";
import logoName from "../../assets/name.png";
import React, { useState,useEffect,useRef } from "react";
import Login from "../login/loginform";
import Register from "../register/registerform";
import { Dialog } from "@material-ui/core";
import Navbar from 'react-bootstrap/Navbar'
import { NavLink , Nav} from "react-bootstrap";

function Header(props) {
  const [openPopupLogin, setOpenPopupLogin] = useState(false);
  const [openPopupRegister, setOpenPopupRegister] = useState(false);
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  

  return (
    
    <Navbar collapseOnSelect className="wrapHead" expand="sm" fixed="top" style={{ transition: '1s ease',backgroundColor: navBackground ? 'white' : 'rgba(255, 255, 255, 0.75)'}}>
      <div className="headerPart1">
          <img className="logoImage" src={logoImage} alt="Logo store" />
          <img className="logoName" src={logoName} alt="Logo name"></img>
          <div className="wrapButtons">
            <button className="IconButton heartButton">
              <i class="icon fas fa-heart"></i>
            </button>
            <button className="IconButton cartButton">
              <i class="icon fas fa-shopping-cart"></i>
            </button>
            <button
              className="RegisterButton"
              onClick={() => setOpenPopupRegister(true)}
            >
              Register
            </button>
            <button
              className="LoginButton"
              onClick={() => setOpenPopupLogin(true)}
            >
              Login
            </button>
          </div>
      </div>
      <div className="Scroll-auto">
    
      <Navbar.Toggle  aria-controls="navbarScroll" data-bs-target="#nabarScroll"/>
      <Navbar.Collapse  id="navbarScroll">
        <Nav>
          <div className="Control-tab">
          <NavLink  eventKey="1" to="/">HOME
          <hr className="tap-control"></hr></NavLink>
          </div>
          <div className="Control-tab">
          <NavLink className="Control-tab" eventKey="2"  to="/">PRODUCTS</NavLink>
          </div >
          <NavLink className="Control-tab" eventKey="3"  to="/">DISTRIBUTION</NavLink>
          <div className="Control-tab">
          <NavLink  className="Control-tab" eventKey="4"  to="/">ABOUT</NavLink>
          </div>
          <div className="control right">
            <input className="input-search"></input>
            <button className="searchButton">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </Nav>
      </Navbar.Collapse> 
      </div>
     

        <Dialog open={openPopupLogin} onClose={() => setOpenPopupLogin(false)}>
          <Login onClose={() => setOpenPopupLogin(false)} />
        </Dialog>
        <Dialog
          open={openPopupRegister}
          onClose={() => setOpenPopupRegister(false)}
        >
          <Register onClose={() => setOpenPopupRegister(false)} />
        </Dialog>
        
      {/* </div>
    </div> */}
    
    
    </Navbar>
    
    
  );
}
export default Header;
