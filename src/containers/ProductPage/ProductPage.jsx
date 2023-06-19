import "./ProductPage.css";
import Header from "../../components/header/header";
import aboutUsImage from "../../assets/aboutus.png";
import { Footer } from "../../components/footer/footer";
import Headerproduct from "../../components/Headerproduct/Headerproduct";
import Productdetail from "../../components/productdetail/productdetail";
import React, { useState } from 'react';

  

const ProductPage = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
      };
    return (
        <>
            <Header />
            <div className="Wrapper-HeaderProduct">
                <Headerproduct></Headerproduct>
                <Headerproduct></Headerproduct>
                <Headerproduct></Headerproduct>
                <Headerproduct></Headerproduct>

            </div>
            <div className='Productpage-Branner'>
                <div className='nameBanner'>All Product</div>
            </div>
            <div className="Wrapper-Tool">
                <div className="Fillter-By"> Fillter by</div>
                <div className="wrapper-Button-Fillter">
                    <button className={`bt ${selectedButton === 'All' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('All')}>All</button>
                    <button className={`bt ${selectedButton === 'Best-seller' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Best-seller')}>Best Seller</button>
                    <button className={`bt ${selectedButton === 'Discount' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Discount')}>Discount</button>
                    <button className={`bt ${selectedButton === 'Low-price' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Low-price')}>Low Price</button>
                    <button className={`bt ${selectedButton === 'High-price' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('High-price')}>High Price</button>
                </div>
                <div className="Wrapper-Search-Fillter">
                    <i class="fillter fas fa-search"></i>
                    <input className="Search-Fillter"/>                   
                    
                    
                </div>

                
            </div>
            <div className="Wrapper-Product-detail">
                <Productdetail></Productdetail>
                <Productdetail></Productdetail>
                <Productdetail></Productdetail>
                <Productdetail></Productdetail>
               
               
                

            </div>
           
               
            <div className="Wrapper-Pagniation">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a class="page-link" href="#">1</a></li>
                    <li className="page-item"><a class="page-link" href="#">2</a></li>
                    <li className="page-item"><a class="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
            <Footer />
        </>
    );
};

export default ProductPage;