import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './article.module.css';
import LoaderStripe from './loader-stripe-view';
import * as ErrorLayouts from '../layouts/404-layout';
import PropTypes from 'prop-types';

export default function ArticleView(props) {
  let elements = null;
  if (props.articleId != null) {
    if (props.articles != null && 
      props.articles.length == 1 && 
      props.articleId == props.articles[0].id) {
      elements = <GeneratedSingleArticlePage article={props.articles[0]} />;
    }
    else {
      elements = <DummySingleArticlePage />;
    }
  }
  else if (props.articles != null) {
    if (props.articles.length == 0) { // No posts found
      elements = <div><ErrorLayouts.ContentNotFound /></div>;
    }
    else {
      props.articles.map(article => {
        elements += <GeneratedArticle article={article} />;
      });
    }
  }
  else {
    elements = <DummyArticle />;
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

function DummySingleArticlePage() {
  return (
    <Row>
      <article className="pl-3 pr-4 w-100">
        <LoaderStripe heightMultiplier={1.2} className={`mt-3 ${style.dummySingleArticleAuthor}`} />
        <LoaderStripe heightMultiplier={1.2} className={`mt-3 ${style.dummySingleArticleDate}`} />
        <LoaderStripe widthMultiplier={2.5} heightMultiplier={6} className="mt-2" />
        <LoaderStripe heightMultiplier={1.2} className={`mt-2 ${style.dummySingleArticleText}`} />
        <LoaderStripe heightMultiplier={1.2} className={`mt-2 ${style.dummySingleArticleText}`} />
        <LoaderStripe heightMultiplier={1.2} className={`mt-2 ${style.dummySingleArticleText}`} />
        <hr className="mt-4" />
      </article>
    </Row>
  );
}

function DummyArticle() {
  return (
    <Row>
      <Card style={{width:"93%"}}>
        <Card.Body>
          <Row noGutters={true}>
            <Col sm={"auto"} xs={12}>
              <LoaderStripe className={`mr-3 ml-2 ${style.dummyImg}`} />
            </Col>
            <Col sm={8}>
              <Card.Title>
                <LoaderStripe className={style.dummyArticleTitle} heightMultiplier={1.2} />  
              </Card.Title>
              <Card.Subtitle className="mb-2">
                <LoaderStripe className={style.dummyArticleText} heightMultiplier={1.2} />
              </Card.Subtitle>
              <Card.Text className={style.textRuleset}>
                <LoaderStripe className={style.dummyArticleText} heightMultiplier={1.2} />
                <LoaderStripe className={style.dummyArticleText} heightMultiplier={1.2} />
                <LoaderStripe className={style.dummyArticleText} heightMultiplier={1.2} />
                <LoaderStripe className={style.dummyArticleText} heightMultiplier={1.2} />
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>);
}

function GeneratedSingleArticlePage(article) {
  const date = new Date(article.date);
  return (
    <Row>
      <article className="pt-3 pl-3 pr-4 w-100">
        <h5 class="lead">{article.author}</h5>
        <h5 class="text-muted">{date.toUTCString()}</h5>
        <img src={article.img} className={`mt-3 mb-3 ${style.articleImg}`} />
        <p class="lead">{article.text}</p>
        <hr /> 
      </article>
    </Row>
  );
}

function GeneratedArticle(article) {
  const date = new Date(article.date)
  return (
    <Row key={article.id}>
      <Card>
        <Card.Body>
          <Card.Title><Card.Img src={article.img} className={"mr-4 ml-2 " + style.imgRuleset} />{article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{date.toUTCString()}</Card.Subtitle>
          <Card.Text className={style.textRuleset}>{article.text.length > 150 ? article.text.slice(0, 150) + "..." : article.text}</Card.Text>
          <Link to={`/article/${article.id}`} className="card-link">Read more...</Link>
        </Card.Body>
      </Card>
    </Row>);
}