import Header from "../../components/header/header";
import "./OderManage.css";

import { Footer } from "../../components/footer/footer";
import Avartar from "../../assets/avatar.png";

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CardComplete from "../../components/CardComplete/CardComplete";
import Product from "../../assets/product.png";

import {
    MDBIcon,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';





function OderManage() {
    const [isMobile, setIsMobile] = useState(false);
    const [iconsActive, setIconsActive] = useState('tab1');
    const dataExample = [
        {
            title: "Half n Half Water Glow Season 2",
            colorProduct: "Pink",
            price: "$150",
            product: Product,
            isChooseNumProduct: false,


        },
        {
            title: "Black Rouge Real Strawberry Milk Toner",
            colorProduct: "Pink",
            price: "$200",
            product: Product,
            isChooseNumProduct: false,
        },
        {
            title: "Triple Layer Eye Palette",
            colorProduct: "01 Blossom Forest",
            price: "$180",
            product: Product,
            isChooseNumProduct: false,
        },
    ];



    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 765);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const handleIconsClick = (value) => {
        if (value === iconsActive) {
            return;
        }

        setIconsActive(value);
    };

    return (
        <>
            <Header />
            <div className="Body-ProfilePage">
                <hr></hr>
                <div className="Profile-person">
                    <div className="wrapper-avartar"><img className="avartar-image" src={Avartar}></img></div>
                    <div className="Wrapper-Name-Person">
                        <div className="Name-person">Lê Thị Anh Thư</div>
                        <div className="Wrapper-edit">
                            <i class="edit-profile far fa-edit"></i>
                            <button className="Bt-edit">Edit Avatar</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <hr></hr>
                <div className={`Info-person ${isMobile ? "hide-text" : ""}`}>
                    <div className="Category-account">
                        <div className=" Tab My-Account-Oder">
                            <i class="icon-p far fa-user"></i><div className="repone">My Account</div></div>
                        <Link to="/favoritepd"><div className="Tab Favorite-Product">
                            <i class="icon-p far fa-heart"></i><div className="repone">Favorite Product</div></div></Link>
                        <div className="Tab Oder-management-Tab-Choose">
                            <i class="icon-p fas fa-tasks"></i><div className="repone">Order management</div></div>
                        <div className="Tab Log-out"><i class="icon-p fas fa-sign-out"></i>
                            <div className="repone">Log out</div></div>

                    </div>
                    <div className="wrapper-body-oder">
                        <MDBTabs className='mb-3'>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleIconsClick('tab1')} active={iconsActive === 'tab1'}>
                                    <MDBIcon fas icon='clock' className='me-2' /> On Process
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleIconsClick('tab2')} active={iconsActive === 'tab2'}>
                                    <MDBIcon fas icon='check-double' className='me-2' /> Success
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleIconsClick('tab3')} active={iconsActive === 'tab3'}>
                                    <MDBIcon fas icon='ban' className='me-2' /> Cancle
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>

                        <MDBTabsContent>
                            <MDBTabsPane show={iconsActive === 'tab1'}>
                                {dataExample.map((item) => (
                                    <CardComplete
                                        title={item.title}
                                        colorProduct={item.colorProduct}
                                        price={item.price}
                                        imgProduct={item.product}
                                        isChooseNumProduct={item.isChooseNumProduct}
                                    />
                                ))}
                            </MDBTabsPane>
                            <MDBTabsPane show={iconsActive === 'tab2'}> {dataExample.map((item) => (
                                <CardComplete
                                    title={item.title}
                                    colorProduct={item.colorProduct}
                                    price={item.price}
                                    imgProduct={item.product}
                                    isChooseNumProduct={item.isChooseNumProduct}
                                />
                            ))}</MDBTabsPane>
                            <MDBTabsPane show={iconsActive === 'tab3'}> {dataExample.map((item) => (
                                <CardComplete
                                    title={item.title}
                                    colorProduct={item.colorProduct}
                                    price={item.price}
                                    imgProduct={item.product}
                                    isChooseNumProduct={item.isChooseNumProduct}
                                />
                            ))}</MDBTabsPane>
                        </MDBTabsContent>

                    </div>


                </div>

            </div>

            <Footer />
        </>
    );
};

export default OderManage;