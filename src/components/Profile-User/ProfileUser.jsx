import "./ProfileUser.css";
import Header from "../../components/header/header";

import { Footer } from "../../components/footer/footer";
import Avartar from "../../assets/avatar.png";
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {app, storage} from "../../firebase/firebase";





const ProfileUser = () => {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    const [isMobile, setIsMobile] = useState(false);

    const [imagePath, setImagePath] = useState("");
    const [url, setUrl] = useState('');

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
        const storeRef = ref(storage,`Avartar-User/${file.name}`);
        const uploadTask = uploadBytesResumable(storeRef, file)

        uploadTask.on(
        'state_changed',
        (snapshot) => {
          
        },
        (error) => {
          // Xử lý lỗi (nếu có)
          console.log(error);
        },
        () => {
          // Hoàn thành tải lên thành công
          uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
            setUrl(downloadUrl);
          });
        }
      );
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
           
                <hr></hr>
                <div className="Profile-person">
                    <div className="wrapper-avartar"><img className="avartar-image" src={imagePath}></img></div>
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
                            <label htmlFor="fileInput" className="Bt-edit" >
                                Edit Avatar
                            </label>
                           
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <hr></hr>
                

            
        </>
    );
};

export default ProfileUser;