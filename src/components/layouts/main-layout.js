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
import NotFound from './404-layout';

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
            {localStorage.getItem("email") != null && <Redirect to="/404" />}
          </Route>
          <Route exact path="/404" component={NotFound} />
          <Route path="/profile/:userId" component={Profile}/>
          <Route path="/article/:articleId" component={Article} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </>
    );
  }
}