import { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// Route-specific layouts
import Home from '../home';

// Layout-specific components
import NavigationBar from '../containers/navigation-container';
import Footer from '../containers/footer-container';
import Login from '../containers/login-container';

export default class MainLayout extends Component {
  static propTypes = {  
  }

  render() {
    return (
      <>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </>
    );
  }
}