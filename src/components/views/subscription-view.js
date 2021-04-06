import PropTypes from 'prop-types';
import style from './subscription.module.css';
import { Row, Col, Button, Form } from 'react-bootstrap';

export default function SubscriptionView(props) {
  return (
    <section className="w-100 mt-5 p-4 bg-light" height="300px">
      <Row className="justify-content-center">
        <Col xs={"auto"}>
          <h3 className="display-5">Subscribe to our content:</h3>
          <Form>
            <Form.Group controlId="subscriptionForm">
              <Form.Label class="lead">E-mail address:</Form.Label>
              <Form.Control type="email" placeholder="E-mail" className={style.rectifyFormCtrlItem} />
            </Form.Group>
            <Button variant="primary">Subscribe!</Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

SubscriptionView.propTypes = {
  result: PropTypes.object
};