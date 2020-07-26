import React, { useEffect } from "react";
import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import authActions from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";

import { fetchAll as fetchModules } from "../actions/modules";
import { fetchAll as fetchFilieres } from "../actions/filieres";

const Header = () => {
  const dispatch = useDispatch();
  const filieres = useSelector((state) => state.filieres.items);
  const modules = useSelector((state) => state.modules.items);

  useEffect(() => {
    dispatch(fetchFilieres());
    dispatch(fetchModules());
  }, []);
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

        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Modules
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to={`/modules`}>All</Link>
            </Dropdown.Item>
            {filieres.map((fil) => (
              <Dropdown.Item>
                <Link to={`/modules/filiere/${fil.id}`}>{fil.name}</Link>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Supports
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/supports">
              <Link to={`/supports`}>All</Link>
            </Dropdown.Item>
            {modules.map((mod) => (
              <Dropdown.Item>
                <Link to={`/supports/module/${mod.id}`}>
                  {mod.name}
                  <b>
                    {" (" +
                      mod.annee +
                      "eme année " +
                      filieres.filter((f) => f.id == mod.filiere_id)[0][
                        "name"
                      ] || "" + " )"}
                  </b>
                </Link>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Link style={headerLinkStyle} to="/articles">
          Articles
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
