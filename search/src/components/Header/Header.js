import React, { useState } from 'react';
import './header.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Project</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="http://localhost:4000">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://localhost:4001">Showroom</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://localhost:4002">Orders</NavLink>
            </NavItem>
          </Nav>
          <NavItem>
              <NavLink href="http://localhost:4000/logout">Log Out</NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

