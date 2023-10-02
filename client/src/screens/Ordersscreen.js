import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/OrderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";


export default function Ordersscreen() {
  const dispatch = useDispatch();
  const ordersstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = ordersstate;

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <div className="orders-background">
    <div className="orders-container">
      <div className="orders-header">
        <h2 className="orders-title">My Orders</h2>
      </div>
      {loading && <Loading />}
      {error && <Error error="Something Went Wrong" />}
      {orders &&
        orders.map((order) => (
          <div key={order._id} className="order-card">
            <div className="order-details">
              <div className="order-info">
                <h3 className="order-info-title">Order Info</h3>
                <hr className="order-info-divider" />
                <p>
                  Order Amount: <span className="order-amount">{order.orderAmount}</span>
                </p>
                <p>
                  Date: <span className="order-date">{order.createdAt.substring(0, 10)}</span>
                </p>
                <p>
                  Transaction ID: <span className="order-transaction-id">{order.transactionId}</span>
                </p>
                <p>
                  Order ID: <span className="order-id">{order._id}</span>
                </p>
              </div>
              <div className="order-items">
                <h3 className="order-items-title">Items</h3>
                <hr className="order-items-divider" />
                <table className="order-items-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Variant</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.orderItems.map((item) => (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.variant}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="order-address">
                <h3 className="order-address-title">Address</h3>
                <hr className="order-address-divider" />
                <p>Street: {order.shippingAddress.street}</p>
                <p>City: {order.shippingAddress.city}</p>
                <p>Country: {order.shippingAddress.country}</p>
                <p>Pincode: {order.shippingAddress.pincode}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
}
