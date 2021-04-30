import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './article.module.css';
import * as ErrorLayouts from '../layouts/404-layout';
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

export default function ArticleView(props) {
  let elements = null;
  let articleId = parseInt(props.articleId);

  if (props.loaded) {
    if (props.articles.length < 1 || !('id' in props.articles[0])) {
      elements = <ErrorLayouts.ContentNotFound />;
    }
    else if (!Number.isSafeInteger(articleId)) {
      elements = props.articles.map(article => <GeneratedArticle article={article} />);
    }
    else if (articleId == props.articles[0].id) {
      elements = <GeneratedSingleArticlePage article={props.articles[0]} />;
    }
  }

  return (
    <Row className="pt-3 pl-sm-4 pr-sm-4 pl-2 pr-2">
      <Col md={8} sm={12}>{elements}</Col>
      <Col md={4}>{props.children}</Col>
    </Row>
  );
};

ArticleView.propTypes = {
  articleId: PropTypes.string,
  articles: PropTypes.array
};

function GeneratedSingleArticlePage(props) {
  const date = new Date(parseInt(props.article.date));
  
  return (
    <article className="pt-3 pl-3 pr-4 w-100">
      {props.article.author.search("undefined") == -1 && <h5 className="lead">{props.article.author}</h5>}
      <h5 className="text-muted">{date.toUTCString()}</h5>
      {props.article.img.length > 0 && <img src={props.article.img} className={`${style.articleImg} mt-3 mb-3`} />}
      <h3 className="display-5">{props.article.title}</h3>
      <p className="lead">{props.article.text}</p>
      <hr /> 
    </article>
  );
}

function GeneratedArticle(props) {
  const date = new Date(parseInt(props.article.date));

  let shortenedTitle = props.article.title.length > 30 ? 
    props.article.title.slice(0, 30) + "..." : props.article.title;

  let shortenedText = props.article.text.length > 150 ? 
    props.article.text.slice(0, 150) + "..." : props.article.text;

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>
          <Card.Img src={props.article.img} className={"mr-4 ml-2 " + style.imgRuleset} />
          {shortenedTitle}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date.toUTCString()}</Card.Subtitle>
        <Card.Text className={style.textRuleset}>{shortenedText}</Card.Text>
        <Link to={`/article/${props.article.id}`} className="card-link">Read more...</Link>
      </Card.Body>
    </Card>);
}