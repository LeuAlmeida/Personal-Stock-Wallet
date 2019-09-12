import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Start = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './start')
);
const Ibovespa = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './ibovespa')
);
const Fiis = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './fiis')
);
const Stocks = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './stocks')
);
const Reits = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './reits')
);
const RendaFixa = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './rendaFixa')
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
        path={`${match.url}/ibovespa`} 
        render={props => 
        <Ibovespa {...props} />}
      />
      <Route
        path={`${match.url}/fiis`} 
        render={props => 
        <Fiis {...props} />}
      />
      <Route
        path={`${match.url}/stocks`} 
        render={props => 
        <Stocks {...props} />}
      />
      <Route
        path={`${match.url}/reits`} 
        render={props => 
        <Reits {...props} />}
      />
      <Route
        path={`${match.url}/rendaFixa`} 
        render={props => 
        <RendaFixa {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Gogo;
