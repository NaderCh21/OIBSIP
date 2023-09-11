import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { getAllPizzasReducers } from "./reducers/pizzaReducers";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducers,
  cartReducer: cartReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: {cartReducer: {
    cartItems: cartItems,
  }}, // You can provide your initial state here
});

export default store;
