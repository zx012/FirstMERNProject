import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./style.css";
//import {apiCall} from "../../utility";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser() {
    const res = fetch("http://localhost:1337/api/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((t) => t.json());

    //console.log(res);
  }

  return (
    <div className="form">
      <h1>Register</h1>
      <form className="register-fields">
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          variant="outlined"
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          variant="outlined"
        />
        <Button color="primary" variant="contained" onClick={registerUser}>
          Register
        </Button>
      </form>
    </div>
  );
}
