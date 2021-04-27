import { Card, Row, Col } from 'react-bootstrap';
import style from './popular-articles.module.css';
import { Link } from 'react-router-dom';
import * as ErrorLayouts from '../layouts/404-layout';

export default function PopularArticlesView(props) {
  return (
    <>
      <Card.Body className="pt-3 pb-0">
        <Card.Title className="lead font-italic">Most popular</Card.Title>
      </Card.Body>
      {props.loaded && props.articles.length < 1 ? <ErrorLayouts.ContentNotFound /> : props.articles.map(article => {
        return (
          <Card border="light mb-3">
            <Card.Img className={`card-body pb-0 ${style.limitImgSize}`} variant="top" src={article.img} />
            <Card.Body>
              <Card.Title className={style.titleBoundaries}>
                {article.title.length > 20 ? article.title.slice(0, 20) + "..." : article.title}
              </Card.Title>
              <Card.Text className={style.textBoundaries}>
                {article.text.length > 80 ? article.text.slice(0, 80) + "..." : article.text}
              </Card.Text>
              <Link to={`/article/${article.id}`} className="card-link">Read more...</Link>
            </Card.Body>
          </Card>
          );
        })}
    </>
  );
}