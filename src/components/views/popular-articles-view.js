import { Card, Row, Col } from 'react-bootstrap';
import style from './popular-articles.module.css';
import { Link } from 'react-router-dom';
import * as ErrorLayouts from '../layouts/404-layout';
import LoaderStripe from './loader-stripe-view';

export default function PopularArticles(props) {
  let elements = null;
  if (props.articles != null) {
    if (props.articles.length == 0) {
      elements = <ErrorLayouts.ContentNotFound />;
    }
    else {
      elements = props.articles.map((article) => {
        return (
          <Card border="light">
            <Card.Img className={`card-body pb-0 ${style.limitImgSize}`} variant="top" src={article.img} />
            <Card.Body>
              <Card.Title className={style.titleBoundaries}>
                {article.title.length > 20 ? article.title.slice(0, 20) + "..." : article.title}
              </Card.Title>
              <Card.Text className={style.textBoundaries}>
                {article.text.length > 80 ? article.text.slice(0, 80) + "..." : article.text}
                </Card.Text>
              <Link to={`/article/${article.id}`} class="card-link">Read more...</Link>
            </Card.Body>
          </Card>
        );
      });
    }
  }
  else {
    elements = <div style={{width:"auto", borderRadius: "8px 8px 0px 0px", border: "1px solid"}} class="border-light pb-3 pl-3 pr-3">
        <LoaderStripe className={`${style.dummyImg}`} heightMultiplier={5} />
        <LoaderStripe className={`${style.dummyArticleTitle}`} heightMultiplier={1.2} />
        <LoaderStripe className={`${style.dummyArticleText}`} heightMultiplier={1.2} />
        <LoaderStripe className={`${style.dummyArticleText}`} heightMultiplier={1.2} />
        <LoaderStripe className={`${style.dummyArticleText}`} heightMultiplier={1.2} />
      </div>;
  }

  return (
    <>
      <Row>
        <Card.Body className="pt-3 pb-0">
          <Card.Title className="lead font-italic">Most popular</Card.Title>
        </Card.Body>
      </Row>
      <Row>
        {elements}
      </Row>
    </>
  );
}