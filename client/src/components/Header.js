import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <Navbar variant='light' bg='light' expand='lg'>
      <Navbar.Brand>
        <Link to='/'>Streamers</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Item>
            <Link to='/'>Streams</Link>
          </Nav.Item>
          <Nav.Item>
            <GoogleAuth />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
