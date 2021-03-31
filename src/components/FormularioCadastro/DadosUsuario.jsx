import React, { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import validacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErrors from "../../hooks/useErrors";

function DadosUsuario({ onSubmitForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, validates, next] = useErrors(useContext(validacoesCadastro))

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (next()){
          onSubmitForm({ email, password });
        }
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
        name="email"
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
        onBlur={(event) => {
          validates(event);
        }}
        error={!errors.password.valid}
        helperText={errors.password.helperText}
        id="password"
        label="Password"
        name="password"
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
        type="password"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
