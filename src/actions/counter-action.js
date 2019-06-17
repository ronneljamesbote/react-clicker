import types from "../constants/actionTypes/counter-action-types";

export const decrement = () => {
  return {
    type: types.DECREMENT
  };
};

export const increment = () => {
  return {
    type: types.INCREMENT
  };
};

export const reset = () => {
  return {
    type: types.RESET
  };
};

export default { decrement, increment, reset };
