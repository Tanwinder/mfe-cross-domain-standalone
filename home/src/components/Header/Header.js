import React, { useState } from 'react';
import {Link } from 'react-router-dom'
import { useSelector} from 'react-redux'
import './header.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { baseUrl } from '../../utils/api.config';
import UserInfo from './userInfo'

const Header = () => {
  const {userInfo} = useSelector(state => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MFE Project</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <a href={baseUrl('ORDERS')}>Orders</a>
            </NavItem>
          </Nav>
          <Nav>
          <NavItem className="logout">
            {/* <div>{APP_VERSION && APP_VERSION}</div> */}
            <UserInfo userInfo={userInfo}/>
            <Link to="/login">{ userInfo ? 'Log Out' : 'Log In'}</Link>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

