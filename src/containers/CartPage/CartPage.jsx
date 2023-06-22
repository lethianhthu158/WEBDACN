import "./CartPage.css";
import Header from "../../components/header/header";
import CardComplete from "../../components/CardComplete/CardComplete";
import CheckOutSection from "../../components/CheckOutSection/CheckOutSection";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartPage = () => {
  const { cart } = useContext(CartContext);
  const cartItems = cart || [];

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      <Header />
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
    </>
  );
};

export default CartPage;
