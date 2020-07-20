import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import authActions from "../actions/auth";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  const headerLinkStyle = { color: "white", padding: "5px", margin: "5px" };
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">MohandisSoon</Navbar.Brand>
      <Nav className="mr-auto">
        <Link style={headerLinkStyle} to="/filieres">
          Filieres
        </Link>
        <Link style={headerLinkStyle} to="/modules">
          Modules{" "}
        </Link>
        <Link style={headerLinkStyle} to="/supports">
          {" "}
          Supports{" "}
        </Link>
      </Nav>
      <Nav className="ml-auto">
        <Button className="btn btn-danger" onClick={handleLogout}>
          <Nav.Link>Logout</Nav.Link>
        </Button>
      </Nav>
    </Navbar>
  );
};

export default Header;
