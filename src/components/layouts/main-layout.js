import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Route-specific layouts
import Home from '../home';

// Api's
import * as sessionApi from '../../api/session-api';

// Layout-specific components
import NavigationBar from '../containers/navigation-container';
import Footer from '../containers/footer-container';
import Login from './login-layout';
import Registration from './registration-layout';
import Profile from './profile-layout';
import Article from './article-layout';
import Search from '../containers/search-container';
import * as ErrorLayouts from './404-layout';

function removeCachedData() {
  localStorage.removeItem("id");
  localStorage.removeItem("first_name");
  localStorage.removeItem("last_name");
  localStorage.removeItem("permissions");
  localStorage.removeItem("email");
  localStorage.removeItem("last_login");
}

class MainLayout extends Component {
  componentDidMount() {
    sessionApi.getUserStatus()
    .then(data => {
      if (!('email' in data)) {
        removeCachedData();
        sessionApi.updateNavigationBarOnLogout();
      }
      else {
        if (localStorage.getItem("email") != null) {
          return;
        }
        for (const prop in data) {
          localStorage.setItem(prop, data[prop]);
        }
        sessionApi.updateNavigationBarOnLogin();
      }
    })
    .catch(error => {
      removeCachedData();
      sessionApi.updateNavigationBarOnLogout();
    });
  }

  render() {
    return (
      <>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login}>
            {localStorage.getItem("email") != null && <Redirect to="/404" />}
          </Route>
          <Route exact path="/register" component={Registration}>
            {localStorage.getItem("email") != null && <Redirect to="/404" />}
          </Route>
          <Route exact path="/profile" component={Profile}>
            {localStorage.getItem("email") == null && <Redirect to="/404" />}
          </Route>
          <Route exact path="/search" component={Search} />
          <Route path="/profile/:userId(\d+)" component={Profile} />
          <Route exact path="/404" component={ErrorLayouts.PageNotFound} />
          <Route path="/article/:articleId(\d+)" component={Article} />
          <Route path="*" component={ErrorLayouts.PageNotFound} />
        </Switch>
        <Footer />
      </>
    );
  }
};

function mapStateToProps(store) {
  return {
    loggedIn: store.navigationState.loggedIn
  };
}

export default connect(mapStateToProps)(MainLayout);