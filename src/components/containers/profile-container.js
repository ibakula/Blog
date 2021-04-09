import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileView from '../views/profile-view';
import qs from 'querystring';
import { withRouter } from "react-router";


class ProfileContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object,
    userData: PropTypes.object
  }

  render() {
    return (
      <ProfileView userId={this.props.match.params.userId} userData={this.props.userData} />
    );
  }
}

export default withRouter(ProfileContainer);