import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

import auth from "../actions/auth";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  function handleChange(event) {
    const name = event.target.name;
    if (name === "username") {
      setFormData({
        username: event.target.value,
        password: formData.password,
      });
    } else if (name === "password") {
      setFormData({
        username: formData.username,
        password: event.target.value,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(auth.login(formData));
  }

  const isLoading = useSelector((state) => state.auth.isLoading);
  const beatloaderCSS = {
    width: "50%",
    margin: "auto;",
    textAlign: "center",
  };
  let authRedirect = null;
  if (useSelector((state) => state.auth.token != null)) {
    authRedirect = <Redirect to="/" />;
  }

  let authFailedMessage = null;
  const authError = useSelector((state) => state.auth.error);
  if (authError) {
    let message = authError.message || "An error has occurred";
    if (message.includes("401")) message = "Wrong Username or Password";
    authFailedMessage = (
      <Col sm={{ span: 12 }}>
        <div className="alert alert-danger text-center" role="alert">
          <strong>{message}</strong>
        </div>
      </Col>
    );
  }

  return (
    <Row>
      {authRedirect}

      <Col
        md={{ span: 3, offset: 3 }}
        style={{
          boxShadow: "5px 5px 20px #aaaaaa",
          margin: "30vh auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          {isLoading ? (
            <BeatLoader css={beatloaderCSS} color={"#3472F7"} />
          ) : (
            <Form.Group>
              <Col sm={{ span: 12 }}>
                <Button
                  type="submit"
                  className="btn btn-primary btn-fill btn-block"
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Log in
                </Button>
              </Col>
            </Form.Group>
          )}
          {authFailedMessage}
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
