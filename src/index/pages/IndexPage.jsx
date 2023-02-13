import { GlobalHeader } from "../../global/components";
import { MainImage, NextEventsBanner, WhyAnticipadApp } from "../components";

import { LoginBox } from "../../auth/components";

export const IndexPage = () =>
{
    return (
        <>
            <GlobalHeader />
            <MainImage />
            <NextEventsBanner />
            <WhyAnticipadApp />
        </>
    );
};