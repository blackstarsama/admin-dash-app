import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentOrders } from "../redux/actions/index";

const RecentOrders = () => {
  const dispatch = useDispatch();
  const recentOrders = useSelector((state) => state.orders.recentOrders);

  useEffect(() => {
    dispatch(fetchRecentOrders());
  }, [dispatch]);

  // Vérifiez si recentOrders est un tableau
  if (!Array.isArray(recentOrders)) {
    return <p>No recent orders available.</p>;
  }

  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Payments</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.productName}</td>
              <td>{order.productNumber}</td>
              <td>{order.payments}</td>
              <td
                className={order.status === "Pending" ? "warning" : "primary"}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="#">Show All</a>
    </div>
  );
};

export default RecentOrders;
