import React from 'react';

class Authorisation extends React.Component {

// static propTypes = {
// 	city: PropTypes.string.isRequired,
// }
render() {
	return (<form method="">
		<div class="login-join">
      <div class="enter-block">
        <h4>	Sign in</h4>
        <label class="login-join__info"> <input class="login-join__add" type="text" value="" placeholder='Email Address*'/></label>
        <label class="login-join__info"> <input class="login-join__add" type="text" value="" placeholder='Passvord*'/></label>
        <label class="login-join__info"> <input type='submit' class="button login-join_btn"  value='Login'/></label>
      </div>
      <div class="register-block">
		    <h4>Register</h4>
		    <label class="login-join__info"> <input class="login-join__add" type="text" value="" placeholder='Email Address*'/></label>
			  <label class="login-join__info"> <input class="login-join__add" type="text" value="" placeholder='User Name*'/></label>
				<label class="login-join__info"> <input class="login-join__add" type="text" value="" placeholder='Passvord*'/></label>
				<label class="login-join__info"> <input type='submit' class="button login-join_btn"  value='Register'/></label>
      </div>
    </div>
	</form>
	)
}
}
export default Authorisation;
		