import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import ProfileView from '../views/profile-view';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as api from '../../api/session-api';
import * as profileApi from '../../api/profile-api';

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
    this.state = { updated: null };
  }

  handleSubmit(e) {
    e.preventDefault();
    const props = [ "firstName", "lastName", "email", "password" ];
    const localProps = [ "first_name", "last_name", "email", "password" ];
    const inputs = this.formRef.current.querySelectorAll('input[id^="reg"]');
    const data = { };
    props.forEach((val, index) => {
      if (inputs[index].value.length == 0) {
        return;
      }
      if (inputs[index].value != localStorage.getItem(localProps[index])) {
        data[val] = inputs[index].value;
      }
    });

    api.alterUserData(data)
    .then(data => {
      if (data.result.search(/success/i) != -1) {
        this.setState({ updated: true });
      }
      else {
        this.setState({ updated: false, reason: ('reason' in data ? data.reason : "Something went wrong with your request. Try again later.") });
      }
    })
    .catch(() => {
      this.setState({ updated: false, reason: "Something went wrong with your request. Try again later." })
    });
  }
  
  componentDidMount() {
    if (!('userId' in this.props.match.params)) {
      return;
    }

    profileApi.getProfileById(this.props.match.params.userId)
    .then(data => {
      if (Array.isArray(data) || !('id' in data)) {
        this.setState({ updated: false })
      }
    })
    .catch(() => {
      this.setState({ updated: false })
    });
  }

  componentDidUpdate(prevProps) {
    if (!('userId' in this.props.match.params) || 
      this.props.match.params.userId == prevProps.match.params.userId) {
      return;
    }

    profileApi.getProfileById(this.props.match.params.userId)
    .then(data => {
      if (Array.isArray(data) || !('id' in data)) {
        this.setState({ updated: false })
      }
    })
    .catch(() => {
      this.setState({ updated: false })
    });
  }
  
  render() {
    return (
      <ProfileView formRef={this.formRef} 
        onSubmit={this.handleSubmit}
        userId={this.props.match.params.userId} 
        userData={this.props.userData}
        updated={this.state.updated}
        reason={this.state.reason}
        profileId={this.props.match.params.userId} />
    );
  }
}

function mapStateToProps(store) {
  return {
    userData: store.profileState.userData
  };
}

export default connect(mapStateToProps)(withRouter(ProfileContainer));