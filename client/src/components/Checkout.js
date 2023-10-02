import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/OrderActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
      {loading && (<Loading />)}

      {error && (<Error error="Something Went Wrong" />)}
      {success && (<Success success="Your Order Placed Successfully" />)}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51Ns9RiKDziGAxotvwMcBk0AqIcy8H9f71QDQFyIox2G69eCqbBDdT0Hq9LiH4Er3gF3v6kPYFgIUl6fKcMPEQgh700Ir85RxT0"
        currency="USD"
      >
        <button className="btn" style={{ marginLeft: "37%" }}>
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
}
