import React, { useState } from "react";
import { NavLink, NavLink as ReactLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

export default function Navbarr() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="">
        <NavbarBrand tag={ReactLink} to="/">
          First Step
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/shop">
                Shop
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/testimonial">
                Testimonial
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/contactus">
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
