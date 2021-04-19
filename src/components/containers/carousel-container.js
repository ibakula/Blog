import { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../api/carousel-api';
import CarouselView from '../views/carousel-view';
import { connect } from 'react-redux';

class CarouselComponent extends Component {
  static propTypes = {
    articles: PropTypes.array
  }

  componentDidMount() {
    api.getCarouselData();
  }

  render() { 
    return (
      <CarouselView articles={this.props.articles} />
    );
  }
};

function mapStateToProps(state) {
  return {
    articles: state.carouselState.slice()
  }; 
}

export default connect(mapStateToProps)(CarouselComponent);