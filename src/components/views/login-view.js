import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import style from './form-rules.module.css';
import DeferredRedirect from './deferred-redirect-view';

export default function LoginView(props) {
  return (
    <Row noGutters={true} className="mt-sm-5 mt-3 pl-sm-5 pl-3">
      <Col md={8}>
        <h3>User log-in:</h3>
        <Form onSubmit={props.onLogin} ref={props.formRef} className="ml-3 pr-3">
          <Form.Group controlId="loginFormEmail">
            <Form.Label>User E-mail address:</Form.Label>
            <Form.Control className={style.rectifyFormCtrlItem} type="email" placeholder="E-mail address" required />
          </Form.Group>
          <Form.Group controlId="loginFormPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control className={style.rectifyFormCtrlItem} type="password" placeholder="E-mail address" required />
          </Form.Group>
          <Button type="submit" variant="primary">Log in</Button>
        </Form>
        {
          props.success == false && <Alert variant="danger" className="p-4 mt-4 mr-3">Failed to login<br />Reason: {props.reason}</Alert>
        }
        {
          props.success == true && <Alert variant="success" className="p-4 mt-4 mr-3">You have loggedd in, redirecting...<DeferredRedirect to="/" delay="5000" type={"login"} /></Alert>
        }
      </Col>
      <Col md={4} className="mt-md-0 mt-4">
        {props.children} 
      </Col>
    </Row>
  );
};