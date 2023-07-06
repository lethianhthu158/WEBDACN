import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Modal from "../Modal/Modal";
import deleteIcon from "../../assets/delete-btn.png";
import "./CardComplete.css";

const CardComplete = ({ nameProduct, price, imageUrl, quantity, onRemove, isChooseNumber, number=0 }) => {
  const [countProduct, setCountProduct] = useState(quantity);
  const [openModal, setOpenModal] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handleUpdateCart = (amount) => {
    setCountProduct(countProduct + amount);
    const product = { nameProduct, price, imageUrl, quantity: amount };
    addToCart(product);
  };

  const handleConfirmRemove = () => {
    setOpenModal(false);
    onRemove();
  };

  return (
    <div className="container-cardcomplete">
      <div className="cardcomplete-left">
        <img className="productcard-image" src={imageUrl} alt="product" />
        <div className="productcomplete-desc">
          <h6 className="productcomplete-content">{nameProduct}</h6>
          <p className="productcomplete-content productcomplete-price">${price}</p>
        </div>
      </div>
      {isChooseNumber===true?
      (<div className="cardcomplete-right">
        <button className="btn-count decrease" disabled={countProduct <= 1} onClick={() => handleUpdateCart(-1)}>-</button>
        <input className="number-count" type="text" value={countProduct} readOnly />
       <button className="btn-count increase" onClick={() => handleUpdateCart(1)}>+</button>
      </div>):
    ( <div className="cardcomplete-right">
        <p className="Number-Cardcomplete">x{number}</p>
      </div>)}
      <button className="btn-delete" onClick={() => setOpenModal(true)}>
        <img className="icon-delete" src={deleteIcon} alt="delete icon" />
      </button>
      <Modal
        openModal={openModal}
        content="Do you want to remove the product from the cart?"
        onCancel={() => setOpenModal(false)}
        onYes={handleConfirmRemove}
        style={{left:"0px"}}

      />
    </div>
  );
};

export default CardComplete;
