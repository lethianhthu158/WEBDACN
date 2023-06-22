import "./CartPage.css";
import Header from "../../components/header/header";
import CardComplete from "../../components/CardComplete/CardComplete";
import CheckOutSection from "../../components/CheckOutSection/CheckOutSection";
import Product from "../../assets/product.png";

const dataExample = [
  {
    title: "Half n Half Water Glow Season 2",
    colorProduct: "Pink",
    price: "$150",
    product: Product,
    isChooseNumProduct: true,
    isCount: true,
  },
  {
    title: "Black Rouge Real Strawberry Milk Toner",
    colorProduct: "Pink",
    price: "$200",
    product: Product,
    isChooseNumProduct: true,
    isCount: true,
  },
  {
    title: "Triple Layer Eye Palette",
    colorProduct: "01 Blossom Forest",
    price: "$180",
    product: Product,
    isChooseNumProduct: true,
    isCount: true,
  },
  
];

const CartPage = () => {
  const cartData = localStorage.getItem('cart');
  const cartItems = cartData ? JSON.parse(cartData) : [];
  return (
    <>
      <Header />
      <div className="container-cartpage">
        <h2 className="cartpage-title">CART</h2>
        <div className="wrap-listcard">
        {cartItems.map((item, index) => (
            <CardComplete
              //key={index}
              title={item.nameProduct}
              colorProduct="Pink"
              price={item.price}
              imgProduct={item.image}
              isChooseNumProduct={true}
              isCount={true}
            />
          ))}
        </div>
        <CheckOutSection
          className="cartpage-checkout"
          priceItems="$530"
          priceDelivery="$30"
          priceTotal="$500"
        />
      </div>
    </>
  );
};

export default CartPage;