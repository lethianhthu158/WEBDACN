import "./ProductDetail.css";
import Header from "../../components/header/header";
import product from "../../assets/product.png";
import product1 from "../../assets/product 1.png";
import { useLocation } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {app} from "../../firebase/firebase";
import React, { useState, useEffect } from 'react';


const ProductDetail = () => {
  const location = useLocation()
  const { nameProduct } = location.state || {};
  const { price } = location.state || {};
  const { image } = location.state || {};
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const storage = getStorage(app);
    var storageRef = ref(storage, "white.jpg"); 
    if(image != null) {
      storageRef = ref(storage, image);
    }
    console.log(image);
    getDownloadURL(storageRef).then((url) => {
      setImageUrl(url);
    });
  }, [image]);

  const addToCart = () => {
    const product = { nameProduct, price, imageUrl };
    let cart = localStorage.getItem('cart');
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  console.log("from:" + nameProduct);
  return (
    <>
      <Header />
      <main className="container-productdetail">
        <section className="productdetail-name">
          <h3 className="product-name">{nameProduct}</h3>
        </section>
        <section className="productdetail-product">
          <div className="product-left">
            <img
              className="img-product"
              src={imageUrl}
              alt="image product"
            ></img>
            <ul className="producttail-listsuggest">
              <li className="wrap-product-suggest-img">
                <img
                  className="product-suggest-img"
                  src={product1}
                  alt="immage product suggest"
                ></img>
              </li>
              <li className="wrap-product-suggest-img">
                <img
                  className="product-suggest-img"
                  src={product1}
                  alt="immage product suggest"
                ></img>
              </li>
              <li className="wrap-product-suggest-img">
                <img
                  className="product-suggest-img"
                  src={product1}
                  alt="immage product suggest"
                ></img>
              </li>
              <li className="wrap-product-suggest-img">
                <img
                  className="product-suggest-img"
                  src={product1}
                  alt="immage product suggest"
                ></img>
              </li>
            </ul>
          </div>
          <div className="product-right">
            <h4 className="product-right-name">
            {nameProduct}
            </h4>
            <ul className="list-star">
              <li className="wrap-star">
                <i class="StarProduct far fa-star"></i>
              </li>
              <li className="wrap-star">
                <i class="StarProduct far fa-star"></i>
              </li>
              <li className="wrap-star">
                <i class="StarProduct far fa-star"></i>
              </li>
              <li className="wrap-star">
                <i class="StarProduct far fa-star"></i>
              </li>
              <li className="wrap-star">
                <i class="StarProduct far fa-star"></i>
              </li>
            </ul>
            <p className="productdetail-review desc">(0 Review)</p>
            <p className="productdetail-code desc">Code SPMU3BRHNHWGHG </p>
            <h6 className="productdetail-price">${price}</h6>
            <div className="productdetail-variant">
              <p className="variant-title desc">Option</p>
              <div className="list-product-colors">
                <button className="color"></button>
                <button className="color"></button>
                <button className="color"></button>
                <button className="color"></button>
                <button className="color"></button>
              </div>
            </div>
            <div className="productdetail-count">
              <button className="btn-count decrease">-</button>
              <input placeholder="1" className="number-count"></input>
              <button className="btn-count increase">+</button>
            </div>
            <div className="productdetail-btn">
              <button className="btn-cta btn-add" onClick={addToCart} >Add to card</button>
              <button className="btn-cta btn-buy">Buy</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;