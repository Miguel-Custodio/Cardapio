import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './context/AuthContext';
import { PaymentProvider } from './context/PaymentContext';

// Importação de Páginas
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import MealPlannerPage from './pages/MealPlannerPage';
import PaymentPage from './pages/PaymentPage';
import DashboardPage from './pages/DashboardPage';

// Preços dos planos
const PRICING_PLANS = {
    MONTHLY: { price: 19.99, features: ['Geração de cardápios personalizados'] },
    QUARTERLY: { price: 49.99, features: ['Economia de 16%'] },
    ANNUAL: { price: 179.99, features: ['Economia de 25%'] },
};

function App() {
    return (
    <ChakraProvider>
        <AuthProvider>
        <PaymentProvider>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/meal-planner" element={<MealPlannerPage />} />
                <Route path="/payment" element={<PaymentPage plans={PRICING_PLANS} />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
            </BrowserRouter>
        </PaymentProvider>
        </AuthProvider>
    </ChakraProvider>
    );
}

export default App;
