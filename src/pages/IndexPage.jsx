import { GlobalHeader } from "../global/components";
import { MainImage, NextEventsBanner, WhyAnticipadApp, EventItem } from "../index/components";

import { LoginBox } from "../auth/components";

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