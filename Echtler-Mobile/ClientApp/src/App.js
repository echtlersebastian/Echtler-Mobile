import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import Home from './components/Home';
import Wohnmobile from './components/ModalPages/Wohnmobile'
import PriceList from './components/ModalPages/PriceList/PriceList'
import Packliste from './components/ModalPages/Packliste'
import Agb from './components/ModalPages/Agb'
import Extras from './components/ModalPages/Extras';


import Ausstattung from './components/ModalPages/Ausstattung/Ausstattung';
import { FetchData } from './components/FetchData';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path="/Wohnmobile" exact component={Wohnmobile} />
            <Route path="/Preisliste" exact component={PriceList} />
            <Route path="/Packliste" exact component={Packliste} />
            <Route path="/Ausstattung" exact component={Ausstattung} />
            <Route path="/Extras" exact component={Extras} />
            <Route path="/Agb" exact component={Agb} />
            <Route path="/fetch-data" exact component={FetchData} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
