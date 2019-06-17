import { APP_LOAD } from "../constants/actionTypes/app-action-types";

const initialState = {
  loaded: false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        loaded: true
      };
    default:
      return state;
  }
};

export default AppReducer;
