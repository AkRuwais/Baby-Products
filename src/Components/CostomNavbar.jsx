import React, { useState } from "react";
import { Link, NavLink as ReactLink } from "react-router-dom";
import { ShoppingCart, MagnifyingGlass, User } from "phosphor-react";
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
  NavbarText,
} from "reactstrap";

const CostomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar color="warning" expand="md" fixed="">
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
                About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/shop">
                Shop
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={ReactLink} to="/services">
                  Services
                </DropdownItem>
                <DropdownItem>Contact us</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Youtube</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <NavLink>
            <NavLink tag={ReactLink} to="/login">
              <User size={32} />
            </NavLink>
          </NavLink>

          <div>
            <MagnifyingGlass size={32} />
          </div>
          <div>
            <ShoppingCart size={32} />
          </div>

          <NavbarText>Youtube</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CostomNavbar;
