import React from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import './App.css';
import { validatesCPF, maskCep, maskCpf, validatesPassword } from './models/cadastro'
import validacoesCadastro from './contexts/ValidacoesCadastro';
import masksCadastro from './contexts/masksCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" color='primary'>Formulário de cadastro</Typography>
      <validacoesCadastro.Provider
        value={{ cpf: validatesCPF, password: validatesPassword }}
      >
        <masksCadastro.Provider
          value={{ cep: maskCep, cpf: maskCpf }}
        >
          <FormularioCadastro onSubmitForm={onSubmit} />
        </masksCadastro.Provider>
      </validacoesCadastro.Provider>
    </Container>
  );
}

function onSubmit(data) {
  console.log(data);
}

export default App;
