import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { logoutUser } from "../actions/userActions";


export default function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  // Check if the user is an admin
  const isAdmin = currentUser && currentUser.isAdmin;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <span className="pizza-icon">🍕</span> DomiNosh PIZZA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <>
                {isAdmin && (
                  <li className="nav-item">
                    <a className="nav-link admin-link" href="/admin">
                      Admin Dashboard
                    </a>
                  </li>
                )}
                <li className="nav-item dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      {currentUser.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{backgroundColor: 'black'}}>
                      <Dropdown.Item

                        className="dropdown-item"
                        href="/orders"
                      >
                        Orders
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        onClick={() => {
                          dispatch(logoutUser());
                        }}
                      >
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <span className="cart-icon">🛒</span> Cart{" "}
                {cartState.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
