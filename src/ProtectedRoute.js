import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ element }) => {
    const { auth } = useContext(AuthContext);
    console.log("TO NO PROTECTED",auth);
    return auth ? element : <Navigate to="/login"/>;
};

export default ProtectedRoute;