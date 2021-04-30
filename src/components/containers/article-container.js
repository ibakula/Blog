import { Component } from 'react';
import ArticleView from '../views/article-view';
import PopularSectionContainer from './popular-articles-container';
import * as api from '../../api/article-api';
import { connect } from 'react-redux';


class ArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { hasLoaded: false };
  }

  componentDidMount() {
    api.getArticles(this.props.articleId)
    .finally(() => {
      this.setState({ hasLoaded: true });
    });
  }

  componentDidUpdate(prevState) {
    if (prevState.articleId == this.props.articleId) {
      return;
    }
    this.setState({ hasLoaded: false });
    api.getArticles(this.props.articleId)
    .finally(() => {
      this.setState({ hasLoaded: true });
    });
  }

  componentWillUnmount() {
    this.setState({ hasLoaded: false });
    api.resetData();
  }

  render() {
    return (
      <ArticleView articleId={this.props.articleId} articles={this.props.articles} loaded={this.state.hasLoaded}>
        <PopularSectionContainer articleId={this.props.articleId} loaded={this.state.hasLoaded} />
      </ArticleView>
    );
  }
};

function mapStateToProps(store) {
  return {
    articles: store.articleState.articles
  };
}

export default connect(mapStateToProps)(ArticleContainer);