import PropTypes from 'prop-types';
import style from './form-rules.module.css';
import { Row, Col, Button, Form } from 'react-bootstrap';

export default function SubscriptionView(props) {
  let elements = (<Form onSubmit={props.onSubscribe}>
    <Form.Group controlId="subscriptionFormEmail">
      <Form.Label className="lead">E-mail address:</Form.Label>
      <Form.Control ref={props.inputRef} type="email" placeholder="E-mail" className={style.rectifyFormCtrlItem} required />
    </Form.Group>
    <Button type="submit" variant="primary">Subscribe!</Button>
  </Form>);

  if (props.results != null) {
    if (props.results.result.search(/success/i) != -1) {
      elements = (<>
        <p class="text-success lead">You have successfully subscribed!</p>
      </>);
    }
    else {
      elements = (<>
        <p class="text-danger lead">Your request has failed.</p>
        <p class="text-danger lead">{props.results.reason}</p>
      </>);
    }
  }

  return (
    <section className="w-100 mt-5 p-4 bg-light" height="300px">
      <Row className="justify-content-center">
        <Col xs={"auto"}>
          <h3 className="display-5">Subscribe to our content:</h3>
          {elements}
        </Col>
      </Row>
    </section>
  );
};

SubscriptionView.propTypes = {
  result: PropTypes.object
};