import React from "react";
import { Fragment } from "react";
import AuthUserContext from "../Session/AuthUserContext";
import PasswordChangeForm from "./PasswordChangeForm";
import withAuthorization from "../Session/withAuthorization";
import AdminPage from "./AdminPage";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Fragment>
        <h4>Your account: {authUser.email}</h4>
        <div className="login-join">
          <PasswordChangeForm />{" "}
        </div>
        {authUser.email === "admin@mail.ru" && (
          <div>
            <AdminPage />
          </div>
        )}
      </Fragment>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
