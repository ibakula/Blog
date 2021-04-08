import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './recommended-section.module.css';

export default function RecommendedSectionView(props) {
  return (
    <div className="pt-sm-5 pt-3 pl-sm-5 pr-sm-5 pl-3 pr-3">
      <Row>
        <h3 className="font-italic">You might also like...</h3>
      </Row>
      <Row noGutters={true}>
        <Col xs={"auto"} className="mt-3 mr-3">
          <Card className={`${style.articleRuleset}`}>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/05/02/23/46/bridge-336475_960_720.jpg" alt="Image" />
            <Card.Body>
              <Card.Title className={`${style.titleRuleset}`}>Some very veery veeery longsdasa title with more and more text and more and more</Card.Title>
              <Card.Text className={`${style.textRuleset}`}>Some text that is extremly loong and so I could test out the size of the text I would find suitable and compare everything together. Into the fifth line we go.</Card.Text>
              <Link to="/5" class="card-link">Read more...</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};