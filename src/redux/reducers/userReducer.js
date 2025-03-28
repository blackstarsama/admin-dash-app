const initialState = {
  name: "Sama",
  role: "Admin",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Ajoutez vos cas d'action ici
    default:
      return state;
  }
};

export default userReducer;
