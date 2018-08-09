import {
  ACTION_SAVE_EMAIL,
  ACTION_SAVE_PASSWORD,
  ACTION_SAVE_NAME,
  ACTION_CHANGE_USER
} from "./registry-action-types";

export const saveEmail = emailSave => {
  return {
    type: ACTION_SAVE_EMAIL,
    payload: emailSave
  };
};
export const savePassword = passwordSave => {
  return {
    type: ACTION_SAVE_PASSWORD,
    payload: passwordSave
  };
};
export const saveName = userNameSave => {
  return {
    type: ACTION_SAVE_NAME,
    payload: userNameSave
  };
};
export const saveUser = (userSave, userNameSave, passwordSave, emailSave) => {
  return {
    type: ACTION_CHANGE_USER,
    payload: [
      (userSave = {
        emailSave: emailSave,
        passwordSave: passwordSave,
        userNameSave: userNameSave
      })
    ]
  };
};
