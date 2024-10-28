import React, { createContext, useState } from "react";

export const CadastroContext =createContext({})

export const CadastroProvider = ({children}) => {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        telefone: '',
        data_nascimento: '',
        genero: '',
        receber_doacoes: '',
        endereco: {
            cep: '',
            logradouro: '',
            numero: '',
            bairro: '',
            localidade: '',
            uf: '',
        }
      });

    return( 
        <CadastroContext.Provider value={{ formData, setFormData }}>
            {children}
        </CadastroContext.Provider>
    );
};