import { Form, Button, Col } from 'react-bootstrap';
import LoaderStripe from './loader-stripe-view';
import style from './profile.module.css';

export default function ProfileView(props) {
  let date = null;
  if (props.userData != null && 'signup_date' in props.userData) {
    date = new Date(props.userData.signup_date);
  }

  const userProvided = ('userId' in props && props.userId != null ? 
  (<div className={`w-100 pt-sm-5 pt-3 pb-sm-5 pb-3 pl-sm-5 pl-3 pr-sm-5 pr-3 ${style.bgDark}`}>
    {props.userData == null || props.userData.id != props.userId ? 
    <><LoaderStripe style={{width:"45%"}} heightMultiplier={1.6} bgColor="#d3d3d3" />
    <LoaderStripe style={{width:"54%"}} heightMultiplier={1.2} bgColor="#d3d3d3" /></> : 
    <><h3 className="display-4">`${props.userData.first_name} ${props.userData.last_name}`</h3>
    <p className="lead">displayPermissions(props.userData.permissions) + " since " + date.toLocaleDateString()</p></>}
    <hr className="my-4" />
  </div>) :
  (<Form className={`pt-sm-5 pt-3 pb-sm-5 pb-3 pl-sm-5 pl-3 pr-sm-5 pr-3 ${style.bgLight}`}>
    <Form.Row>
      <Form.Group className="col-sm-6" controlId="regFirstName">
        <Form.Label>First name:</Form.Label>
        <Form.Control type="text" placeholder="First name" required>{localStorage.getItem("first_name")}</Form.Control>
      </Form.Group>
      <Form.Group className="col-sm-6" controlId="regLastName">
        <Form.Label>Last name:</Form.Label>
        <Form.Control type="text" placeholder="Surname" required>{localStorage.getItem("last_name")}</Form.Control>
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Form.Group className="col-sm-6" controlId="regEmail">
        <Form.Label>E-mail:</Form.Label>
        <Form.Control type="email" placeholder="New e-mail address" required>{localStorage.getItem("email")}</Form.Control>
      </Form.Group>
      <Form.Group className="col-sm-6" controlId="regPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="New password" required />
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Form.Group as={Col} controlId="regPermissions">
        <Form.Label>Permissions</Form.Label>
        <Form.Control type="text" disabled>{displayPermissions(localStorage.getItem("permissions"))}</Form.Control>
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

function displayPermissions(permissionId) {
  switch (permissionId) {
    case 1:
      return "Author";
    case 2:
      return "Moderator";
    case 3:
      return "Administrator";
  }

  return "Member";
}