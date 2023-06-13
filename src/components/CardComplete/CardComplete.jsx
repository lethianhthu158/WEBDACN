import "./CardComplete.css";
import deleteIcon from "../../assets/delete-btn.png";
import { useState } from "react";

const CardComplete = ({ title, colorProduct, price, imgProduct }) => {
  const [countProduct, setCountProduct] = useState(1);

  return (
    <div className="container-cardcomplete">
      <div className="cardcomplete-left">
        <img className="productcard-image" src={imgProduct} alt="product"></img>
        <div className="productcomplete-desc">
          <h6 className="productcomplete-content">{title}</h6>
          <p className="productcomplete-content">{colorProduct}</p>
          <p className="productcomplete-content productcomplete-price">
            {price}
          </p>
        </div>
      </div>
      <div className="cardcomplete-right">
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
      <button className="btn-delete">
        <img className="icon-delete" src={deleteIcon} alt="delete icon"></img>
      </button>
    </div>
  );
};

export default CardComplete;