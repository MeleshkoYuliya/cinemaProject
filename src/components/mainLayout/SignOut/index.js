import React from "react";
import ToolTip from "react-portal-tooltip";
import { auth } from "../../firebase";

const SignOutButton = () => (
  <button className="menu-button" type="button" onClick={auth.doSignOut}>
    Sign Out
  </button>
);

export default SignOutButton;
