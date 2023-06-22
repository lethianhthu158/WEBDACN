import React from "react";

import "./AddProduct.css";
const Addproduct = () => {
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
            <input className="add-produc-design-input" type="text" />
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
