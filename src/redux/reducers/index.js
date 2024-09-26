import { combineReducers } from "redux";
import countReducers from "./counterReducer";
import randomReduce from "./randomReducer";
import productReducer from "./productReducer";
import cartsReducer from "./cartReducer";

const reducers = combineReducers({
  count: countReducers,
  random: randomReduce,
  products: productReducer,
  carts: cartsReducer,
});

export default reducers;
