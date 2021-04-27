import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import style from './form-rules.module.css';
import DeferredRedirect from './deferred-redirect-view';

export default function RegistrationView(props) {
  return (
    <Row noGutters={true} className="mt-sm-5 mt-3 pl-sm-5 pl-3">
      <Col md={8}>
        <h3>Registration form:</h3>
        <Form onSubmit={props.onSignup} ref={props.formRef} className="ml-3 pr-3">
          <Form.Group controlId="signupFirstName">
            <Form.Label>First name:</Form.Label>
            <Form.Control type="text" placeholder="First name" className={style.rectifyFormCtrlItem} required />
          </Form.Group>
          <Form.Group controlId="signupLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Last name, surname or family name" className={style.rectifyFormCtrlItem} required />
          </Form.Group>
          <Form.Group controlId="signupEmail">
            <Form.Label>E-mail address</Form.Label>
            <Form.Control type="email" placeholder="E-mail address" className={style.rectifyFormCtrlItem} required />
          </Form.Group>
          <Form.Group controlId="signupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className={style.rectifyFormCtrlItem} required />
          </Form.Group>
          <Button type="submit" variant="primary">Sign up!</Button>
        </Form>
        { props.success == false && <Alert variant="danger" className="p-4 mt-4 mr-3">Something went wrong:<br />Reason: {props.reason}</Alert> }
        { props.success == true && <Alert variant="success" className="p-4 mt-4 mr-3">Successfully signed up, redirecting to log-in..<DeferredRedirect to="/login" delay="5000" /></Alert> }
      </Col>
      <Col md={4}>
        {props.children}
      </Col>
    </Row>
  );
}