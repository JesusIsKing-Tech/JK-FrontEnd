import React, { useState } from 'react';
import CadastroDadosCredenciais from './CadastroDadosCredenciais';
import CadastroDadosPessoais from './CadastroDadosPessoais';
import CadastroPrecisaDoacao from './CadastroPrecisaDoacao';

function Cadastro() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return <CadastroDadosCredenciais nextStep={nextStep} />;
    case 2:
      return <CadastroDadosPessoais nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <CadastroPrecisaDoacao prevStep={prevStep} />;
    default:
      return <CadastroDadosCredenciais nextStep={nextStep} />;
  }
}

export default Cadastro;