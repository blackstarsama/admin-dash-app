const initialState = {
  onlineOrders: 120,
  offlineOrders: 80,
  onlineCustomers: 45,
};

const analyticsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Ajoutez des cas d'action si nécessaire
    default:
      return state;
  }
};

export default analyticsReducer;
