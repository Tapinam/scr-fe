import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import HelloWorld               from '../helloWorld/helloWorld.component';

require('./header.styles.sass');

const Header = (props) => (
  <Navbar inverse className='header'>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='/#'>Sample Header Component</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem href='/'>Home</NavItem>
        <NavItem href='/counter'>Counter</NavItem>
        <NavItem><HelloWorld /></NavItem>
      </Nav>
      <div className="pull-right">{props.children}</div>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
