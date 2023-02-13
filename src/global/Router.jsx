import { Routes, Route } from "react-router-dom";

import { IndexPage } from "../index/pages/IndexPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { Error404 } from "./pages/Error404";

export const MainRouter = () =>
{
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<Error404 />} />
        </Routes>
    );
};