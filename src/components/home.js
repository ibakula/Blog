import { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from './containers/carousel-container';
import Article from './containers/article-container';
import SubscriptionDash from './containers/subscription-container';

export default class Home extends Component {
  static propTypes = {
  }

  render() {
    return (
      <>
        <Carousel />
        <Article articleId={null} />
        <SubscriptionDash />
      </>
    );
  }
};