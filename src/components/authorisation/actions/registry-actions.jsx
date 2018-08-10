import { CREATE_USER } from "./registry-action-types";

export const createUser = user => {
  return {
    type: CREATE_USER,
    payload: user
  };
};
