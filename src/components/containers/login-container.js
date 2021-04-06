import { Component } from 'react';
import { connect } from 'react-redux';
import LoginView from '../views/login-view';

class LoginContainer extends Component {
  render() {
    return (
      <LoginView />
    );
  }
}

export default LoginContainer;