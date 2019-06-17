import { APP_LOAD } from "../constants/actionTypes/app-action-types";

export const appLoad = () => {
  return {
    type: APP_LOAD
  };
};

export default { appLoad };
