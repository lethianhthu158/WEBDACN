import "./favorite.css";
import Header from "../../components/header/header";

import { Footer } from "../../components/footer/footer";
import Avartar from "../../assets/avatar.png";
import CardComplete from "../../components/CardComplete/CardComplete";
import Product from "../../assets/product.png";
import { Link } from "react-router-dom";
import ProfileUser from "../../components/Profile-User/ProfileUser";
import Modal from "../../components/Modal/Modal"


import React, { useState, useEffect } from 'react';

const dataExample = [
    {
        title: "Half n Half Water Glow Season 2",
        colorProduct: "Pink",
        price: "$150",
        product: Product,
        isChooseNumProduct: true,
    },
    {
        title: "Black Rouge Real Strawberry Milk Toner",
        colorProduct: "Pink",
        price: "$200",
        product: Product,
        isChooseNumProduct: true,
    },
    {
        title: "Triple Layer Eye Palette",
        colorProduct: "01 Blossom Forest",
        price: "$180",
        product: Product,
        isChooseNumProduct: true,
    },
];
const Favorite = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem('user-info')));   
    const [openModal,setOpenModal]= useState(false);
    const handleLogout = () => {
        localStorage.removeItem('user-info'); 
        setUserInfo("");
        setOpenModal(false);
        window.location.href = "/";
      };

    useEffect(() => {
        if (!userInfo) {
            window.location.href = "/";

        }
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 765);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [userInfo]);

    return (
        <>
            <Header />
            <div className="Body-ProfilePage">
               <ProfileUser></ProfileUser>
                <div className={`Info-person ${isMobile ? "hide-text" : ""}`}>
                    <div className="Category-account">
                      <Link to="/profile">
                        <div className=" Tab My-Account-Tab ">
                            <i class="icon-p far fa-user"></i><div className="repone">My Account</div></div></Link>
                        <div className="Tab Favorite-Product-Tab">
                            <i class="icon-p far fa-heart"></i><div className="repone">Favorite Product</div></div>
                         <Link to="/oder-management"><div className="Tab Oder-management-Tab">
                            <i class="icon-p fas fa-tasks"></i><div className="repone">Order management</div></div></Link>
                        <div className="Tab Log-out" onClick={()=>setOpenModal(true)}><i class="icon-p fas fa-sign-out"></i>
                            <div className="repone">Log out</div></div>

                    </div>
                    <div className="Wrapper-Favorite-Product">
                        {dataExample.map((item) => (
                            <CardComplete
                                title={item.title}
                                colorProduct={item.colorProduct}
                                price={item.price}
                                imgProduct={item.product}
                                isChooseNumProduct={item.isChooseNumProduct}
                            />
                        ))}

                    </div>


                </div>

            </div>

            <Footer />
            <Modal
        openModal={openModal}
        content="Do you want to log out ?"
        onCancel={() => setOpenModal(false)}
        onYes={handleLogout}
      ></Modal>
        </>
    );
};

export default Favorite;