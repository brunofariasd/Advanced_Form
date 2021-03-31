import React, { useContext, useState } from "react";
import { TextField, FormControlLabel, Switch, Button } from "@material-ui/core";
import masksCadastro from "../../contexts/masksCadastro";
import validacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErrors from "../../hooks/useErrors";
import useMasks from "../../hooks/useMasks";

function DadosPessoais({ onSubmitForm }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [novidades, setNovidades] = useState(true);
  const [promocoes, setPromocoes] = useState(true);
  const [errors, validates, next] = useErrors(useContext(validacoesCadastro))
  const mask = useMasks(useContext(masksCadastro))

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (next()) {
          onSubmitForm({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          let tempNome = event.target.value;
          if (tempNome.length >= 15) {
            tempNome = tempNome.substr(0, 15);
          }
          setNome(tempNome);
        }}
        id="nome"
        label="Nome"
        name="cpf"
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
        required
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          let tempSobrenome = event.target.value;
          if (tempSobrenome.length >= 30) {
            tempSobrenome = tempSobrenome.substr(0, 30);
          }
          setSobrenome(tempSobrenome);
        }}
        id="Sobrenome"
        label="Sobrenome"
        name="sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
        required
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          let tempCpf = mask(event);
          if (tempCpf.length > 14) {
            tempCpf = tempCpf.substr(0, 14);
          }
          setCpf(tempCpf);
        }}
        onBlur={(event) => {
          validates(event);
        }}
        error={!errors.cpf.valid}
        helperText={errors.cpf.helperText}
        id="CPF"
        label="CPF"
        name="cpf"
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
        required
      />
      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="Novidades"
            color="primary"
          />
        }
        label="Novidades"
      />
      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="Promocoes"
            color="primary"
          />
        }
        label="Promoções"
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
