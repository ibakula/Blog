import { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Route-specific layouts
import Home from '../home';

// Layout-specific components
import NavigationBar from '../containers/navigation-container';
import Footer from '../containers/footer-container';
import Login from './login-layout';
import Registration from './registration-layout';
import Profile from './profile-layout';
import Article from './article-layout';
import * as ErrorLayouts from './404-layout';

export default class MainLayout extends Component {
  static propTypes = {  
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
          <Route path="/profile/:userId(\d+)" component={Profile} />
          <Route exact path="/404" component={ErrorLayouts.PageNotFound} />
          <Route path="/article/:articleId(\d+)" component={Article} />
          <Route path="*" component={ErrorLayouts.PageNotFound} />
        </Switch>
        <Footer />
      </>
    );
  }
}