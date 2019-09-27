import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Start = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './start')
);
const Umesp = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './umesp')
);
const Unimep = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './unimep')
);
const Centenario = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './centenario')
);
const Granbery = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './granbery')
);
const Ipa = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './ipa')
);
const Izabela = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './izabela')
);
const ADistancia = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './ensinoADistancia')
);


const Gogo = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/start`} />
      <Route
        path={`${match.url}/start`}
        render={props => 
        <Start {...props} />}
      />
      <Route
        path={`${match.url}/umesp`} 
        render={props => 
        <Umesp {...props} />}
      />
      <Route
        path={`${match.url}/unimep`} 
        render={props => 
        <Unimep {...props} />}
      />
      <Route
        path={`${match.url}/centenario`} 
        render={props => 
        <Centenario {...props} />}
      />
      <Route
        path={`${match.url}/granbery`} 
        render={props => 
        <Granbery {...props} />}
      />
      <Route
        path={`${match.url}/ipa`} 
        render={props => 
        <Ipa {...props} />}
      />
      <Route
        path={`${match.url}/izabela`} 
        render={props => 
        <Izabela {...props} />}
      />
      <Route
        path={`${match.url}/ensinoADistancia`} 
        render={props => 
        <ADistancia {...props} />}
      />
      
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Gogo;
