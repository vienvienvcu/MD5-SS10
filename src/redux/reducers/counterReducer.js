// import { DECREMENT, INCREMENT, RESET } from "../constants/actionTypes";
import * as types from "../constants/actionTypes";

const initialState = 10;
const countReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      state += 1;
      return state;

    case types.DECREMENT:
      state -= 1;
      return state;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};
export default countReducers;
