import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainPage from '../components/MainPage';
import { requestFilms } from '../../mainLayout/actions/filmsNow-actions';

export default connect(
  state => ({
    movies: state.movies,
    loading: state.loading,
  }),
  dispatch => ({
    onRequestFilms: bindActionCreators(requestFilms, dispatch),
  }),
)(MainPage);
