import './Homepage.css';
import Header from '../../components/header/header';
import { Footer } from '../../components/footer/footer'
import HorizontalScroll from 'react-scroll-horizontal';
import Background1 from '../../assets/Background.png';
import Background2 from '../../assets/Banner Official Launching 1.png';
import Background3 from '../../assets/Banner-Homepage-Website-COMING-SOON 1.png';
import Background4 from '../../assets/Banner Official Launching 1.png';
import ProductLayout from '../../components/productlayout/productlayout';
import  Carousel  from 'react-bootstrap/Carousel';
import React, { useState } from "react";






function Homepage  () {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
   
    return (
        <div>
        <Header className="header-fix"></Header>
         
         
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Background1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Background2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Background3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <ProductLayout></ProductLayout>
        
         
         <Footer/>
      </div>
    );
}
export default Homepage;