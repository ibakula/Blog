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
    history: PropTypes.object
  }

  render() {
    return (
      <ProfileView userId={'userId' in this.props.match.params ? this.props.match.params.userId : null} />
    );
  }
}

export default withRouter(ProfileContainer);