import { Row, Col, Form, Button } from 'react-bootstrap';
import style from './formRules.module.css';

export default function LoginView(props) {
  return (      
    <Row noGutters={true} className="mt-5 pl-5 pr-5">
      <Col md={8}>
        <Form>
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