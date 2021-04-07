import { Component } from 'react';
import ArticleView from '../views/article-view';
import PopularSectionView from '../views/popular-articles-view';

export default class ArticleContainer extends Component {
  render() {
    return (
      <ArticleView>
        <PopularSectionView />
      </ArticleView>
    );
  }
};
