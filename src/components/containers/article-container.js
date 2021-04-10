import { Component } from 'react';
import ArticleView from '../views/article-view';
import PopularSectionView from '../views/popular-articles-view';
import { withRouter } from 'react-router';

class ArticleContainer extends Component {
  render() {
    return (
      <ArticleView articleId={this.props.match.params.articleId}>
        <PopularSectionView />
      </ArticleView>
    );
  }
};

export default withRouter(ArticleContainer);