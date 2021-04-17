import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './recommended-section.module.css';
import * as ErrorLayouts from '../layouts/404-layout';
import PropTypes from 'prop-types';

export default function RecommendedSectionView(props) {
  let elements = null;
  if (props.articles != null) {
    if (props.articles.length == 0) {
      elements = <ErrorLayouts.ContentNotFound />;
    }
    else if (props.articleId == props.articles[0].id) {
      elements = props.articles.map(article => {
          let title = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;
          let text = article.text.length > 130 ? article.text.slice(0, 130) + "..." : article.text;
          return (
            <Col xs={"auto"} className="mt-3 mr-3">
              <Card className={`${style.articleRuleset}`}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/05/02/23/46/bridge-336475_960_720.jpg" alt="Image" />
                <Card.Body>
                  <Card.Title className={`${style.titleRuleset}`}>{title}</Card.Title>
                  <Card.Text className={`${style.textRuleset}`}>{text}</Card.Text>
                  <Link to={`/${article.id}`} class="card-link">Read more...</Link>
                </Card.Body>
              </Card>
            </Col>
          );
        }
      );
    }
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