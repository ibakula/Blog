import { Row, Col, Form, Button } from 'react-bootstrap';
import style from './formRules.module.css';

export default function LoginView(props) {
  return (      
    <Row noGutters={true} className="mt-sm-5 mt-3 pl-sm-5 pl-3">
      <Col md={8}>
        <h3>User log-in:</h3>
        <Form className="ml-3">
          <Form.Group controlId="loginFormEmail">
            <Form.Label>User E-mail address:</Form.Label>
            <Form.Control className={style.rectifyFormCtrlItem} type="email" placeholder="E-mail address" />
          </Form.Group>
          <Form.Group controlId="loginFormPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control className={style.rectifyFormCtrlItem} type="password" placeholder="E-mail address" />
          </Form.Group>
          <Button variant="primary">Log in</Button>
        </Form>
      </Col>
      <Col md={4} className="mt-md-0 mt-4">
        {props.children} 
      </Col>
    </Row>
  );
};