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
  const cpArticles = [];
  state.carouselState.map(article => {
    cpArticles.push(Object.assign({}, article));
  });

  return {
    articles: cpArticles
  }; 
}

export default connect(mapStateToProps)(CarouselComponent);