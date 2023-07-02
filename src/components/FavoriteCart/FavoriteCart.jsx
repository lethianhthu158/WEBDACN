import "./FavoriteCart.css";
import deleteIcon from "../../assets/delete-btn.png"
import { useState } from "react";
import Modal from "../Modal/Modal";
import { Link } from 'react-router-dom';

const FavoriteCard = ({
  title,
  colorProduct,
  price,
  imgProduct, 
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
    <><Link state={{ nameProduct: title, price,  image: imgProduct }} to="/product-detail">
      <div className="container-cardcomplete-fa">
      <div className="cardcomplete-left-fa">
        <img className="productcard-image-fa" src={imgProduct} alt="product"></img>
        <div className="productcomplete-desc-fa">
          <h6 className="productcomplete-content-fa">{title}</h6>
          <p className="productcomplete-content-fa">{colorProduct}</p>
          <p className="productcomplete-content productcomplete-price-fa">
            ${price}
          </p>
          <button className="btn-delete-fa" onClick={() => setOpenModal(true)} >
          <img
            className="icon-delete-fa"
            src={deleteIcon}
            alt="delete icon"
          ></img>
        </button>
        </div>
       
      </div>
      
       
    
      
    </div>
    </Link>
    <Modal
        openModal={openModal}
        content="Do you want to remove the product from the cart?"
        onCancel={() => setOpenModal(false)}
        onYes={handleRemove}
        style={{left:"0px"}}

       
        

      ></Modal>
      </>
  );
};

export default FavoriteCard;