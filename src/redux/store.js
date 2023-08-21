// Importing the createStore function from Redux
import { createStore } from "redux";
// Importing the reducer previously defined
import reducer from "./reducer";

// Creating the Redux store by passing in the reducer function
const store = createStore(reducer);

export default store; // Exporting the created Redux store for use in the application
