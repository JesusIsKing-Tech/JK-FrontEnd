import React, { useState } from 'react';
import CadastroDadosPessoais from './CadastroDadosPessoais';
import CadastroDadosCredenciais from './CadastroDadosCredenciais';
import DoacaoAlimentos from './CadastroPrecisaDoacao';
import Home from './Home';
import Login from './Login';
import RecuperarSenha from './RecuperarSenha';
import RecuperarSenha2 from './RecuperarSenha2';
import HomeUsuario from './Home2';


function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      //  case 1:
      //   return<CadastroDadosCredenciais nextStep={nextStep} />;
      // case 2:
      //   return < CadastroDadosPessoais nextStep={nextStep} />;
      case 1:
        return <CadastroDadosCredenciais nextStep={nextStep} prevStep={prevStep} />;
      // case 4:
      //   return <DoacaoAlimentos prevStep={prevStep} />;
      // default:
        // return <CadastroDadosCredenciais nextStep={nextStep} />;
    }
  };

  return (
    <div>
       {renderStep()} 
{/* <Login></Login> */}
{/* { <RecuperarSenha> </RecuperarSenha> } */}
{/* <RecuperarSenha2></RecuperarSenha2> */}
{/* {<HomeUsuario></HomeUsuario>} */}
    </div>
  );
}

export default App;
