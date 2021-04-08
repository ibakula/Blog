import { Component } from 'react';
import ArticleContainer from '../containers/article-container';
import WelcomeStripeContainer from '../containers/welcome-stripe-container';
import RecommendedSectionContainer from '../containers/recommended-section-container';
import CommentSectionContainer from '../containers/comment-section-container';

export default class ArticleLayout extends Component {
  render() {
    return (
      <>
        {localStorage.getItem("email") != null && <WelcomeStripeContainer />}
        <ArticleContainer />
        <RecommendedSectionContainer />
        <CommentSectionContainer />
      </>
    );
  }
};