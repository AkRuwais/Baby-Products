import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Register.css";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const frm = new FormData(event.target);
    const formData = Object.fromEntries(frm.entries());
    console.log(formData);

    axios.get("http://localhost:3000/users");
  };
  return (
    <Form onSubmit={handleSubmit} className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h1>Login</h1>

        <Form.Label>User Name</Form.Label>
        <Form.Control name="uname" type="name" placeholder="Enter user name" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="pwd" type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p>
        Not a member ?<a href="/register">Signup</a>
      </p>
    </Form>
  );
}
