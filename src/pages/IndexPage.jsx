import { GenericTemplate } from "./templates";
import { MainImage, NextEventsBanner, WhyAnticipadApp, EventItem } from "../index/components";

import { LoginBox } from "../auth/components";

export const IndexPage = () =>
{
    return (
        <GenericTemplate>
            <MainImage />
            <NextEventsBanner />
            <WhyAnticipadApp />
        </GenericTemplate>
    );
};