const initialState = [
  {
    name: "John Doe",
    message: "added a new product",
    time: "2 minutes ago",
    photo: "./images/profile1.jpg",
  },
  {
    name: "Jane Smith",
    message: "updated the dashboard",
    time: "10 minutes ago",
    photo: "./images/profile2.jpg",
  },
];

const updatesReducer = (state = initialState, action) => {
  switch (action.type) {
    // Ajoutez des cas d'action si nécessaire
    default:
      return state;
  }
};

export default updatesReducer;
