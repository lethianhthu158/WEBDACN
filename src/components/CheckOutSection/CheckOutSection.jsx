import "./CheckOutSection.css";

const CheckOutSection = ({
  priceItems,
  priceDelivery,
  priceTotal,
  ...props
}) => {
  return (
    <div className="container-checkoutSection" {...props}>
      <ul className="list-checkout">
        <li className="checkout-content">
          <p className="checkout-desc">
            Items<span>(2)</span>
          </p>
          <p className="checkout-desc">{priceItems}</p>
        </li>
        <li className="checkout-content">
          <p className="checkout-desc">Delivery Services</p>
          <p className="checkout-desc">{priceDelivery}</p>
        </li>
        <li className="checkout-content">
          <p className="checkout-desc">Total payment</p>
          <p className="checkout-desc">{priceTotal}</p>
        </li>
        <li className="wrap-checkout-button">
          <button className="checkout-button">CHECK OUT</button>
        </li>
      </ul>
    </div>
  );
};

export default CheckOutSection;