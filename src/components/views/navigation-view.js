import { Component } from 'react';
import PropTypes from 'prop-types'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from '../linksinheritdeco.module.css';

export default class NavigationBarView extends Component {
  static propTypes = {
    children: PropTypes.element
  }
  
  render() {
    return (
      <Navbar collapseOnSelect bg="light" expand="md" variant="light">
        <Navbar.Brand><Link to="/" className={"nav-link " + style.removeDecorations}>&lt;&lt; The Blog &gt;&gt;</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">Homepage</Link>
          </Nav>
          <Nav className="mr-2">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </Nav>
        </Navbar.Collapse>
        {this.props.children}
      </Navbar>
    );
  }
};