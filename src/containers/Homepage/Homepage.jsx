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
import React, { useState } from "react";

function Homepage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

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
            <ProductLayout></ProductLayout>


            <Footer />
        </div>
    );
}
export default Homepage;