import { Component } from 'react';
import ArticleView from '../views/article-view';
import PopularSectionView from '../views/popular-articles-view';
import getArticles from '../../api/article-api';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class ArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { hasLoaded: false };
  }

  componentDidMount() {
    getArticles()
    .finally(() => {
      this.setState({ hasLoaded: true });
    });
  }

  render() {
    return (
      <ArticleView articleId={this.props.match.params.articleId} articles={this.props.articles} loaded={this.state.hasLoaded}>
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