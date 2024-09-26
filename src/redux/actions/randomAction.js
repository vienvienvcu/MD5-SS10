import { RANDOM } from "../constants/actionTypes";

export const random_action = () => {
  return {
    type: RANDOM,
    payload: Math.ceil(Math.random() * 10),
  };
};
