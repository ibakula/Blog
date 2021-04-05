import { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from './containers/carousel-container';

export default class Home extends Component {
  static propTypes = {
  }

  render() {
    return (
      <>
        <Carousel />
      </>
    );
  }
};