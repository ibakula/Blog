import { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import style from './carousel.module.css';

export default function CarouselView(props) {
  return (
    <Carousel className={style.carouselRuleset} controls={false} interval={5000} pause={'hover'} slide={true}>
      {props.articles.map(article => {
        return (
          <Carousel.Item className={style.carouselItemRuleset}>
            {article.img.length > 0 && <img className={"d-block " + style.imgRuleset} src={article.img} />}
            <Carousel.Caption>
              {article.title.length > 0 && <h3 className={"h1 " + style.textRuleset}>{article.title.slice(0, 40)}</h3>}
              {article.description.length > 0 && <p className={"h2 " + style.textRuleset}>{article.description.slice(0, 40)}</p>}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};