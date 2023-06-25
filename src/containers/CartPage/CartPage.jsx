import "./CartPage.css";
import Header from "../../components/header/header";
import CardComplete from "../../components/CardComplete/CardComplete";
import CheckOutSection from "../../components/CheckOutSection/CheckOutSection";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import EmtyPage from "../../assets/EmtyPage.gif";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart } = useContext(CartContext);
  const cartItems = cart || [];

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      <Header />
     
      
        {cartItems.length === 0 ? (
          <div className="Emty-CartPage">
            <div className="wrapper-gif-empty">
              <img className="gif-empty" src={EmtyPage} alt="Empty Cart" />
            </div>
            <div className="Content-empty-car-page">
            <p className="Cart-empty">Sorry, cart is empty. Would you like to return to the homepage</p>
            <Link to="/">
              <button className="HomePage-comeback">Homepage</button>
            </Link></div>
          </div>
        ) : (
          <div className="container-cartpage">
            <h2 className="cartpage-title">CART</h2>
          <div className="wrap-listcard">
            {cartItems.map((item, index) => (
              <CardComplete
                key={index}
                title={item.nameProduct}
                colorProduct="Pink"
                price={item.price}
                imgProduct={item.imageUrl}
                isChooseNumProduct={true}
                isCount={true}
                quantity={item.quantity}
              />
            ))}
          </div>    
       
           
          <CheckOutSection
            className="cartpage-checkout"
            priceItems={totalPrice}
            priceDelivery="$30"
            priceTotal={totalPrice + 30}
          />
          </div>
        )}
     
        {/* <div className="wrap-listcard">
          {cartItems.map((item, index) => (
            <CardComplete
              key={index}
              title={item.nameProduct}
              colorProduct="Pink"
              price={item.price}
              imgProduct={item.imageUrl}
              isChooseNumProduct={true}
              isCount={true}
              quantity={item.quantity}
            />
          ))}
        </div>
        <CheckOutSection
          className="cartpage-checkout"
          priceItems={totalPrice}
          priceDelivery="$30"
          priceTotal={totalPrice + 30}
        />
      </div>
      <div className="Emty-CartPage">
        <div className="wrapper-gif-empty">
        <img className="gif-empty"src={EmtyPage}></img></div>
        <p className="Cart-empty">Sorry, cart is empty. Would you like to return to the homepage</p>
        <Link to="/"><button className="HomePage-comeback">Homepage</button></Link>

      </div> */}
    </>
  );
};

export default CartPage;
