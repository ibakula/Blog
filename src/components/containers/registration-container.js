import { Component, createRef } from 'react';
import * as api from '../../api/session-api';
import RegistrationView from '../views/registration-view';

class RegistrationContainer extends Component {
  constructor(props) {
    super(props);
    this.formRef = createRef();
    this.handleRegister = this.handleRegister.bind(this);
    this.state = {
      success: null
    };
  }

  handleRegister(e) {
    e.preventDefault();

    const data = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };

    const inputs = this.formRef.current.querySelectorAll('input[id^="signup"]');

    data.firstName = inputs[0].value;
    data.lastName = inputs[1].value;
    data.email = inputs[2].value;
    data.password = inputs[3].value;

    api.createAccount(data)
    .then(data => {
      if (data.result.search(/success/i) != -1) {
        this.setState({ success: true });
      }
      else {
        this.setState({ success: false, reason: data.reason });
      }
    })
    .catch(error => {
      this.setState({ success: false, reason: "An internal error has occured." })
    });
  }

  render() {
    return (
      <RegistrationView formRef={this.formRef}
        success={this.state.success} 
        reason={this.state.reason}
        onSignup={this.handleRegister} />
    );
  }
};

export default RegistrationContainer;