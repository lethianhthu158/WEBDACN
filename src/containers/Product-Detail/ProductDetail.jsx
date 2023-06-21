import "./ProductDetail.css";
import Header from "../../components/header/header";
import product from "../../assets/product.png";
import product1 from "../../assets/product 1.png";

const ProductDetail = () => {
  return (
    <>
      <Header />
      <main className="container-productdetail">
        <section className="productdetail-name">
          <h3 className="product-name">Half n Half Water Glow Season 2 </h3>
        </section>
        <section className="productdetail-product">
          <div className="product-left">
            <img
              className="img-product"
              src={product}
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
              Half n Half Water Glow Season 2
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
            <h6 className="productdetail-price">$298.0</h6>
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
              <button className="btn-cta btn-add">Add to card</button>
              <button className="btn-cta btn-buy">Buy</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;