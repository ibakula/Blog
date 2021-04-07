import { Component } from 'react';
import { connect } from 'react-redux';
import LoginView from '../views/login-view';
import PopularSectionView from '../views/popular-articles-view';

class LoginContainer extends Component {
  render() {
    return (
      <LoginView>
        <PopularSectionView />
      </LoginView>
    );
  }
}

export default LoginContainer;