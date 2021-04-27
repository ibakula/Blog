import { Row, Col, Form, Button } from 'react-bootstrap';
import style from './form-rules.module.css';

export default function RegistrationView(props) {
  return (
    <Row noGutters={true} className="mt-sm-5 mt-3 pl-sm-5 pl-3">
      <Col md={8}>
        <h3>Registration form:</h3>
        <Form className="ml-3">
          <Form.Group>
            <Form.Label>First name:</Form.Label>
            <Form.Control type="text" placeholder="First name" className={style.rectifyFormCtrlItem} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Last name, surname or family name" className={style.rectifyFormCtrlItem} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>E-mail address</Form.Label>
            <Form.Control type="email" placeholder="E-mail address" className={style.rectifyFormCtrlItem} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className={style.rectifyFormCtrlItem} required />
          </Form.Group>
          <Button variant="primary">Sign up!</Button>
        </Form>
      </Col>
      <Col md={4}>
        {props.children}
      </Col>
    </Row>
  );
}