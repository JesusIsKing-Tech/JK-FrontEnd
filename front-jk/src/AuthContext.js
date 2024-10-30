import React, { createContext, useState, useEffect } from "react";
import api from "./api";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(localStorage.getItem("token"));
    const [userId, setUserId] = useState(localStorage.getItem("userId"));

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
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
            console.log(data);
            localStorage.setItem("token", data.token);
            localStorage.setItem("userId", data.userId);
            setAuth({ token: data.token });
        }catch(error){
            console.error('Erro ao fazer login', error);
            throw new Error(error.response.data.message);
        }
    };
        
    const logout = () => {
        Swal.fire({
            title: 'Saindo...',
            text: 'Até logo!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        });
        localStorage.removeItem("token");
        setAuth(null);
    };

    return(
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};