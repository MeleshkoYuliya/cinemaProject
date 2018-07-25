import React, { Component } from 'react';
import Header from './components/header/Header';
import './App.css';
import './scss/style.scss';

class App extends Component {
render() {

	return (
	
		<div>
		<Header
		/>
		</div>
	);
}
}

// //Private router function 
// const PrivateRoute = ({component: Component, ...rest}) => {
// return (
// 	<Route
// 		{...rest}
// 		render={(props) => fakeAuth.isAuthenticated === true
// 			? <Component {...props} />
// 			: <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
// )
// }

// //Home component
// const Home = (props) => (
// <div>
// 	<h2>Home {console.log(props)}</h2>
// </div>
// )

// //Admin component
// const Admin = ({ match }) => {
// return(<div> <h2>Welcome admin </h2></div>)


// }


export default  App;
