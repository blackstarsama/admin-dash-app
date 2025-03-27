import {
  CREATE_ORDER,
  FETCH_ORDERS,
  UPDATE_ORDER,
  DELETE_ORDER,
  TOGGLE_MENU,
} from "../types";

// Action creator for toggling the menu
export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU,
  };
};

// Action to create a new order
export const createOrder = (order) => {
  return {
    type: CREATE_ORDER,
    payload: order,
  };
};

// Action to fetch orders
export const fetchOrders = () => {
  return {
    type: FETCH_ORDERS,
  };
};

// Action to update an existing order
export const updateOrder = (orderId, updatedData) => {
  return {
    type: UPDATE_ORDER,
    payload: { orderId, updatedData },
  };
};

// Action to delete an order
export const deleteOrder = (orderId) => {
  return {
    type: DELETE_ORDER,
    payload: orderId,
  };
};

// Action creator for fetching recent orders
export const fetchRecentOrders = () => {
  return (dispatch) => {
    const orders = [
      { id: 1, productName: "Product A", productNumber: "12345", payments: "Paid", status: "Completed" },
      { id: 2, productName: "Product B", productNumber: "67890", payments: "Pending", status: "Pending" },
    ];
    dispatch({ type: "SET_RECENT_ORDERS", payload: orders });
  };
};


