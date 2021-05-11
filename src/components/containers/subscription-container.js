import { Component, createRef } from 'react';
import SubscriptionView from '../views/subscription-view';
import * as api from '../../api/api-utility';

class SubscriptionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { results: null };
    this.inputRef = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      email: this.inputRef.current.value
    };

    api.postData('/api/subscription', data)
    .then(response => {
      this.setState({ results: response.data });
    })
    .catch(error => {
      this.setState({ results: { result: 'Failed!', reason: 'Technical issue during your request has occured. E.g. network connection down?' }})
    });
  }

  render() {
    return (
      <SubscriptionView inputRef={this.inputRef} 
        onSubscribe={this.handleSubmit} 
        results={this.state.results} />
    );
  }
};

export default SubscriptionContainer;