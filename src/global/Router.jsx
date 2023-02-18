import { Routes, Route } from "react-router-dom";

import { IndexPage, LoginPage, Error404, FAQPage, HowToBuyPage, PaymentMethodsPage, FindTicketPage, SignupPage, ForgotPasswordPage } from "../pages";

export const MainRouter = () =>
{
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/preguntas-frecuentes" element={<FAQPage /> } />
            <Route path="/como-comprar" element={<HowToBuyPage /> } />
            <Route path="/metodos-de-pago" element={<PaymentMethodsPage /> } />
            <Route path="/encuentra-tu-ticket" element={<FindTicketPage /> } />
            <Route path="/forgot-password" element={<ForgotPasswordPage /> } />
            <Route path="/*" element={<Error404 />} />
        </Routes>
    );
};