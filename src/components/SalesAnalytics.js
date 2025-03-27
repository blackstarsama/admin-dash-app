import React from "react";
import { useSelector } from "react-redux";

const SalesAnalytics = () => {
  const onlineOrders = useSelector(
    (state) => state.analytics?.onlineOrders || 0
  );
  const offlineOrders = useSelector(
    (state) => state.analytics?.offlineOrders || 0
  );
  const onlineCustomers = useSelector(
    (state) => state.analytics?.onlineCustomers || 0
  );

  return (
    <div className="sales-analytics">
      <h2>Sales Analytics</h2>
      <div className="item online">
        <div className="icon">
          <span className="material-icons-sharp">shopping_cart</span>
        </div>
        <div className="right">
          <div className="info">
            <h3>ONLINE ORDERS</h3>
            <small className="text-muted">Last 24 hours</small>
          </div>
          <h5 className="success">+39%</h5>
          <h3>{onlineOrders}</h3>
        </div>
      </div>
      <div className="item offline">
        <div className="icon">
          <span className="material-icons-sharp">local_mall</span>
        </div>
        <div className="right">
          <div className="info">
            <h3>OFFLINE ORDERS</h3>
            <small className="text-muted">Last 24 hours</small>
          </div>
          <h5 className="danger">-17%</h5>
          <h3>{offlineOrders}</h3>
        </div>
      </div>
      <div className="item customers">
        <div className="icon">
          <span className="material-icons-sharp">person</span>
        </div>
        <div className="right">
          <div className="info">
            <h3>ONLINE CUSTOMERS</h3>
            <small className="text-muted">Last 24 hours</small>
          </div>
          <h5 className="success">+25%</h5>
          <h3>{onlineCustomers}</h3>
        </div>
      </div>
      <div className="item add-product">
        <div>
          <span className="material-icons-sharp">add</span>
          <h3>Add Product</h3>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;
