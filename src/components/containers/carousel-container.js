import { Component } from 'react';
import CarouselView from '../views/carousel-view';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CarouselComponent extends Component {
  static propTypes = {
    articles: PropTypes.array
  }

  render() { 
    return (
      <CarouselView articles={this.props.articles} />
    );
  }
};

function mapStateToProps(state) {
  return {
    articles: [].concat(state.carouselState)
  }; 
}

export default connect(mapStateToProps)(CarouselComponent);