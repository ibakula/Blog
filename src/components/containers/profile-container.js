import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import ProfileView from '../views/profile-view';
import { withRouter } from "react-router";
import * as api from '../../api/session-api';

class ProfileContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object,
    userData: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formRef = createRef();
    this.state = { altered: null };
  }

  handleSubmit(e) {
    e.preventDefault();
    const props = [ "first_name", "last_name", "email", "password" ];
    const inputs = this.formRef.current.querySelectorAll('input[id^="reg"]');
    const data = { };
    props.forEach((val, index) => {
      if (inputs[index].value != localStorage.getItem(val)) {
        data[val] = inputs[index].value;
      }
    });

    api.alterUserData(data)
    .then(data => {
      if (data.result.search(/success/i) != -1) {
        this.setState({ altered: true });
      }
      else {
        this.setState({ altered: false, reason: ('reason' in data ? data.reason : "Something went wrong with your request. Try again later.") });
      }
    })
    .catch(error => {
      this.setState({ altered: false, reason: "Something went wrong with your request. Try again later." })
    });
  }

  render() {
    return (
      <ProfileView formRef={this.formRef} 
        onSubmit={this.handleSubmit}
        userId={this.props.match.params.userId} 
        userData={this.props.userData}
        altered={this.state.altered}
        reason={this.state.reason} />
    );
  }
}

export default withRouter(ProfileContainer);