import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './article.module.css';
import LoaderStripe from './loader-stripe-view';

export default function ArticleView(props) {
  let elements = null;
  if (props.articleId != null && props.articles != null && props.articles.length > 0) {
    elements = <GeneratedSingleArticlePage article={props.articles[0]} />;
  }
  else if (props.articles != null && props.articles.length > 0) {
    props.articles.map(article => {
      elements += <GeneratedArticle article={article} />;
    });
  }
  else if (props.articleId != null) {
    elements = <DummySingleArticlePage />
  }
  else {
    elements = <DummyArticle />
  }

  return (
    <Row className="pt-3 pl-sm-4 pr-sm-4 pl-3 pr-3">
      <Col md={8} sm={12}>{elements}</Col>
      <Col md={4}>{props.children}</Col>
    </Row>
  );
};

function DummySingleArticlePage() {
  return (
    <Row>
      <article className="pl-3 pr-4 w-100">
        <LoaderStripe style={{width:"55%"}} heightMultiplier={1.2} className="mt-3" />
        <LoaderStripe style={{width:"50%"}} heightMultiplier={1.2} className="mt-3" />
        <LoaderStripe widthMultiplier={2.5} heightMultiplier={6} className="mt-2" />
        <LoaderStripe style={{width:"70%"}} heightMultiplier={1.2} className="mt-2" />
        <LoaderStripe style={{width:"70%"}} heightMultiplier={1.2} className="mt-2" />
        <LoaderStripe style={{width:"70%"}} heightMultiplier={1.2} className="mt-2" />
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
            <Col sm={3} xs={12}>
              <LoaderStripe style={{maxWidth:"90%", minWidth:"50%", width:"auto", height:"140px"}} className="mr-3 ml-2" />
            </Col>
            <Col sm={9}>
              <Card.Title>
                <LoaderStripe style={{width:"90%"}} heightMultiplier={1.2} />  
              </Card.Title>
              <Card.Subtitle className="mb-2">
                <LoaderStripe style={{width:"80%"}} heightMultiplier={1.2} />
              </Card.Subtitle>
              <Card.Text className={style.textRuleset}>
                <LoaderStripe style={{width:"80%"}} heightMultiplier={1.2} />
                <LoaderStripe style={{width:"80%"}} heightMultiplier={1.2} />
                <LoaderStripe style={{width:"80%"}} heightMultiplier={1.2} />
                <LoaderStripe style={{width:"80%"}} heightMultiplier={1.2} />
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>);
}

function GeneratedSingleArticlePage(article) {
  return (
    <Row>
      <Card>
        <Card.Body>
          <Card.Title><Card.Img src={article.img} className={`mr-4 ml-2 ${style.imgRuleset}`} />{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{date.toUTCString()}</Card.Subtitle>
          <Card.Text className={style.textRuleset}>{article.text}</Card.Text>
        </Card.Body>
      </Card>
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