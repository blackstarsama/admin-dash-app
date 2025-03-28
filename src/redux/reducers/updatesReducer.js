import photo2 from "../../images/photo 2.jpg";
import photo3 from "../../images/photo 3.jpeg";
import photo4 from "../../images/photo 4.jpg";

const initialState = [
  {
    name: "John Doe",
    message: "added a new product",
    time: "2 minutes ago",
    photo: photo2,
  },
  {
    name: "Jane Smith",
    message: "updated the dashboard",
    time: "10 minutes ago",
    photo: photo3,
  },
  {
    name: "Jane Smith",
    message: "updated the dashboard",
    time: "10 minutes ago",
    photo: photo4,
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
