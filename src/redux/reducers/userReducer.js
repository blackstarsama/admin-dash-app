const initialState = {
  name: "Sama Junior",
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
