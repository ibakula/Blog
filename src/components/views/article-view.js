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
        <LoaderStripe heightMultiplier={1.2} className={`mt-3 ${style.dummySingleArticleAuthor}`} />
        <LoaderStripe heightMultiplier={1.2} className={`mt-3 ${style.dummySingleArticleDate}`} />
        <LoaderStripe widthMultiplier={2.5} heightMultiplier={6} className="mt-2" />
        <LoaderStripe heightMultiplier={1.2} className={`mt-2 ${style.dummySingleArticleText}`} />
        <LoaderStripe heightMultiplier={1.2} className={`mt-2 ${style.dummySingleArticleText}`} />
        <LoaderStripe heightMultiplier={1.2} className={`mt-2 ${style.dummySingleArticleText}`} />
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
              <LoaderStripe className={`mr-3 ml-2 ${style.dummyImg}`} />
            </Col>
            <Col sm={9}>
              <Card.Title>
                <LoaderStripe className={style.dummyArticleTitle} heightMultiplier={1.2} />  
              </Card.Title>
              <Card.Subtitle className="mb-2">
                <LoaderStripe className={style.dummyArticleText} heightMultiplier={1.2} />
              </Card.Subtitle>
              <Card.Text className={style.textRuleset}>
                <LoaderStripe className={style.dummyArticleText} heightMultiplier={1.2} />
                <LoaderStripe className={style.dummyArticleText} heightMultiplier={1.2} />
                <LoaderStripe className={style.dummyArticleText} heightMultiplier={1.2} />
                <LoaderStripe className={style.dummyArticleText} heightMultiplier={1.2} />
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
      <article className="pl-3 pr-4 w-100">
        <h4 class="display-1 text-bold">Test Test</h4>
        <h3 class="display-2 lead">Fri, 01 April 2021, 8.30 GTM + 01.00</h3>
        <img src="https://cdn.pixabay.com/photo/2014/05/02/23/46/bridge-336475_960_720.jpg" width="5em" height="auto" /> 
      </article>
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