import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changePassword, changeEmail } from "../actions/actions";

class Main extends React.Component {
  render() {
    const { email, password, changeEmail, changePassword } = this.props;
    return (
      <form className="enter-block">
        {console.log(email)}
        {console.log(password)}
        <h4 className="login-join__title">Sign in</h4>
        <div className="panel-default" />
        <div>
          <label htmlFor="email" className="login-join__info" />
          <input
            className="login-join__add"
            type="email"
            required
            name="email"
            placeholder="Email"
            value={email}
            onChange={event => {
              changeEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password" className="login-join__info" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-join__add"
            value={password}
            onChange={event => {
              changePassword(event.target.value);
            }}
          />
        </div>
        <button className="login-join_btn" type="submit">
          Login
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeEmail: bindActionCreators(changeEmail, dispatch),
    changePassword: bindActionCreators(changePassword, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
