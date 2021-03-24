import React, { useState } from "react";
import { TextField, FormControlLabel, Switch, Button } from "@material-ui/core";

function FormularioCadastro({onSubmitForm, validateCPF, maskCpf}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [novidades, setNovidades] = useState(true);
  const [promocoes, setPromocoes] = useState(true);
  const [errors, setErrors] = useState({cpf:{valid:true, helperText:''}});
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({ nome, sobrenome, cpf, novidades, promocoes });
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
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
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
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          let tempCpf = maskCpf(event.target.value);
          if (tempCpf.length > 14){
            tempCpf = tempCpf.substr(0, 14);
          }
          setCpf(tempCpf)
        }}
        onBlur={(event) =>{
          const isValid = validateCPF(event.target.value);
          setErrors({cpf: isValid});
        }}
        error={!errors.cpf.valid}
        helperText={errors.cpf.helperText}
        id="CPF"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
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
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
