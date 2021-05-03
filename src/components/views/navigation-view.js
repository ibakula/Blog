import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import style from '../linksinheritdeco.module.css';

export default function NavigationBarView(props) {
  if (props.searchRedirection) {
    const params = new URLSearchParams({"term": props.searchFieldRef.current.value});
    return (
      <Redirect to={{pathname:"/search", search:(params.toString())}} />
    );
  }

  return (
    <Navbar collapseOnSelect bg="light" expand="md" variant="light">
      <Navbar.Brand><Link to="/" className={"nav-link " + style.removeDecorations}>&lt;&lt; The Blog &gt;&gt;</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">Homepage</Link>
        </Nav>
        <Nav className="mr-2">
        {
          localStorage.getItem("email") != null ? 
          <Link onClick={props.onLogout} to="#root" className="nav-link">Logout</Link> :
          (<><Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link></>)
        }
        </Nav>
      </Navbar.Collapse>
      <Form onSubmit={props.onSearch} inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" ref={props.searchFieldRef} onKeyPress={e => { if (e.key == 'Enter') { props.onSearch(e); } }} />
        <Button type="submit" variant="outline-success" className="mt-2 mt-sm-0">Search</Button>
      </Form>
    </Navbar>
  );
};