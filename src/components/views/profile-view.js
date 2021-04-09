import { Form, Button, Col } from 'react-bootstrap';
import style from './profile.module.css';

export default function ProfileView(props) {
  const userProvided = ('userId' in props && props.userId != null ? 
  (<div className={`w-100 pt-sm-5 pt-3 pb-sm-5 pb-3 pl-sm-5 pl-3 pr-sm-5 pr-3 ${style.bgDark}`}>
    <h3 className="display-4">Test Test</h3>
    <p className="lead">Test</p>
    <hr className="my-4" />
  </div>) :
  (<Form className={`pt-sm-5 pt-3 pb-sm-5 pb-3 pl-sm-5 pl-3 pr-sm-5 pr-3 ${style.bgLight}`}>
    <Form.Row>
      <Form.Group className="col-sm-6" controlId="regFirstName">
        <Form.Label>First name:</Form.Label>
        <Form.Control type="text" placeholder="First name" required />
      </Form.Group>
      <Form.Group className="col-sm-6" controlId="regLastName">
        <Form.Label>Last name:</Form.Label>
        <Form.Control type="text" placeholder="Surname" required />
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Form.Group className="col-sm-6" controlId="regEmail">
        <Form.Label>E-mail:</Form.Label>
        <Form.Control type="email" placeholder="New e-mail address" required />
      </Form.Group>
      <Form.Group className="col-sm-6" controlId="regPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="New password" required />
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Form.Group as={Col} controlId="regPermissions">
        <Form.Label>Permissions</Form.Label>
        <Form.Control type="text" placeholder="Member" disabled/>
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Col>
        <Button variant="primary">Apply changes!</Button>
      </Col>
    </Form.Row>
  </Form>));

  return userProvided;
};