import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Start = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './start')
);
const Gogo = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/start`} />
      <Route
        path={`${match.url}/start`}
        render={props => <Start {...props} />}
      />
      <Route
        path={`${match.url}/ibovespa`}
        render={props => <Start {...props} />}
      />
      <Route
        path={`${match.url}/fii`}
        render={props => <Start {...props} />}
      />
      <Route
        path={`${match.url}/stocks`}
        render={props => <Start {...props} />}
      />
      <Route
        path={`${match.url}/reits`}
        render={props => <Start {...props} />}
      />
      <Route
        path={`${match.url}/rendaFixa`}
        render={props => <Start {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Gogo;
