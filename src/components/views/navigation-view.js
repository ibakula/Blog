import { Component } from 'react';
import PropTypes from 'prop-types'
import { Navbar, Nav } from 'react-bootstrap';
import style from '../linksinheritdeco.module.css';

export default class NavigationBarView extends Component {
  static propTypes = {
    children: PropTypes.element
  }
  
  render() {
    return (
      <Navbar collapseOnSelect bg="light" expand="md" variant="light">
        <Navbar.Brand><Nav.Link href="/" bsPrefix={"nav-link " + style.removeDecorations}>&lt;&lt; The Blog &gt;&gt;</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="mr-auto">
            <Nav.Link href="/">Homepage</Nav.Link>
          </Nav>
          <Nav className="mr-2">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {this.props.children}
      </Navbar>
    );
  }
};