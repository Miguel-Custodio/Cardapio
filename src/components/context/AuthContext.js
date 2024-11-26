import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signUp = async (email, password) => {
    // Lógica para criar usuário
    console.log('Usuário registrado:', email);
    };

    return (
    <AuthContext.Provider value={{ user, setUser, signUp }}>
        {children}
    </AuthContext.Provider>
    );
};
