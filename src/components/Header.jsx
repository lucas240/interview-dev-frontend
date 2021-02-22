import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "./header.css";

function Header() {
  return (
    <div>
      <Navbar className="header" dark expand="md">
        <NavbarBrand>Les Argonautes </NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                target="_blank"
                href="https://github.com/lucas240/interview-dev-frontend"
              >
                GitHub Frontend
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                target="_blank"
                href="https://github.com/lucas240/interview-dev-backend"
              >
                GitHub Backend
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
