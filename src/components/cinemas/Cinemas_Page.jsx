import React from 'react';
import cinemasArr from './cinemasArr';
import Cinemas from './Cinemas';

class Cinemas_Page extends React.Component {

render() {
	return (
		<Cinemas  
		  cinemas={cinemasArr.cinemasArr}/>
	)
}
}
export default  Cinemas_Page;