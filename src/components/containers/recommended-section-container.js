import { Component } from 'react';
import * as api from '../../api/recommended-api';
import RecommendedSectionView from '../views/recommended-section-view';
import { connect } from 'react-redux';

class RecommendedSectionContainer extends Component {
  componentDidUpdate() {
    if (this.props.categoryId == null) {
      return;
    }

    api.getRecommendedArticles(this.props.categoryId);
  }

  render() {
    return (
      <RecommendedSectionView articles={this.props.articles} />
    );
  }
};

function mapStateToProps(store) {
  const categoryId = store.articleState.articles.length > 0 ? 
  store.articleState.articles[0].category_id : null;

  return {
    categoryId: categoryId,
    articles: store.recommendedState.articles
  };
}

export default connect(mapStateToProps)(RecommendedSectionContainer);