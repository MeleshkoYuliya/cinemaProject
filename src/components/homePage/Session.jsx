import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from "react-router-dom";
import SessionSeats from './SessionSeats';


class Session extends React.PureComponent {

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
        return (
  <div className="session-selection">
          <div>
            <div className="session-selection__film">
              <h4 className="select-options__title">{this.props.info.name}</h4>
              <img className="selection__img" src={this.props.info.url} alt={this.props.info.name} />
            </div>
            <div className="session-selection__text">
            <div>Genre:{this.props.info.genre}</div>
             <div> Description:{this.props.info.description}</div>
            </div>
          </div> 
          <div className="session-selection__showing">
            <div className="showing__place">
              <h4>Arena City Silver Screen </h4>

             <NavLink to={"/seats/"+this.props.info.id}>
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </NavLink>
              <NavLink to={"/seats/"+this.props.info.id}>
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </NavLink>
              <NavLink to={"/seats/"+this.props.info.id}>
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </NavLink>
              </div>
              <div className="showing__place">
              <h4>Belarus </h4>

             <NavLink to={"/seats/"+this.props.info.id}>
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </NavLink>
              <NavLink to={"/seats/"+this.props.info.id}>
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </NavLink>
              <NavLink to={"/seats/"+this.props.info.id}>
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </NavLink>
              </div>
              <div className="showing__place">
              <h4>Velcom Cinema</h4>

             <NavLink to={"/seats/"+this.props.info.id}>
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </NavLink>
              <NavLink to={"/seats/"+this.props.info.id}>
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </NavLink>
              <NavLink to={"/seats/"+this.props.info.id}>
                <div className="showing__place__screening">
                  <div>time</div>
                  <div> Session Type:</div>
                  <div> room: </div>
                </div>
              </NavLink>
              </div>
            
        
          <Route path="/seats/:id" component={SessionSeats}/>
        </div>
        </div>
      );
    }
  }
  
  export default Session;
    
        
     
