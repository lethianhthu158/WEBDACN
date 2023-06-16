import './Homepage.css';
import Header from '../../components/header/header';
import { Footer } from '../../components/footer/footer'
import HorizontalScroll from 'react-scroll-horizontal';
import Background1 from '../../assets/Background.png';
import Background2 from '../../assets/Banner Official Launching 1.png';
import Background3 from '../../assets/Banner-Homepage-Website-COMING-SOON 1.png';
import Background4 from '../../assets/2313x1089 1.png';
import ProductLayout from '../../components/productlayout/productlayout';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from "react";
import Productdetail from '../../components/productdetail/productdetail';
import axios from "axios";

function Homepage() {
    const [index, setIndex] = useState(0);
    const [product, setProduct] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const handleSelectProduct = (selectedIndexed, e) => {
        setProduct(selectedIndexed);
    };

    const [products, setProducts] = useState([]);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/products/sales")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8080/api/products/best-sellers")
            .then(response => {
                setBestSeller(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <div>
            <Header className="fixed-top"></Header>


            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Background1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Background2}
                        alt="Second slide"
                    />

                </Carousel.Item >
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Background3}
                        alt="Third slide"
                    />


                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Background4}
                        alt="Four slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className='Backgroud-Product'>
                <div className='NewArrival'>NEW ARRIVALS</div>
                <Carousel activeIndex={product} onSelect={handleSelectProduct} className='fix-high'>
                    <Carousel.Item >
                        <div className='Wrapper-Product'>
                            
                            <ProductLayout></ProductLayout>
                            <ProductLayout></ProductLayout>
                            <ProductLayout></ProductLayout>
                            <ProductLayout></ProductLayout>

                        </div>

                    </Carousel.Item>
                    <Carousel.Item >
                        <div className='Wrapper-Product'>
                            <ProductLayout></ProductLayout>
                            <ProductLayout></ProductLayout>
                            <ProductLayout></ProductLayout>
                            <ProductLayout></ProductLayout>

                        </div>

                    </Carousel.Item >
                    <Carousel.Item >
                        <div className='Wrapper-Product'>
                            <ProductLayout></ProductLayout>
                            <ProductLayout></ProductLayout>
                            <ProductLayout></ProductLayout>
                            <ProductLayout></ProductLayout>
                        </div>


                    </Carousel.Item>
                    <Carousel.Item >
                        <div className='Wrapper-Product'>
                            <ProductLayout></ProductLayout>
                            <ProductLayout></ProductLayout>
                            <ProductLayout></ProductLayout>
                            <ProductLayout></ProductLayout>

                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>
            <div className='Banner'>
                <div className='nameBanner'>Sale off</div>
                <a className='SeeAll'>See all</a></div>
            <div className="wrap-Sale-Product">
                <div className='Sale-Product'>
                {products.map(product => (
                        <Productdetail nameProduct={product.name}  price={product.price}/>
                    ))}
               </div>
            </div>
            <div className='Banner'>
                <div className='nameBanner'>Best Seller</div>
                <a className='SeeAll'>See all</a></div>
            <div className="wrap-Sale-Product">
                <div className='Sale-Product'>
                {bestSeller.map(product => (
                        <Productdetail nameProduct={product.name}  price={product.price}/>
                    ))}
               </div>
            </div>
            







            <Footer />
        </div>
    );
}
export default Homepage;