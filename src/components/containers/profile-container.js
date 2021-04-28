import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import ProfileView from '../views/profile-view';
import { withRouter } from "react-router";


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

    
  }

  render() {
    return (
      <ProfileView formRef={this.formRef} 
        userId={this.props.match.params.userId} 
        userData={this.props.userData} />
    );
  }
}

export default withRouter(ProfileContainer);