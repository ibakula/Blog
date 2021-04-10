import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './recommended-section.module.css';
import * as ErrorLayouts from '../layouts/404-layout';
import LoaderStripe from './loader-stripe-view';
import PropTypes from 'prop-types';

export default function RecommendedSectionView(props) {
  let elements = null;
  if (props.articles != null) {
    if (props.articles.length == 0) {
      elements = <ErrorLayouts.ContentNotFound />;
    }
    else if (props.articleId == props.articles[0].id) {
      elements = props.article.map(article => {
          return (
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
          );
        }
      );
    }
  }
  else {
    elements = <Col xs={"auto"}>
        <div style={{border:"1px solid", borderRadius:"8px 8px 0px 0px"}} className="border-light pb-3">
          <LoaderStripe style={{width:"13.5em", borderRadius:"8px 8px 0px 0px"}} heightMultiplier={5.5} overrideClassName={true} className="mt-0" />
          <LoaderStripe heightMultiplier={1.2} widthMultiplier={2} className="ml-3 mr-3" />
          <LoaderStripe heightMultiplier={1.2} widthMultiplier={2} className="ml-3 mr-3" />
          <LoaderStripe heightMultiplier={1.2} widthMultiplier={2} className="ml-3 mr-3" />
          <LoaderStripe heightMultiplier={1.2} widthMultiplier={1.4} className="ml-3 mr-3" />
        </div>
      </Col>;
  }

  return (
    <div className="pt-sm-5 pt-3 pl-sm-5 pr-sm-5 pl-3 pr-3">
      <Row>
        <h3 className="font-italic">You might also like...</h3>
      </Row>
      <Row noGutters={true}>
        {elements}
      </Row>
    </div>
  );
};

RecommendedSectionView.propTypes = {
  articleId: PropTypes.number,
  articles: PropTypes.array
};