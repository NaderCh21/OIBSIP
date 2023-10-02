import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";



export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  function addtocart() {
    dispatch(addToCart(pizza, quantity, variant));
  }

  return (
    <div className="pizza-card">
      <div className="pizza-image" onClick={handleShow}>
        <img src={pizza.image} alt={pizza.name} />
      </div>
      <div className="pizza-details">
        <h1 className="pizza-title">{pizza.name}</h1>
        <div className="pizza-options">
          <div className="pizza-variant">
            <p>Variants</p>
            <select
              className="form-select"
              value={variant}
              onChange={(e) => {
                setVariant(e.target.value);
              }}
            >
              {pizza.variants.map((variant) => (
                <option key={variant} value={variant}>
                  {variant}
                </option>
              ))}
            </select>
          </div>
          <div className="pizza-quantity">
            <p>Quantity</p>
            <select
              className="form-select"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="pizza-price">
          <h2>Price : {pizza.prices[0][variant] * quantity}$</h2>
        </div>
        <button className="add-to-cart-button" onClick={addtocart}>
          ADD TO CART
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={pizza.image} alt={pizza.name} />
          <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="close-button" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
