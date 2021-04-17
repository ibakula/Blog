import { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleContainer from '../containers/article-container';
import WelcomeStripeContainer from '../containers/welcome-stripe-container';
import RecommendedSectionContainer from '../containers/recommended-section-container';
import CommentSectionContainer from '../containers/comment-section-container';
import { withRouter } from 'react-router';

class ArticleLayout extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    return (
      <>
        {localStorage.getItem("email") != null && <WelcomeStripeContainer />}
        <ArticleContainer articleId={this.props.match.props.articleId} />
        <RecommendedSectionContainer articleId={this.props.match.props.articleId} />
        <CommentSectionContainer articleId={this.props.match.props.articleId} />
      </>
    );
  }
};

export default withRouter(ArticleLayout);