import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario({ onSubmitForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({ email, password });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          let tempEmail = event.target.value;
          if (tempEmail.length >= 70) {
            tempEmail = tempEmail.substr(0, 70);
          }
          setEmail(tempEmail);
        }}
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
        type="email"
        required
      />
      <TextField
        value={password}
        onChange={(event) => {
          let tempPassword = event.target.value;
          if (tempPassword.length >= 30) {
            tempPassword = tempPassword.substr(0, 30);
          }
          setPassword(tempPassword);
        }}
        id="password"
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
        type="password"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
