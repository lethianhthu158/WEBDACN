import "./ProductPage.css";
import Header from "../../components/header/header";
import aboutUsImage from "../../assets/aboutus.png";
import { Footer } from "../../components/footer/footer";
import Headerproduct from "../../components/Headerproduct/Headerproduct";
import Productdetail from "../../components/productdetail/productdetail";
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";


const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [apiEndpoint, setApiEndpoint] = useState("http://localhost:8080/api/products");
    useEffect(() => {
        axios.get(`${apiEndpoint}?page=${currentPage}&size=4`)
            .then(response => {
                setProducts(response.data.content);
                setTotalPages(response.data.totalPages);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [currentPage, apiEndpoint]);
    const [selectedButton, setSelectedButton] = useState(null);
    const [product, setProduct] = useState(0);
    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        switch (buttonName) {
            case 'Best-seller':
                setApiEndpoint("http://localhost:8080/api/products/best-sellers");
                break;
            case 'Discount':
                setApiEndpoint("http://localhost:8080/api/products/sales");
                break;
            case 'Low-price':
                setApiEndpoint("http://localhost:8080/api/products/lowPrice");
                break;
            case 'High-price':
                setApiEndpoint("http://localhost:8080/api/products/highPrice");
                break;
            default:
                setApiEndpoint("http://localhost:8080/api/products");
        }
    };
    const handleSelectProduct = (selectedIndexed, e) => {
        setProduct(selectedIndexed);
    };
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    let startPage, endPage;
    if (currentPage <= 1) {
        startPage = 0;
        endPage = 2;
    } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 3;
        endPage = totalPages - 1;
    } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
    }
    const pageNumbers = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);


    return (
        <>
            <Header />
            <div className="Wrapper-HeaderProduct-ProductPage">
                <Carousel activeIndex={product} onSelect={handleSelectProduct} className='fix-high'>
                    <Carousel.Item >
                        <div className='Wrapper-Product-page'>

                            <Headerproduct></Headerproduct>
                            <Headerproduct></Headerproduct>
                            <Headerproduct></Headerproduct>
                            <Headerproduct></Headerproduct>

                        </div>

                    </Carousel.Item>
                    <Carousel.Item >
                        <div className='Wrapper-Product-page'>
                            <Headerproduct></Headerproduct>
                            <Headerproduct></Headerproduct>
                            <Headerproduct></Headerproduct>
                            <Headerproduct></Headerproduct>

                        </div>

                    </Carousel.Item >
                </Carousel>



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
                {/* <div className="Wrapper-Search-Fillter">
                    <i class="fillter fas fa-search"></i>
                    <input className="Search-Fillter"/>                   
                    
                    
                </div> */}


            </div>
            <div className="Wrapper-Product-detail">
                {products.map(product => (
                    <Productdetail nameProduct={product.name} price={product.price} image={product.image} />
                ))}
            </div>


            <div className="Wrapper-Pagniation">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous" onClick={() => handlePageChange(currentPage > 0 ? currentPage - 1 : 0)}>
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {pageNumbers.map(number => (
                            <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={number}>
                                <a className="page-link" href="#" onClick={() => handlePageChange(number)}>{number + 1}</a>
                            </li>
                        ))}
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next" onClick={() => handlePageChange(currentPage + 1 < totalPages ? currentPage + 1 : totalPages - 1)}>
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