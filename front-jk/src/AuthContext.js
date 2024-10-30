import React, { createContext, useState, useEffect } from "react";
import api from "./api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(localStorage.getItem("token"));

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuth({ token });
        }
    }, []);

    const login = async (email, password) => {
        try{
            const response = await api.post("/usuarios/login", { 
                email: email,
                senha: password
             });

            const data = response.data;
            
            localStorage.setItem("token", data.token);
            setAuth({ token: data.token });
        }catch(error){
            console.error('Erro ao fazer login', error);
            throw new Error(error.response.data.message);
        }
    };
        
    const logout = () => {
        localStorage.removeItem("token");
        setAuth(null);
    };

    return(
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};