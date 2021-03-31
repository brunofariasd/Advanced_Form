import React, { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import masksCadastro from "../../contexts/masksCadastro";
import useMasks from "../../hooks/useMasks";

function DadosEndereco({ onSubmitForm }) {
  const [cep, setCep] = useState("");
  const [phone, setPhone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const mask = useMasks(useContext(masksCadastro))

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({ cep, phone, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          let tempCep = mask(event);
          if (tempCep.length >= 10) {
            tempCep = tempCep.substr(0, 10);
          }
          setCep(tempCep);
        }}
        id="cep"
        label="Cep"
        name="cep"
        variant="outlined"
        margin="normal"
        color="primary"
        required
      />
      <TextField
        value={phone}
        onChange={(event) => {
          let tempPhone = event.target.value;
          if (tempPhone.length >= 30) {
            tempPhone = tempPhone.substr(0, 30);
          }
          setPhone(tempPhone);
        }}
        id="phone"
        label="Phone"
        name="phone"
        variant="outlined"
        margin="normal"
        color="primary"
        type="phone"
        required
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          let tempEndereco = event.target.value;
          if (tempEndereco.length >= 70) {
            tempEndereco = tempEndereco.substr(0, 70);
          }
          setEndereco(tempEndereco);
        }}
        id="endereco"
        label="Endereco"
        name="endereco"
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
        type="endereco"
        required
      />
      <TextField
        value={numero}
        onChange={(event) => {
          let tempNumero = event.target.value;
          if (tempNumero.length >= 70) {
            tempNumero = tempNumero.substr(0, 70);
          }
          setNumero(tempNumero);
        }}
        id="numero"
        label="Numero"
        name="numero"
        variant="outlined"
        margin="normal"
        color="primary"
        type="numero"
        required
      />
      <TextField
        value={estado}
        onChange={(event) => {
          let tempEstado = event.target.value;
          if (tempEstado.length >= 70) {
            tempEstado = tempEstado.substr(0, 70);
          }
          setEstado(tempEstado);
        }}
        id="estado"
        label="Estado"
        name="estado"
        variant="outlined"
        margin="normal"
        color="primary"
        type="estado"
        required
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          let tempCidade = event.target.value;
          if (tempCidade.length >= 70) {
            tempCidade = tempCidade.substr(0, 70);
          }
          setCidade(tempCidade);
        }}
        id="cidade"
        label="Cidade"
        name="cidade"
        variant="outlined"
        margin="normal"
        color="primary"
        type="cidade"
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosEndereco;
