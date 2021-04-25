import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import StreamCreatePage from '../pages/StreamCreate';
import StreamDeletePage from '../pages/StreamDelete';
import StreamEditPage from '../pages/StreamEdit';
import StreamListPage from '../pages/StreamList';
import StreamShowPage from '../pages/StreamShow';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamListPage}></Route>
            <Route
              path="/streams/new"
              exact
              component={StreamCreatePage}
            ></Route>
            <Route
              path="/streams/delete/:id"
              exact
              component={StreamDeletePage}
            ></Route>
            <Route
              path="/streams/edit/:id"
              exact
              component={StreamEditPage}
            ></Route>
            <Route
              path="/streams/show/:id"
              exact
              component={StreamShowPage}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
