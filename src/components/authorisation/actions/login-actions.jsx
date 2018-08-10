import { ACTION_IDENTIFYING_USER } from "./login-action-types";

export const identifyingUser = login => {
  return {
    type: ACTION_IDENTIFYING_USER,
    payload: login
  };
};
