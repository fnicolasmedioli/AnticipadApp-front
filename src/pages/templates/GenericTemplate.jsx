import { GlobalHeader } from "../../global/components";

export const GenericTemplate = ({children}) =>
{
    return (
    <>
        <GlobalHeader />
        { children }
    </>
    );
};