import "./ProductDetail.css";
import Header from "../../components/header/header";
import product from "../../assets/product.png";
import product1 from "../../assets/product 1.png";
import { useLocation } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {app} from "../../firebase/firebase";
import React, { useState, useEffect, useContext  } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const location = useLocation()
  const { nameProduct } = location.state || {};
  const { price } = location.state || {};
  const { image } = location.state || {};
  const [imageUrl, setImageUrl] = useState(null);
  const [countProduct, setCountProduct] = useState(1);

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

  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    const product = { nameProduct, price, imageUrl, quantity: countProduct };
    addToCart(product);
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
            <button
                onClick={() => setCountProduct(countProduct - 1)}
                className="btn-count decrease"
                disabled={countProduct === 1}
              >
                -
              </button>
              <input
                className="number-count"
                type="text"
                value={countProduct}
              ></input>
              <button
                onClick={() => setCountProduct(countProduct + 1)}
                className="btn-count increase"
              >
                +
              </button>
              
            </div>
            <div className="productdetail-btn">
              <button className="btn-cta btn-add" onClick={handleAddToCart} >Add to card</button>
              <button className="btn-cta btn-buy">Buy</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;