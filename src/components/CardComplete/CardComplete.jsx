import "./CardComplete.css";
import deleteIcon from "../../assets/delete-btn.png";
import { useState } from "react";
import Modal from "../Modal/Modal";

const CardComplete = ({
  title,
  colorProduct,
  price,
  imgProduct,
  isChooseNumProduct,
  isCount,
  onRemove,
  quantity
}) => {
  const [countProduct, setCountProduct] = useState(quantity);
  const [openModal,setOpenModal]= useState(false);
  const handleRemove = () => {
    setOpenModal(false); // Close the modal
    onRemove(); // Call the callback function to remove the component from the cart
  };

  return (
    <><div className="container-cardcomplete">
      <div className="cardcomplete-left">
        <img className="productcard-image" src={imgProduct} alt="product"></img>
        <div className="productcomplete-desc">
          <h6 className="productcomplete-content">{title}</h6>
          <p className="productcomplete-content">{colorProduct}</p>
          <p className="productcomplete-content productcomplete-price">
            ${price}
          </p>
        </div>
      </div>
      {isChooseNumProduct ? (
        isCount ? (
          <>
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
            <button className="btn-delete" onClick={() => setOpenModal(true)}>
              <img
                className="icon-delete"
                src={deleteIcon}
                alt="delete icon"
               
              ></img>
              
            </button>{" "}
          </>
        ) : (<button className="btn-delete" onClick={() => setOpenModal(true)} >
          <img
            className="icon-delete"
            src={deleteIcon}
            alt="delete icon"
          ></img>
        </button>)
      ) : (
        <div className="wrap-number-product">
          x<span className="number-product">1</span>
        </div>
      )}
    </div>
    <Modal
        openModal={openModal}
        content="Do you want to remove the product from the cart?"
        onCancel={() => setOpenModal(false)}
        onYes={handleRemove}
       
        

      ></Modal>
      </>
  );
};

export default CardComplete;