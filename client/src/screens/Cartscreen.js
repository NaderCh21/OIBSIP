import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

export default function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="cart-title">My Cart</h2>
          {cartItems.map((item) => (
            <div className="cart-item" key={item._id}>
              <div className="cart-item-details">
                <h1 className="cart-item-name">
                  {item.name} [{item.variant}]
                </h1>
                <p className="cart-item-price">
                  Price: {item.quantity} * {item.prices[0][item.variant]} = {item.price}
                </p>
                <div className="cart-item-quantity">
                  <span className="cart-quantity-label">Quantity: </span>
                  <i
                    className="fa fa-plus cart-quantity-icon"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity + 1, item.variant));
                    }}
                  ></i>
                  <b className="cart-quantity">{item.quantity}</b>
                  <i
                    className="fa fa-minus cart-quantity-icon"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity - 1, item.variant));
                    }}
                  ></i>
                </div>
              </div>

              <div className="cart-item-image">
                <img src={item.image} alt={item.name} className="cart-image" />
              </div>

              <div className="cart-item-delete">
                <i
                  className="fa fa-trash cart-delete-icon"
                  aria-hidden="true"
                  onClick={() => {
                    dispatch(deleteFromCart(item));
                  }}
                ></i>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <h2 className="cart-subtotal">SubTotal: {subtotal} $</h2>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
