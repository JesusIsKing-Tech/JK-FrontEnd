import React, { useState } from "react";
import RecuperarSenha from "./RecuperarSenha";
import RecuperarSenhaCodigo from "./RecuperarSenha2";
import RecuperarSenhaNovaSenha from "./RecuperarSenha3";

function Recuperacao() {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    switch (step){
        case 1:
            return <RecuperarSenha nextStep={nextStep} />;
        case 2:
            return <RecuperarSenhaCodigo nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <RecuperarSenhaNovaSenha prevStep={prevStep} />;
        default:
            return <RecuperarSenha nextStep={nextStep} />;
    }
}
export default Recuperacao;