import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Homescreen() {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div className="home-container">
      <div className="landing">
        <div className="landing-text">
          <h1>Welcome to <span className="pizza-title">Pizza Delight</span></h1>
          <p>Order your favorite pizza now and enjoy a delicious meal at home.</p>
        </div>
        <div className="landing-image">
          <img src="/pizza-image.jpg" alt="Delicious Pizza" />
        </div>
      </div>

      <div className="pizza-list">
        <h2>Our Pizzas</h2>
        <div className="container">
          <div className="row justify-content-center">
            {loading ? (
              <Loading />
            ) : error ? (
              <Error error="Something Went Wrong" />
            ) : (
              pizzas.map((pizza, index) => (
                <div className="col-md-4" key={pizza._Id}>
                  <div>
                    <Pizza pizza={pizza} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
