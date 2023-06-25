import "./header.css";
import logoImage from "../../assets/Logoweb.png";
import logoName from "../../assets/name.png";
import React, { useState, useEffect, useRef, useContext } from "react";
import Login from "../login/loginform";
import Register from "../register/registerform";
import { Dialog } from "@material-ui/core";
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
// import { atom, useAtom } from 'jotai';
import Avartar from "../../assets/avatar.png";
import { HLDropdown, HLMenu, HLCard } from "synos-helena";
import { Avatar } from "antd";
import "synos-helena/lib/helena.css";
import { CartContext } from '../../contexts/CartContext';
import axios from 'axios';
import Modal from "../../components/Modal/Modal"




function Header(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [openPopupLogin, setOpenPopupLogin] = useState(false);
  const [openPopupRegister, setOpenPopupRegister] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);
  const navRef = useRef();
  const userInfo = JSON.parse(localStorage.getItem('user-info'));
  const [openModal,setOpenModal]= useState(false);
  const { cart } = useContext(CartContext);
  const totalQuantity = cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;


  const handleTabClick = (tabIndex) => {
    setSelectedTab(tabIndex); // Cập nhật trạng thái khi người dùng nhấp vào tab
  };
  const handleLogout = () => {
    localStorage.removeItem('user-info');
    setOpenModal(false);
  };

  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const menu = (
    <HLMenu>
      <HLMenu.Item>
        <Link className="dropdown-content header-link-profile" to="/profile">
          <i class="icon-p far fa-user"></i>
          My Account
        </Link>
      </HLMenu.Item>
      <HLMenu.Item>
        <button className="dropdown-content header-logout" onClick={() => setOpenModal(true)}>
         <i class="icon-p fas fa-sign-out"></i>Logout  
        </button>
      </HLMenu.Item>
    </HLMenu>
  );

  // const [name]=useAtom(textAtom);

  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (searchTerm) {
      axios.get(`http://localhost:8080/api/products/search/autocomplete?name=${searchTerm}`)
        .then(res => {
          setSearchResults(res.data);
        })
        .catch(err => console.error(err));
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);



  return (

    <Navbar collapseOnSelect className="wrapHead" expand="sm" fixed="top" style={{ transition: '1s ease', backgroundColor: navBackground ? 'white' : 'rgba(255, 255, 255, 0.75)' }}>
      <div className="headerPart1">
        <img className="logoImage" src={logoImage} alt="Logo store" />
        <img className="logoName" src={logoName} alt="Logo name"></img>
        <div className="wrapButtons">
          <Link to="/favoritepd">
            <button className="IconButton heartButton">
              <i class="icon fas fa-heart"></i>
              <span className="num-fav">3</span>
            </button></Link>
          <Link to="/cart-page">
            <button className="IconButton cartButton">
              <i class="icon fas fa-shopping-cart"></i>
              <span className="num-fav num-cart" >{totalQuantity}</span>
            </button></Link>
          {userInfo && userInfo.fullName ?
            (<>
              <button
                className="RegisterButton"
                onClick={() => setOpenPopupRegister(true)}
              >
                {userInfo.fullName}
              </button>
              <HLCard>
                <HLDropdown overlay={menu} trigger={["click"]}>
                  <Avatar
                    size={45}
                    src={Avartar}
                  />
                </HLDropdown>
              </HLCard> </>) :
            (<>
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

            </>)}




        </div>
      </div>

      <div className="Scroll-auto">
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#nabarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <div className={`Control-tab ${selectedTab === 1 ? 'active' : ''}`}>
              <NavLink className="Control-tab" eventKey="1" to="/" onClick={() => handleTabClick(1)}>
                HOME
                {selectedTab === 1 && <hr className="tap-control" />}
              </NavLink>
            </div>
            <div className={`Control-tab ${selectedTab === 2 ? 'active' : ''}`}>
              <NavLink className="Control-tab" eventKey="2" to="/product" onClick={() => handleTabClick(2)}>
                PRODUCTS
                {selectedTab === 2 && <hr className="tap-control" />}
              </NavLink>
            </div>
            <div className={`Control-tab ${selectedTab === 3 ? 'active' : ''}`}>
              <NavLink className="Control-tab" eventKey="3" onClick={() => handleTabClick(3)} to="/distribution-channel-page">BRAND
                {selectedTab === 3 && <hr className="tap-control" />}
              </NavLink>
            </div>
            <div className={`Control-tab ${selectedTab === 4 ? 'active' : ''}`}>
              <NavLink className="Control-tab" eventKey="4" to="/about-us" onClick={() => handleTabClick(4)}>
                ABOUT
                {selectedTab === 4 && <hr className="tap-control" />}
              </NavLink>
            </div>
            <div className="control">
              <div className="input-search-container">
                <input
                  className="input-search"
                  type="text"
                  placeholder="Search.."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <ul className="autocomple-search-product">
                  {searchResults.map(product => (
                    <li key={product.id} className="result-search-product">
                      <Link state={{ nameProduct: product.name, price : product.price, image: product.image }} to="/product-detail">
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>

              <button className="searchButton">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>

      {/* <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#nabarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <div className="Control-tab">
              <NavLink className="Control-tab" eventKey="1" to="/">HOME
                <div id="HR-control">
                  <hr className="tap-control"></hr></div></NavLink>
            </div>
            <div className="Control-tab">
              <NavLink className="Control-tab" eventKey="2" to="/product">PRODUCTS</NavLink>
            </div >
            <NavLink className="Control-tab" eventKey="3" to="/distribution-channel-page">BRAND</NavLink>
            <div className="Control-tab">

              <NavLink className="Control-tab" eventKey="4" to="/about-us">ABOUT</NavLink>
            </div>
            <div className="control">
              <input className="input-search" type="text"  placeholder="Search.."></input>
              <button className="searchButton">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div> */}


      <Dialog open={openPopupLogin} onClose={() => setOpenPopupLogin(false)}>
        <Login onClose={() => setOpenPopupLogin(false)} />
      </Dialog>
      <Dialog
        open={openPopupRegister}
        onClose={() => setOpenPopupRegister(false)}
      >
        <Register onClose={() => setOpenPopupRegister(false)} />
      </Dialog>

      <Modal
        openModal={openModal}
        content="Do you want to log out ?"
        onCancel={() => setOpenModal(false)}
        onYes={handleLogout}
      ></Modal>
      


    
    



    </Navbar>
    


  );
}
export default Header;
