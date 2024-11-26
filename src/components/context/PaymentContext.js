import React, { createContext } from 'react';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    const processPayment = (plan) => {
    console.log('Processando pagamento para o plano:', plan);
    };

    return (
    <PaymentContext.Provider value={{ processPayment }}>
        {children}
    </PaymentContext.Provider>
    );
};
