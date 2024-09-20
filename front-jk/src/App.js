import React, { useState } from 'react';
import CadastroDadosPessoais from './CadastroDadosPessoais';
import CadastroDadosCredenciais from './CadastroDadosCredenciais';
import DoacaoAlimentos from './CadastroPrecisaDoacao';
import Home from './Home';
import { useNavigation } from '@react-navigation/native';


function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      //  case 1:
        // return<Home nextStep={nextStep} />;
      case 1:
        return < Home nextStep={nextStep} />;
      case 3:
        return <CadastroDadosPessoais nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <DoacaoAlimentos prevStep={prevStep} />;
      default:
        return <CadastroDadosCredenciais nextStep={nextStep} />;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
}

export default App;
