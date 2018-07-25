import React from 'react';

class Authorisation extends React.Component {

// static propTypes = {
// 	city: PropTypes.string.isRequired,
// }
render() {
	return (<form>
		<div className="login-join">
      <div className="enter-block">
        <h4 className="login-join__title">	Sign in</h4>
        <label className="login-join__info"> <input className="login-join__add" type="text" value="" placeholder='Email Address*'/></label>
        <label className="login-join__info"> <input className="login-join__add" type="text" value="" placeholder='Passvord*'/></label>
        <label className="login-join__info"> <input type='submit' className="button login-join_btn"  value='Login'/></label>
      </div>
      <div className="register-block">
		    <h4 className="login-join__title">Register</h4>
		    <label className="login-join__info"> <input className="login-join__add" type="text" value="" placeholder='Email Address*'/></label>
			  <label className="login-join__info"> <input className="login-join__add" type="text" value="" placeholder='User Name*'/></label>
				<label className="login-join__info"> <input className="login-join__add" type="text" value="" placeholder='Passvord*'/></label>
				<label className="login-join__info"> <input type='submit' className="button login-join_btn"  value='Register'/></label>
      </div>
    </div>
	</form>
	)
}
}
export default Authorisation;
		