import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import * as actions from '../action';
import Loading from './Loading';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    let routes = <Loading />;
    if (this.props.user !== null) {
      if (this.props.user === false) {
        routes = (
          <Switch>
            <Route exact path="/" component={LoggedOut} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        );
      } else {
        routes = (
          <Switch>
            <Route exact path="/" component={LoggedIn} />
            {/* <Route render={() => <Redirect to="/" />} /> */}
          </Switch>
        );
      }
    }
    return <div>{routes}</div>;
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps, actions)(App);
