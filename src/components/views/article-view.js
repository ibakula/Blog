import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './article.module.css';

export default function ArticleView(props) {
  return (
    <Row className="pt-3 pl-sm-4 pr-sm-4 pl-3 pr-3">
      <Col md={8} sm={12}>
        <Card>
          <Card.Body>
            <Card.Title><Card.Img src="https://cdn.pixabay.com/photo/2014/05/02/23/46/bridge-336475_960_720.jpg" className={"mr-4 ml-2 " + style.imgRuleset} />Some title..</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">November 1, 2020</Card.Subtitle>
            <Card.Text className={style.textRuleset}>Added some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results some text to see the results...</Card.Text>
            <Link to="/article/5" className="card-link">Read more...</Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        {props.children}
      </Col>
    </Row>
  );
};