import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { getAllPizzasReducer } from "./reducers/pizzaReducers";
import { cartReducer } from "./reducers/cartReducer";
import { loginUserReducer, registerUserReducer, adminPageReducer } from "./reducers/userReducers"; // Import adminPageReducer
import {
  placerOrderReducer,
  getUserOrdersReducer,
} from "./reducers/orderReducer";

const rootReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  adminPageReducer: adminPageReducer, // Include adminPageReducer
  placeOrderReducer: placerOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: {
    cartReducer: {
      cartItems: cartItems,
    },
    loginUserReducer: {
      currentUser: currentUser,
    },
  },
});

export default store;
