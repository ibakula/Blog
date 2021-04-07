import { Card, Row, Col } from 'react-bootstrap';
import style from './popular-articles.module.css';

export default function PopularArticles(props) {
  return (
    <>
      <Row>
        <Card.Body className="pt-3 pb-0">
          <Card.Title className="lead font-italic">Most popular</Card.Title>
        </Card.Body>
      </Row>
      <Row>
        <Card border="light">
          <Card.Img className={"card-body pb-0 " + style.limitImgSize} variant="top" src="https://cdn.pixabay.com/photo/2014/05/02/23/46/bridge-336475_960_720.jpg" />
          <Card.Body>
            <Card.Title className={style.titleBoundaries}>Some long title, veeeeeeeeery loong title</Card.Title>
            <Card.Text className={style.textBoundaries}>Added some text to see the results, but decided to make the text extremly long so I could see where do I want it to stop and I find text size extremly important. Etcetcetc</Card.Text>
            <Card.Link href="/article/5">Read more...</Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}