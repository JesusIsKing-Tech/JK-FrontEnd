import React, { createContext, useState } from "react";

export const RecuperacaoContext = createContext({})

export const RecuperacaoProvider = ({children}) => {

    const [formData, setFormData] = useState({
        email: '',
        codigo: '',
        novaSenha: '',
    });

    return( 
        <RecuperacaoContext.Provider value={{ formData, setFormData }}>
            {children}
        </RecuperacaoContext.Provider>
    );
}