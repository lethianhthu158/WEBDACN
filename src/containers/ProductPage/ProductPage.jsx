import "./ProductPage.css";
import Header from "../../components/header/header";
import aboutUsImage from "../../assets/aboutus.png";
import { Footer } from "../../components/footer/footer";
import Headerproduct from "../../components/Headerproduct/Headerproduct";
import Productdetail from "../../components/productdetail/productdetail";

const ProductPage = () => {
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
                    <button className="bt All">All</button>
                    <button className="bt Best-Seller">Best Seller</button>
                    <button className="bt Discount">Discount</button>
                    <button className="bt Low-price">Low Price</button>
                    <button className="bt high-price">High Price</button>
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