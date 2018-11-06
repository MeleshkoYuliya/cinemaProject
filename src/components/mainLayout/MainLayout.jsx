import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authorisation from '../authorisation/Authorisation';
import Movies_Page from '../moviesPage/Movies_Page';
import ChooseSeats from '../chooseSeatsePage/ChooseSeats';
import BuyTickets from '../ticketsPage/BuyTickets';
import Cinemas_Page from '../cinemasPage/Cinemas_Page';
import SelectSession from './SelectSession';
import MainPageContainer from '../homePage/containers/MainPageContainer';
import Home_Page from '../homePage/Home_Page';
import Header from './Header';
import AboutFilmPage from '../homePage/AboutFilmPage';
import AccountPage from '../Account/AccountPage';
import withAuthentication from '../Session/withAuthentication';
import MovieSession from '../homePage/MovieSession';
import SessionSeats from '../homePage/SessionSeats';

const MainLayout = () => (
  <div>
    <Header />
    <Route path="/authorisation" component={Authorisation} />
    <Route path="/movies" component={Movies_Page} />
    <Route path="/buy-tickets" component={BuyTickets} />
    <Route exact path="/" component={MainPageContainer} />
    <Route path="/film/:id" component={AboutFilmPage} />
    <Route path="/session/:id" component={MovieSession} />
    <Route path="/seats/:id" component={SessionSeats} />
    <Route path="/cinemas" component={Cinemas_Page} />
    <Route path="/choose-seats" component={ChooseSeats} />
    <Route path="/account" component={AccountPage} />
  </div>
);

export default withAuthentication(MainLayout);
