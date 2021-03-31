import React, { Fragment, useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEndereco from "./DadosEndereco";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioCadastro({ onSubmitForm }) {
  const [etapa, setEtapa] = useState(0);
  const [dataColect, setDataColect] = useState({});
  useEffect(() => {
    console.log(dataColect);
  });

  const etapas = ["Login", "Pessoal", "Entrega", "Finalização"];
  const formularios = [
    <DadosUsuario onSubmitForm={DataCollection} />,
    <DadosPessoais onSubmitForm={DataCollection} />,
    <DadosEndereco onSubmitForm={DataCollection} />,
    <Typography variant="h5" align="center">
      Obrigado por se Cadastrar!
    </Typography>,
  ];

  function nextForm() {
    setEtapa(etapa + 1);
    if (etapa === etapa.length) {
      onSubmitForm();
    }
  }

  function DataCollection(dados) {
    setDataColect({ ...dataColect, ...dados });
    nextForm();
  }

  return (
    <Fragment>
      <Stepper activeStep={etapa}>
        {etapas.map((item, index) => (
          <Step>
            <StepLabel key={index}>{item}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {formularios[etapa]}
    </Fragment>
  );
}

export default FormularioCadastro;
