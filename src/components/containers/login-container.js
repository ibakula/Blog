import { Component } from 'react';
import LoginView from '../views/login-view';
import PopularSectionContainer from './popular-articles-container';
import apiUtility from '../../api/api-utility';

class LoginContainer extends Component {
  render() {
    return (
      <LoginView>
        <PopularSectionContainer />
      </LoginView>
    );
  }
}

export default LoginContainer;