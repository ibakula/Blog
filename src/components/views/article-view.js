import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './article.module.css';
import * as ErrorLayouts from '../layouts/404-layout';
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

export default function ArticleView(props) {
  let elements = null;

  if (props.loaded && 
    (props.articles.length < 1 || 
    !('id' in props.articles[0]) ||
    (props.articleId != null &&
    props.articles[0].id != props.articleId))) {
    if (props.articleId != null) {
      return <Redirect to="/404" />;
    }
    else {
      elements = <div><ErrorLayouts.ContentNotFound /></div>
    };
  }

  if (props.articles.length > 0) {
    if (props.articleId != null &&
      'id' in props.articles[0] && 
      props.articles[0].id == articleId) {
      elements = <GeneratedSingleArticlePage article={props.articles[0]} />
    }
    else {
      elements = props.articles.map(article => <GeneratedArticle article={article} />);
    }
  }

  return (
    <Row className="pt-3 pl-sm-4 pr-sm-4 pl-3 pr-3">
      <Col md={8} sm={12}>{elements}</Col>
      <Col md={4}>{props.children}</Col>
    </Row>
  );
};

ArticleView.propTypes = {
  articleId: PropTypes.number,
  articles: PropTypes.array
};

function GeneratedSingleArticlePage(props) {
  const date = new Date(parseInt(props.article.date));

  return (
    <article className="pt-3 pl-3 pr-4 w-100">
      <h5 className="lead">{props.article.author}</h5>
      <h5 className="text-muted">{date.toUTCString()}</h5>
      <img src={props.article.img} className={`${style.articleImg} mt-3 mb-3`} />
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
    <Row className="mb-3">
      <Card>
        <Card.Body>
          <Card.Title>
            <Card.Img src={props.article.img} className={"mr-4 ml-2 " + style.imgRuleset} />
            {shortenedTitle}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{date.toUTCString()}</Card.Subtitle>
          <Card.Text className={style.textRuleset}>{shortenedText}</Card.Text>
          <Link to={`/article/${props.article.id}`} className="card-link">Read more...</Link>
        </Card.Body>
      </Card>
    </Row>);
}