import React, { useState } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import { ShoppingCart,User } from "phosphor-react";
import Search from "../Pages/Search";
import "./Navbar.css";
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
} from "reactstrap";

const CostomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar className="Navbar" color="" dark expand="md" fixed="">
        <NavbarBrand className="brandname" tag={ReactLink} to="/">
          <img
            style={{ width: "120px" }}
            src="https://o.remove.bg/downloads/83046197-81d9-4528-aea3-03b09b3f34b0/First_step-removebg-preview.png"
            alt=""
          />
          <h2>First Step</h2>
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
              <NavLink tag={ReactLink} to="/shop">
                Shop
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About Us
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

          <div></div>
          <Search />

          <div>
            <ShoppingCart size={32} />
          </div>

          <NavLink tag={ReactLink} to="/login">
            <User size={32} />
          </NavLink>
        </Collapse>
      </Navbar>
      <div></div>
    </div>
  );
};

export default CostomNavbar;
