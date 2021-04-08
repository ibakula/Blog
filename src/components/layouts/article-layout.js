import { Component } from 'react';
import ArticleContainer from '../containers/article-container';
import WelcomeStripeContainer from '../containers/welcome-stripe-container';

export default class ArticleLayout extends Component {
  render() {
    return (
      <>
        <WelcomeStripeContainer />
        <ArticleContainer />
      </>
    );
  }
};