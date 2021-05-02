import { Redirect } from 'react-router-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../api/session-api';

export default class DeferredRedirectView extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  static propTypes = {
    to: PropTypes.string,
    delay: PropTypes.number,
    type: PropTypes.string
  };
  
  static defaultProps = {
    delay: 5000,
    type: "default"
  };

  componentDidUpdate() {
    if (this.state.redirect && this.props.type == "login") {
      api.updateNavigationBarOnLogin();
    }
  }

  render() {
    setTimeout(() => { this.setState({ redirect: true }); }, this.props.delay);
    return (
      this.state.redirect && <Redirect to={this.props.to} />
    );
  }
};