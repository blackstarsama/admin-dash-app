import React from "react";
import { Orders } from "../Orders";

const RecentOrders = () => {
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
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {Orders.map((order, index) => (
            <tr key={index}>
              <td>{order.productName}</td>
              <td>{order.productNumber}</td>
              <td>{order.paymentStatus}</td>
              <td
                className={
                  order.shipping.toLowerCase() === "declined"
                    ? "danger"
                    : order.shipping.toLowerCase() === "pending"
                    ? "warning"
                    : "primary"
                }
              >
                {order.shipping}
              </td>
              <td className="primary">Details</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="#">Show All</a>
    </div>
  );
};

export default RecentOrders;
