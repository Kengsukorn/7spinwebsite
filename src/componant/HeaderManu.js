import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './HeaderMenu.css';
import Logo from '.././logo-seven-svg.svg';


function HeaderManu() {
  return (
    <>
    <Navbar className='navbar-bg' collapseOnSelect expand="lg" variant="light">
      <Container style={{height:"100%"}} fluid>
        <Navbar.Brand to="/" as={NavLink}>
          <img src={ Logo } className="d-inline-block align-top logo-nav-bar" alt="7-Spin-Logo"/>
        </Navbar.Brand>
        <Nav className='before-menu'></Nav>    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto menu-list">
            <NavLink className='menu-item' to="/" activeClassName="selected">HOME</NavLink>
            <NavLink className='menu-item' to="/about" activeClassName="selected">ABOUT</NavLink>
            <NavLink className='menu-item' to="/business" activeClassName="selected">BUSINESS</NavLink>
            <NavLink className='menu-item' to="/productservices" activeClassName="selected">PRODUCT & SERVICE</NavLink>
            <NavLink className='menu-item' to="/investorrelations" activeClassName="selected">INVESTOR RELATIONS</NavLink>
            <NavLink className='menu-item' to="/news" activeClassName="selected">NEWS</NavLink>
            <NavLink className='menu-item' to="/career" activeClassName="selected">CAREER</NavLink>
            <NavLink className='menu-item' to="/contact" activeClassName="selected">CONTACT</NavLink>
          </Nav>                
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Outlet />
    </>
  );
}

export default HeaderManu