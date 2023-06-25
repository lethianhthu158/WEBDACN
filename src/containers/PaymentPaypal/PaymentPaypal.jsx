import "./PaymentPaypal.css";
import Header from "../../components/header/header";
import PaypalImage from "../../assets/paypal.png";
import DirectPaymentImg from "../../assets/directpayment.png";
import tickImage from "../../assets/tick.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const PaymentPayPal = () => {
  const [openTick, setOpenTick] = useState("direct");
  return (
    <>
      <Header />
      <main className="container-paymentpaypal">
        <div
          onClick={() => setOpenTick("paypal")}
          className="wrap-payment-method"
        >
          <img className="method-image" src={PaypalImage} alt="paypal"></img>
          <div className="wrap-paymentticked">
            <button className="payment-method">PayPal</button>
            {openTick === "paypal" && (
              <img className="ticked-image" src={tickImage} alt="ticked" />
            )}
          </div>
        </div>
        <div
          onClick={() => setOpenTick("direct")}
          className="wrap-payment-method"
        >
          <img
            className="method-image"
            src={DirectPaymentImg}
            alt="paypal"
          ></img>
          <div className="wrap-paymentticked">
            <button className="payment-method">Direct Payment</button>
            {openTick === "direct" && (
              <img className="ticked-image" src={tickImage} alt="ticked" />
            )}
          </div>
        </div>
        <Link
          className="paymentpaypal-btn"
          to={openTick === "direct" ? "/" : "/paypal"}
        >
          CONTINUE
        </Link>
      </main>
    </>
  );
};

export default PaymentPayPal;