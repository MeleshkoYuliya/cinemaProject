import React from "react";

import AuthUserContext from "../Session/AuthUserContext";
import PasswordChangeForm from "./PasswordChangeForm";
import withAuthorization from "../Session/withAuthorization";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h4>Your account: {authUser.email}</h4>
        <div className="login-join">
          <PasswordChangeForm />
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
