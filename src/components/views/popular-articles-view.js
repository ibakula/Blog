import { Card, Row, Col } from 'react-bootstrap';

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
          <Card.Body>
            <Card.Title>Some title..</Card.Title>
            <Card.Text>Added some text to see the results</Card.Text>
            <Card.Link href="/article/5">Read more...</Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}