import React from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import './App.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" color='primary'>Formulário de cadastro</Typography>
      <FormularioCadastro onSubmitForm={onSubmit} validateCPF={validatesCPF} maskCpf={maskCpf}/>
    </Container>
  );
}

function onSubmit(data){
  console.log(data);
}

function validatesCPF(cpf){
  if (cpf.length !== 14){
    return {valid: false, helperText: 'O CPF deve conter 11 digitos' }
  } else {
    return {valid: true, helperText: '' }
  }
}

function maskCpf(cpf){
  return cpf
  .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
  .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})/, '$1-$2')
  .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export default App;
