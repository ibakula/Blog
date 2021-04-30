import { Component } from 'react';
import PopularSectionView from '../views/popular-articles-view';
import * as api from '../../api/popular-api';
import { connect } from 'react-redux';

class PopularSectionContainer extends Component {
  static defaultProps = {
    loaded: true
  }
  
  componentDidMount() {
    api.getPopularArticles();
  }

  componentDidUpdate(prevState) {
    if (prevState.articleId != this.props.articleId) {
      api.getPopularArticles();
    }
  }

  render() {
    return (
      <PopularSectionView loaded={this.props.loaded} articles={this.props.articles} />
    );
  }
};

function mapStateToProps(store) {
  return {
    articles: store.popularState.articles
  };
}

export default connect(mapStateToProps)(PopularSectionContainer);