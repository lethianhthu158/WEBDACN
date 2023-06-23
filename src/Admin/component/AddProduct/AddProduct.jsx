import React from "react";
import { useState } from "react";

import "./AddProduct.css";
const Addproduct = () => {
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
  return (
    <div className="AddProduct">
      <div className="wrappper-Input-Product">
        <div className="input-add-product">
          <div className="Title-Input">NAME</div>
          <input className="add-produc-design-input" type="text" />
        </div>
        <div className="input-add-product">
          <div className="Title-Input">PRICE</div>
          <input className="add-produc-design-input" type="text" />
          </div>
          <div className="input-add-product">
            <div className="Title-Input">IMAGE</div>
            <div className="wrapper-add-produc-design-input">
            <input
              className="add-produc-design-input imageProduct"
              type="text"
              value={imagePath} // Hiển thị đường dẫn hình ảnh trong khung nhập liệu
              readOnly
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange} // Xử lý sự kiện khi người dùng chọn tệp hình ảnh
              style={{ display: "none" }}
              id="fileInput"
            />
            <label htmlFor="fileInput" className="Choose-image-admin">
              Choose file
            </label>
            </div>
          </div>

          <div className="input-add-product">
            <div className="Title-Input">CATEGORY</div>
            <select className="select">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
              <option value="6">Six</option>
              <option value="7">Seven</option>
              <option value="8">Eight</option>
            </select>
          </div>
          <div className="input-add-product">
            <div className="Title-Input">BRAND</div>
            <select className="select">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>

            </select>
          </div>


          <div className="input-add-product">
            <div className="Title-Input">ORIGIN</div>
            <select className="select">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>

            </select>
          </div>
          <div className="input-add-product">
            <div className="Title-Input">DESCRIPTION</div>
            <input className="add-produc-design-input" type="text" />
          </div>

        </div>
        <div className="Wrapper-Add-Admin-Add-Pd">
        <button className="Add-Admin-Add-Pd">Add</button>
        </div>


      </div >
      );
};

      export default Addproduct;
