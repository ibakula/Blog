import { Component } from 'react';
import ArticleView from '../views/article-view';
import PopularSectionView from '../views/popular-articles-view';
import getArticles from '../../api/article-api';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import store from '../../store';

class ArticleContainer extends Component {
  componentDidMount() {
    getArticles();
  }

  render() {
    return (
      <ArticleView articleId={this.props.match.params.articleId} articles={this.props.articles}>
        <PopularSectionView />
      </ArticleView>
    );
  }
};

function mapStateToProps(store) {
  return {
    articles: store.articleState.articles
  }
}

export default connect(mapStateToProps)(withRouter(ArticleContainer));