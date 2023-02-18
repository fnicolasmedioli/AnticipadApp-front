import { GenericTemplate } from "./templates";
import { MainImage, NextEventsBanner, WhyAnticipadApp, } from "../components";

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