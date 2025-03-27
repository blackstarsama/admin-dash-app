const initialState = {
  total: 0,
  recentOrders: [
    {
      id: 1,
      productName: "Product A",
      productNumber: "12345",
      payments: "Paid",
      status: "Completed",
    },
    {
      id: 2,
      productName: "Product B",
      productNumber: "67890",
      payments: "Pending",
      status: "Pending",
    },
  ],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RECENT_ORDERS":
      return {
        ...state,
        recentOrders: action.payload,
      };
    default:
      return state;
  }
};

export default ordersReducer;
