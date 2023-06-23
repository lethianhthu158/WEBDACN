import "./ProfilePage.css";
import Header from "../../components/header/header";

import { Footer } from "../../components/footer/footer";
import Avartar from "../../assets/avatar.png";
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";





const ProfilePage = () => {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    const [isMobile, setIsMobile] = useState(false);

    const [imagePath, setImagePath] = useState("");

    // Xử lý sự kiện khi người dùng chọn tệp hình ảnh
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setImagePath(e.target.result); // Lưu trữ đường dẫn hình ảnh vào state
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

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

    return (
        <>
            <Header />
            <div className="Body-ProfilePage">
                <hr></hr>
                <div className="Profile-person">
                    <div className="wrapper-avartar"><img className="avartar-image" src={Avartar}></img></div>
                    <div className="Wrapper-Name-Person">
                        <div className="Name-person">{userInfo.fullname}</div>
                        <div className="Wrapper-edit">
                            <i class="edit-profile far fa-edit"></i>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange} // Xử lý sự kiện khi người dùng chọn tệp hình ảnh
                                style={{ display: "none" }}
                                id="fileInput"
                            />
                            <label htmlFor="fileInput" className="Bt-edit">
                                Edit Avatar
                            </label>
                           
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <hr></hr>
                <div className={`Info-person ${isMobile ? "hide-text" : ""}`}>
                    <div className="Category-account">
                        <div className=" Tab My-Account">
                            <i class="icon-p far fa-user"></i><div className="repone">My Account</div></div>
                        <Link to="/favoritepd"><div className="Tab Favorite-Product">
                            <i class="icon-p far fa-heart"></i><div className="repone">Favorite Product</div></div></Link>
                        <Link to="/oder-management">  <div className="Tab Oder-management-Tab">
                            <i class="icon-p fas fa-tasks"></i><div className="repone">Order management</div></div></Link>
                        <div className="Tab Log-out"><i class="icon-p fas fa-sign-out"></i>
                            <div className="repone">Log out</div></div>

                    </div>
                    <div className="Edit-Info-Account">
                        <div className="wrapper-Edit">
                            <div className="Profile-Title">My Account <br />Manage and protect your account</div>
                            <hr></hr>
                            <div className="wrapper-Input-edit">
                                <div className="Edit Name"><div className="tile-input">Name</div><input className="Input" value={userInfo.fullname}></input></div>
                                <div className="Edit Email"><div className="tile-input">Email</div><input className="Input" value={userInfo.email}></input></div>
                                <div className="Edit Phone"><div className="tile-input">Phone</div><input className="Input"></input></div>
                                <div className="Edit Address"><div className="tile-input">Address</div><input className="Input"></input></div>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                className="Form-check"
                                                inline
                                                label="Male"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                className="Form-check"
                                                inline
                                                label="Female"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            <Form.Check
                                                className="Form-check"
                                                inline
                                                label="Other"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-3`}
                                            />
                                        </div>
                                    ))}
                                </Form>

                            </div>
                            <div className="wrapper-button-profile">
                                <button className="Button Update">Update</button>
                                <button className="Button Save">Save</button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
};

export default ProfilePage;