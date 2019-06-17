import types from "../constants/actionTypes/counter-action-types";

const initialState = 0;

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};

export default CounterReducer;
