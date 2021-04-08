import { Card, Row, Col } from 'react-bootstrap';
import style from './article.module.css';

export default function ArticleView(props) {
  return (
    <Row className="mt-3 pl-sm-4 pr-sm-4 pl-3 pr-3">
      <Col md={8}>
        <Card>
          <Card.Body>
            <Card.Title><Card.Img src="https://cdn.pixabay.com/photo/2014/05/02/23/46/bridge-336475_960_720.jpg" className={"mr-4 ml-2 " + style.imgRuleset} />Some title..</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">November 1, 2020</Card.Subtitle>
            <Card.Text className={style.textRuleset}>Added some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results...</Card.Text>
            <Card.Link href="/article/5">Read more...</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        {props.children}
      </Col>
    </Row>
  );
};