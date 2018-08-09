import { ACTION_CHANGE_EMAIL, ACTION_CHANGE_PASSWORD } from "./action-types";

export const changeEmail = newEmail => {
  return {
    type: ACTION_CHANGE_EMAIL,
    payload: newEmail
  };
};
export const changePassword = newPassword => {
  return {
    type: ACTION_CHANGE_PASSWORD,
    payload: newPassword
  };
};
