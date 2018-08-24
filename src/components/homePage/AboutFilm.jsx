import React from 'react';
import PropTypes from 'prop-types';
import AuthUserContext from "../Session/AuthUserContext";
import { NavLink, Route } from "react-router-dom";
import MovieSession from '../homePage/MovieSession';
import JwModal from "jw-react-modal";
import { customStyles } from "../mainLayout/modalWindowStyle";


class AboutFilm extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      treiler:PropTypes.string.isRequired,
      genre:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      duration:PropTypes.string.isRequired,
    }),
  };

  
  
  render() {
    const NavigationAuth = () => (
      <div>
         <NavLink to={"/session/"+this.props.info.id} className="film_title_link">
            <button className="button films-now__button">Tickets</button>
         </NavLink>
      </div>
    );
    
    const NavigationNonAuth = () => (
      <div>
      <button
            className="button films-now__button"
            type="button"
            onClick={JwModal.open("custom-modal-2")}
          >
            Tickets
          </button>
          <JwModal id="custom-modal-2" style={customStyles}>
            <h5>Please sign in</h5>
            <button
              className="modal-button"
              onClick={JwModal.close("custom-modal-2")}
            >
              ok
            </button>
          </JwModal>
      </div>
    );

        return (

        <div className="session-selection">
            <div className="session-selection__film">
              <h4 className="select-options__title">{this.props.info.name}</h4>
              <img className="selection__img" src={this.props.info.url} alt={this.props.info.name} />  
            </div>            
            <div className="session-selection__description">
            <div className="session-selection__text">
            <div><h3>Genre: </h3>{this.props.info.genre}</div>
            <div> <h3>Description:</h3> {this.props.info.description}</div> 
            <div><h3>Duration:</h3> {this.props.info.duration}</div>
          </div>
          <div className="treiler">
            <iframe width="80%" height="340px" src={this.props.info.treiler} title={this.props.info.name} frameBorder="0"  allowFullScreen></iframe>
            </div>
            <div>
            <AuthUserContext.Consumer>
            {authUser =>
              authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
          </AuthUserContext.Consumer>
          </div>
          <Route path="/session/:id" component={MovieSession}/>
            </div>
        </div>
    );
  }
}

export default AboutFilm;
