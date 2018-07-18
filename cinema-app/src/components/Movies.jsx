
import React from 'react';
import { Link, Route } from 'react-router-dom';

const Movies = ({ match }) => {
return( <div>  
        <div><Link to={`${match.url}/shoes`}>Now showing</Link></div>
        <div><Link to={`${match.url}/boots`}>Coming Soon</Link></div>
   
      <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
      </div>)
}

export default Movies;