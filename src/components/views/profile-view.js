import { Redirect } from 'react-router-dom';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import style from './profile.module.css';

export default function ProfileView(props) {
  let userId = parseInt(props.userId);

  if (Number.isSafeInteger(userId)) {
    if (props.updated == false) {
      return <Redirect to="/404" />;
    }

    if (!('id' in props.userData) || props.userData.id != props.userId) {
      return null;
    }

    let date = new Date(parseInt(props.userData.signup_date));
    let permissions = displayPermissions(props.userData.permissions);
    
    return (
      <div className={`w-100 pt-sm-5 pt-3 pb-sm-5 pb-3 pl-sm-5 pl-3 pr-sm-5 pr-3 ${style.bgDark}`}>
        <h3 className="display-4">{`${props.userData.first_name} ${props.userData.last_name}`}</h3>
        <p className="lead">{(permissions != "Member" ? `${permissions} and a member` : permissions) + " since " + date.toLocaleDateString()}</p>
        <hr className="my-4" />
      </div>
    );
  }

  return (
    <>
      <Form onSubmit={props.onSubmit} ref={props.formRef} className={`pt-sm-5 pt-3 pb-sm-5 pb-3 pl-sm-5 pl-3 pr-sm-5 pr-3 ${style.bgLight}`}>
        <Form.Row>
          <Form.Group className="col-sm-6" controlId="regFirstName">
            <Form.Label>First name:</Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>
          <Form.Group className="col-sm-6" controlId="regLastName">
            <Form.Label>Last name:</Form.Label>
            <Form.Control type="text" placeholder="Surname" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group className="col-sm-6" controlId="regEmail">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control type="email" placeholder="New e-mail address" />
          </Form.Group>
          <Form.Group className="col-sm-6" controlId="regPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="New password" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group className="col" controlId="regPermissions">
            <Form.Label>Permissions:</Form.Label>
            <Form.Control type="text" placeholder={displayPermissions(localStorage.getItem("permissions"))} disabled />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Col>
            <Button type="submit" variant="primary">Apply changes!</Button>
          </Col>
        </Form.Row>
        { (props.updated == true && <Alert variant="success" className="mt-3 ml-sm-5 ml-3 mr-sm-5 mr-3 pl-sm-5 pl-3 pr-sm-5 pr-3">Saved!</Alert>) || 
        (props.updated == false && <Alert variant="danger" className="mt-3 ml-sm-5 ml-3 mr-sm-5 mr-3 pl-sm-5 pl-3 pr-sm-5 pr-3">The settings have not been saved.<br />Reason: {props.reason}</Alert>) }
      </Form>
    </>
  );
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