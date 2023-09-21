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
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {loading ? (
            <Loading />
          ) : error ? (
            <Error error='Something Went Wrong' />
          ) : (
            pizzas.map((pizza, index) => (
              <div className="col-md-4 " key={pizza._Id}  >
                <div >
                <Pizza pizza={pizza} />
                </div>
              </div>
            )) 
          )}
        </div>
      </div>
    </div>
  );
}
