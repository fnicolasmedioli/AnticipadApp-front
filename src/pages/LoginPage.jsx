import { LoginBox } from "../auth/components";
import { GlobalHeader } from "../global/components";
import { GenericTemplate } from "./templates";

export const LoginPage = () =>
{
    return (
        <GenericTemplate>
            <LoginBox />
        </GenericTemplate>
    );
};