import { Form, Button } from 'react-bootstrap';

export default function ProfileView(props) {
  return(
    <Form className="mt-sm-5 mt-3 pl-sm-5 pl-3 pr-sm-5 pr-3">
      <Form.Group controlId="">
        <Form.Label>First name:</Form.Label>
        <Form.Control placeholder="First name" />
      </Form.Group>
      <Form.Group controlId="">
        <Form.Label>Last name:</Form.Label>
        <Form.Control placeholder="Surname" />
      </Form.Group>
      <Form.Group controlId="">
        <Form.Label>E-mail:</Form.Label>
        <Form.Control placeholder="New e-mail address" />
      </Form.Group>
      <Form.Group controlId="">
        <Form.Label>Permissions</Form.Label>
        <Form.Control type="text" placeholder="Member" disabled/>
      </Form.Group>
      <Button variant="primary">Apply changes!</Button>
    </Form>
  );
};