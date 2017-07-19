import React, { Component } from 'react'

//React-Bootstrap - NAV
import { Nav, Navbar, NavItem } from 'react-bootstrap'


class Menu extends Component{
  render(){
    return(
        <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">SaluD/Os</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/about">About</NavItem>
            <NavItem eventKey={2} href="/contact">Contact</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={3} href="/register">Register</NavItem>
            {/* <NavItem eventKey={4} href="/contact">Contact</NavItem> */}
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Menu
