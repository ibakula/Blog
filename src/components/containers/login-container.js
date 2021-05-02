import { Component, createRef } from 'react';
import LoginView from '../views/login-view';
import PopularSectionContainer from './popular-articles-container';
import * as api from '../../api/session-api';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.formRef = createRef();
    this.handleLogin = this.handleLogin.bind(this);
    this.state = { success: null };
  }

  handleLogin(e) {
    e.preventDefault();

    const data = {
      email: "",
      password: ""
    };

    const inputs = this.formRef.current.querySelectorAll('input[id^="login"]');
    data.email = inputs[0].value;
    data.password = inputs[1].value;

    api.login(data)
    .then(data => {
      if (data.result.search(/success/i) != -1) {
        this.setState({ success: true });
      }
      else {
        this.setState({ success: false, reason: data.reason });
      }
    })
    .catch(error => {
      this.setState({ success: false, reason: "Unexpected error has occured." });
    });
  }

  render() {
    return (
      <LoginView success={this.state.success} 
        reason={this.state.reason} 
        onLogin={this.handleLogin} 
        formRef={this.formRef}>
        <PopularSectionContainer />
      </LoginView>
    );
  }
}

export default LoginContainer;