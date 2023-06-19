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
  return (
    <>
      <Header />
      <div className="container-cartpage">
        <h2 className="cartpage-title">CART</h2>
        <div className="wrap-listcard">
          {dataExample.map((item) => (
            <CardComplete
              title={item.title}
              colorProduct={item.colorProduct}
              price={item.price}
              imgProduct={item.product}
              isChooseNumProduct={item.isChooseNumProduct}
              isCount={item.isCount}
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