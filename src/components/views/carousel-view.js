import { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import style from './carousel.module.css';

export default class CarouselView extends Component {
  static propTypes = {
      articles: PropTypes.array
  }

  render() {
    return (
      <Carousel className={style.carouselRuleset} controls={false} interval={5000} pause={'hover'} slide={true}>
        {this.props.articles.map(article => {
          return (
            <Carousel.Item className={style.carouselItemRuleset}>
              <img className={"d-block " + style.imgRuleset} src={article.img} />
              <Carousel.Caption>
                <h3 className={"h1 " + style.textRuleset}>{article.title}</h3>
                <p className={"h2 " + style.textRuleset}>{article.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}